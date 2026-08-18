import React from 'react';
import { FAQSection } from '../../components/FAQ/FAQSection';
import { Footer } from '../../components/Footer/Footer';

export const About: React.FC = () => {
  return (
    <div className="bg-[#FFFAF4] text-black min-h-screen select-none">
      {/* HERO BANNER HEADER (Extends behind fixed header for 100% clear navigation) */}
      <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-24 bg-[#14161B] text-white overflow-hidden border-b border-amber-400/20">
        <div className="max-w-[1380px] mx-auto px-6 md:px-10 relative z-10 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="w-8 h-[2px] bg-[#C68D53]" />
            <span className="text-amber-400 font-sans text-xs font-bold tracking-widest uppercase">
              ABOUT ORA LAKEVIEW HOTEL
            </span>
            <span className="w-8 h-[2px] bg-[#C68D53]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Our Story & Heritage
          </h1>

          <p className="max-w-2xl mx-auto font-sans text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Welcome to ORA Lake View Hotel, where traditional Swiss hospitality meets breathtaking vistas of Lake Brienz and the majestic Bernese Oberland Alps.
          </p>
        </div>
      </section>

      {/* WHO WE ARE STORY SECTION */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-[1380px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image Frame */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-amber-200/80 shadow-2xl bg-black">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
                  alt="ORA Lake View Hotel Heritage"
                  className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-black/70 px-3 py-1 rounded-md backdrop-blur-sm">
                    NIEDERRIED BEI INTERLAKEN
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mt-2">
                    A Peaceful Alpine Haven
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Story Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-900 tracking-widest uppercase">
                  WHO WE ARE
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-black tracking-tight">
                  Authentic Swiss Hospitality & Panoramas
                </h2>
              </div>

              <p className="text-black font-sans text-base font-light leading-relaxed">
                Located in the serene village of Niederried, just minutes away from Interlaken, ORA Lake View Hotel provides a perfect sanctuary for travelers seeking tranquility, natural beauty, and modern comforts.
              </p>

              <p className="text-black font-sans text-base font-light leading-relaxed">
                Whether you’re embarking on an alpine journey to Jungfrau, cruising on Lake Brienz, or relaxing on your balcony with a morning coffee, our dedicated hotel team is committed to making your stay extraordinary.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                <div>
                  <h4 className="font-serif text-3xl font-bold text-[#C68D53]">170m</h4>
                  <p className="text-xs font-bold text-black uppercase tracking-wider mt-1">To Train Station</p>
                </div>
                <div>
                  <h4 className="font-serif text-3xl font-bold text-[#C68D53]">100%</h4>
                  <p className="text-xs font-bold text-black uppercase tracking-wider mt-1">Scenic Lake Views</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES & HIGHLIGHTS */}
      <section className="py-20 sm:py-24 bg-[#FFFAF4]">
        <div className="max-w-[1380px] mx-auto px-6 md:px-10 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-amber-900 tracking-widest uppercase">
              WHY GUESTS LOVE US
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-black tracking-tight">
              Exceptional Hotel Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-amber-200/80 shadow-md space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100/80 flex items-center justify-center text-[#C68D53]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-black">Prime Location</h3>
              <p className="text-black font-sans text-sm font-light leading-relaxed">
                20 meters from Dorf Bus Station and 170 meters from Niederried Train Station for effortless travel across Switzerland.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-amber-200/80 shadow-md space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100/80 flex items-center justify-center text-[#C68D53]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-black">Lake Balconies</h3>
              <p className="text-black font-sans text-sm font-light leading-relaxed">
                Uninterrupted views of Lake Brienz and mountain peaks directly from your private room balcony.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-amber-200/80 shadow-md space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100/80 flex items-center justify-center text-[#C68D53]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-black">Pet-Friendly Stay</h3>
              <p className="text-black font-sans text-sm font-light leading-relaxed">
                We warmly welcome your furry companions to enjoy the lakeside walks and fresh alpine air with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION (MOVED TO GALLERY & ABOUT PAGE AS REQUESTED) */}
      <FAQSection />

      {/* FOOTER COMPONENT */}
      <Footer />
    </div>
  );
};

export default About;
