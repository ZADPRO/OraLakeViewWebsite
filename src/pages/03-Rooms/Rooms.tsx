import React, { useState } from 'react';
import { Footer } from '../../components/Footer/Footer';
import bannerBg from '../../assets/Banners/Banners.jpg';

// Local Room Assets Imports
// 1. Majestic Lakeview King
import majesticImg1 from '../../assets/rooms/Majestic Lakeview King/Img1.png';
import majesticImg2 from '../../assets/rooms/Majestic Lakeview King/7STD4054_1.jpg';
import majesticImg3 from '../../assets/rooms/Majestic Lakeview King/7STD4055_1.jpg';
import majesticImg4 from '../../assets/rooms/Majestic Lakeview King/image (4).jpg';

// 2. Queen's Vista
import queensImg1 from '../../assets/rooms/Queens Vista-40 sq metres/image_1.jpg';
import queensImg2 from '../../assets/rooms/Queens Vista-40 sq metres/4E1A6643 copy_1.jpg';
import queensImg3 from '../../assets/rooms/Queens Vista-40 sq metres/image (6)_1.jpg';
import queensImg4 from '../../assets/rooms/Queens Vista-40 sq metres/image (4) - 1-2.jpg';

// 3. Alpine Retreat
import alpineImg1 from '../../assets/rooms/Alpine Retreat/4E1A7889_1_1.jpg';
import alpineImg2 from '../../assets/rooms/Alpine Retreat/4E1A7101 copy_1.jpg';
import alpineImg3 from '../../assets/rooms/Alpine Retreat/4E1A7893_1.jpg';
import alpineImg4 from '../../assets/rooms/Alpine Retreat/Majestic Room 2_1_1.jpg';
import alpineImg5 from '../../assets/rooms/Alpine Retreat/image (2)_1.png';
import alpineImg6 from '../../assets/rooms/Alpine Retreat/image (4).jpg';

// 4. Lakeview Studio
import studioImg1 from '../../assets/rooms/Lakeview Studio-22 sq metres/4E1A8172_1.jpg';
import studioImg2 from '../../assets/rooms/Lakeview Studio-22 sq metres/LS2_1.jpg';
import studioImg3 from '../../assets/rooms/Lakeview Studio-22 sq metres/LS4_1.jpg';

// 5. Signature Lakeview
import signatureImg1 from '../../assets/rooms/Signature Lakeview/4E1A7872_1.jpg';
import signatureImg2 from '../../assets/rooms/Signature Lakeview/4E1A8160_1_1.jpg';
import signatureImg3 from '../../assets/rooms/Signature Lakeview/4E1A8163_1.jpg';
import signatureImg4 from '../../assets/rooms/Signature Lakeview/image (2)_1.jpg';
import signatureImg5 from '../../assets/rooms/Signature Lakeview/image (4)_1.jpg';

// 6. Disability Lakeview Trio
import disabilityImg1 from '../../assets/rooms/Disability Lakeview Trio-28 sq metres/7STD4003.jpg';
import disabilityImg2 from '../../assets/rooms/Disability Lakeview Trio-28 sq metres/1-1-1-1-1-1.jpg';
import disabilityImg3 from '../../assets/rooms/Disability Lakeview Trio-28 sq metres/image (6).jpg';

