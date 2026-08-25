import React, { useState, useRef, useEffect } from 'react';
import mapImg from '../../assets/images/maps/map.png';

// Local Attraction Assets Imports from src/assets/home/
import giessbachImg from '../../assets/home/Giessbach Falls.png';
import harderKulmImg from '../../assets/home/Harder Kulm.png';
import hohematteImg from '../../assets/home/Hohematte Park.png';
import jangfrauImg from '../../assets/home/Jangfrau.png';
import lakeThunImg from '../../assets/home/Lake Thun.png';
import schynigeImg from '../../assets/home/Schynige Platte.png';
import beatusCavesImg from '../../assets/home/St. Beatus Caves.png';

// Local HOME Gallery Assets Imports from src/assets/home/HOME/
import iseltwald1 from '../../assets/home/HOME/ISELTWALD1.jpg';
import iseltwald2 from '../../assets/home/HOME/ISELTWALD2.jpg';
import iseltwald3 from '../../assets/home/HOME/ISELTWALD3.jpg';
import iseltwald4 from '../../assets/home/HOME/ISELTWALD4.jpg';
import lakeside1 from '../../assets/home/HOME/LAKESIDE1.jpg';
import lakeside2 from '../../assets/home/HOME/LAKESIDE2.jpg';
import lakeside3 from '../../assets/home/HOME/LAKESIDE3.jpg';
import seasonal1 from '../../assets/home/HOME/SEASONAL1.jpg';
import seasonal2 from '../../assets/home/HOME/SEASONAL2.jpg';
import seasonal3 from '../../assets/home/HOME/SEASONAL3.jpg';
import funFactImg from '../../assets/home/HOME/FUN-FACT.jpg';

const BOOKING_URL =
  'https://direct-book.com/properties/lakeviewhotelrestaurant?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=CHF';

