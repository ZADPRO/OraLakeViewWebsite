import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { useSeason } from "../../context/SeasonContext";
import homeTextImg from "../../assets/home/HOME_TEXT.png";
import summerImg from "../../assets/home/home2summar.jpeg";
import winterImg from "../../assets/home/home1winter.jpeg";

// HomeCarousel Assets Imports (1.jpg to 6.jpg)
import carouselImg1 from "../../assets/HomeCarousel/1.jpg";
import carouselImg2 from "../../assets/HomeCarousel/2.jpg";
import carouselImg3 from "../../assets/HomeCarousel/3.jpg";
import carouselImg4 from "../../assets/HomeCarousel/4.jpg";
import carouselImg5 from "../../assets/HomeCarousel/5.jpg";
import carouselImg6 from "../../assets/HomeCarousel/6.jpg";

const MAX_RIPPLES = 20;

const homeCarouselImages = [
  { id: 1, image: carouselImg1, alt: "ORA Lake View Carousel 1" },
  { id: 2, image: carouselImg2, alt: "ORA Lake View Carousel 2" },
  { id: 3, image: carouselImg3, alt: "ORA Lake View Carousel 3" },
  { id: 4, image: carouselImg4, alt: "ORA Lake View Carousel 4" },
  { id: 5, image: carouselImg5, alt: "ORA Lake View Carousel 5" },
  { id: 6, image: carouselImg6, alt: "ORA Lake View Carousel 6" },
];

export const HeroWaterRipple: React.FC = () => {
  const { getContent } = useLanguage();
  const heroContent = getContent("hero");
  const { season } = useSeason();

  const activeHeroBgImage = season === "summer" ? summerImg : winterImg;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [_currentSlide, setCurrentSlide] = useState(0);

  // WebGL Water Ripple Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const gl = canvas.getContext("webgl", { alpha: false, antialias: true });
    if (!gl) return;

    let animationFrameId: number;

    const handleResize = () => {
      if (!container || !canvas) return;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

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

    const createShader = (
      gl: WebGLRenderingContext,
      type: number,
      source: string,
    ) => {
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
      gl.STATIC_DRAW,
    );

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const uResolutionLoc = gl.getUniformLocation(program, "u_resolution");
    const uTimeLoc = gl.getUniformLocation(program, "u_time");
    const uRipplesLoc = gl.getUniformLocation(program, "u_ripples");
    const uRippleCountLoc = gl.getUniformLocation(program, "u_rippleCount");

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
      new Uint8Array([15, 23, 42, 255]),
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

    const ripples: Array<{
      x: number;
      y: number;
      startTime: number;
      strength: number;
    }> = [];
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

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    const render = () => {
      const currentTime = (performance.now() - startTime) / 1000;

      gl.useProgram(program);
      gl.uniform2f(uResolutionLoc, canvas.width, canvas.height);
      gl.uniform1f(uTimeLoc, currentTime);

      const activeRipples = ripples.filter(
        (r) => currentTime - r.startTime < 2.5,
      );
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
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [activeHeroBgImage]);

  const cardsPerPage = 3;
  const totalSlides = Math.ceil(homeCarouselImages.length / cardsPerPage);

  // Auto-scroll Carousel every 3.5 seconds
  useEffect(() => {
    if (totalSlides <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3500);
    return () => clearInterval(interval);
  }, [totalSlides]);

  // const visibleCarouselItems = homeCarouselImages.slice(
  //   currentSlide * cardsPerPage,
  //   currentSlide * cardsPerPage + cardsPerPage
  // );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[80vh] min-h-[520px] md:min-h-screen flex flex-col justify-between overflow-hidden pb-10 bg-slate-950 text-white select-none"
    >
      {/* LAYER 1 (z-0): Summer & Winter Background Image Cover */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Summer Hero Background Layer */}
        <img
          src={summerImg}
          alt="Summer ORA Lake View"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-in-out ${
            season === "summer"
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        />

        {/* Winter Hero Background Layer */}
        <img
          src={winterImg}
          alt="Winter ORA Lake View"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-in-out ${
            season === "winter"
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        />
      </div>

      {/* LAYER 2 (z-[10]): GPU WebGL Water Ripple Canvas Effect (Full Brightness) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-[10] cursor-pointer transition-opacity duration-700 opacity-100 hidden md:block"
      />

      {/* LAYER 3 (z-[15]): Ultra-Light Ambient Overlay (Significantly Reduced Darkness) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 pointer-events-none z-[15]" />

      {/* LAYER 4 (z-[30]): Crisp Home Text PNG Image Overlay Positioned Directly Above Water Effect */}
      <div className="relative z-[30] max-w-[1480px] w-full mx-auto px-4 md:px-10 pt-20 md:pt-36 pb-6 md:pb-16 flex-1 flex flex-col justify-between pointer-events-none">
        {/* Center Section: Home Text PNG Script Art Overlay */}
        <div className="w-full my-auto flex flex-col justify-center items-center animate-fade-in py-1 md:py-4 pointer-events-auto">
          <h1 className="sr-only">
            ORA Lakeview Hotel | Scenic Swiss Alps & Lake View Stay
          </h1>
          <div className="w-26 sm:w-80 md:w-[460px] lg:w-[520px] xl:w-[1000px] max-w-[85vw]">
            <img
              src={homeTextImg}
              alt="Serenity at ORA Lake View Hotel"
              className="w-full h-auto object-contain filter drop-shadow-[0_6px_24px_rgba(0,0,0,0.85)] mx-auto relative z-[30]"
            />
          </div>
        </div>

        {/* LAYER 5 (z-[40]): Floating Action FAB Button (Single-Lined Mobile FAB) */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-[40] pointer-events-auto w-max max-w-[92vw]">
          <Link
            to="/rooms"
            className="inline-flex items-center justify-center space-x-2.5 sm:space-x-3 px-5 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-sans font-extrabold tracking-wider sm:tracking-widest text-slate-950 uppercase transition-all duration-300 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 hover:from-amber-300 hover:to-amber-100 shadow-[0_10px_30px_rgba(198,141,83,0.55)] hover:shadow-[0_15px_40px_rgba(198,141,83,0.75)] hover:scale-105 active:scale-95 border-2 border-white/60 backdrop-blur-md whitespace-nowrap"
          >
            <span className="whitespace-nowrap">
              {heroContent?.viewRooms || "VIEW OUR ROOMS"}
            </span>
            <svg
              className="w-4 h-4 text-slate-950 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroWaterRipple;
