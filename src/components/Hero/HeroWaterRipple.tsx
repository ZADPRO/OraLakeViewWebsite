import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const HERO_BG_IMAGE = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80';

export const HeroWaterRipple: React.FC = () => {
  const { getContent } = useLanguage();
  const heroContent = getContent('hero');

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [activeFacilityIndex, setActiveFacilityIndex] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    // Water ripple physics setup (Double heightmap buffer)
    let buffer1 = new Float32Array(width * height);
    let buffer2 = new Float32Array(width * height);
    let damping = 0.96;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = HERO_BG_IMAGE;

    let imgLoaded = false;
    img.onload = () => {
      imgLoaded = true;
    };

    const handleResize = () => {
      if (!container || !canvas) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
      buffer1 = new Float32Array(width * height);
      buffer2 = new Float32Array(width * height);
    };

    window.addEventListener('resize', handleResize);

    // Add ripple disturbance at (x, y)
    const disturb = (x: number, y: number, radius = 6, strength = 255) => {
      const rx = Math.floor(x);
      const ry = Math.floor(y);
      for (let j = ry - radius; j < ry + radius; j++) {
        for (let i = rx - radius; i < rx + radius; i++) {
          if (i >= 0 && i < width && j >= 0 && j < height) {
            const dist = Math.sqrt((i - rx) ** 2 + (j - ry) ** 2);
            if (dist < radius) {
              buffer1[j * width + i] += strength * (1 - dist / radius);
            }
          }
        }
      }
    };

    // Auto gentle water drop ripples
    const autoRippleInterval = setInterval(() => {
      const randomX = Math.random() * width;
      const randomY = Math.random() * height;
      disturb(randomX, randomY, 5, 120);
    }, 1800);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      disturb(x, y, 7, 180);
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      disturb(x, y, 14, 400);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);

    const imgCanvas = document.createElement('canvas');
    const imgCtx = imgCanvas.getContext('2d');

    const render = () => {
      // Step physics
      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          const index = y * width + x;
          buffer2[index] =
            (buffer1[index - 1] +
              buffer1[index + 1] +
              buffer1[index - width] +
              buffer1[index + width]) /
              2 -
            buffer2[index];
          buffer2[index] *= damping;
        }
      }

      // Swap buffers
      const temp = buffer1;
      buffer1 = buffer2;
      buffer2 = temp;

      // Draw background & displacement distortion
      if (imgLoaded && imgCtx) {
        if (imgCanvas.width !== width || imgCanvas.height !== height) {
          imgCanvas.width = width;
          imgCanvas.height = height;
        }

        // Draw image cover scaled
        const imgRatio = img.width / img.height;
        const canvasRatio = width / height;
        let renderW = width;
        let renderH = height;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasRatio > imgRatio) {
          renderH = width / imgRatio;
          offsetY = (height - renderH) / 2;
        } else {
          renderW = height * imgRatio;
          offsetX = (width - renderW) / 2;
        }

        imgCtx.drawImage(img, offsetX, offsetY, renderW, renderH);

        const imgData = imgCtx.getImageData(0, 0, width, height);
        const outData = ctx.createImageData(width, height);

        const srcData = imgData.data;
        const dstData = outData.data;

        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            const i = y * width + x;
            let xOffset = 0;
            let yOffset = 0;

            if (x > 0 && x < width - 1 && y > 0 && y < height - 1) {
              xOffset = Math.floor(buffer1[i - 1] - buffer1[i + 1]);
              yOffset = Math.floor(buffer1[i - width] - buffer1[i + width]);
            }

            let mapX = x + xOffset;
            let mapY = y + yOffset;

            if (mapX < 0) mapX = 0;
            if (mapX >= width) mapX = width - 1;
            if (mapY < 0) mapY = 0;
            if (mapY >= height) mapY = height - 1;

            const srcIdx = (mapY * width + mapX) * 4;
            const dstIdx = i * 4;

            dstData[dstIdx] = srcData[srcIdx];
            dstData[dstIdx + 1] = srcData[srcIdx + 1];
            dstData[dstIdx + 2] = srcData[srcIdx + 2];
            dstData[dstIdx + 3] = 255;
          }
        }

        ctx.putImageData(outData, 0, 0);
      } else {
        // Dark gradient placeholder if loading
        const grad = ctx.createLinearGradient(0, 0, 0, height);
        grad.addColorStop(0, '#111827');
        grad.addColorStop(1, '#1e293b');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(autoRippleInterval);
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('click', handleClick);
      }
    };
  }, []);

  const facilities = heroContent?.facilities || [];

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[92vh] flex flex-col justify-between overflow-hidden bg-slate-950 text-white select-none"
    >
      {/* Water Ripple Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-0 cursor-pointer transition-opacity duration-700"
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60 pointer-events-none z-10" />

      {/* Hero Content Grid Overlay */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-6 pt-36 pb-12 flex-1 flex flex-col justify-between">
        {/* Top Section: Subtitle & CTA Button */}
        <div className="max-w-xl space-y-6 animate-fade-in">
          <p className="text-white/90 text-sm md:text-base font-light leading-relaxed tracking-wide backdrop-blur-md bg-black/20 p-4 rounded-xl border border-white/10 shadow-lg">
            {heroContent?.subtitle ||
              'Indulge in a luxurious hotel stay where comfort meets style, offering world-class amenities, elegant design, and exceptional personalized service.'}
          </p>

          <div>
            <Link
              to="/rooms"
              className="inline-flex items-center justify-center px-8 py-3.5 text-xs md:text-sm font-semibold tracking-widest text-white uppercase transition-all duration-300 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/60 backdrop-blur-md shadow-2xl hover:scale-105 active:scale-95"
            >
              {heroContent?.viewRooms || 'VIEW OUR ROOMS'}
            </Link>
          </div>
        </div>

        {/* Bottom Section: Main Heading Left & Floating Facilities Card Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-12">
          {/* Main Left Headline */}
          <div className="lg:col-span-7 space-y-2">
            <span className="text-amber-400 font-serif italic text-lg md:text-xl tracking-wider block">
              {heroContent?.titleMain || 'ORA Lake View'}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-medium leading-tight tracking-tight text-white drop-shadow-md">
              {heroContent?.titleSub || 'Best Hotel In Town'}
            </h1>
          </div>

          {/* Floating Facilities Card (Restin Design) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-black/50 backdrop-blur-xl border border-white/15 rounded-3xl p-6 shadow-2xl space-y-5">
              {/* Header with Facilities title & pagination dots */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="font-serif text-xl font-medium text-white tracking-wide">
                  {heroContent?.facilitiesTitle || "Hotel's Facilities"}
                </h3>
                <div className="flex items-center space-x-2">
                  {facilities.map((_: any, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setActiveFacilityIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        activeFacilityIndex === idx
                          ? 'bg-amber-400 w-6'
                          : 'bg-white/30 hover:bg-white/60'
                      }`}
                      aria-label={`Facility slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Cards Grid / Carousel preview */}
              <div className="grid grid-cols-3 gap-3">
                {facilities.map((fac: any, idx: number) => (
                  <div
                    key={fac.id || idx}
                    onClick={() => setActiveFacilityIndex(idx)}
                    className={`group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 ${
                      activeFacilityIndex === idx
                        ? 'border-amber-400 ring-2 ring-amber-400/30 scale-[1.02]'
                        : 'border-white/10 hover:border-white/30 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={fac.image}
                        alt={fac.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>
                    <div className="p-2.5 bg-black/40 text-center">
                      <h4 className="text-xs font-medium text-white truncate">
                        {fac.title}
                      </h4>
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
