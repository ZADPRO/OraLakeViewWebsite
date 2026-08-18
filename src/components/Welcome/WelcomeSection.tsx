import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import hotelMainImage from '../../assets/images/Landing Page/4E1A7684_1.jpg';

export const WelcomeSection: React.FC = () => {
  const { getContent } = useLanguage();
  const welcomeContent = getContent('welcome');

  return (
    <section className="relative py-16 lg:py-24 bg-[#FFFAF4] text-black overflow-hidden border-t border-amber-200/50">
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Concise Hospitality Welcome Message */}
          <div className="lg:col-span-7 space-y-6">
            {/* Subtitle Line Badge (Usual Header Style) */}
            <div className="flex items-center space-x-3">
              <span className="w-8 h-[2px] bg-amber-600" />
              <span className="text-amber-900 font-sans text-xs font-bold tracking-widest uppercase">
                {welcomeContent?.subTitle || 'WELCOME TO ORA LAKEVIEW HOTEL'}
              </span>
            </div>

            {/* Main Title */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-black tracking-tight">
              {welcomeContent?.title || 'Where Alpine Serenity Meets Waterfront Luxury'}
            </h2>

            {/* Verified Body Text */}
            <p className="text-black font-sans text-base sm:text-lg leading-relaxed font-light">
              {welcomeContent?.text1 ||
                'Situated on the turquoise shores of Lake Brienz in Niederried bei Interlaken, ORA Lake View offers a tranquil Swiss sanctuary just 2 minutes walk from Niederried train station and 300 meters from the ferry dock, only 7 km from Interlaken.'}
            </p>

            {/* Clean Quote Text Without Background Box */}
            <div className="border-l-4 border-amber-600 pl-4 py-1 space-y-1">
              <p className="font-serif italic text-black text-base sm:text-lg leading-relaxed">
                {welcomeContent?.quote ||
                  '"Experience an unforgettable Swiss getaway filled with breathtaking lake views, alpine air, and warm hospitality."'}
              </p>
              <div className="text-xs font-bold text-amber-900 tracking-wider uppercase pt-1">
                — ORA Lake View Team
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                to="/rooms"
                className="relative overflow-hidden inline-flex items-center justify-center px-8 py-3.5 text-xs sm:text-sm font-sans font-bold tracking-widest text-white uppercase transition-colors duration-300 rounded-full bg-black shadow-xl group"
              >
                <span className="absolute inset-0 bg-[#C68D53] -skew-x-[45deg] scale-x-0 group-hover:scale-x-[1.8] transition-transform duration-500 ease-out origin-center z-0" />
                <span className="relative z-10">{welcomeContent?.ctaBtn || 'DISCOVER OUR ROOMS'}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Hotel Facade Image Composition with Verified Transit Badge */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Verified Floating Transit Badge */}
            <div className="absolute -top-4 right-4 sm:right-6 z-30 bg-black text-white font-bold px-4 py-2.5 rounded-2xl shadow-xl border border-white/20 flex items-center space-x-3 backdrop-blur-md">
              <div className="w-8 h-8 rounded-xl bg-amber-400 text-black flex items-center justify-center font-bold text-xs">
                2m
              </div>
              <div>
                <div className="text-[9px] uppercase font-extrabold tracking-widest text-amber-400">
                  LOCATION HIGHLIGHT
                </div>
                <div className="text-xs font-bold tracking-wide text-white">
                  170M WALK TO NIEDERRIED STATION
                </div>
              </div>
            </div>

            {/* Main Hotel Photo Frame */}
            <div className="relative rounded-3xl overflow-hidden border border-amber-200/80 shadow-2xl group bg-white">
              <img
                src={hotelMainImage}
                alt="ORA Lake View Hotel & Restaurant"
                className="w-full h-[400px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Verified Bottom Image Overlay Label */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-between shadow-lg">
                <div>
                  <div className="font-serif text-base font-semibold text-black">
                    Hauptstrasse 32, Niederried
                  </div>
                  <div className="text-xs text-amber-900 font-sans font-medium">
                    Bei Interlaken • Lake Brienz
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-wider">
                  Hotel Facade
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