// 7. Classic Lakeview
import classicImg1 from '../../assets/rooms/Classic Lakeview-22 sq metres/image.jpg';
import classicImg2 from '../../assets/rooms/Classic Lakeview-22 sq metres/15.jpg';
import classicImg3 from '../../assets/rooms/Classic Lakeview-22 sq metres/image (1).jpg';

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

  // 7 Authentic Room Types mapped to local room assets from src/assets/rooms/
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
      images: [majesticImg1, majesticImg2, majesticImg3, majesticImg4],
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
      images: [queensImg1, queensImg2, queensImg3, queensImg4],
      photoCount: 4,
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
      images: [alpineImg1, alpineImg2, alpineImg3, alpineImg4, alpineImg5, alpineImg6],
      photoCount: 6,
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
      images: [studioImg1, studioImg2, studioImg3],
      photoCount: 3,
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
      images: [signatureImg1, signatureImg2, signatureImg3, signatureImg4, signatureImg5],
      photoCount: 5,
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
      images: [disabilityImg1, disabilityImg2, disabilityImg3],
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
      images: [classicImg1, classicImg2, classicImg3],
      photoCount: 3,
    },
  ];

  return (
    <div className="bg-[#FFFAF4] text-black min-h-screen select-none">
      {/* HERO BANNER HEADER (60vh Height with Top-Focused Background Image) */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden border-b border-amber-400/20 pt-20">
        {/* Background Banner Image Focused from Top */}
        <div className="absolute inset-0 z-0">
          <img src={bannerBg} alt="ORA Lake View Rooms Banner" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
        </div>
        <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 relative z-10 text-center">
          {/* Top Subtitle Badge: Increased font size slightly */}
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="w-8 h-[2px] bg-[#C68D53]" />
            <span className="text-amber-400 font-sans text-xs sm:text-sm font-bold tracking-widest uppercase">
              ACCOMMODATIONS & SUITES
            </span>
            <span className="w-8 h-[2px] bg-[#C68D53]" />
          </div>

          {/* Main Hero Headline: Balanced font size */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
            Find Your Ideal Retreat
          </h1>

          {/* Sub-Hero Paragraph: Standardized max-w-2xl description */}
          <p className="max-w-2xl mx-auto font-sans text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Surrounded by warm wooden accents, soft, ambient lighting, and the serene beauty of the Swiss Alps, evenings at Hotel Lakeview offer the perfect atmosphere for relaxation, comfort, and unforgettable memories.
          </p>
        </div>
      </section>

      {/* ROOMS LIST SECTION */}
      <section className="py-12 sm:py-20 lg:py-28 bg-[#FFFAF4]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 space-y-10 sm:space-y-16">
          {roomsList.map((room, roomIdx) => {
            const currentImgIndex = activeImageIndexes[room.id] || 0;
            return (
              <div
                key={room.id}
                className="bg-white rounded-3xl overflow-hidden border border-amber-200/80 shadow-md hover:shadow-xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                {/* Left Side: Fixed Height & Width Image Container */}
                <div
                  className={`lg:col-span-6 relative bg-slate-950 w-full h-[280px] sm:h-[440px] lg:h-[460px] overflow-hidden ${
                    roomIdx % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <img
                    src={room.images[currentImgIndex]}
                    alt={room.title}
                    className="w-full h-full object-cover object-center transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

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
                <div className={`lg:col-span-6 p-5 sm:p-8 lg:p-10 flex flex-col justify-between space-y-4 sm:space-y-6 ${roomIdx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-black tracking-tight">
                        {room.title}
                      </h2>
                      <span className="text-xs font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded-md">
                        {room.size}
                      </span>
                    </div>

                    {/* Room Description */}
                    <p className="text-slate-800 font-sans text-sm sm:text-base font-normal leading-relaxed">
                      {room.desc}
                    </p>

                    {/* Checked Amenities List (Hidden on mobile < sm, visible on desktop) */}
                    <div className="hidden sm:block pt-2">
                      <p className="text-xs font-bold text-black uppercase tracking-wider mb-3">
                        Room Features & Amenities:
                      </p>
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

                  {/* Actions Bar (Check Availability & View Details Side-by-Side Clean Text Links) */}
                  <div className="pt-4 sm:pt-6 border-t border-slate-100 flex items-center justify-between gap-3 font-sans">
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-black hover:text-[#C68D53] uppercase tracking-wider transition-colors inline-flex items-center space-x-1.5"
                    >
                      <span>CHECK AVAILABILITY</span>
                      <span>→</span>
                    </a>

                    <button
                      onClick={() => setSelectedRoomModal(room)}
                      className="text-xs font-bold text-[#C68D53] hover:text-black uppercase tracking-wider transition-colors inline-flex items-center space-x-1.5 text-right"
                    >
                      <span>VIEW DETAILS & PHOTOS</span>
                      <span>→</span>
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
            className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full border border-amber-200 shadow-2xl relative text-black max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header with Fixed Height & Object-Cover */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
              <img
                src={selectedRoomModal.images[0]}
                alt={selectedRoomModal.title}
                className="w-full h-full object-cover object-center"
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
                <p className="text-xs font-bold text-black uppercase tracking-wider mb-3">
                  Included Amenities:
                </p>
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
