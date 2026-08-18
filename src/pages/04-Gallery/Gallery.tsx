import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface GalleryItem {
  id: number;
  title: string;
  category: 'rooms' | 'view' | 'dining' | 'facilities';
  image: string;
}

const GALLERY_IMAGES: GalleryItem[] = [
  { id: 1, title: 'Lake Brienz Morning Reflection', category: 'view', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80' },
  { id: 2, title: 'Classic Lakeview Suite', category: 'rooms', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80' },
  { id: 3, title: 'Alpine Dining Deck', category: 'dining', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80' },
  { id: 4, title: 'Fireside Guest Lobby', category: 'facilities', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80' },
  { id: 5, title: 'Majestic King Suite', category: 'rooms', image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80' },
  { id: 6, title: 'Bernese Alps Panorama', category: 'view', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80' },
  { id: 7, title: 'Queens Vista Bath Suite', category: 'rooms', image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80' },
  { id: 8, title: 'Sunset over Lake Brienz', category: 'view', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80' },
  { id: 9, title: 'Swiss Wine & Gourmet', category: 'dining', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80' },
];

export const Gallery: React.FC = () => {
  const { getContent } = useLanguage();
  const galleryContent = getContent('gallery');

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeLightboxImage, setActiveLightboxImage] = useState<GalleryItem | null>(null);

  const categories = galleryContent?.categories || {};

  const filteredImages =
    activeCategory === 'all'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-32 pb-24">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4 mb-12">
        <span className="text-amber-400 font-serif italic text-lg tracking-wider uppercase block">
          Photo Gallery
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-white">
          {galleryContent?.title || 'Visual Journey through ORA Lake View'}
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base">
          {galleryContent?.subtitle}
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-3 mb-12">
        {Object.entries(categories).map(([key, label]: [string, any]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
              activeCategory === key
                ? 'bg-amber-400 text-slate-950 shadow-lg scale-105'
                : 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/10'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Gallery Image Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveLightboxImage(item)}
            className="group cursor-pointer rounded-3xl overflow-hidden bg-slate-900 border border-white/10 relative aspect-[4/3] shadow-2xl"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
              <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
                {item.category}
              </span>
              <h3 className="font-serif text-lg font-medium text-white">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeLightboxImage && (
        <div
          onClick={() => setActiveLightboxImage(null)}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-5xl w-full rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
            <img
              src={activeLightboxImage.image}
              alt={activeLightboxImage.title}
              className="w-full max-h-[80vh] object-contain bg-black"
            />
            <div className="p-4 bg-slate-950 flex items-center justify-between">
              <span className="font-serif text-lg text-white font-medium">
                {activeLightboxImage.title}
              </span>
              <button
                onClick={() => setActiveLightboxImage(null)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-white/20 hover:bg-white/40"
              >
                Close (ESC)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
