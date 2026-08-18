import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const BOOKING_URL =
  'https://direct-book.com/properties/lakeviewhotelrestaurant?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=CHF';

export const AttractionsSection: React.FC = () => {
  const { getContent } = useLanguage();
  const [activeTab, setActiveTab] = useState<'attractions' | 'activities'>('attractions');

  // Verified Nearby Natural Wonders around ORA Lake View (Niederried bei Interlaken)
  const nearbyAttractions = [
    {
      id: 'lake-brienz',
      title: 'Lake Brienz Cruises & Water Sports',
      distance: 'DIRECT LAKEFRONT ACCESS',
      desc: 'Crystal-clear turquoise waters perfect for scenic boat cruises, kayaking, stand-up paddleboarding, and romantic waterfront walks right at our doorstep.',
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'interlaken',
      title: 'Interlaken City Centre & Höhematte',
      distance: '7 KM • 5 MINS BY TRAIN',
      desc: 'The adventure capital of Europe featuring luxury shopping, paragliding landing lawns, traditional cafes, and vibrant Swiss cultural events.',
      image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'giessbach',
      title: 'Giessbach Waterfalls & Historic Funicular',
      distance: '12 KM • 15 MINS BOAT/CAR',
      desc: 'Roaring 14-stage waterfalls cascading directly into Lake Brienz, accessible via Europe’s oldest historic funicular railway.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'harder-kulm',
      title: 'Harder Kulm – Top of Interlaken',
      distance: '8 KM • 10 MINS FUNICULAR',
      desc: 'Panoramic glass viewing platform 1,322 meters above sea level offering breathtaking views of Eiger, Mönch, Jungfrau, and Lake Brienz.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'schynige',
      title: 'Schynige Platte Alpine Botanical Garden',
      distance: '15 KM • COGWHEEL TRAIN',
      desc: 'Nostalgic cogwheel train ride through lush alpine pastures leading to 650+ species of native Swiss mountain wildflowers.',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'jungfraujoch',
      title: 'Jungfraujoch – Top of Europe',
      distance: 'DAY TRIP FROM INTERLAKEN',
      desc: 'Europe’s highest railway station at 3,454m, featuring the Sphinx Observatory, Ice Palace, and endless Aletsch Glacier panoramas.',
      image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80',
    },
  ];

  // Verified Experiences & Activities at Hotel Lake View
  const hotelActivities = [
    {
      id: 'balcony-coffee',
      title: 'Lakefront Sunrise & Balcony Relaxation',
      category: 'RELAXATION',
      desc: 'Unwind on your private balcony with fresh espresso as morning alpine mist lifts over the turquoise waters of Lake Brienz.',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'dining-terrace',
      title: 'Sunset Terrace Dining & Gastronomy',
      category: 'GASTRONOMY',
      desc: 'Savor authentic Swiss gastronomy, regional mountain specialties, and refreshing drinks on our scenic waterfront dining deck.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'pet-walks',
      title: 'Pet-Friendly Alpine Trail Walks',
      category: 'OUTDOOR',
      desc: 'Explore peaceful lakefront walking paths along the Niederried shoreline with your four-legged companion.',
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'lounge-games',
      title: 'Fireside Lounge & Board Games',
      category: 'LEISURE',
      desc: 'Gather with loved ones in our warm guest lounge for books, games, and cozy Swiss hospitality conversations.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'biking',
      title: 'Lakefront Cycling & Scenic E-Biking',
      category: 'ADVENTURE',
      desc: 'Ride along paved lakefront bike paths connecting Niederried directly to Interlaken and Brienz village.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'common-kitchen',
      title: 'Guest Kitchenette & Light Meal Prep',
      category: 'CONVENIENCE',
      desc: 'Enjoy full convenience with our common guest kitchen equipped for quick bites, warm tea, and family snacks.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="select-none">
      {/* PART 1: Nearby Attractions (Explore Nearby Natural Wonders) */}
      <section className="py-20 lg:py-28 bg-white text-black border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative z-10">
          {/* Centered Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            {/* Tagline Line Badge */}
            <div className="flex items-center justify-center space-x-3">
              <span className="w-8 h-[2px] bg-amber-600" />
              <span className="text-amber-900 font-sans text-xs font-bold tracking-widest uppercase">
                NEARBY ATTRACTIONS
              </span>
              <span className="w-8 h-[2px] bg-amber-600" />
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight">
              Explore Nearby Natural Wonders
            </h2>

            {/* Sub-heading Paragraph */}
            <p className="text-black font-sans text-sm sm:text-base font-light leading-relaxed">
              Nestled on the turquoise waters of Lake Brienz in Niederried, ORA Lake View provides the ultimate base to explore Switzerland’s most breathtaking mountains, waterfalls, and alpine railways.
            </p>
          </div>

          {/* Attractions 6-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {nearbyAttractions.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden border border-slate-200/90 flex flex-col justify-between group hover:border-amber-300 transition-all duration-300"
              >
                {/* Attraction Image Frame */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Distance / Location Tag */}
                  <div className="absolute top-3.5 left-3.5 z-10 bg-black/85 backdrop-blur-md text-amber-400 font-bold text-[10px] sm:text-xs px-3 py-1 rounded-md border border-white/10 uppercase tracking-wider">
                    {item.distance}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-black tracking-tight group-hover:text-amber-800 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-black font-sans text-xs sm:text-sm leading-relaxed font-light mt-2">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-amber-900 font-medium">
                    <span>Explore Wonder</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PART 2: Hotel Activities (What You Can Do at the Hotel?) */}
      <section className="py-20 lg:py-28 bg-[#FFFAF4] text-black border-t border-amber-200/60 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative z-10">
          {/* Centered Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            {/* Tagline Line Badge */}
            <div className="flex items-center justify-center space-x-3">
              <span className="w-8 h-[2px] bg-amber-600" />
              <span className="text-amber-900 font-sans text-xs font-bold tracking-widest uppercase">
                WHAT YOU CAN DO AT THE HOTEL?
              </span>
              <span className="w-8 h-[2px] bg-amber-600" />
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight">
              Discover Activities and Experiences at Hotel Lake View
            </h2>

            {/* Sub-heading Paragraph */}
            <p className="text-black font-sans text-sm sm:text-base font-light leading-relaxed">
              Whether you crave quiet lakeside moments, fireside board games, or scenic e-bike rides along Lake Brienz, your stay with us offers experiences designed for memories.
            </p>
          </div>

          {/* Hotel Activities 6-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {hotelActivities.map((act) => (
              <div
                key={act.id}
                className="bg-white rounded-lg overflow-hidden border border-amber-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Activity Image Frame */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-black">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-3.5 left-3.5 z-10 bg-[#C68D53] text-white font-bold text-[10px] px-3 py-1 rounded-md uppercase tracking-wider">
                    {act.category}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-black tracking-tight group-hover:text-amber-800 transition-colors">
                      {act.title}
                    </h3>
                    <p className="text-black font-sans text-xs sm:text-sm leading-relaxed font-light mt-2">
                      {act.desc}
                    </p>
                  </div>
                </div>

                {/* Gramentheme Restin 45-Degree Slanted Center-Reveal Gold Button */}
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden bg-black text-white text-xs font-bold uppercase tracking-widest py-3.5 px-5 flex items-center justify-between transition-colors duration-300 rounded-b-lg group/btn"
                >
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
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AttractionsSection;
