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
      caption: 'Placeholder for Hotel Lakeview traditional Swiss chalethotel facade.',
    },
    {
      id: 'facade-2',
      title: 'Lakeside Frontage & Entrance',
      category: 'facade',
      categoryLabel: 'Facade',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      caption: 'Placeholder for lakefront hotel exterior surrounded by Swiss mountains.',
    },
    {
      id: 'facade-3',
      title: 'Sunset View over Hotel Building',
      category: 'facade',
      categoryLabel: 'Facade',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
      caption: 'Placeholder for evening illuminated facade against Lake Brienz skyline.',
    },

    // 3 ROOMS IMAGES
    {
      id: 'rooms-1',
      title: 'Deluxe Lakefront Suite Bedroom',
      category: 'rooms',
      categoryLabel: 'Rooms',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      caption: 'Placeholder for spacious bedroom with king bed and private lake balcony.',
    },
    {
      id: 'rooms-2',
      title: 'Panoramic Balcony & Seating Area',
      category: 'rooms',
      categoryLabel: 'Rooms',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      caption: 'Placeholder for suite balcony view overlooking turquoise waters of Lake Brienz.',
    },
    {
      id: 'rooms-3',
      title: 'Modern En-Suite Bathroom',
      category: 'rooms',
      categoryLabel: 'Rooms',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
      caption: 'Placeholder for marble luxury bathroom with rain shower and premium amenities.',
    },

    // 3 BAR & RESTAURANT IMAGES
    {
      id: 'dining-1',
      title: 'Lakeside Dining Terrace',
      category: 'bar-restaurant',
      categoryLabel: 'Bar & Restaurant',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      caption: 'Placeholder for outdoor dining terrace with panoramic mountain views.',
    },
    {
      id: 'dining-2',
      title: 'Hotel Lounge Bar & Cocktails',
      category: 'bar-restaurant',
      categoryLabel: 'Bar & Restaurant',
      image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80',
      caption: 'Placeholder for cozy lounge bar offering fine wines, spirits, and warm beverages.',
    },
    {
      id: 'dining-3',
      title: 'Artisan Breakfast & Coffee Spread',
      category: 'bar-restaurant',
      categoryLabel: 'Bar & Restaurant',
      image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=80',
      caption: 'Placeholder for morning breakfast buffet with fresh bakery items and Swiss cheese.',
    },

    // 3 RECEPTION IMAGES
    {
      id: 'reception-1',
      title: 'Welcome Concierge Desk & Lobby',
      category: 'reception',
      categoryLabel: 'Reception',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
      caption: 'Placeholder for warm reception desk and personalized guest check-in area.',
    },
    {
      id: 'reception-2',
      title: 'Luxury Hotel Lobby Seating',
      category: 'reception',
      categoryLabel: 'Reception',
      image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80',
      caption: 'Placeholder for comfortable lobby lounge with fireplace and visitor seating.',
    },
    {
      id: 'reception-3',
      title: 'Information & Excursions Desk',
      category: 'reception',
      categoryLabel: 'Reception',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      caption: 'Placeholder for guest services desk offering alpine excursion assistance.',
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
      {/* HERO BANNER HEADER (Extends behind fixed header for 100% clear navigation) */}
      <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-24 bg-[#14161B] text-white overflow-hidden border-b border-amber-400/20">
        <div className="max-w-[1380px] mx-auto px-6 md:px-10 relative z-10 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="w-8 h-[2px] bg-[#C68D53]" />
            <span className="text-amber-400 font-sans text-xs font-bold tracking-widest uppercase">
              PHOTO GALLERY & EXPERIENCES
            </span>
            <span className="w-8 h-[2px] bg-[#C68D53]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            ORA Lake View Gallery
          </h1>

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

            {/* Next / Prev Section Navigation Buttons */}
            <div className="flex items-center space-x-2 shrink-0">
              <button
                onClick={handlePrevCategory}
                className="px-4 py-2 rounded-xl bg-white border border-amber-200/80 hover:bg-[#C68D53] hover:text-white text-black font-bold text-xs transition-colors flex items-center space-x-1.5 shadow-sm active:scale-95"
              >
                <span>‹</span>
                <span>PREV SECTION</span>
              </button>

              <button
                onClick={handleNextCategory}
                className="px-4 py-2 rounded-xl bg-[#C68D53] hover:bg-black text-white font-bold text-xs transition-colors flex items-center space-x-1.5 shadow-sm active:scale-95"
              >
                <span>NEXT SECTION</span>
                <span>›</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PHOTO GRID (12 IMAGES TOTAL - 3 PER CATEGORY) */}
      <section className="py-16 sm:py-24 bg-[#FFFAF4]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 space-y-8">
          <div className="flex items-center justify-between border-b border-amber-200/60 pb-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-black capitalize">
              {activeCategory === 'all'
                ? 'All Gallery Photos (12)'
                : `${categories.find((c) => c.id === activeCategory)?.label} Collection (${filteredItems.length})`}
            </h2>
            <span className="text-xs font-bold text-amber-900 uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-md">
              PLACEHOLDER MODE (READY FOR REPLACEMENT)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setActiveLightboxIndex(index)}
                className="bg-white rounded-3xl overflow-hidden border border-amber-200/80 shadow-md hover:shadow-2xl transition-all duration-500 group cursor-pointer flex flex-col justify-between"
              >
                {/* Photo Frame */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] font-sans font-extrabold uppercase tracking-widest text-amber-400 bg-black/80 px-3 py-1 rounded-md backdrop-blur-sm border border-white/10">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Hover Lightbox Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="w-14 h-14 rounded-full bg-[#C68D53] text-white flex items-center justify-center shadow-xl scale-90 group-hover:scale-100 transition-transform">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-2">
                  <h3 className="font-serif text-xl font-bold text-black tracking-tight group-hover:text-amber-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-black font-sans text-xs sm:text-sm font-light leading-relaxed line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX MODAL VIEWER */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setActiveLightboxIndex(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full border border-amber-200 shadow-2xl relative text-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-4 right-4 z-30 w-11 h-11 rounded-full bg-black/80 hover:bg-[#C68D53] text-white flex items-center justify-center transition-colors font-bold border border-white/20 shadow-lg"
              aria-label="Close photo"
            >
              ✕
            </button>

            {/* Prev Arrow */}
            <button
              onClick={handlePrevLightbox}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/70 hover:bg-[#C68D53] text-white flex items-center justify-center transition-colors shadow-lg active:scale-95 border border-white/20 font-bold"
              aria-label="Previous photo"
            >
              ‹
            </button>

            {/* Next Arrow */}
            <button
              onClick={handleNextLightbox}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/70 hover:bg-[#C68D53] text-white flex items-center justify-center transition-colors shadow-lg active:scale-95 border border-white/20 font-bold"
              aria-label="Next photo"
            >
              ›
            </button>

            {/* Photo Container */}
            <div className="relative h-[380px] sm:h-[500px] w-full bg-black">
              <img
                src={filteredItems[activeLightboxIndex].image}
                alt={filteredItems[activeLightboxIndex].title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Lightbox Footer */}
            <div className="p-6 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-sans font-extrabold uppercase tracking-widest text-amber-900 bg-amber-100 px-3 py-1 rounded-md">
                  {filteredItems[activeLightboxIndex].categoryLabel}
                </span>
                <h3 className="font-serif text-2xl font-bold text-black tracking-tight mt-2">
                  {filteredItems[activeLightboxIndex].title}
                </h3>
                <p className="text-black font-sans text-sm font-light mt-1">
                  {filteredItems[activeLightboxIndex].caption}
                </p>
              </div>

              <div className="text-xs font-bold text-amber-900 tracking-widest uppercase shrink-0">
                {activeLightboxIndex + 1} / {filteredItems.length}
              </div>
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
