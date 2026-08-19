import React, { useState, useRef } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { FAQSection } from '../../components/FAQ/FAQSection';

// Hero Banner Background
import bannerBg from '../../assets/Banners/Banners.jpg';

// Exact Local Gallery Images Imports from src/assets/gallery/
import facade1 from '../../assets/gallery/Facade1.jpg';
import facade2 from '../../assets/gallery/Facade2.jpg';
import facade3 from '../../assets/gallery/Facade3.jpg';

import rooms1 from '../../assets/gallery/Rooms1.jpg';
import rooms2 from '../../assets/gallery/Rooms2.jpg';
import rooms3 from '../../assets/gallery/Rooms3.jpg';

import bar1 from '../../assets/gallery/Bar1.jpg';
import bar2 from '../../assets/gallery/Bar2.jpg';
import bar3 from '../../assets/gallery/Bar3.jpg';

import reception1 from '../../assets/gallery/Reception1.jpg';
import reception2 from '../../assets/gallery/Reception2.jpg';
import reception3 from '../../assets/gallery/Reception3.jpeg';

import img1 from '../../assets/gallery/1.jpg';
import img13 from '../../assets/gallery/13.jpg';
import img14 from '../../assets/gallery/14.jpg';

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

  // Local Gallery Items mapped from src/assets/gallery/
  const galleryItems: GalleryItem[] = [
    // FACADE IMAGES
    {
      id: 'facade-1',
      title: 'Swiss Chalet Facade & Panoramic Deck',
      category: 'facade',
      categoryLabel: 'Facade',
      image: facade1,
      caption: 'Traditional Swiss chalet exterior surrounded by the serene waters of Lake Brienz.',
    },
    {
      id: 'facade-2',
      title: 'Lakeside Frontage & Entrance Drive',
      category: 'facade',
      categoryLabel: 'Facade',
      image: facade2,
      caption: 'Scenic entrance and lakefront frontage at ORA Lake View Hotel.',
    },
    {
      id: 'facade-3',
      title: 'Sunset View Over Lake Brienz',
      category: 'facade',
      categoryLabel: 'Facade',
      image: facade3,
      caption: 'Golden hour sunset casting tranquil hues across the hotel facade.',
    },
    {
      id: 'facade-4',
      title: 'Alpine Peak Silhouette & Grounds',
      category: 'facade',
      categoryLabel: 'Facade',
      image: img1,
      caption: 'Manicured hotel grounds framed by majestic Bernese Mountain peaks.',
    },

    // ROOMS IMAGES
    {
      id: 'rooms-1',
      title: 'Majestic Lakeview King Bedroom',
      category: 'rooms',
      categoryLabel: 'Rooms',
      image: rooms1,
      caption: 'Spacious king bedroom with floor-to-ceiling panoramic glass windows.',
    },
    {
      id: 'rooms-2',
      title: 'Private Balcony Seating Suite',
      category: 'rooms',
      categoryLabel: 'Rooms',
      image: rooms2,
      caption: 'Private balcony suite offering morning coffee views over Lake Brienz.',
    },
    {
      id: 'rooms-3',
      title: 'Luxury En-Suite Bathroom & Amenities',
      category: 'rooms',
      categoryLabel: 'Rooms',
      image: rooms3,
      caption: 'Modern luxury bathroom with rain shower and premium amenities.',
    },

    // BAR & RESTAURANT IMAGES
    {
      id: 'bar-1',
      title: 'Lakeside Dining Terrace Panorama',
      category: 'bar-restaurant',
      categoryLabel: 'Bar & Restaurant',
      image: bar1,
      caption: 'Open-air lakefront terrace dining paired with Swiss culinary specialties.',
    },
    {
      id: 'bar-2',
      title: 'Rustic Alpine Lounge & Cocktail Bar',
      category: 'bar-restaurant',
      categoryLabel: 'Bar & Restaurant',
      image: bar2,
      caption: 'Cozy bar lounge serving fine Swiss wines, spirits, and artisanal coffee.',
    },
    {
      id: 'bar-3',
      title: 'Authentic Swiss Culinary Delights',
      category: 'bar-restaurant',
      categoryLabel: 'Bar & Restaurant',
      image: bar3,
      caption: 'Gourmet alpine dishes crafted with fresh local Swiss ingredients.',
    },
    {
      id: 'bar-4',
      title: 'Terrace Refreshments & Scenic Vistas',
      category: 'bar-restaurant',
      categoryLabel: 'Bar & Restaurant',
      image: img13,
      caption: 'Refreshing beverages served overlooking Lake Brienz.',
    },

    // RECEPTION IMAGES
    {
      id: 'reception-1',
      title: 'Warm Lobby & Guest Reception Desk',
      category: 'reception',
      categoryLabel: 'Reception',
      image: reception1,
      caption: 'Welcoming timber reception desk providing 24/7 personalized concierge care.',
    },
    {
      id: 'reception-2',
      title: 'Lobby Fireplace Seating & Lounge',
      category: 'reception',
      categoryLabel: 'Reception',
      image: reception2,
      caption: 'Cozy fireplace lounge for relaxing upon arrival at ORA Lake View.',
    },
    {
      id: 'reception-3',
      title: 'Concierge Desk & Tour Information',
      category: 'reception',
      categoryLabel: 'Reception',
      image: reception3,
      caption: 'Guest information counter offering Jungfrau and Interlaken excursion advice.',
    },
    {
      id: 'reception-4',
      title: 'Welcome Hospitality Area',
      category: 'reception',
      categoryLabel: 'Reception',
      image: img14,
      caption: 'Attentive guest welcoming area at ORA Lake View Hotel.',
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
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* HERO BANNER HEADER (60vh Height with Top-Focused Background Image) */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden border-b border-amber-400/20 pt-20">
        {/* Background Banner Image Focused from Top */}
        <div className="absolute inset-0 z-0">
          <img src={bannerBg} alt="ORA Lake View Gallery Banner" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
        </div>

        <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 relative z-10 text-center">
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

      {/* COMPACT CATEGORY FILTER TABS & SWITCH COLLECTIONS BAR (HORIZONTALLY SCROLLABLE ON MOBILE) */}
      <section className="py-2.5 sm:py-3 bg-white border-b border-slate-200/80 sticky top-20 z-30 shadow-xs">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4">
            {/* Horizontally Scrollable Category Filter Buttons on Mobile */}
            <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar scroll-smooth py-1 w-full max-w-full sm:flex-wrap sm:justify-center shrink-0">
              {categories.map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleSelectCategory(tab.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider whitespace-nowrap shrink-0 transition-all duration-300 ${
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

      {/* DYNAMIC GALLERY GRID WITH LUXURY ROTATION & SHEEN EFFECTS */}
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

          {/* Responsive 3-Column Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveLightboxIndex(idx)}
                  style={{ animationDelay: `${idx * 70}ms` }}
                  className={`bg-black rounded-3xl overflow-hidden border-2 border-amber-200/70 shadow-lg hover:shadow-[0_25px_60px_rgba(198,141,83,0.35)] hover:border-amber-400 transition-all duration-500 cursor-pointer group relative w-full transform hover:rotate-0 hover:scale-[1.03] hover:z-20 ${
                    isEven ? 'collage-tilt-left' : 'collage-tilt-right'
                  } h-72 sm:h-80 lg:h-84 animate-collage-card`}
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
