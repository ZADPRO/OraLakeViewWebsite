import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useSeason } from '../../context/SeasonContext';
import home1Img from '../../assets/home/HOME/HOME1.jpg';
import winterImg from '../../assets/images/Landing Page/4E1A7684_1.jpg';
import lakeviewLogo from '../../assets/logo/Lakeview.svg';

const MAX_RIPPLES = 20;

export const HeroWaterRipple: React.FC = () => {
  const { getContent } = useLanguage();
  const heroContent = getContent('hero');
  const { season } = useSeason();

  const activeHeroBgImage = season === 'summer' ? home1Img : winterImg;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  // WebGL Water Ripple Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const gl = canvas.getContext('webgl', { alpha: false, antialias: true });
    if (!gl) return;

    let animationFrameId: number;

    const handleResize = () => {
      if (!container || !canvas) return;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const vsSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = (a_position + 1.0) / 2.0;
        v_uv.y = 1.0 - v_uv.y;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      uniform sampler2D u_image;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec4 u_ripples[${MAX_RIPPLES}];
      uniform int u_rippleCount;
      varying vec2 v_uv;

      void main() {
        vec2 uv = v_uv;
        vec2 totalDisplacement = vec2(0.0);
        float aspect = u_resolution.x / u_resolution.y;

        for (int i = 0; i < ${MAX_RIPPLES}; i++) {
          if (i >= u_rippleCount) break;
          vec4 r = u_ripples[i];
          vec2 ripplePos = r.xy;
          float age = u_time - r.z;
          float strength = r.w;

          if (age > 0.0 && age < 2.5) {
            vec2 diff = (uv - ripplePos);
            diff.x *= aspect;
            float dist = length(diff);

            float waveRadius = age * 0.42;
            float waveWidth = 0.14;
            float delta = abs(dist - waveRadius);

            if (delta < waveWidth) {
              float waveFactor = (1.0 - delta / waveWidth);
              float wave = sin((dist - waveRadius) * 40.0) * waveFactor;
              float decay = exp(-age * 2.2);
              vec2 dir = normalize(diff + vec2(0.0001));
              totalDisplacement += dir * wave * decay * strength * 0.04;
            }
          }
        }

        vec2 displacedUv = clamp(uv - totalDisplacement, 0.0, 1.0);
        gl_FragColor = texture2D(u_image, displacedUv);
      }
    `;

    const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const uResolutionLoc = gl.getUniformLocation(program, 'u_resolution');
    const uTimeLoc = gl.getUniformLocation(program, 'u_time');
    const uRipplesLoc = gl.getUniformLocation(program, 'u_ripples');
    const uRippleCountLoc = gl.getUniformLocation(program, 'u_rippleCount');

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);

    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      1,
      1,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      new Uint8Array([15, 23, 42, 255])
    );

    const img = new Image();
    img.src = activeHeroBgImage;
    img.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    };

    const ripples: Array<{ x: number; y: number; startTime: number; strength: number }> = [];
    const startTime = performance.now();

    const addRipple = (clientX: number, clientY: number, strength = 1.0) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = (clientX - rect.left) / canvas.width;
      const y = (clientY - rect.top) / canvas.height;
      const currentTime = (performance.now() - startTime) / 1000;

      ripples.push({ x, y, startTime: currentTime, strength });
      if (ripples.length > MAX_RIPPLES) {
        ripples.shift();
      }
    };

    const autoRaindropInterval = setInterval(() => {
      const randomX = Math.random() * (canvas?.width || 800);
      const randomY = Math.random() * (canvas?.height || 600);
      addRipple(randomX, randomY, 0.6);
    }, 1200);

    let lastMoveTime = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastMoveTime > 60) {
        addRipple(e.clientX, e.clientY, 0.8);
        lastMoveTime = now;
      }
    };

    const handleClick = (e: MouseEvent) => {
      addRipple(e.clientX, e.clientY, 1.8);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const now = performance.now();
        if (now - lastMoveTime > 60) {
          addRipple(e.touches[0].clientX, e.touches[0].clientY, 1.2);
          lastMoveTime = now;
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const render = () => {
      const currentTime = (performance.now() - startTime) / 1000;

      gl.useProgram(program);
      gl.uniform2f(uResolutionLoc, canvas.width, canvas.height);
      gl.uniform1f(uTimeLoc, currentTime);

      const activeRipples = ripples.filter((r) => currentTime - r.startTime < 2.5);
      gl.uniform1i(uRippleCountLoc, activeRipples.length);

      const rippleData = new Float32Array(MAX_RIPPLES * 4);
      activeRipples.forEach((r, idx) => {
        rippleData[idx * 4] = r.x;
        rippleData[idx * 4 + 1] = r.y;
        rippleData[idx * 4 + 2] = r.startTime;
        rippleData[idx * 4 + 3] = r.strength;
      });
      gl.uniform4fv(uRipplesLoc, rippleData);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(autoRaindropInterval);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [activeHeroBgImage]);

  const facilities = heroContent?.facilities || [];
  const cardsPerPage = 3;
  const totalSlides = Math.ceil(facilities.length / cardsPerPage);

  // Auto-scroll Carousel every 3.5 seconds
  useEffect(() => {
    if (totalSlides <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3500);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const visibleFacilities = facilities.slice(
    currentSlide * cardsPerPage,
    currentSlide * cardsPerPage + cardsPerPage
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[80vh] md:min-h-screen flex flex-col justify-between overflow-hidden bg-slate-950 text-white select-none"
    >
      {/* Dual Pre-loaded Background Image Layers for Silky Smooth 1000ms Cross-Fade */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Summer Hero Background Layer */}
        <img
          src={home1Img}
          alt="Summer ORA Lake View"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
            season === 'summer' ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Winter Hero Background Layer */}
        <img
          src={winterImg}
          alt="Winter ORA Lake View"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
            season === 'winter' ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />
      </div>

      {/* GPU Hardware-Accelerated WebGL Water Ripple Canvas Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-1 cursor-pointer transition-opacity duration-700 opacity-90"
      />

      {/* Subtle luxury gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/40 pointer-events-none z-10" />

      {/* Hero Content Grid Overlay (h-[80vh] on Mobile, min-h-screen on Desktop) */}
      <div className="relative z-20 max-w-[1480px] w-full mx-auto px-4 md:px-10 pt-20 md:pt-36 pb-6 md:pb-16 flex-1 flex flex-col justify-between">
        {/* Top Section: Centered SVG Logo with Semantic H1 for SEO */}
        <div className="w-full flex flex-col justify-center items-center animate-fade-in py-1 md:py-4">
          <h1 className="sr-only">ORA Lakeview Hotel | Scenic Swiss Alps & Lake View Stay</h1>
          <div className="w-52 sm:w-80 md:w-[440px] lg:w-[520px]">
            <img
              src={lakeviewLogo}
              alt="ORA Lake View Hotel | Scenic Swiss Alps & Lake View Stay"
              className="w-full h-auto object-contain filter drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>

        {/* Bottom Section: Left Description + Gold CTA, Right Ultra-Transparent Glassmorphism Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-end mt-4 md:mt-12 w-full">
          {/* Bottom Left: Description & VIEW OUR ROOMS Button */}
          <div className="lg:col-span-5 space-y-4 md:space-y-6 text-center sm:text-left">
            <p className="text-white text-sm sm:text-xl lg:text-2xl font-sans font-light leading-relaxed tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] max-w-xl mx-auto sm:mx-0">
              {heroContent?.subtitle ||
                'A slice of Swiss heaven crafted for dreamers, romantics, and adventure seekers alike.'}
            </p>

            <div>
              <Link
                to="/rooms"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-sans font-bold tracking-widest text-slate-950 uppercase transition-all duration-300 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 hover:from-amber-300 hover:to-amber-100 shadow-2xl hover:shadow-amber-400/40 hover:scale-105 active:scale-95 border border-amber-300/50"
              >
                {heroContent?.viewRooms || 'VIEW OUR ROOMS'}
              </Link>
            </div>
          </div>

          {/* Bottom Right: Ultra-Transparent Glassmorphic Card Container Pushed Flush Right */}
          <div className="lg:col-span-7 w-full max-w-[620px] ml-auto mr-0">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3.5 md:p-5 shadow-2xl space-y-3 md:space-y-4">
              {/* Header with Title & Circular Dot Indicators */}
              <div className="flex items-center justify-between border-b border-white/15 pb-2">
                <p className="font-serif text-base md:text-xl font-normal text-white tracking-wide">
                  {heroContent?.facilitiesTitle || "Hotel's Facilities"}
                </p>

                {/* Circular Pagination Dots */}
                <div className="flex items-center space-x-2">
                  {Array.from({ length: totalSlides }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`rounded-full transition-all duration-300 ${
                        currentSlide === idx
                          ? 'bg-amber-400 w-2.5 h-2.5 ring-4 ring-amber-400/20'
                          : 'bg-white/40 hover:bg-white/70 w-2 h-2'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* 3-Column Facilities Grid with clean rounded images */}
              <div className="grid grid-cols-3 gap-2.5 md:gap-3 transition-all duration-500">
                {visibleFacilities.map((fac: any, idx: number) => (
                  <div key={fac.id || idx} className="group cursor-pointer">
                    <div className="relative aspect-[16/10] rounded-lg overflow-hidden shadow-lg border border-white/15 group-hover:border-amber-400/80 transition-colors">
                      <img
                        src={fac.image}
                        alt={fac.title || `Hotel Facility ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroWaterRipple;
