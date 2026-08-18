import React, { useEffect, useRef } from 'react';

export const MouseCursor: React.FC = () => {
  const innerRef = useRef<HTMLDivElement | null>(null);
  const outerRef = useRef<HTMLDivElement | null>(null);

  const pos = useRef({ x: -100, y: -100 });
  const outerPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button';

      if (outerRef.current) {
        if (isInteractive) {
          outerRef.current.classList.add('scale-150', 'border-amber-300', 'bg-amber-400/10');
        } else {
          outerRef.current.classList.remove('scale-150', 'border-amber-300', 'bg-amber-400/10');
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    let animFrame: number;
    const renderCursor = () => {
      // Smooth linear interpolation (lerp)
      outerPos.current.x += (pos.current.x - outerPos.current.x) * 0.18;
      outerPos.current.y += (pos.current.y - outerPos.current.y) * 0.18;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${outerPos.current.x}px, ${outerPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      animFrame = requestAnimationFrame(renderCursor);
    };
    renderCursor();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <>
      {/* Inner Dot Cursor */}
      <div
        ref={innerRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-amber-400 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />

      {/* Outer Ring Cursor (Restin cursor-outer style) */}
      <div
        ref={outerRef}
        className="fixed top-0 left-0 w-9 h-9 border border-amber-400/70 rounded-full pointer-events-none z-[9998] transition-all duration-200 ease-out -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default MouseCursor;
