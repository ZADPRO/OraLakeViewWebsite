import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import hotelMainImage from '../../assets/images/Landing Page/4E1A7684_1.jpg';

export const WhoWeAreSection: React.FC = () => {
  const { getContent } = useLanguage();
  const aboutContent = getContent('about');

  return (
    <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden border-t border-white/10">
      {/* Background ambient lighting glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: Image Composition (Alternating Layout: Image Left, Content Right) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            {/* Top Floating Badge */}
            <div className="absolute -top-5 left-4 sm:left-8 z-30 bg-slate-900/90 text-white font-bold px-4 py-2.5 rounded-2xl shadow-2xl border border-white/20 flex items-center space-x-3 backdrop-blur-md">
              <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-xs">
                100%
              </div>
              <div>
                <div className="text-[9px] uppercase font-extrabold tracking-widest text-amber-400">
                  PANORAMIC VISTA
                </div>
                <div className="text-xs font-bold tracking-wide text-white">
                  LAKE BRIENZ & SWISS ALPS
                </div>
              </div>
            </div>

            {/* Main Image Frame */}
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl group bg-slate-900">
              <img
                src={hotelMainImage}
                alt="ORA Lake View Hotel & Restaurant Facade"
                className="w-full h-[450px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Bottom Image Overlay Stat Pills */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-amber-400 font-serif text-lg font-bold">2 Mins</div>
                  <div className="text-[10px] text-white/70 font-light">Train Station</div>
                </div>
                <div className="border-x border-white/15">
                  <div className="text-amber-400 font-serif text-lg font-bold">1 Min</div>
                  <div className="text-[10px] text-white/70 font-light">Bus Stop</div>
                </div>
                <div>
                  <div className="text-amber-400 font-serif text-lg font-bold">3 Mins</div>
                  <div className="text-[10px] text-white/70 font-light">Ferry Dock</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Text Content (Alternating Layout: Image Left, Content Right) */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            {/* Subtitle Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-400 font-sans text-xs font-bold tracking-widest uppercase">
                {aboutContent?.badge || 'WHO WE ARE'}
              </span>
            </div>

            {/* Main Section Title */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-white tracking-tight">
              {aboutContent?.title || 'Whispers of Lake Brienz at ORA Lake View'}
            </h2>

            {/* Description Paragraph 1 */}
            <p className="text-white/85 font-sans text-base sm:text-lg leading-relaxed font-light">
              {aboutContent?.description ||
                'Situated on the emerald shores of Lake Brienz in Niederried surrounded by the majestic Bernese Alps, ORA Lake View Hotel offers an unforgettable Swiss retreat. Wake up to serene water reflections, breathe in crisp alpine air, and enjoy seamless access to Interlaken, Grindelwald, and Lauterbrunnen.'}
            </p>

            {/* Story Paragraph 2 */}
            <p className="text-white/70 font-sans text-base leading-relaxed font-light">
              {aboutContent?.storyText ||
                'Crafted with Swiss elegance and contemporary luxury, our hotel combines authentic mountain charm with modern sophistication. Whether you are seeking a peaceful escape or outdoor adventures, ORA Lake View is your home in the heart of Switzerland.'}
            </p>

            {/* 4 Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {(aboutContent?.features || []).map((feat: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1 backdrop-blur-md hover:border-amber-400/50 transition-colors"
                >
                  <div className="flex items-center space-x-2.5">
                    <span className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                    <h4 className="font-sans text-xs font-bold text-white uppercase tracking-wider truncate">
                      {feat.title}
                    </h4>
                  </div>
                  <p className="font-sans text-[11px] text-white/60 font-light pl-8">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                to="/about-us"
                className="inline-flex items-center justify-center px-8 py-4 text-xs sm:text-sm font-sans font-bold tracking-widest text-slate-950 uppercase transition-all duration-300 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 hover:from-amber-300 hover:to-amber-100 shadow-2xl hover:shadow-amber-400/30 hover:scale-105 active:scale-95"
              >
                LEARN MORE ABOUT US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
