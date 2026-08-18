import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

// Local Room Assets Imports
import majesticImg1 from '../../assets/rooms/Majestic Lakeview King/Img1.png';
import queensImg1 from '../../assets/rooms/Queens Vista-40 sq metres/image_1.jpg';
import alpineImg1 from '../../assets/rooms/Alpine Retreat/4E1A7889_1_1.jpg';
import studioImg1 from '../../assets/rooms/Lakeview Studio-22 sq metres/4E1A8172_1.jpg';
import signatureImg1 from '../../assets/rooms/Signature Lakeview/4E1A7872_1.jpg';
import disabilityImg1 from '../../assets/rooms/Disability Lakeview Trio-28 sq metres/7STD4003.jpg';
import classicImg1 from '../../assets/rooms/Classic Lakeview-22 sq metres/image.jpg';

const BOOKING_URL =
  'https://direct-book.com/properties/lakeviewhotelrestaurant?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=CHF';

export const RoomsSection: React.FC = () => {
  const { getContent } = useLanguage();
  const roomsContent = getContent('rooms');

  // All 7 authentic room items mapped to local room assets from src/assets/rooms/
  const items = [
    {
      id: 'majestic-king',
      name: 'Majestic Lakeview King',
      size: '33 m²',
      guests: '2 Adults',
      price: 'CHF 310 / NIGHT',
      image: majesticImg1,
    },
    {
      id: 'queens-vista',
      name: "Queen’s Vista",
      size: '40 m²',
      guests: '2 Adults',
      price: 'CHF 380 / NIGHT',
      image: queensImg1,
    },
    {
      id: 'alpine-retreat',
      name: 'Alpine Retreat',
      size: '33 m²',
      guests: '2 Adults',
      price: 'CHF 290 / NIGHT',
      image: alpineImg1,
    },
    {
      id: 'lakeview-studio',
      name: 'Lakeview Studio',
      size: '22 m²',
      guests: '2 Guests',
      price: 'CHF 250 / NIGHT',
      image: studioImg1,
    },
    {
      id: 'signature-lakeview',
      name: 'Signature Lakeview',
      size: '28 m²',
      guests: '3 Guests',
      price: 'CHF 310 / NIGHT',
      image: signatureImg1,
    },
    {
      id: 'disability-lakeview-trio',
      name: 'Disability Lakeview Trio',
      size: '28 m²',
      guests: '3 Guests',
      price: 'CHF 290 / NIGHT',
      image: disabilityImg1,
    },
    {
      id: 'classic-lakeview',
      name: 'Classic Lakeview Room',
      size: '22 m²',
      guests: '2 Adults',
      price: 'CHF 220 / NIGHT',
      image: classicImg1,
    },
  ];

  // Duplicate items array 3 times for 100% infinite seamless loop
  const displayItems = [...items, ...items, ...items];

  const [currentIndex, setCurrentIndex] = useState(items.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Auto-Scroll Speed: 2.5 Seconds
  useEffect(() => {
    if (isPaused || items.length <= 1) return;
    const interval = setInterval(() => {
      handleNext();
    }, 2500);
    return () => clearInterval(interval);
  }, [isPaused, items.length]);

  // Dynamic responsive slider transform calculation
  const getTransformStyle = () => {
    if (windowWidth >= 1024) {
      return `translateX(calc(-${currentIndex} * (100% / 4 + 6px)))`;
    } else if (windowWidth >= 640) {
      return `translateX(calc(-${currentIndex} * (100% / 2 + 12px)))`;
    } else {
      return `translateX(calc(-${currentIndex} * (84vw + 16px)))`;
    }
  };

  return (
    <section className="relative py-20 lg:py-28 bg-white text-black overflow-hidden select-none border-t border-slate-200">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        {/* Centered Header Row */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          {/* Subtitle Badge Centered */}
          <div className="flex items-center justify-center space-x-3">
            <span className="w-8 h-[2px] bg-amber-600" />
            <span className="text-amber-900 font-sans text-xs font-bold tracking-widest uppercase">
              OUR SIGNATURE ACCOMMODATIONS
            </span>
            <span className="w-8 h-[2px] bg-amber-600" />
          </div>

          {/* Main Headline Centered */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight">
            Our Signature Accommodations
          </h2>

          {/* Sub-heading Paragraph Centered */}
          <p className="text-black font-sans text-sm sm:text-base font-light leading-relaxed">
            {roomsContent?.subtitle ||
              'At ORA Lake View, we offer a variety of beautifully designed rooms and suites to suit every traveler’s need — from cozy lakeview rooms to spacious family retreats over Lake Brienz.'}
          </p>
        </div>

        {/* Responsive Mobile-Friendly Carousel Track */}
        <div
          className="overflow-hidden py-4 px-1"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`flex ${
              isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''
            } gap-4 sm:gap-6`}
            style={{
              transform: getTransformStyle(),
            }}
          >
            {displayItems.map((room: any, idx: number) => (
              <a
                key={`${room.id}-${idx}`}
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[84vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex-shrink-0 group cursor-pointer"
              >
                {/* Sleek Shadowless Card Frame */}
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 flex flex-col h-full shadow-sm hover:shadow-lg transition-shadow">
                  {/* Fixed Height Container with Object-Cover Fit */}
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-black rounded-t-2xl">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Price Badge Top-Left */}
                    <div className="absolute top-3.5 left-3.5 z-10 bg-[#C68D53] text-white font-bold text-xs px-3 py-1 rounded-md shadow-sm tracking-wider uppercase">
                      {room.price}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 bg-white flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Main Room Name Headline */}
                      <h3 className="font-serif text-xl font-semibold text-black tracking-tight group-hover:text-amber-800 transition-colors line-clamp-1">
                        {room.name}
                      </h3>
                    </div>

                    {/* Specs Line with Clean Lucide-Style SVG Vector Icons */}
                    <div className="flex items-center space-x-5 text-xs font-sans text-black pt-2 border-t border-slate-100">
                      {/* Size Icon (Maximize2) */}
                      <div className="flex items-center space-x-1.5">
                        <svg
                          className="w-4 h-4 text-amber-700 shrink-0"
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
                          className="w-4 h-4 text-amber-700 shrink-0"
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

                  {/* Gramentheme Restin 45-Degree Slanted Center-Reveal Gold Button Hover Transition */}
                  <div className="relative overflow-hidden bg-black text-white text-xs font-bold uppercase tracking-widest py-3.5 px-5 flex items-center justify-between transition-colors duration-300 rounded-b-2xl group">
                    <span className="absolute inset-0 bg-[#C68D53] -skew-x-[45deg] scale-x-0 group-hover:scale-x-[1.8] transition-transform duration-500 ease-out origin-center z-0" />

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

        {/* Carousel Navigation Controls Below Grid */}
        <div className="flex items-center justify-between mt-8 pt-4">
          {/* Arrow Controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-xl bg-white hover:bg-[#C68D53] hover:text-white text-black flex items-center justify-center transition-all duration-300 shadow-md border border-amber-200/80 active:scale-95"
              aria-label="Previous Slide"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-xl bg-[#C68D53] hover:bg-black text-white font-bold flex items-center justify-center transition-all duration-300 shadow-md active:scale-95"
              aria-label="Next Slide"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicator Dots */}
          <div className="flex items-center space-x-2">
            {items.map((_, idx: number) => {
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
                  aria-label={`Go to slide ${idx + 1}`}
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
