import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const BOOKING_URL =
  'https://direct-book.com/properties/lakeviewhotelrestaurant?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=CHF';

export const AmenitiesSection: React.FC = () => {
  const { getContent } = useLanguage();
  const amenitiesContent = getContent('amenities');

  const amenitiesList = [
    {
      id: 'parking',
      title: 'Free Parking Without Reservation',
      desc: 'Arrive stress-free with spacious front and back parking areas, designed to accommodate every guest with ease and comfort.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M5 10l2-4h10l2 4M3 17a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4zM7 15h.01M17 15h.01"
          />
        </svg>
      ),
      isGold: false,
    },
    {
      id: 'wifi',
      title: 'Free WiFi',
      desc: 'Stay as connected as you want. Our high-speed WiFi ensures you can stay in touch with what matters, while living your best Swiss life.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
          />
        </svg>
      ),
      isGold: true,
    },
    {
      id: 'breakfast',
      title: 'Breakfast',
      desc: 'Start your day the right way. Our continental breakfast buffet is packed with fresh, locally-sourced flavors to fuel your adventures ahead.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      isGold: false,
    },
    {
      id: 'balcony',
      title: 'Private Balcony/Terrace',
      desc: 'Take in the views of Lake Brienz, the Swiss Alps, and a whole lot of serenity. Unwind with a book, or sip your favorite drink while nature does the rest.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      isGold: true,
    },
    {
      id: 'lounge',
      title: 'Entertainment Lounge',
      desc: 'Relax, recharge, and enjoy. Whether you’re into games, books, or just good conversations under the glow of Swiss hospitality.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      isGold: false,
    },
    {
      id: 'kitchen',
      title: 'Common Kitchen',
      desc: 'Feel at home with our fully-equipped common kitchen. Whether you’re cooking up a storm or just storing snacks, it’s your space to enjoy.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      isGold: true,
    },
  ];

  // Mobile Flipped Card Index
  const [mobileFlippedIndex, setMobileFlippedIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Mobile Scroll-Driven Card Flipping Sequence
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768 || !sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.top < viewportHeight * 0.75 && rect.bottom > 0) {
        const totalHeight = rect.height;
        const scrolled = Math.max(0, viewportHeight * 0.75 - rect.top);
        const progress = Math.min(1, scrolled / totalHeight);

        const activeCard = Math.min(
          amenitiesList.length - 1,
          Math.floor(progress * amenitiesList.length)
        );

        setMobileFlippedIndex(activeCard);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [amenitiesList.length]);

  const handleCardClick = (index: number) => {
    setMobileFlippedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-[#FFFAF4] text-black overflow-hidden select-none border-t border-amber-200/60"
    >
      {/* 100% Reliable 3D Card Flip CSS Rules (Desktop Hover & Mobile Active State) */}
      <style>{`
        .amenity-flip-card {
          perspective: 1000px;
        }
        .amenity-flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        .amenity-flip-card:hover .amenity-flip-card-inner,
        .amenity-flip-card.is-mobile-flipped .amenity-flip-card-inner {
          transform: rotateY(180deg);
        }
        .amenity-flip-card-front,
        .amenity-flip-card-back {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .amenity-flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>

      <div className="max-w-[1380px] mx-auto px-6 md:px-10 relative z-10">
        {/* Centered Tagline Line Badge */}
        <div className="flex items-center justify-center space-x-3 mb-10 text-center">
          <span className="w-8 h-[2px] bg-[#C68D53]" />
          <span className="text-amber-900 font-sans text-xs font-bold tracking-widest uppercase">
            {amenitiesContent?.tagline || 'OUR BEST FACILITIES'}
          </span>
          <span className="w-8 h-[2px] bg-[#C68D53]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: 6 3D Flip Amenity Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {amenitiesList.map((item, index) => {
              const isFlippedMobile = mobileFlippedIndex === index;

              return (
                <div
                  key={item.id}
                  onClick={() => handleCardClick(index)}
                  className={`amenity-flip-card h-[210px] sm:h-[220px] cursor-pointer ${
                    isFlippedMobile ? 'is-mobile-flipped' : ''
                  }`}
                >
                  <div className="amenity-flip-card-inner">
                    {/* FRONT FACE: Logo + Heading Title ONLY */}
                    <div
                      className={`amenity-flip-card-front p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-md transition-all duration-300 ${
                        item.isGold
                          ? 'bg-[#C68D53] text-white border border-[#C68D53]'
                          : 'bg-white text-slate-900 border border-amber-200/80'
                      }`}
                    >
                      <div
                        className={`mb-3 transition-transform duration-300 hover:scale-110 ${
                          item.isGold ? 'text-white' : 'text-[#C68D53]'
                        }`}
                      >
                        {item.icon}
                      </div>

                      <h3 className="font-serif text-base sm:text-lg font-bold tracking-tight leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    {/* BACK FACE: Full Description Text */}
                    <div
                      className={`amenity-flip-card-back p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl ${
                        item.isGold
                          ? 'bg-slate-950 text-white border border-slate-800'
                          : 'bg-[#C68D53] text-white border border-[#C68D53]'
                      }`}
                    >
                      <h4 className="font-serif text-sm font-bold text-amber-300 mb-2 uppercase tracking-wide">
                        {item.title}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm leading-relaxed text-white/95 font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Main Section Headline, Narrative & Actions */}
          <div className="lg:col-span-5 space-y-6">
            {/* Main Headline on Right Side */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight">
              {amenitiesContent?.title || 'Our Facilities & Amenities'}
            </h2>

            {/* Sub-heading Narrative */}
            <p className="text-black font-sans text-base leading-relaxed font-light">
              At ORA Lake View Hotel, we ensure every detail of your stay is effortless and memorable. Enjoy unmatched convenience with free private parking, high-speed Wi-Fi, instant transit access, pet-friendly accommodations, and gourmet dining overlooking Lake Brienz.
            </p>

            {/* Contact Phone & BOOK NOW Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Phone Badge Button */}
              <a
                href="tel:+41786938847"
                className="inline-flex items-center space-x-3 bg-white border border-amber-200 px-5 py-3.5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-amber-400 group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#C68D53]/15 text-[#C68D53] flex items-center justify-center font-bold group-hover:bg-[#C68D53] group-hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] uppercase font-bold tracking-widest text-slate-500">
                    CALL US ANYTIME
                  </div>
                  <div className="text-xs font-bold text-slate-900 tracking-wide">
                    +41 78 693 88 47
                  </div>
                </div>
              </a>

              {/* BOOK NOW CTA Button with 45-Degree Slanted Center-Reveal Animation */}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden inline-flex items-center justify-center px-8 py-4 text-xs sm:text-sm font-sans font-bold tracking-widest text-white uppercase transition-colors duration-300 rounded-2xl bg-black shadow-xl group"
              >
                <span className="absolute inset-0 bg-[#C68D53] -skew-x-[45deg] scale-x-0 group-hover:scale-x-[1.8] transition-transform duration-500 ease-out origin-center z-0" />
                <span className="relative z-10">BOOK NOW</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
