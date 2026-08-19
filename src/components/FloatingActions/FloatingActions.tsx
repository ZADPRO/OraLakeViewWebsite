import React, { useState, useEffect } from 'react';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3 pointer-events-auto">
      {/* Scroll To Top FAB Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-slate-900/90 text-amber-400 hover:bg-[#C68D53] hover:text-white border-2 border-amber-400/60 shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 backdrop-blur-md group animate-fade-in"
          title="Scroll to Top"
          aria-label="Scroll to top of page"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.8} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}

      {/* Persistent Call Floating Action Button (FAB) */}
      <a
        href="tel:+41339511341"
        className="relative w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-[0_10px_30px_rgba(198,141,83,0.5)] border-2 border-amber-300 flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group"
        title="Call ORA Lake View (+41 33 951 13 41)"
        aria-label="Call Hotel (+41 33 951 13 41)"
      >
        {/* Pulsing Outer Glow Ring */}
        <span className="absolute inset-0 rounded-full bg-amber-400/50 animate-ping pointer-events-none opacity-75" />

        <svg
          className="w-5 h-5 text-slate-950 group-hover:rotate-12 transition-transform duration-300 relative z-10"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      </a>
    </div>
  );
};

export default FloatingActions;
