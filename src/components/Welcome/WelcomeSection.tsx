import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import hotelMainImage from '../../assets/images/Landing Page/4E1A7684_1.jpg';

export const WelcomeSection: React.FC = () => {
  const { getContent } = useLanguage();
  const welcomeContent = getContent('welcome');

  return (
    <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden border-t border-white/10">
      {/* Background ambient lighting blur */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Hospitality Welcome Story */}
          <div className="lg:col-span-7 space-y-6">
            {/* Subtitle Tagline */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-400 font-sans text-xs font-bold tracking-widest uppercase">
                {welcomeContent?.subTitle || 'WELCOME TO ORA LAKEVIEW HOTEL'}
              </span>
            </div>

            {/* Main Title (Serif Typography) */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-white tracking-tight">
              {welcomeContent?.title || 'Where Alpine Serenity Meets Waterfront Luxury'}
            </h2>

            {/* Body Paragraph 1 */}
            <p className="text-white/85 font-sans text-base sm:text-lg leading-relaxed font-light">
              {welcomeContent?.text1 ||
                'When crisp alpine air refreshes the soul and shimmering turquoise waters invite you to slow down, ORA Lake View welcomes you to a place where Swiss warmth, style, and peace converge in the heart of Brienz.'}
            </p>

            {/* Body Paragraph 2 */}
            <p className="text-white/75 font-sans text-base leading-relaxed font-light">
              {welcomeContent?.text2 ||
                'Perfectly situated on the emerald shores of Lake Brienz surrounded by the majestic Bernese Alps, our hotel is your ideal sanctuary for scenic lakefront breaks, mountain adventures, and peaceful escapes. Just 3 minutes walk from Brienz train station and boat docks, everything you need is at your doorstep.'}
            </p>

            {/* Reference Quote Highlight Box (Sherlock Holmes Inspired Design) */}
            <div className="border-l-4 border-amber-400 bg-white/5 backdrop-blur-md p-5 sm:p-6 rounded-r-2xl shadow-xl space-y-2">
              <p className="font-serif italic text-amber-100/90 text-sm sm:text-base leading-relaxed">
                {welcomeContent?.quote ||
                  '"If you are looking for an unforgettable Swiss getaway filled with breathtaking panoramas, luxury comfort, and heartfelt hospitality, you are in the right place. Let us craft a serene stay for you."'}
              </p>
              <div className="text-xs font-bold text-amber-400 tracking-wider uppercase pt-1">
                — ORA Lake View Host Team
              </div>
            </div>

            {/* Key Highlights Checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {(welcomeContent?.highlights || []).map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1 backdrop-blur-md hover:border-amber-400/50 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                    <h4 className="font-sans text-xs font-bold text-white uppercase tracking-wider truncate">
                      {item.title}
                    </h4>
                  </div>
                  <p className="font-sans text-[11px] text-white/60 font-light line-clamp-2 pl-7">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                to="/rooms"
                className="inline-flex items-center justify-center px-8 py-4 text-xs sm:text-sm font-sans font-bold tracking-widest text-slate-950 uppercase transition-all duration-300 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 hover:from-amber-300 hover:to-amber-100 shadow-2xl hover:shadow-amber-400/30 hover:scale-105 active:scale-95"
              >
                {welcomeContent?.ctaBtn || 'DISCOVER OUR ROOMS'}
              </Link>
            </div>
          </div>

          {/* Right Column: Staggered Dual Image Composition & Transit Badge */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Top Floating Badge (Sherlock Holmes Reference "3 mins Walk to Gondola/Station") */}
            <div className="absolute -top-4 sm:-top-6 right-4 sm:right-8 z-30 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold px-5 py-3 rounded-2xl shadow-2xl border border-amber-300/50 flex items-center space-x-3 backdrop-blur-md animate-bounce-subtle">
              <div className="w-9 h-9 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center font-bold text-sm">
                3m
              </div>
              <div>
                <div className="text-[10px] uppercase font-extrabold tracking-widest text-slate-900">
                  LOCATION HIGHLIGHT
                </div>
                <div className="text-xs font-extrabold tracking-wide text-slate-950">
                  WALK TO BRIENZ STATION & DOCKS
                </div>
              </div>
            </div>

            {/* Main Hotel Photo Frame */}
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl group">
              <img
                src={hotelMainImage}
                alt="ORA Lake View Hotel & Restaurant"
                className="w-full h-[450px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Bottom Image Overlay Label */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/50 backdrop-blur-md border border-white/15 flex items-center justify-between">
                <div>
                  <div className="font-serif text-lg font-medium text-white">
                    Hauptstrasse 44, Brienz
                  </div>
                  <div className="text-xs text-amber-400 font-sans font-light">
                    Bernese Oberland • Lake Brienz
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-wider">
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
