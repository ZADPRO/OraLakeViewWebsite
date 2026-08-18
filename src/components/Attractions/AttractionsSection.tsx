import React, { useState, useRef, useEffect } from 'react';
import mapImg from '../../assets/images/maps/map.png';

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

  // 7 Verified Nearby Natural Wonders (Exact User Copy)
  const nearbyAttractions = [
    {
      id: 'jungfrau',
      title: 'Jungfrau',
      subtitle: 'An alpine journey to towering peaks',
      desc: 'Jungfrau, renowned for its towering peaks and stunning vistas, features scenic train rides, hiking trails, and snow adventures. Ideal for explorers and nature lovers, it’s a must-visit alpine destination.',
      image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'harder-kulm',
      title: 'Harder Kulm',
      subtitle: 'The roof of Interlaken with panoramic views.',
      desc: 'A short ride from Interlaken, offers sweeping views of Lake Thun, Lake Brienz, and the mountains from its 1,322-meter height. The glass-floored platform and on-site restaurant make it a memorable spot.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'lake-thun',
      title: 'Lake Thun',
      subtitle: 'Tranquility on turquoise waters',
      desc: "Lake Thun, known for its clear waters and mountain views, offers boat cruises, charming villages, and historic lakeside castles. Ideal for picnics, swimming, or relaxing, it's a perfect spot for families and couples.",
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'schynige-platte',
      title: 'Schynige Platte',
      subtitle: 'A floral paradise above the clouds',
      desc: 'Schynige Platte, accessible by cogwheel train, is known for its scenic hiking trails, alpine flora, and panoramic views of the Eiger, Mönch, and Jungfrau. It’s a perfect retreat for nature lovers and adventure seekers alike.',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'beatus-caves',
      title: 'St. Beatus Caves',
      subtitle: 'Whispers of legends in limestone chambers',
      desc: 'The St. Beatus Caves near Lake Thun feature limestone formations and legends of St. Beatus. Guided tours along well-kept paths reveal their geological history and natural beauty.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'giessbach-falls',
      title: 'Giessbach Falls',
      subtitle: 'Cascading beauty amidst lush forests',
      desc: 'Giessbach Falls, near Lake Brienz, cascades over 500 meters through lush forests. Scenic trails offer beautiful views, and the nearby historic Giessbach Hotel adds to its charm, making it ideal for a day in nature.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'hohematte-park',
      title: 'Hohematte Park',
      subtitle: 'A vibrant green canvas in Interlaken’s heart',
      desc: 'Located in central Interlaken, Hohematte Park is a lush green space with manicured gardens, playgrounds, and mountain views. Hosting events year-round, it’s perfect for picnics, strolls, or relaxation for all ages.',
      image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=800&q=80',
    },
  ];

  // 4 Verified Hotel Activities (Exact User Copy with High-Res Imagery & Line Clamp)
  const hotelActivities = [
    {
      id: 'lakeside-walk',
      title: 'Lakeside Serenity Walk',
      tag: 'SCENIC STROLL',
      desc: 'Take a leisurely 3-4 km stroll around the pristine lake, where every step offers breathtaking views of the water and the majestic Alps. Perfect for unwinding or capturing the beauty of nature, this walk immerses you in tranquility.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'iseltwald-view',
      title: 'Iseltwald: A View to Remember',
      tag: 'BALCONY VIEW',
      desc: 'Enjoy unparalleled views of the charming village of Iseltwald right from your balcony. Famous for its appearance in the Korean drama Crash Landing on You, this scenic spot blends natural beauty with cinematic magic.',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'seasonal-swimming',
      title: 'Seasonal Swimming Bliss',
      tag: 'WATER RECREATION',
      desc: "Dive into relaxation at the swimming spot just below the hotel, open during the season. Whether you're taking a refreshing dip or lounging by the water, it's a perfect way to enjoy the lake.",
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'children-fun',
      title: 'Fun for the Little Ones',
      tag: 'FAMILY FUN',
      desc: 'A nearby children’s park ensures younger guests have their share of fun. Equipped with swings, slides, and a safe play area, it’s an ideal spot for families to create joyful memories together.',
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="select-none">
      {/* Hide Scrollbars 100% Cross-Browser */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        .no-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>

      {/* PART 1: NEARBY ATTRACTIONS (7 Natural Wonders - Auto-Scrollable Carousel) */}
      <section className="py-20 lg:py-28 bg-white text-black border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative z-10">
          {/* Section Header with Carousel Arrow Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div className="space-y-3 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <span className="w-8 h-[2px] bg-amber-600" />
                <span className="text-amber-900 font-sans text-xs font-bold tracking-widest uppercase">
                  NEARBY ATTRACTIONS
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight">
                Explore Nearby Natural Wonders
              </h2>

              <p className="text-black font-sans text-sm sm:text-base font-light leading-relaxed max-w-2xl">
                Discover 7 world-famous alpine peaks, scenic cogwheel trains, roaring waterfalls, and historic caves right outside your doorstep.
              </p>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center space-x-3 shrink-0">
              <button
                onClick={() => scrollAttractions('left')}
                className="w-11 h-11 rounded-xl bg-white hover:bg-[#C68D53] hover:text-white text-black flex items-center justify-center transition-all duration-300 shadow-md border border-amber-200/80 active:scale-95"
                aria-label="Scroll left"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scrollAttractions('right')}
                className="w-11 h-11 rounded-xl bg-[#C68D53] hover:bg-black text-white font-bold flex items-center justify-center transition-all duration-300 shadow-md active:scale-95"
                aria-label="Scroll right"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* 7 Attractions Auto-Scroll Carousel Track */}
          <div
            ref={attractionsScrollRef}
            onMouseEnter={() => setIsAttractionsPaused(true)}
            onMouseLeave={() => setIsAttractionsPaused(false)}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth py-4 px-1"
          >
            {nearbyAttractions.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedModalItem(item)}
                className="w-[84vw] sm:w-[380px] lg:w-[400px] shrink-0 bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                {/* Photo Header */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] font-sans font-extrabold uppercase tracking-widest text-amber-400 bg-black/70 px-2.5 py-1 rounded-md backdrop-blur-sm">
                      SWISS LANDMARK
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-black tracking-tight group-hover:text-amber-800 transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-serif italic text-xs text-amber-900 font-medium mt-1">
                      {item.subtitle}
                    </p>
                    {/* Line Clamp 2 */}
                    <p className="text-black font-sans text-xs sm:text-sm leading-relaxed font-light mt-3 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-amber-900 font-bold group-hover:underline">
                    <span>Read Full Details</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PART 2: AT THE HEART OF CONNECTIVITY (Connectivity Section with Map) */}
      <section className="py-20 lg:py-28 bg-[#FFFAF4] text-black border-t border-amber-200/60 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="flex items-center justify-center space-x-3">
              <span className="w-8 h-[2px] bg-amber-600" />
              <span className="text-amber-900 font-sans text-xs font-bold tracking-widest uppercase">
                AT THE HEART OF CONNECTIVITY
              </span>
              <span className="w-8 h-[2px] bg-amber-600" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight">
              At the Heart of Connectivity
            </h2>

            <p className="text-black font-sans text-sm sm:text-base font-light leading-relaxed">
              Perfectly located for effortless exploration and unforgettable experiences across Interlaken & Lake Brienz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: 4 Connectivity Cards (One-by-One Vertical Stacking on Mobile) */}
            <div className="lg:col-span-6 space-y-4">
              {connectivityNodes.map((node, index) => (
                <div
                  key={index}
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-amber-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  {/* Left Side: Icon + Title & Distance */}
                  <div className="flex items-start sm:items-center space-x-3.5 sm:space-x-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-100/70 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                      {node.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-serif text-base sm:text-lg font-bold text-black leading-snug">
                        {node.title}
                      </h3>
                      <div className="text-xs text-amber-900 font-sans font-medium">
                        {node.distance}
                      </div>
                    </div>
                  </div>

                  {/* Black Time Badge (Stacked Cleanly Below on Mobile) */}
                  <div className="bg-black text-white text-xs font-bold px-3.5 py-2 rounded-xl shrink-0 shadow-sm flex items-center space-x-2 self-start sm:self-auto">
                    {node.isWalk ? (
                      <svg className="w-3.5 h-3.5 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7a2 2 0 100-4 2 2 0 000 4zM9 14l2-2 4 4m0 0l-2 5m2-5h-4m-1-4l-3 4.5" />
                      </svg>
                    ) : (
                      <svg className="w-3.5 h-3.5 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17a2 2 0 11-4 0 2 2 0 014 0zm12 0a2 2 0 11-4 0 2 2 0 014 0zM5 17h14M3 9l2-4h14l2 4v8H3V9z" />
                      </svg>
                    )}
                    <span>{node.time}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side: Map Image Frame */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-amber-200/80 shadow-xl bg-white p-2">
                <img
                  src={mapImg}
                  alt="ORA Lake View Hotel Connectivity Map"
                  className="w-full h-auto max-h-[460px] object-contain rounded-xl hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PART 3: WHAT YOU CAN DO AT THE HOTEL? (Auto-Scrollable Carousel) */}
      <section className="py-20 lg:py-28 bg-white text-black border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative z-10">
          {/* Section Header with Carousel Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div className="space-y-3 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <span className="w-8 h-[2px] bg-amber-600" />
                <span className="text-amber-900 font-sans text-xs font-bold tracking-widest uppercase">
                  WHAT YOU CAN DO AT THE HOTEL?
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight">
                Discover Activities and Experiences at Hotel Lakeview
              </h2>

              <p className="text-black font-sans text-sm sm:text-base font-light leading-relaxed max-w-2xl">
                From lakeside walks to seasonal swimming and family fun, tailor your stay with memorable experiences.
              </p>
            </div>

            {/* Scrollable Carousel Navigation Arrows */}
            <div className="flex items-center space-x-3 shrink-0">
              <button
                onClick={() => scrollActivities('left')}
                className="w-11 h-11 rounded-xl bg-white hover:bg-[#C68D53] hover:text-white text-black flex items-center justify-center transition-all duration-300 shadow-md border border-amber-200/80 active:scale-95"
                aria-label="Scroll left"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scrollActivities('right')}
                className="w-11 h-11 rounded-xl bg-[#C68D53] hover:bg-black text-white font-bold flex items-center justify-center transition-all duration-300 shadow-md active:scale-95"
                aria-label="Scroll right"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Scrollable Activities Carousel Track (No Scrollbar Line Below) */}
          <div
            ref={activitiesScrollRef}
            onMouseEnter={() => setIsActivitiesPaused(true)}
            onMouseLeave={() => setIsActivitiesPaused(false)}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth py-4 px-1"
          >
            {hotelActivities.map((act) => (
              <div
                key={act.id}
                onClick={() => setSelectedModalItem(act)}
                className="w-[84vw] sm:w-[380px] lg:w-[420px] shrink-0 bg-white rounded-2xl border border-amber-200/80 shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
              >
                {/* High-Res Photo Header */}
                <div className="relative h-56 w-full overflow-hidden bg-black">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-3.5 left-3.5 z-10 bg-[#C68D53] text-white font-bold text-[10px] px-3 py-1 rounded-md uppercase tracking-wider">
                    {act.tag}
                  </div>
                </div>

                {/* Content Body with Line Clamp 2 */}
                <div className="p-6 sm:p-7 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="capitalize font-serif text-xl font-bold text-black tracking-tight group-hover:text-amber-800 transition-colors">
                      {act.title}
                    </h3>
                    <p className="text-black font-sans text-sm leading-relaxed font-light mt-2 line-clamp-2">
                      {act.desc}
                    </p>
                  </div>
                </div>

                {/* Slanted Gold Button CTA (Black Base, 45-Degree Slanted Gold Hover Animation) */}
                <div className="relative overflow-hidden bg-black text-white text-xs font-bold uppercase tracking-widest py-4 px-6 flex items-center justify-between group/btn">
                  <span className="absolute inset-0 bg-[#C68D53] -skew-x-[45deg] scale-x-0 group-hover/btn:scale-x-[1.8] transition-transform duration-500 ease-out origin-center z-0" />
                  <span className="relative z-10 font-sans">EXPERIENCE THIS</span>
                  <svg
                    className="w-4 h-4 text-white relative z-10 group-hover/btn:translate-x-1.5 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Detail Modal Popup Overlay */}
      {selectedModalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
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
                className="w-full h-full object-cover"
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
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider bg-black/60 px-3 py-1 rounded-md backdrop-blur-sm">
                  {selectedModalItem.subtitle || selectedModalItem.tag || 'HOTEL ESCAPE'}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2">
                  {selectedModalItem.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-7 space-y-6">
              <p className="text-slate-800 font-sans text-base leading-relaxed font-light">
                {selectedModalItem.desc}
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden bg-black text-white text-xs font-bold uppercase tracking-widest py-3.5 px-7 rounded-xl inline-flex items-center space-x-2 group/modalbtn"
                >
                  <span className="absolute inset-0 bg-[#C68D53] -skew-x-[45deg] scale-x-0 group-hover/modalbtn:scale-x-[1.8] transition-transform duration-500 ease-out origin-center z-0" />
                  <span className="relative z-10 font-sans">BOOK YOUR STAY NOW</span>
                  <span className="relative z-10 group-hover/modalbtn:translate-x-1 transition-transform">→</span>
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
