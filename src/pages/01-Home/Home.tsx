import React from 'react';
import { Link } from 'react-router-dom';
import { HeroWaterRipple } from '../../components/Hero/HeroWaterRipple';
import { useLanguage } from '../../context/LanguageContext';

const BOOKING_URL =
  'https://direct-book.com/properties/lakeviewhotelrestaurant?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=CHF';

export const Home: React.FC = () => {
  const { getContent } = useLanguage();
  const aboutContent = getContent('about');
  const roomsContent = getContent('rooms');

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Restin-Style Hero with Interactive Water Ripple */}
      <HeroWaterRipple />

      {/* Section 1: Who We Are */}
      <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-amber-400 font-serif italic text-lg tracking-wider uppercase block">
              {aboutContent?.badge || 'Who We Are'}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium leading-tight text-white">
              {aboutContent?.title || 'Whispers of Brienz at the Best Lakeview Hotel'}
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              {aboutContent?.description}
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {aboutContent?.features?.map((feat: any, idx: number) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <h4 className="font-serif text-base text-amber-300 font-medium mb-1">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-white/60 leading-normal">{feat.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center space-x-4">
              <Link
                to="/about-us"
                className="px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-lg hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/15">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
                alt="Lake Brienz View"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>

            {/* Floating Stats Badge */}
            <div className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl space-y-1">
              <span className="text-3xl font-serif font-bold text-amber-400">180°</span>
              <p className="text-xs text-white/80 font-medium">Panoramic Alps & Lake Views</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Signature Rooms Showcase */}
      <section className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-amber-400 font-serif italic text-lg tracking-wider uppercase block">
              Luxury Accommodations
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white">
              {roomsContent?.title || 'Our Signature Accommodations'}
            </h2>
            <p className="text-white/70 text-sm">
              {roomsContent?.subtitle}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomsContent?.items?.slice(0, 3).map((room: any) => (
              <div
                key={room.id}
                className="group bg-slate-900/80 rounded-3xl overflow-hidden border border-white/10 hover:border-amber-400/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-300 border border-white/10">
                    {room.price}
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-medium text-white group-hover:text-amber-300 transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs text-white/60 mt-2 leading-relaxed">
                      {room.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <div className="flex items-center justify-between text-xs text-white/70">
                      <span>📏 {room.size}</span>
                      <span>👥 {room.guests}</span>
                      <span>🛏️ {room.bed}</span>
                    </div>

                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 hover:bg-amber-400 hover:text-slate-950 border border-white/20 hover:border-amber-400 transition-all duration-300"
                    >
                      {roomsContent?.bookBtn || 'Book This Room'}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-6">
            <Link
              to="/rooms"
              className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-amber-400 hover:text-amber-300 transition-colors border-b border-amber-400/50 pb-1"
            >
              <span>Explore All Rooms & Suites</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Call to Action Banner */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-amber-900/40 via-amber-700/20 to-slate-950 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif text-white">
              Ready to Experience the Magic of Lake Brienz?
            </h2>
            <p className="text-white/70 text-sm">
              Book directly with us for guaranteed best rates, complimentary welcome amenities, and flexible cancellation.
            </p>
          </div>
          <div>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full text-xs font-bold tracking-widest uppercase text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:scale-105 transition-all shadow-xl"
            >
              Book Your Alpine Escape
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
