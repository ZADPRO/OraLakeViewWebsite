import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const BOOKING_URL =
  'https://direct-book.com/properties/lakeviewhotelrestaurant?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=CHF';

export const RoomsSection: React.FC = () => {
  const { getContent } = useLanguage();
  const roomsContent = getContent('rooms');
  const items = roomsContent?.items || [];

  // Duplicate items array 3 times for a 100% seamless infinite circular loop
  const displayItems = [...items, ...items, ...items];

  const [currentIndex, setCurrentIndex] = useState(items.length); // Start at middle duplicated set
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // Seamless infinite wrap-around reset
  useEffect(() => {
    if (currentIndex >= items.length * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(items.length);
      }, 500);
      return () => clearTimeout(timer);
    }
    if (currentIndex < items.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(items.length * 2 - 1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, items.length]);

  // Auto-Scroll Speed: 2.0 Seconds (2000ms)
  useEffect(() => {
    if (isPaused || items.length <= 1) return;
    const interval = setInterval(() => {
      handleNext();
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused, items.length]);

  return (
    <section className="relative py-20 lg:py-28 bg-white text-black overflow-hidden select-none border-t border-slate-200">
      <div className="max-w-[1480px] mx-auto px-6 md:px-10 relative z-10">
        {/* Centered Header Row */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          {/* Subtitle Badge Centered */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300/60">
            <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
            <span className="text-amber-900 font-sans text-xs font-bold tracking-widest uppercase">
              CHOOSE YOUR PERFECT STAY
            </span>
          </div>

          {/* Main Headline Centered */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight">
            {roomsContent?.title || 'Our Rooms / Accommodation'}
          </h2>

          {/* Sub-heading Paragraph Centered */}
          <p className="text-black font-sans text-sm sm:text-base font-light leading-relaxed">
            {roomsContent?.subtitle ||
              'At ORA Lake View, we offer a variety of beautifully designed rooms and suites to suit every traveler’s need — from cozy lakeview rooms to spacious family retreats over Lake Brienz.'}
          </p>
        </div>

        {/* Card Track Infinite Auto-Scroll Carousel */}
        <div
          className="overflow-hidden py-4 -mx-2 px-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`flex ${
              isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''
            } gap-5 sm:gap-6`}
            style={{
              transform: `translateX(-${
                currentIndex *
                (window.innerWidth >= 1024
                  ? 25.6
                  : window.innerWidth >= 640
                  ? 51.2
                  : 102.5)
              }%)`,
            }}
          >
            {displayItems.map((room: any, idx: number) => (
              <a
                key={`${room.id}-${idx}`}
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex-shrink-0 group cursor-pointer"
              >
                {/* Sleek Shadowless Card Frame (No Shadows) */}
                <div className="bg-white rounded-lg overflow-hidden border border-slate-200/90 flex flex-col h-full">
                  {/* Proportional Image Container (h-56 sm:h-60) */}
                  <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-black rounded-t-lg">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                    {/* Floating Price Badge Top-Left ($69 / NIGHT Style) */}
                    <div className="absolute top-3.5 left-3.5 z-10 bg-[#C68D53] text-white font-bold text-xs px-3 py-1 rounded-md shadow-sm tracking-wider uppercase">
                      {room.price || 'CHF 220 / NIGHT'}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 bg-white flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Main Room Name Headline */}
                      <h3 className="font-serif text-xl font-semibold text-black tracking-tight group-hover:text-amber-800 transition-colors">
                        {room.name}
                      </h3>
                    </div>

                    {/* Specs Line with Clean Lucide-Style SVG Vector Icons */}
                    <div className="flex items-center space-x-5 text-xs font-sans text-black pt-2 border-t border-slate-100">
                      {/* Size Icon (Maximize2) */}
                      <div className="flex items-center space-x-1.5">
                        <svg
                          className="w-4 h-4 text-amber-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                          />
                        </svg>
                        <span>{room.size}</span>
                      </div>

                      {/* Capacity Icon (Users) */}
                      <div className="flex items-center space-x-1.5">
                        <svg
                          className="w-4 h-4 text-amber-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        <span>{room.guests}</span>
                      </div>
                    </div>
                  </div>

                  {/* Gramentheme Restin Sliding Gold Fill Button Hover Transition */}
                  <div className="relative overflow-hidden bg-black text-white text-xs font-bold uppercase tracking-widest py-3.5 px-5 flex items-center justify-between transition-colors duration-300 rounded-b-lg">
                    {/* Gold Sliding Overlay */}
                    <span className="absolute inset-0 bg-[#C68D53] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out origin-left z-0" />

                    <span className="relative z-10 font-sans">BOOK NOW</span>
                    <svg
                      className="w-4 h-4 text-white relative z-10 group-hover:translate-x-1.5 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Dots & Arrow Controls Below Slider */}
        <div className="flex items-center justify-between mt-8 pt-4">
          {/* Arrow Buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-[#C68D53] hover:text-white text-black flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95"
              aria-label="Previous Rooms"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-xl bg-[#C68D53] hover:bg-black text-white font-bold flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95"
              aria-label="Next Rooms"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicator Dots */}
          <div className="flex items-center space-x-2">
            {items.map((_: any, idx: number) => {
              const activeIdx = currentIndex % items.length;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setIsTransitioning(true);
                    setCurrentIndex(items.length + idx);
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    activeIdx === idx
                      ? 'bg-amber-600 w-3 h-3 ring-4 ring-amber-600/20'
                      : 'bg-slate-300 hover:bg-slate-400 w-2 h-2'
                  }`}
                  aria-label={`Go to room ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
