import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import hotelMainImage from '../../assets/images/Landing Page/4E1A7684_1.jpg';

export const WhoWeAreSection: React.FC = () => {
  const { getContent } = useLanguage();
  const aboutContent = getContent('about');

  return (
    <section className="relative py-20 lg:py-28 bg-white text-black overflow-hidden border-t border-slate-200">
      {/* Soft warm ambient background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: Text Content (Content at Left) */}
          <div className="lg:col-span-6 space-y-5 order-1 lg:order-1">
            {/* Tagline Line Badge */}
            <div className="flex items-center space-x-3">
              <span className="w-8 h-[2px] bg-amber-600" />
              <span className="text-amber-800 font-sans text-xs font-bold tracking-widest uppercase">
                {aboutContent?.badge || 'HERITAGE & HOSPITALITY'}
              </span>
            </div>

            {/* Main Section Title */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-black tracking-tight pb-2">
              Our Story
            </h2>

            {/* Paragraph 1 */}
            <p className="text-black font-sans text-base leading-relaxed font-light">
              Nested between crystal-clear Lake Brienz and the majestic Bernese Alps, ORA Lake View Hotel has welcomed travelers from around the world for decades. What started as a modest alpine inn has grown into a premier destination for relaxation, nature, and Swiss hospitality.
            </p>

            {/* Paragraph 2 */}
            <p className="text-black font-sans text-base leading-relaxed font-light">
              Our philosophy is simple: provide an authentic, peaceful sanctuary where every guest feels at home. From our freshly prepared local cuisine to our panoramic room balconies, every detail is designed to connect you with the beauty of Switzerland.
            </p>

            {/* Paragraph 3 */}
            <p className="text-black font-sans text-base leading-relaxed font-light">
              Whether you are here for adventurous hiking on Jungfrau, exploring historic caves, or simply unwinding by the lakefront terrace, our team is dedicated to making your stay unforgettable.
            </p>

            {/* Slanted Gold Button CTA (Black Base, 45-Degree Slanted Gold Hover Animation) */}
            <div className="pt-4">
              <Link
                to="/about-us"
                className="relative overflow-hidden bg-black text-white text-xs font-bold uppercase tracking-widest py-4 px-8 rounded-xl inline-flex items-center space-x-3 group"
              >
                <span className="absolute inset-0 bg-[#C68D53] -skew-x-[45deg] scale-x-0 group-hover:scale-x-[1.8] transition-transform duration-500 ease-out origin-center z-0" />
                <span className="relative z-10 font-sans">EXPLORE OUR HERITAGE</span>
                <svg
                  className="w-4 h-4 text-white relative z-10 group-hover:translate-x-1.5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Dual Overlapping Image Composition (Image at Right) */}
          <div className="lg:col-span-6 relative pr-4 sm:pr-8 pb-8 sm:pb-12 order-2 lg:order-2">
            {/* Main Primary Image Frame with Custom Top-Right Curved Corner */}
            <div className="relative rounded-tl-[40px] rounded-tr-[180px] sm:rounded-tr-[210px] rounded-bl-[40px] rounded-br-[40px] overflow-hidden shadow-2xl border-2 border-white group bg-slate-100">
              <img
                src={hotelMainImage}
                alt="ORA Lake View Hotel & Restaurant Facade"
                className="w-full h-[420px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Secondary Overlapping Floating Photo Frame (Floating at Bottom-Right Corner) */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-6 w-48 h-48 sm:w-64 sm:h-64 rounded-3xl border-4 sm:border-8 border-white shadow-2xl overflow-hidden z-20 group">
              <img
                src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80"
                alt="Lake Brienz Panoramas & Swiss Alps"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                  Lake Brienz Vista
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
