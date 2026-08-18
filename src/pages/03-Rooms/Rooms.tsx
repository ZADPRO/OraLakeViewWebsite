import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const BOOKING_URL =
  'https://direct-book.com/properties/lakeviewhotelrestaurant?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=CHF';

export const Rooms: React.FC = () => {
  const { getContent } = useLanguage();
  const roomsContent = getContent('rooms');
  const [selectedRoom, setSelectedRoom] = useState<any>(null);

  const roomsList = roomsContent?.items || [];

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-32 pb-24">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4 mb-16">
        <span className="text-amber-400 font-serif italic text-lg tracking-wider uppercase block">
          Accommodations
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-white">
          {roomsContent?.title || 'Our Signature Accommodations'}
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base">
          {roomsContent?.subtitle}
        </p>
      </div>

      {/* Rooms Showcase List */}
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {roomsList.map((room: any, index: number) => (
          <div
            key={room.id || index}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/80 rounded-3xl overflow-hidden border border-white/10 p-6 md:p-8 hover:border-amber-400/40 transition-all duration-500 shadow-2xl ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image Column */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-amber-300 border border-white/15">
                {room.price}
              </div>
            </div>

            {/* Room Details Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-serif text-white">{room.name}</h2>
                <p className="text-xs md:text-sm text-amber-400 font-medium">{room.view}</p>
              </div>

              <p className="text-xs md:text-sm text-white/70 leading-relaxed">{room.desc}</p>

              {/* Specs Badge Bar */}
              <div className="grid grid-cols-3 gap-3 py-3 border-y border-white/10 text-xs text-white/80">
                <div>
                  <span className="text-white/50 block text-[10px] uppercase tracking-wider">Size</span>
                  <span className="font-semibold text-white">{room.size}</span>
                </div>
                <div>
                  <span className="text-white/50 block text-[10px] uppercase tracking-wider">Guests</span>
                  <span className="font-semibold text-white">{room.guests}</span>
                </div>
                <div>
                  <span className="text-white/50 block text-[10px] uppercase tracking-wider">Bed Type</span>
                  <span className="font-semibold text-white">{room.bed}</span>
                </div>
              </div>

              {/* Amenities Pills */}
              <div className="flex flex-wrap gap-2">
                {room.amenities?.map((amenity: string, aIdx: number) => (
                  <span
                    key={aIdx}
                    className="px-3 py-1 rounded-full text-[11px] font-medium bg-white/5 text-white/80 border border-white/10"
                  >
                    ✓ {amenity}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all shadow-lg hover:scale-105"
                >
                  {roomsContent?.bookBtn || 'Book This Room'}
                </a>

                <button
                  onClick={() => setSelectedRoom(selectedRoom?.id === room.id ? null : room)}
                  className="px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                >
                  {selectedRoom?.id === room.id ? 'Close Specs' : 'View Specs'}
                </button>
              </div>

              {/* Expanded Specs Details */}
              {selectedRoom?.id === room.id && (
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-xs text-white/80 space-y-2 animate-fade-in">
                  <p className="font-semibold text-amber-300">Included Amenities & Services:</p>
                  <ul className="grid grid-cols-2 gap-2 text-white/70">
                    <li>• Free High-Speed Alpine Wi-Fi</li>
                    <li>• Daily Housekeeping Service</li>
                    <li>• En-Suite Luxury Bathroom</li>
                    <li>• Complimentary Mineral Water</li>
                    <li>• Smart Flat Screen TV</li>
                    <li>• Hairdryer & Bath Amenities</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
