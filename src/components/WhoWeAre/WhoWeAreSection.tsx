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
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: Dual Overlapping Image Composition matching the exact screenshot */}
          <div className="lg:col-span-6 relative pl-4 sm:pl-8 pb-8 sm:pb-12 order-2 lg:order-1">
            {/* Main Primary Image Frame with Custom Top-Right Curved Corner */}
            <div className="relative rounded-tl-[40px] rounded-tr-[180px] sm:rounded-tr-[210px] rounded-bl-[40px] rounded-br-[40px] overflow-hidden shadow-2xl border-2 border-white group bg-slate-100">
              <img
                src={hotelMainImage}
                alt="ORA Lake View Hotel & Restaurant Facade"
                className="w-full h-[420px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Secondary Overlapping Floating Photo Frame (Floating at Bottom-Left Corner) */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-6 w-48 h-48 sm:w-64 sm:h-64 rounded-3xl border-4 sm:border-8 border-white shadow-2xl overflow-hidden z-20 group">
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

          {/* RIGHT COLUMN: Text Content (All 4 Paragraphs in Same Font Size & Style) */}
          <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
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
            <p className="text-black font-sans text-base sm:text-lg leading-relaxed font-light">
              Wake up to the soft shimmer of Lake Brienz, where every glance out your window reveals nature at its finest.
            </p>

            {/* Paragraph 2 */}
            <p className="text-black font-sans text-base sm:text-lg leading-relaxed font-light">
              At ORA Lakeview Hotel, the breathtaking views of the Swiss Alps and pristine lake set the stage for unforgettable memories.
            </p>

            {/* Paragraph 3 */}
            <p className="text-black font-sans text-base sm:text-lg leading-relaxed font-light">
              Perfectly located just 2 minutes from the train station, 1 minute from the bus stop, and 5 minutes from the ferry, we offer unmatched convenience to explore the wonders of the region. And with free parking and no extra fees, we’ve made sure your stay is as effortless as it is beautiful.
            </p>

            {/* Paragraph 4 */}
            <p className="text-black font-sans text-base sm:text-lg leading-relaxed font-light">
              And yes, we’re a pet-friendly hotel! Bring your four-legged friends along - they’ll love the view just as much as you do. Here, your story becomes our story.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                to="/about-us"
                className="relative overflow-hidden inline-flex items-center justify-center px-8 py-3.5 text-xs sm:text-sm font-sans font-bold tracking-widest text-white uppercase transition-colors duration-300 rounded-full bg-black shadow-xl group"
              >
                <span className="absolute inset-0 bg-[#C68D53] -skew-x-[45deg] scale-x-0 group-hover:scale-x-[1.8] transition-transform duration-500 ease-out origin-center z-0" />
                <span className="relative z-10">LEARN MORE ABOUT US</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
