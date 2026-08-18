import React, { useState } from 'react';
import { Footer } from '../../components/Footer/Footer';

const BOOKING_URL =
  'https://direct-book.com/properties/lakeviewhotelrestaurant?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=CHF';

interface RoomType {
  id: string;
  title: string;
  size: string;
  desc: string;
  amenities: string[];
  images: string[];
  photoCount: number;
}

export const Rooms: React.FC = () => {
  const [selectedRoomModal, setSelectedRoomModal] = useState<RoomType | null>(null);
  const [activeImageIndexes, setActiveImageIndexes] = useState<{ [key: string]: number }>({});

  const handleNextPhoto = (roomId: string, totalPhotos: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndexes((prev) => ({
      ...prev,
      [roomId]: ((prev[roomId] || 0) + 1) % totalPhotos,
    }));
  };

  const handlePrevPhoto = (roomId: string, totalPhotos: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndexes((prev) => ({
      ...prev,
      [roomId]: ((prev[roomId] || 0) - 1 + totalPhotos) % totalPhotos,
    }));
  };

  // 7 Authentic Room Types Extracted directly from live content & user prompt
  const roomsList: RoomType[] = [
    {
      id: 'majestic-king',
      title: 'Majestic Lakeview King',
      size: '33 sq metres',
      desc: 'With a sprawling king-size bed and sweeping views of Lake Brienz and the Swiss Alps, this room invites you to unwind and indulge in the luxury of space. Perfect for those who crave a balance of comfort and nature.',
      amenities: [
        'Free wifi',
        'Internal Access to Lakeview facing common terrace',
        'Bathtub for ultimate relaxation',
        '1 king-size bed',
        'Mini Fridge',
        'Flat-screen TV',
      ],
      images: [
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      ],
      photoCount: 4,
    },
    {
      id: 'queens-vista',
      title: "Queen’s Vista",
      size: '40 sq metres',
      desc: 'Treat yourself to a royal stay at Queen’s Vista, where sweeping views of the Swiss Alps and Lake Brienz set the stage for an unforgettable getaway. Designed with elegance and comfort in mind, this room combines traditional Swiss luxury with modern amenities.',
      amenities: [
        'Free wifi',
        'External Common Terrace Access for Lakeview',
        'Bathtub for ultimate relaxation',
        '1 king-size bed',
        'Mini Fridge',
        'Flat-screen TV',
      ],
      images: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      ],
      photoCount: 6,
    },
    {
      id: 'alpine-retreat',
      title: 'Alpine Retreat',
      size: '33 sq metres',
      desc: 'For those who seek peace, privacy, and unmatched mountain beauty, the Alpine Retreat is the ideal choice. After a day of hiking or exploring Interlaken, return to your sanctuary to relax in comfort and style.',
      amenities: [
        'Balcony with stunning alpine views',
        'External Access to Lakeview Facing common terrace',
        'Ensuite Bathroom',
        '1 king-size bed',
        'Mini Fridge',
        'Flat-screen TV',
      ],
      images: [
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      ],
      photoCount: 3,
    },
    {
      id: 'lakeview-studio',
      title: 'Lakeview Studio',
      size: '22 sq metres',
      desc: 'Sleek and stylish, the Lakeview Studio room offers the ideal balance between contemporary design and Swiss natural beauty. Perfect for solo travelers or couples looking for a simple yet luxurious stay.',
      amenities: [
        'Free wifi',
        'Balcony with stunning lake view',
        'Ensuite bathroom',
        'Mini Fridge',
        'Flat-screen TV',
      ],
      images: [
        'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      ],
      photoCount: 5,
    },
    {
      id: 'signature-lakeview',
      title: 'Signature Lakeview',
      size: '28 sq metres',
      desc: 'The Signature Lakeview room epitomizes understated luxury and Swiss charm. With its elegant design and breathtaking views of Lake Brienz, this room is perfect for those who want to experience the finest that ORA Lake View has to offer.',
      amenities: [
        'Free wifi',
        'Balcony with spectacular lake views',
        '03 Single beds & can be attached for Double occupancy as per request',
        'Ensuite bathroom',
        'Mini Fridge',
        'Flat-screen TV',
      ],
      images: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      ],
      photoCount: 3,
    },
    {
      id: 'disability-lakeview-trio',
      title: 'Disability Lakeview Trio',
      size: '28 sq metres',
      desc: 'Perfect for guests seeking extra space, the Disability Lakeview Trio Room offers a warm and stylish stay experience with a thoughtfully designed, versatile layout. The room is also equipped with disability-friendly features and wheelchair accessibility, ensuring comfort and convenience for every guest.',
      amenities: [
        'Free wifi',
        'Balcony with panoramic lake views',
        'Ensuite bathroom with wheelchair accessibility',
        'Mini Fridge',
        'Flat-screen TV',
      ],
      images: [
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      ],
      photoCount: 3,
    },
    {
      id: 'classic-lakeview',
      title: 'Classic Lakeview',
      size: '22 sq metres',
      desc: 'The Classic Lakeview room invites you to experience the timeless beauty of Lake Brienz in a cozy, stylish setting. Designed for those who appreciate the finer things in life, this room is a peaceful haven to recharge.',
      amenities: [
        'Free wifi',
        'Balcony with lake view',
        'Ensuite bathroom',
        'Flat-screen TV',
        '2 beds attached for double occupancy',
      ],
      images: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
      ],
      photoCount: 2,
    },
  ];

  return (
    <div className="bg-[#FFFAF4] text-black min-h-screen select-none">
      {/* HERO BANNER HEADER (Extends behind fixed header for 100% clear navigation) */}
      <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-24 bg-[#14161B] text-white overflow-hidden border-b border-amber-400/20">
        <div className="max-w-[1380px] mx-auto px-6 md:px-10 relative z-10 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="w-8 h-[2px] bg-[#C68D53]" />
            <span className="text-amber-400 font-sans text-xs font-bold tracking-widest uppercase">
              ACCOMMODATIONS & SUITES
            </span>
            <span className="w-8 h-[2px] bg-[#C68D53]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Find Your Ideal Retreat
          </h1>

          <p className="max-w-3xl mx-auto font-sans text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Surrounded by warm wooden accents, soft, ambient lighting, and the serene beauty of the Swiss Alps, evenings at Hotel Lakeview offer the perfect atmosphere for relaxation, comfort, and unforgettable memories.
          </p>
        </div>
      </section>

      {/* ROOMS LIST SECTION */}
      <section className="py-20 lg:py-28 bg-[#FFFAF4]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 space-y-16">
          {roomsList.map((room, roomIdx) => {
            const currentImgIndex = activeImageIndexes[room.id] || 0;
            return (
              <div
                key={room.id}
                className="bg-white rounded-3xl overflow-hidden border border-amber-200/80 shadow-md hover:shadow-xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                {/* Left Side: Photo Carousel Frame with Image Counter */}
                <div className={`lg:col-span-6 relative bg-black min-h-[340px] sm:min-h-[420px] ${roomIdx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={room.images[currentImgIndex]}
                    alt={room.title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Size Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-xs font-sans font-extrabold uppercase tracking-wider text-amber-400 bg-black/80 px-3.5 py-1.5 rounded-lg backdrop-blur-sm border border-white/10">
                      {room.size}
                    </span>
                  </div>

                  {/* Image Counter Badge (1 / 4, 1 / 6, etc.) */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-xs font-sans font-bold text-white bg-black/75 px-3 py-1 rounded-lg backdrop-blur-sm border border-white/20">
                      {currentImgIndex + 1} / {room.photoCount}
                    </span>
                  </div>

                  {/* Carousel Left / Right Arrow Controls */}
                  <div className="absolute bottom-4 right-4 z-10 flex items-center space-x-2">
                    <button
                      onClick={(e) => handlePrevPhoto(room.id, room.photoCount, e)}
                      className="w-10 h-10 rounded-full bg-black/70 hover:bg-[#C68D53] text-white flex items-center justify-center transition-colors shadow-lg active:scale-95 border border-white/20 font-bold"
                      aria-label="Previous photo"
                    >
                      ‹
                    </button>
                    <button
                      onClick={(e) => handleNextPhoto(room.id, room.photoCount, e)}
                      className="w-10 h-10 rounded-full bg-black/70 hover:bg-[#C68D53] text-white flex items-center justify-center transition-colors shadow-lg active:scale-95 border border-white/20 font-bold"
                      aria-label="Next photo"
                    >
                      ›
                    </button>
                  </div>
                </div>

                {/* Right Side: Room Content & Amenities */}
                <div className={`lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6 ${roomIdx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-black tracking-tight">
                        {room.title}
                      </h2>
                      <span className="text-xs font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded-md">
                        {room.size}
                      </span>
                    </div>

                    <p className="text-black font-sans text-sm sm:text-base font-light leading-relaxed">
                      {room.desc}
                    </p>

                    {/* Checked Amenities List */}
                    <div className="pt-2">
                      <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-3">
                        Room Features & Amenities:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {room.amenities.map((amenity, aIdx) => (
                          <div key={aIdx} className="flex items-center space-x-2.5 text-xs font-medium text-slate-800">
                            <div className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center shrink-0 text-[#C68D53]">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="capitalize">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar (Slanted Gold CTA Button) */}
                  <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden bg-black text-white text-xs font-bold uppercase tracking-widest py-3.5 px-7 rounded-xl inline-flex items-center space-x-2 group/book"
                    >
                      <span className="absolute inset-0 bg-[#C68D53] -skew-x-[45deg] scale-x-0 group-hover/book:scale-x-[1.8] transition-transform duration-500 ease-out origin-center z-0" />
                      <span className="relative z-10 font-sans">CHECK AVAILABILITY</span>
                      <span className="relative z-10 group-hover/book:translate-x-1 transition-transform">→</span>
                    </a>

                    <button
                      onClick={() => setSelectedRoomModal(room)}
                      className="text-xs font-bold text-amber-900 hover:text-black uppercase tracking-wider transition-colors"
                    >
                      View Details & Photos →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FULL DETAIL ROOM MODAL POPUP OVERLAY */}
      {selectedRoomModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setSelectedRoomModal(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full border border-amber-200 shadow-2xl relative text-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
              <img
                src={selectedRoomModal.images[0]}
                alt={selectedRoomModal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedRoomModal(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-[#C68D53] text-white flex items-center justify-center transition-colors font-bold border border-white/20"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider bg-black/60 px-3 py-1 rounded-md backdrop-blur-sm">
                  {selectedRoomModal.size}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2">
                  {selectedRoomModal.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-7 space-y-6">
              <p className="text-slate-800 font-sans text-sm sm:text-base leading-relaxed font-light">
                {selectedRoomModal.desc}
              </p>

              <div>
                <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-3">
                  Included Amenities:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedRoomModal.amenities.map((amenity, aIdx) => (
                    <div key={aIdx} className="flex items-center space-x-2 text-xs font-medium text-slate-800">
                      <span className="text-amber-600">✓</span>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden bg-black text-white text-xs font-bold uppercase tracking-widest py-3.5 px-7 rounded-xl inline-flex items-center space-x-2 group/modalbook"
                >
                  <span className="absolute inset-0 bg-[#C68D53] -skew-x-[45deg] scale-x-0 group-hover/modalbook:scale-x-[1.8] transition-transform duration-500 ease-out origin-center z-0" />
                  <span className="relative z-10 font-sans">CHECK AVAILABILITY</span>
                  <span className="relative z-10 group-hover/modalbook:translate-x-1 transition-transform">→</span>
                </a>

                <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                  ORA LAKE VIEW
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER COMPONENT */}
      <Footer />
    </div>
  );
};

export default Rooms;
