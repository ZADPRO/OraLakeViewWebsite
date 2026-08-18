import React, { useState } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { FAQSection } from '../../components/FAQ/FAQSection';

interface GalleryItem {
  id: string;
  title: string;
  category: 'facade' | 'rooms' | 'bar-restaurant' | 'reception';
  categoryLabel: string;
  image: string;
  caption: string;
}

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Categories list matching exact user directive
  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'facade', label: 'Facade' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'bar-restaurant', label: 'Bar & Restaurant' },
    { id: 'reception', label: 'Reception' },
  ];

  // 12 Gallery Items (3 Facade, 3 Rooms, 3 Bar & Restaurant, 3 Reception)
  const galleryItems: GalleryItem[] = [
    // 3 FACADE IMAGES
    {
      id: 'facade-1',
      title: 'Hotel Alpine Exterior Facade',
      category: 'facade',
      categoryLabel: 'Facade',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      caption: 'Hotel Lakeview traditional Swiss chalethotel facade.',
    },
    {
      id: 'facade-2',
      title: 'Lakeside Frontage & Entrance',
      category: 'facade',
      categoryLabel: 'Facade',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      caption: 'Lakefront hotel exterior surrounded by Swiss mountains.',
    },
    {
      id: 'facade-3',
      title: 'Sunset View over Hotel Building',
      category: 'facade',
      categoryLabel: 'Facade',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
      caption: 'Evening illuminated facade against Lake Brienz skyline.',
    },

    // 3 ROOMS IMAGES
    {
      id: 'rooms-1',
      title: 'Deluxe Lakefront Suite Bedroom',
      category: 'rooms',
      categoryLabel: 'Rooms',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      caption: 'Spacious bedroom with king bed and private lake balcony.',
    },
    {
      id: 'rooms-2',
      title: 'Panoramic Balcony & Seating Area',
      category: 'rooms',
      categoryLabel: 'Rooms',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      caption: 'Suite balcony view overlooking turquoise waters of Lake Brienz.',
    },
    {
      id: 'rooms-3',
      title: 'Modern En-Suite Bathroom',
      category: 'rooms',
      categoryLabel: 'Rooms',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
      caption: 'Marble luxury bathroom with rain shower and premium amenities.',
    },

    // 3 BAR & RESTAURANT IMAGES
    {
      id: 'bar-1',
      title: 'Lakeside Dining Terrace & Panorama',
      category: 'bar-restaurant',
      categoryLabel: 'Bar & Restaurant',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      caption: 'Outdoor terrace restaurant with lake and mountain views.',
    },
    {
      id: 'bar-2',
      title: 'Cosy Alpine Lounge & Bar Area',
      category: 'bar-restaurant',
      categoryLabel: 'Bar & Restaurant',
      image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80',
      caption: 'Rustic wooden bar lounge serving Swiss wines and cocktails.',
    },
    {
      id: 'bar-3',
      title: 'Gourmet Swiss Culinary Specialties',
      category: 'bar-restaurant',
      categoryLabel: 'Bar & Restaurant',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      caption: 'Authentic fondue and alpine cuisine served at ORA Lake View.',
    },

    // 3 RECEPTION IMAGES
    {
      id: 'reception-1',
      title: 'Warm Lobby & Guest Reception Desk',
      category: 'reception',
      categoryLabel: 'Reception',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      caption: 'Welcoming timber reception area with 24/7 concierge service.',
    },
    {
      id: 'reception-2',
      title: 'Fireplace Lounge & Welcome Seating',
      category: 'reception',
      categoryLabel: 'Reception',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      caption: 'Cozy lobby fireplace lounge for arriving guests.',
    },
    {
      id: 'reception-3',
      title: 'Concierge Desk & Alpine Tour Info',
      category: 'reception',
      categoryLabel: 'Reception',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
      caption: 'Guest services desk offering alpine excursion assistance.',
    },
  ];

  // Filter items based on selected category tab
  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  // Category Next / Prev navigation helper
  const categoryIds = ['all', 'facade', 'rooms', 'bar-restaurant', 'reception'];
  
  const handleNextCategory = () => {
    const currentIndex = categoryIds.indexOf(activeCategory);
    const nextIndex = (currentIndex + 1) % categoryIds.length;
    setActiveCategory(categoryIds[nextIndex]);
  };

  const handlePrevCategory = () => {
    const currentIndex = categoryIds.indexOf(activeCategory);
    const prevIndex = (currentIndex - 1 + categoryIds.length) % categoryIds.length;
    setActiveCategory(categoryIds[prevIndex]);
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
      {/* HERO BANNER HEADER (Unified Global Typography Standard) */}
      <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-24 bg-[#14161B] text-white overflow-hidden border-b border-amber-400/20">
        <div className="max-w-[1380px] mx-auto px-6 md:px-10 relative z-10 text-center">
          {/* Top Subtitle Badge: Increased font size slightly */}
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="w-8 h-[2px] bg-[#C68D53]" />
            <span className="text-amber-400 font-sans text-xs sm:text-sm font-bold tracking-widest uppercase">
              PHOTO GALLERY & EXPERIENCES
            </span>
            <span className="w-8 h-[2px] bg-[#C68D53]" />
          </div>

          {/* Main Hero Headline: Balanced font size */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
            ORA Lake View Gallery
          </h1>

          {/* Sub-Hero Paragraph: Standardized max-w-2xl description */}
          <p className="max-w-2xl mx-auto font-sans text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Discover the beauty of ORA Lake View Hotel through our curated collections: Facade, Rooms, Bar & Restaurant, and Reception.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER TABS WITH PREV / NEXT NAVIGATION CONTROLS */}
      <section className="py-8 bg-white border-b border-slate-200/80 sticky top-20 z-30 shadow-xs">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Category Filter Buttons */}
            <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3">
              {categories.map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                      isActive
                        ? 'bg-[#C68D53] text-white shadow-md scale-105'
                        : 'bg-[#FFFAF4] text-slate-700 hover:bg-amber-100/70 border border-amber-200/60'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Prev / Next Category Slider Arrows */}
            <div className="flex items-center space-x-2 text-xs font-bold text-slate-700">
              <span className="hidden md:inline uppercase tracking-widest text-[10px] text-amber-900 mr-2">
                SWITCH COLLECTION:
              </span>
              <button
                onClick={handlePrevCategory}
                className="w-9 h-9 rounded-xl bg-[#FFFAF4] border border-amber-200/80 text-black flex items-center justify-center shadow-xs hover:bg-[#C68D53] hover:text-white transition-all active:scale-95"
                aria-label="Previous Category"
              >
                ‹
              </button>
              <button
                onClick={handleNextCategory}
                className="w-9 h-9 rounded-xl bg-[#C68D53] text-white flex items-center justify-center shadow-xs hover:bg-black transition-all active:scale-95"
                aria-label="Next Category"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY GRID SECTION */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FFFAF4]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 space-y-10">
          {/* Active Category Counter Headline */}
          <div className="flex items-center justify-between border-b border-amber-200/60 pb-4">
            <h2 className="font-serif text-2xl font-bold text-black tracking-tight capitalize">
              {activeCategory === 'all'
                ? 'All Photo Collections'
                : categories.find((c) => c.id === activeCategory)?.label}
            </h2>
            <span className="text-xs font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded-md">
              {filteredItems.length} Photos Displayed
            </span>
          </div>

          {/* Grid Layout (Pure Photo Frame Containers without Titles/Descriptions/Click Footers) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActiveLightboxIndex(idx)}
                className="bg-black rounded-3xl overflow-hidden border border-amber-200/80 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer group relative h-72 sm:h-80 w-full"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Category Tag Top-Left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-sans font-extrabold uppercase tracking-widest text-amber-400 bg-black/80 px-3 py-1 rounded-md backdrop-blur-sm border border-white/10">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Subtle Vector Zoom Icon Hint Bottom-Right */}
                <div className="absolute bottom-4 right-4 z-10 w-9 h-9 rounded-full bg-black/85 text-white flex items-center justify-center group-hover:bg-[#C68D53] transition-colors border border-white/20 shadow-md">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            ))}
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

      {/* FAQ SECTION (MOVED TO GALLERY & ABOUT PAGE AS REQUESTED) */}
      <FAQSection />

      {/* FOOTER COMPONENT */}
      <Footer />
    </div>
  );
};

export default Gallery;
