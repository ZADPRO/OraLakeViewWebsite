import React from 'react';

const DEFAULT_TICKER_ITEMS = [
  'ORA LAKE VIEW HOTEL',
  'SCENIC SWISS ALPS STAY',
  'LAKE BRIENZ PANORAMAS',
  'LUXURY ROOMS & SUITES',
  'AUTHENTIC SWISS GASTRONOMY',
  'NIEDERRIED BEI INTERLAKEN',
  'FREE PRIVATE EV PARKING',
  'PET-FRIENDLY ALPINE HOSPITALITY',
];

interface TickerDividerProps {
  items?: string[];
}

export const TickerDivider: React.FC<TickerDividerProps> = ({ items }) => {
  const activeItems = items || DEFAULT_TICKER_ITEMS;

  // Duplicate array 3 times for seamless infinite loop
  const repeatedItems = [...activeItems, ...activeItems, ...activeItems];

  return (
    <div className="relative w-full bg-slate-950 text-white border-y border-amber-400/25 py-4 overflow-hidden select-none z-20 shadow-2xl">
      {/* Infinite Scrolling Marquee Track */}
      <div className="flex w-max animate-marquee">
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-6 mx-4 whitespace-nowrap">
            <span className="text-amber-400 text-sm md:text-base animate-pulse">★</span>
            <span className="font-serif text-sm md:text-base font-normal tracking-widest text-white/90 uppercase">
              {item}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TickerDivider;
