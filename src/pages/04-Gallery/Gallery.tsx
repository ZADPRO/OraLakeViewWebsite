import React, { useState, useRef } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { FAQSection } from '../../components/FAQ/FAQSection';

interface GalleryItem {
  id: string;
  title: string;
  category: 'facade' | 'rooms' | 'bar-restaurant' | 'reception';
  categoryLabel: string;
  image: string;
  caption: string;
  heightClass?: string;
}

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const galleryGridRef = useRef<HTMLDivElement>(null);

  // Smooth scroll helper to focus on top of gallery grid on any filter or slider action
  const scrollToGridTop = () => {
    if (galleryGridRef.current) {
      const yOffset = -100;
      const element = galleryGridRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Categories list matching exact user directive
  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'facade', label: 'Facade' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'bar-restaurant', label: 'Bar & Restaurant' },
    { id: 'reception', label: 'Reception' },
  ];

  // 12 Gallery Items with varied Collage Height Classes for dynamic Masonry layout
  const galleryItems: GalleryItem[] = [
    // 3 FACADE IMAGES
    {
      id: 'facade-1',
      title: 'Hotel Alpine Exterior Facade',
      category: 'facade',
      categoryLabel: 'Facade',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      caption: 'Hotel Lakeview traditional Swiss chalethotel facade.',
      heightClass: 'h-80 sm:h-[440px]',
    },
    {
      id: 'facade-2',
      title: 'Lakeside Frontage & Entrance',
      category: 'facade',
      categoryLabel: 'Facade',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      caption: 'Lakefront hotel exterior surrounded by Swiss mountains.',
      heightClass: 'h-64 sm:h-[300px]',
    },
    {
      id: 'facade-3',
      title: 'Sunset View over Hotel Building',
      category: 'facade',
      categoryLabel: 'Facade',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
      caption: 'Evening illuminated facade against Lake Brienz skyline.',
      heightClass: 'h-72 sm:h-[360px]',
    },

    // 3 ROOMS IMAGES
    {
      id: 'rooms-1',
      title: 'Deluxe Lakefront Suite Bedroom',
      category: 'rooms',
      categoryLabel: 'Rooms',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      caption: 'Spacious bedroom with king bed and private lake balcony.',
      heightClass: 'h-64 sm:h-[320px]',
    },
    {
      id: 'rooms-2',
      title: 'Panoramic Balcony & Seating Area',
      category: 'rooms',
      categoryLabel: 'Rooms',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      caption: 'Suite balcony view overlooking turquoise waters of Lake Brienz.',
      heightClass: 'h-96 sm:h-[480px]',
    },
    {
      id: 'rooms-3',
      title: 'Modern En-Suite Bathroom',
      category: 'rooms',
      categoryLabel: 'Rooms',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
      caption: 'Marble luxury bathroom with rain shower and premium amenities.',
      heightClass: 'h-72 sm:h-[350px]',
    },

    // 3 BAR & RESTAURANT IMAGES
    {
      id: 'bar-1',
      title: 'Lakeside Dining Terrace & Panorama',
      category: 'bar-restaurant',
      categoryLabel: 'Bar & Restaurant',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      caption: 'Outdoor terrace restaurant with lake and mountain views.',
      heightClass: 'h-80 sm:h-[420px]',
    },
    {
      id: 'bar-2',
      title: 'Cosy Alpine Lounge & Bar Area',
      category: 'bar-restaurant',
      categoryLabel: 'Bar & Restaurant',
      image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80',
      caption: 'Rustic wooden bar lounge serving Swiss wines and cocktails.',
      heightClass: 'h-64 sm:h-[290px]',
    },
    {
      id: 'bar-3',
      title: 'Gourmet Swiss Culinary Specialties',
      category: 'bar-restaurant',
      categoryLabel: 'Bar & Restaurant',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      caption: 'Authentic fondue and alpine cuisine served at ORA Lake View.',
      heightClass: 'h-96 sm:h-[450px]',
    },

    // 3 RECEPTION IMAGES
    {
      id: 'reception-1',
      title: 'Warm Lobby & Guest Reception Desk',
      category: 'reception',
      categoryLabel: 'Reception',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      caption: 'Welcoming timber reception area with 24/7 concierge service.',
      heightClass: 'h-72 sm:h-[360px]',
    },
    {
      id: 'reception-2',
      title: 'Fireplace Lounge & Welcome Seating',
      category: 'reception',
      categoryLabel: 'Reception',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      caption: 'Cozy lobby fireplace lounge for arriving guests.',
      heightClass: 'h-80 sm:h-[410px]',
    },
    {
      id: 'reception-3',
      title: 'Concierge Desk & Alpine Tour Info',
      category: 'reception',
      categoryLabel: 'Reception',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
      caption: 'Guest services desk offering alpine excursion assistance.',
      heightClass: 'h-64 sm:h-[310px]',
    },
  ];

  // Filter items based on selected category tab
  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const categoryIds = ['all', 'facade', 'rooms', 'bar-restaurant', 'reception'];

  const handleSelectCategory = (catId: string) => {
    setActiveCategory(catId);
    scrollToGridTop();
  };

  const handleNextCategory = () => {
    const currentIndex = categoryIds.indexOf(activeCategory);
    const nextIndex = (currentIndex + 1) % categoryIds.length;
    setActiveCategory(categoryIds[nextIndex]);
    scrollToGridTop();
  };

  const handlePrevCategory = () => {
    const currentIndex = categoryIds.indexOf(activeCategory);
    const prevIndex = (currentIndex - 1 + categoryIds.length) % categoryIds.length;
    setActiveCategory(categoryIds[prevIndex]);
    scrollToGridTop();
  };

  // Lightbox Handlers
  const handlePrevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex(
      activeLightboxIndex === 0 ? filteredItems.length - 1 : activeLightboxIndex - 1
    );
  };

  const handleNextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex(
      activeLightboxIndex === filteredItems.length - 1 ? 0 : activeLightboxIndex + 1
    );
  };

  return (
    <div className="bg-[#FFFAF4] text-black min-h-screen select-none">
      {/* Dynamic Keyframes & Visual Effects CSS */}
      <style>{`
        @keyframes fadeInUpCollage {
          from {
            opacity: 0;
            transform: translateY(35px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-collage-card {
          animation: fadeInUpCollage 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .collage-tilt-left {
          transform: rotate(-1.5deg);
        }
        .collage-tilt-right {
          transform: rotate(1.5deg);
        }
      `}</style>

      {/* HERO BANNER HEADER (Unified Global Typography Standard) */}
      <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-24 bg-[#14161B] text-white overflow-hidden border-b border-amber-400/20">
        <div className="max-w-[1380px] mx-auto px-6 md:px-10 relative z-10 text-center">
          {/* Top Subtitle Badge */}
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="w-8 h-[2px] bg-[#C68D53]" />
            <span className="text-amber-400 font-sans text-xs sm:text-sm font-bold tracking-widest uppercase">
              PHOTO GALLERY & EXPERIENCES
            </span>
            <span className="w-8 h-[2px] bg-[#C68D53]" />
          </div>

          {/* Main Hero Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
            ORA Lake View Gallery
          </h1>

          {/* Sub-Hero Paragraph */}
          <p className="max-w-2xl mx-auto font-sans text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Discover the beauty of ORA Lake View Hotel through our curated collections: Facade, Rooms, Bar & Restaurant, and Reception.
          </p>
        </div>
      </section>

      {/* COMPACT CATEGORY FILTER TABS & SWITCH COLLECTIONS BAR */}
      <section className="py-2.5 sm:py-3 bg-white border-b border-slate-200/80 sticky top-20 z-30 shadow-xs">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4">
            {/* Reduced Height Category Filter Buttons */}
            <div className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2">
              {categories.map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleSelectCategory(tab.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                      isActive
                        ? 'bg-[#C68D53] text-white shadow-xs scale-105'
                        : 'bg-[#FFFAF4] text-slate-700 hover:bg-amber-100/70 border border-amber-200/60'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Compact Switch Collections Arrows */}
            <div className="flex items-center space-x-2 text-xs font-bold text-slate-700">
              <span className="hidden md:inline uppercase tracking-widest text-[10px] text-amber-900 mr-1">
                SWITCH COLLECTION:
              </span>
              <button
                onClick={handlePrevCategory}
                className="w-7 h-7 rounded-md bg-[#FFFAF4] border border-amber-200/80 text-black flex items-center justify-center shadow-xs hover:bg-[#C68D53] hover:text-white transition-all active:scale-95 text-sm"
                aria-label="Previous Category"
              >
                ‹
              </button>
              <button
                onClick={handleNextCategory}
                className="w-7 h-7 rounded-md bg-[#C68D53] text-white flex items-center justify-center shadow-xs hover:bg-black transition-all active:scale-95 text-sm"
                aria-label="Next Category"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC MASONRY COLLAGE GALLERY GRID WITH LUXURY ROTATION & SHEEN EFFECTS */}
      <section ref={galleryGridRef} className="py-12 sm:py-16 lg:py-20 bg-[#FFFAF4] scroll-mt-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 space-y-8">
          {/* Active Category Counter Headline */}
          <div className="flex items-center justify-between border-b border-amber-200/60 pb-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-black tracking-tight capitalize">
              {activeCategory === 'all'
                ? 'All Photo Collections'
                : categories.find((c) => c.id === activeCategory)?.label}
            </h2>
            <span className="text-xs font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded-md">
              {filteredItems.length} Photos Displayed
            </span>
          </div>

          {/* Collage Masonry Columns Layout with Artistic Tilt, Sheen & Glow Effects */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveLightboxIndex(idx)}
                  style={{ animationDelay: `${idx * 70}ms` }}
                  className={`break-inside-avoid bg-black rounded-3xl overflow-hidden border-2 border-amber-200/70 shadow-lg hover:shadow-[0_25px_60px_rgba(198,141,83,0.35)] hover:border-amber-400 transition-all duration-500 cursor-pointer group relative w-full transform hover:rotate-0 hover:scale-[1.03] hover:z-20 ${
                    isEven ? 'collage-tilt-left' : 'collage-tilt-right'
                  } ${item.heightClass || 'h-72 sm:h-80'} animate-collage-card`}
                >
                  {/* Photo Asset with High-Res Hover Zoom */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                  />

                  {/* Ambient Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

                  {/* 45-Degree Shimmer Light Sheen Sweep Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                  {/* Floating Category Badge Top-Left */}
                  <div className="absolute top-4 left-4 z-10 transform group-hover:translate-y-0.5 transition-transform duration-300">
                    <span className="text-[10px] font-sans font-extrabold uppercase tracking-widest text-amber-400 bg-black/85 px-3.5 py-1.5 rounded-lg backdrop-blur-md border border-amber-400/30 shadow-md">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Floating Vector Zoom Icon Hint Bottom-Right */}
                  <div className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full bg-black/85 text-white flex items-center justify-center group-hover:bg-[#C68D53] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border border-white/30 shadow-xl">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL OVERLAY */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setActiveLightboxIndex(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full border border-amber-200 shadow-2xl relative text-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Photo Frame */}
            <div className="relative h-[400px] sm:h-[500px] w-full overflow-hidden bg-black">
              <img
                src={filteredItems[activeLightboxIndex].image}
                alt={filteredItems[activeLightboxIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setActiveLightboxIndex(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-[#C68D53] text-white flex items-center justify-center transition-colors font-bold border border-white/20"
                aria-label="Close Lightbox"
              >
                ✕
              </button>

              {/* Left / Right Arrow Controls */}
              <button
                onClick={handlePrevLightbox}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/70 hover:bg-[#C68D53] text-white flex items-center justify-center transition-colors font-bold text-lg border border-white/20"
                aria-label="Previous Photo"
              >
                ‹
              </button>
              <button
                onClick={handleNextLightbox}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/70 hover:bg-[#C68D53] text-white flex items-center justify-center transition-colors font-bold text-lg border border-white/20"
                aria-label="Next Photo"
              >
                ›
              </button>

              {/* Caption Overlay Bottom */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-black/60 px-3 py-1 rounded-md backdrop-blur-sm">
                  {filteredItems[activeLightboxIndex].categoryLabel} ({activeLightboxIndex + 1} of {filteredItems.length})
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight pt-1">
                  {filteredItems[activeLightboxIndex].title}
                </h3>
              </div>
            </div>

            {/* Modal Details Footer */}
            <div className="p-6 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-black font-sans text-xs sm:text-sm font-light">
                {filteredItems[activeLightboxIndex].caption}
              </p>
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider shrink-0">
                ORA LAKE VIEW GALLERY
              </span>
            </div>
          </div>
        </div>
      )}

      {/* FAQ SECTION */}
      <FAQSection />

      {/* FOOTER COMPONENT */}
      <Footer />
    </div>
  );
};

export default Gallery;