export const AttractionsSection: React.FC = () => {
  // Modal State for Full Untruncated View
  const [selectedModalItem, setSelectedModalItem] = useState<any | null>(null);

  // Carousel 1: Nearby Attractions Auto-Scroll & Manual Controls
  const attractionsScrollRef = useRef<HTMLDivElement>(null);
  const [isAttractionsPaused, setIsAttractionsPaused] = useState(false);

  const scrollAttractions = (direction: 'left' | 'right') => {
    if (attractionsScrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      attractionsScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isAttractionsPaused || selectedModalItem) return;
    const interval = setInterval(() => {
      if (attractionsScrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = attractionsScrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          attractionsScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          attractionsScrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
        }
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [isAttractionsPaused, selectedModalItem]);

  // Carousel 2: Hotel Activities Auto-Scroll & Manual Controls
  const activitiesScrollRef = useRef<HTMLDivElement>(null);
  const [isActivitiesPaused, setIsActivitiesPaused] = useState(false);

  const scrollActivities = (direction: 'left' | 'right') => {
    if (activitiesScrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      activitiesScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isActivitiesPaused || selectedModalItem) return;
    const interval = setInterval(() => {
      if (activitiesScrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = activitiesScrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          activitiesScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          activitiesScrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
        }
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [isActivitiesPaused, selectedModalItem]);

  // 4 Verified Connectivity Nodes (Vector SVG Icons Only - No Emojis, No Blue)
  const connectivityNodes = [
    {
      title: "Niederried b.I'laken, Dorf Bus Station",
      distance: 'Distance: 20 meters',
      time: '1 min walk',
      isWalk: true,
      icon: (
        <svg className="w-6 h-6 text-[#C68D53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M8 7h8m-8 4h8m-6 4h4M5 3h14a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"
          />
        </svg>
      ),
    },
    {
      title: 'Niederried Ferry Terminal',
      distance: 'Distance: 300 meters',
      time: '5 mins walk approx',
      isWalk: true,
      icon: (
        <svg className="w-6 h-6 text-[#C68D53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: 'Niederried train Station',
      distance: 'Distance: 170 meters',
      time: '2-3 mins walk approx',
      isWalk: true,
      icon: (
        <svg className="w-6 h-6 text-[#C68D53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      ),
    },
    {
      title: 'Zurich Airport / Bern Airport',
      distance: 'Distance: 79 miles / 36 miles',
      time: '1 hr 46 min / 49 mins drive',
      isWalk: false,
      icon: (
        <svg className="w-6 h-6 text-[#C68D53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      ),
    },
  ];

  // 7 Verified Nearby Natural Wonders Mapped to local assets in src/assets/home/
  const nearbyAttractions = [
    {
      id: 'jungfrau',
      title: 'Jungfrau',
      subtitle: 'An alpine journey to towering peaks',
      desc: 'Jungfrau, renowned for its towering peaks and stunning vistas, features scenic train rides, hiking trails, and snow adventures. Ideal for explorers and nature lovers, it’s a must-visit alpine destination.',
      image: jangfrauImg,
    },
    {
      id: 'harder-kulm',
      title: 'Harder Kulm',
      subtitle: 'The roof of Interlaken with panoramic views.',
      desc: 'A short ride from Interlaken, offers sweeping views of Lake Thun, Lake Brienz, and the mountains from its 1,322-meter height. The glass-floored platform and on-site restaurant make it a memorable spot.',
      image: harderKulmImg,
    },
    {
      id: 'lake-thun',
      title: 'Lake Thun',
      subtitle: 'Tranquility on turquoise waters',
      desc: "Lake Thun, known for its clear waters and mountain views, offers boat cruises, charming villages, and historic lakeside castles. Ideal for picnics, swimming, or relaxing, it's a perfect spot for families and couples.",
      image: lakeThunImg,
    },
    {
      id: 'schynige-platte',
      title: 'Schynige Platte',
      subtitle: 'A floral paradise above the clouds',
      desc: 'Schynige Platte, accessible by cogwheel train, is known for its scenic hiking trails, alpine flora, and panoramic views of the Eiger, Mönch, and Jungfrau. It’s a perfect retreat for nature lovers and adventure seekers alike.',
      image: schynigeImg,
    },
    {
      id: 'beatus-caves',
      title: 'St. Beatus Caves',
      subtitle: 'Whispers of legends in limestone chambers',
      desc: 'The St. Beatus Caves near Lake Thun feature limestone formations and legends of St. Beatus. Guided tours along well-kept paths reveal their geological history and natural beauty.',
      image: beatusCavesImg,
    },
    {
      id: 'giessbach-falls',
      title: 'Giessbach Falls',
      subtitle: 'Cascading beauty amidst lush forests',
      desc: 'Giessbach Falls, near Lake Brienz, cascades over 500 meters through lush forests. Scenic trails offer beautiful views, and the nearby historic Giessbach Hotel adds to its charm, making it ideal for a day in nature.',
      image: giessbachImg,
    },
    {
      id: 'hohematte-park',
      title: 'Hohematte Park',
      subtitle: 'A vibrant green canvas in Interlaken’s heart',
      desc: 'Located in central Interlaken, Hohematte Park is a lush green space with manicured gardens, playgrounds, and mountain views. Hosting events year-round, it’s perfect for picnics, strolls, or relaxation for all ages.',
      image: hohematteImg,
    },
  ];

  // 4 Verified Hotel Activities (Mapped to local assets from src/assets/home/HOME/)
  const hotelActivities = [
    {
      id: 'lakeside-walk',
      title: 'Lakeside Serenity Walk',
      tag: 'SCENIC STROLL',
      desc: 'Take a leisurely 3-4 km stroll around the pristine lake, where every step offers breathtaking views of the water and the majestic Alps. Perfect for unwinding or capturing the beauty of nature, this walk immerses you in tranquility',
      image: lakeside1,
      gallery: [lakeside1, lakeside2, lakeside3],
    },
    {
      id: 'iseltwald-view',
      title: 'Iseltwald: A View To Remember',
      tag: 'BALCONY VIEW',
      desc: 'Enjoy unparalleled views of the charming village of Iseltwald right from your balcony. Famous for its appearance in the Korean drama Crash Landing on You, this scenic spot blends natural beauty with cinematic magic',
      image: iseltwald1,
      gallery: [iseltwald1, iseltwald2, iseltwald3, iseltwald4],
    },
    {
      id: 'water-fun',
      title: 'Seasonal Swimming Bliss',
      tag: 'LAKEVIEW FUN',
      desc: "Dive into relaxation at the swimming spot just below the hotel, open during the season. Whether you're taking a refreshing dip or lounging by the water, it's a perfect way to enjoy the lake",
      image: seasonal1,
      gallery: [seasonal1, seasonal2, seasonal3],
    },
    {
      id: 'fun-fact',
      title: 'Fun For The Little Ones',
      tag: 'FAMILY & KIDS',
      desc: "A nearby children's park ensures younger guests have their share of fun. Equipped with swings, slides, and a safe play area, it's an ideal spot for families to create joyful memories together",
      image: funFactImg,
      gallery: [funFactImg],
    },
  ];

  return (
    <div className="bg-[#FFFAF4] text-black">
      {/* PART 1: NEARBY ATTRACTIONS (TOP SECTION) */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200 select-none">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14">
            <div className="space-y-3">
              {/* Tagline Line Badge */}
              <div className="flex items-center space-x-3">
                <span className="w-8 h-[2px] bg-amber-600" />
                <span className="text-amber-900 font-sans text-xs font-bold tracking-widest uppercase">
                  DISCOVER SWITZERLAND
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight">
                Nearby Attractions
              </h2>
            </div>

            {/* Manual Scroll Controls */}
            <div className="flex items-center space-x-3 mt-6 md:mt-0">
              <button
                onClick={() => scrollAttractions('left')}
                className="w-11 h-11 rounded-full bg-[#FFFAF4] border border-amber-200/80 text-black flex items-center justify-center shadow-sm hover:bg-[#C68D53] hover:text-white transition-all duration-300 active:scale-95"
                aria-label="Previous Attraction"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scrollAttractions('right')}
                className="w-11 h-11 rounded-full bg-[#C68D53] text-white flex items-center justify-center shadow-md hover:bg-black transition-all duration-300 active:scale-95"
                aria-label="Next Attraction"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Horizontal Carousel Track: Full First Card Displayed with Peeking Second Card on Mobile */}
          <div
            ref={attractionsScrollRef}
            onMouseEnter={() => setIsAttractionsPaused(true)}
            onMouseLeave={() => setIsAttractionsPaused(false)}
            className="flex space-x-4 sm:space-x-6 overflow-x-auto scrollbar-none pb-4 scroll-smooth snap-x snap-mandatory pr-6 sm:pr-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {nearbyAttractions.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedModalItem(item)}
                className="w-[84vw] sm:w-[360px] max-w-[360px] flex-shrink-0 snap-start bg-[#FFFAF4] rounded-3xl overflow-hidden border border-amber-200/80 shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-500 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {/* Photo Container with Fixed Height & Object-Cover Fit */}
                  <div className="relative h-60 w-full overflow-hidden bg-black">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Content Body */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-2xl font-bold text-black tracking-tight group-hover:text-amber-900 transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs font-semibold text-amber-900 tracking-wide uppercase">
                      {item.subtitle}
                    </p>
                    <p className="font-sans text-sm sm:text-base text-slate-800 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <div className="text-xs font-bold text-amber-900 group-hover:underline flex items-center space-x-1">
                    <span>Explore Attraction Details</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PART 2: AT THE HEART OF CONNECTIVITY (MIDDLE SECTION) */}
      <section className="py-20 lg:py-28 bg-[#FFFAF4] border-t border-amber-200/60 select-none">
        <div className="max-w-[1380px] mx-auto px-6 md:px-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="flex items-center justify-center space-x-3">
              <span className="w-8 h-[2px] bg-amber-600" />
              <span className="text-amber-900 font-sans text-xs font-bold tracking-widest uppercase">
                EFFORTLESS SWISS TRANSIT
              </span>
              <span className="w-8 h-[2px] bg-amber-600" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight">
              At the Heart of Connectivity
            </h2>

            <p className="text-black font-sans text-sm sm:text-base font-light leading-relaxed">
              Enjoy prime access to bus stops, ferry terminals, train stations, and airports — connecting you effortlessly to Interlaken and all Swiss Alpine wonders.
            </p>
          </div>

          {/* Grid Layout: Left 4 Nodes (One-by-One Stacking on Mobile) & Right Map Frame */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left 4 Connectivity Cards */}
            <div className="lg:col-span-6 space-y-5">
              {connectivityNodes.map((node, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-amber-200/80 shadow-sm hover:shadow-md hover:border-amber-400 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center shrink-0">
                        {node.icon}
                      </div>
                      <div className="space-y-1 min-w-0">
                        <h3 className="font-serif text-lg font-bold text-black tracking-tight leading-snug break-words">
                          {node.title}
                        </h3>
                        <p className="font-sans text-xs text-black font-light">
                          {node.distance}
                        </p>
                      </div>
                    </div>

                    <div className="self-start sm:self-center shrink-0">
                      <span className="inline-block text-[11px] font-sans font-extrabold uppercase tracking-wider text-white bg-black px-3.5 py-1.5 rounded-lg shadow-sm">
                        {node.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Transit Map Frame (Gold Container & Maximized Image) */}
            <div className="lg:col-span-6 relative">
              <div className="bg-gradient-to-br from-[#C68D53] via-[#C68D53] to-[#B37B43] p-4 sm:p-6 rounded-3xl border-2 border-amber-300/80 shadow-2xl space-y-4 text-white">
                <div className="flex items-center justify-between px-2">
                  <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                    Niederried Transit Map
                  </h3>
                  <span className="text-xs font-sans font-bold text-amber-300 bg-slate-950 px-3.5 py-1.5 rounded-lg border border-amber-300/40 shadow-md uppercase tracking-wider">
                    2 MINS TO TRAIN STATION
                  </span>
                </div>

                <div className="h-[280px] sm:h-[440px] w-full rounded-2xl overflow-hidden bg-[#181C24] relative border border-white/30 shadow-inner group">
                  <img
                    src={mapImg}
                    alt="Niederried Transit Map"
                    className="w-full h-full object-contain sm:object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PART 3: WHAT YOU CAN DO AT THE HOTEL (BOTTOM SECTION) */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200 select-none">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="w-8 h-[2px] bg-amber-600" />
                <span className="text-amber-900 font-sans text-xs font-bold tracking-widest uppercase">
                  EXPERIENCE HOTEL LAKEVIEW
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight">
                What You Can Do at the Hotel
              </h2>
            </div>

            {/* Manual Scroll Controls */}
            <div className="flex items-center space-x-3 mt-6 md:mt-0">
              <button
                onClick={() => scrollActivities('left')}
                className="w-11 h-11 rounded-full bg-[#FFFAF4] border border-amber-200/80 text-black flex items-center justify-center shadow-sm hover:bg-[#C68D53] hover:text-white transition-all duration-300 active:scale-95"
                aria-label="Previous Activity"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scrollActivities('right')}
                className="w-11 h-11 rounded-full bg-[#C68D53] text-white flex items-center justify-center shadow-md hover:bg-black transition-all duration-300 active:scale-95"
                aria-label="Next Activity"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Horizontal Carousel Track: Full First Card Displayed with Peeking Second Card on Mobile */}
          <div
            ref={activitiesScrollRef}
            onMouseEnter={() => setIsActivitiesPaused(true)}
            onMouseLeave={() => setIsActivitiesPaused(false)}
            className="flex space-x-4 sm:space-x-6 overflow-x-auto scrollbar-none pb-4 scroll-smooth snap-x snap-mandatory pr-6 sm:pr-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {hotelActivities.map((act) => (
              <div
                key={act.id}
                onClick={() => setSelectedModalItem(act)}
                className="w-[84vw] sm:w-[360px] max-w-[360px] flex-shrink-0 snap-start bg-[#FFFAF4] rounded-3xl overflow-hidden border border-amber-200/80 shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-500 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {/* Photo Container with Fixed Height & Object-Cover Fit */}
                  <div className="relative h-60 w-full overflow-hidden bg-black">
                    <img
                      src={act.image}
                      alt={act.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="text-[9px] font-sans font-extrabold tracking-widest text-amber-400 bg-black/80 px-3 py-1 rounded-md uppercase backdrop-blur-sm">
                        {act.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-2xl font-bold text-black tracking-tight group-hover:text-amber-900 transition-colors">
                      {act.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-slate-800 font-normal leading-relaxed">
                      {act.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <div className="text-xs font-bold text-amber-900 group-hover:underline flex items-center space-x-1">
                    <span>Read Full Activity Details</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL UNTRUNCATED DETAIL MODAL OVERLAY */}
      {selectedModalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-opacity animate-fade-in"
          onClick={() => setSelectedModalItem(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-xl w-full border border-amber-200 shadow-2xl relative text-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
              <img
                src={selectedModalItem.image}
                alt={selectedModalItem.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedModalItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-[#C68D53] text-white flex items-center justify-center transition-colors font-bold border border-white/20"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                {selectedModalItem.subtitle && (
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-black/60 px-3 py-1 rounded-md backdrop-blur-sm">
                    {selectedModalItem.subtitle}
                  </span>
                )}
                {selectedModalItem.tag && (
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-black/60 px-3 py-1 rounded-md backdrop-blur-sm">
                    {selectedModalItem.tag}
                  </span>
                )}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2">
                  {selectedModalItem.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-7 space-y-6">
              <p className="text-black font-sans text-base leading-relaxed font-light">
                {selectedModalItem.desc}
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden bg-black text-white text-xs font-bold uppercase tracking-widest py-3 px-6 rounded-xl inline-flex items-center space-x-2 group/mod"
                >
                  <span className="absolute inset-0 bg-[#C68D53] -skew-x-[45deg] scale-x-0 group-hover/mod:scale-x-[1.8] transition-transform duration-500 ease-out origin-center z-0" />
                  <span className="relative z-10 font-sans">PLAN YOUR VISIT</span>
                  <span className="relative z-10 group-hover/mod:translate-x-1 transition-transform">→</span>
                </a>

                <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                  ORA LAKE VIEW
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttractionsSection;
