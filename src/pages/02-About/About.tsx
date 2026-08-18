import React, { useState } from 'react';
import { WhoWeAreSection } from '../../components/WhoWeAre/WhoWeAreSection';
import { FAQSection } from '../../components/FAQ/FAQSection';
import { Footer } from '../../components/Footer/Footer';

export const About: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // 4 Milestone timeline items with curated images & detailed reverse text for 3D flip card
  const milestones = [
    {
      year: '1974',
      tag: 'THE BEGINNING',
      title: 'The Beginning of Something Special',
      shortDesc: 'By the peaceful shores of Interlaken, a hidden gem was born in 1974. A feeling of calm and alpine nature right outside your window.',
      fullDesc: 'From the moment the first guests arrived in 1974, the property offered more than just a stay — it offered a feeling. A feeling of calm, of being connected to nature, and of escaping to a place where the beauty of the Swiss Alps and the tranquil lake were always just outside your window.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      highlight: 'Established on Lake Brienz Shoreline',
    },
    {
      year: '1988',
      tag: 'TRANSFORMATION',
      title: 'A Heartfelt Transformation',
      desc: 'In 1988, a renovation breathed new life into the hotel, blending modern comfort with the stunning surroundings. Deepening the connection between space and landscape.',
      fullDesc: 'In 1988, a renovation breathed new life into the hotel, blending modern comfort with the stunning surroundings. This wasn’t just about upgrading a building — it was about deepening the connection between the space and the landscape. Guests now found even more ways to relax, reflect, and indulge in breathtaking views.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      highlight: 'Lakeside Architectural Upgrade',
    },
    {
      year: '2015',
      tag: 'VISION REALIZED',
      title: 'A Vision Realized',
      desc: 'New owners infused the hotel with new energy honoring its roots while creating an alpine sanctuary for the modern traveler.',
      fullDesc: 'When new owners took the reins in 2015, they infused the hotel with a new energy — one that honored its roots while embracing the needs of the modern traveler. The aim was simple: to create not just a hotel, but a sanctuary where the spirit of Interlaken was brought into every corner.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      highlight: 'Sanctuary Design & Modern Luxury',
    },
    {
      year: '2019',
      tag: 'REBIRTH OF ELEGANCE',
      title: 'A Rebirth of Elegance',
      desc: 'A complete reimagining added a spacious terrace, luxury living areas, and four apartment suites to live the lake view moment.',
      fullDesc: 'In 2019, the hotel underwent a complete reimagining. The addition of a spacious terrace, luxurious living areas, and four new apartment rooms elevated the experience to new heights. It became a place to truly live the moment, savor the lake views, and enjoy the perfect blend of nature and luxury.',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      highlight: 'Panoramas & Apartment Suites',
    },
  ];

  return (
    <div className="bg-[#FFFAF4] text-black min-h-screen select-none">
      {/* CSS 3D FLIP & PULSE ANIMATIONS */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 15px rgba(198, 141, 83, 0.4); }
          50% { box-shadow: 0 0 30px rgba(198, 141, 83, 0.8); }
        }
        .timeline-pulse {
          animation: pulseGlow 3s infinite ease-in-out;
        }
      `}</style>

      {/* HERO BANNER HEADER */}
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
            Timeless Swiss Charm, Lakeside Dreams
          </h1>

          <p className="max-w-2xl mx-auto font-sans text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Experience Swiss charm, lake views, and modern elegance with every dawn and dusk.
          </p>
        </div>
      </section>

      {/* WHO WE ARE (OUR STORY) SECTION MOVED FROM HOMEPAGE */}
      <WhoWeAreSection />

      {/* SECTION: KNOW YOUR HOTEL (HERITAGE & TRADITION) */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-[1380px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Photo Frame */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-amber-200/80 shadow-2xl bg-black">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
                  alt="Know Your Hotel Heritage"
                  className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-black/70 px-3 py-1 rounded-md backdrop-blur-sm">
                    SWISS HERITAGE SINCE 1974
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mt-2">
                    Anchored in Swiss Warmth
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-900 tracking-widest uppercase">
                  TRADITION & HERITAGE
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-black tracking-tight">
                  Know Your Hotel
                </h2>
              </div>

              <p className="text-black font-sans text-base font-light leading-relaxed">
                Almost half a century ago, inspired by the shimmering Lake Brienz and cradled by the majestic Swiss Alps, a Swiss couple envisioned a haven that mirrored their deep love for the land and its timeless beauty. ORA Lake View became their labor of love.
              </p>

              <p className="text-black font-sans text-base font-light leading-relaxed">
                The couple, whose hearts are firmly anchored in Swiss tradition, brought their love for their native country into every area of the hotel, providing visitors with a genuine experience of Swiss friendliness and warmth.
              </p>

              <p className="text-black font-sans text-base font-light leading-relaxed">
                Today, their legacy endures in every corner of the hotel, where history embraces the present, and guests are welcomed like cherished friends into a tale of romance, heritage, and elegance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: OUR JOURNEY (CLEAN 3D TIMELINE WITHOUT INSTRUCTION TEXTS) */}
      <section className="py-20 lg:py-28 bg-[#FFFAF4] border-b border-amber-200/60 relative overflow-hidden">
        <div className="max-w-[1380px] mx-auto px-6 md:px-10 relative z-10 space-y-16">
          {/* Header */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <span className="w-8 h-[2px] bg-[#C68D53]" />
              <span className="text-amber-900 font-sans text-xs font-bold tracking-widest uppercase">
                MILESTONES THROUGH THE YEARS
              </span>
              <span className="w-8 h-[2px] bg-[#C68D53]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-black tracking-tight">
              Our Journey
            </h2>

            <p className="text-black font-sans text-sm sm:text-base font-light leading-relaxed">
              Explore how ORA Lake View evolved from a tranquil hidden gem into an extraordinary Swiss sanctuary.
            </p>
          </div>

          {/* Luxury 3D Vertical Timeline Container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Central Vertical Timeline Axis Line (Desktop Only) */}
            <div className="hidden md:block absolute left-1/2 top-6 bottom-6 -translate-x-1/2 w-1 bg-gradient-to-b from-[#C68D53] via-amber-400 to-[#C68D53] rounded-full z-0" />

            <div className="space-y-12 md:space-y-20">
              {milestones.map((m, idx) => {
                const isEven = idx % 2 === 0;
                const isFlipped = flippedCards[idx];

                return (
                  <div
                    key={idx}
                    className="relative flex flex-col md:flex-row items-center justify-between gap-8 group"
                  >
                    {/* Milestone Year Center Circle Badge with Glow Pulse */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-black border-4 border-[#C68D53] timeline-pulse text-white font-serif font-extrabold text-sm items-center justify-center z-30 group-hover:scale-110 transition-transform duration-300">
                      <span>{m.year}</span>
                    </div>

                    {/* 3D FLIP CARD CONTAINER */}
                    <div
                      onClick={() => toggleFlip(idx)}
                      className={`w-full md:w-[46%] perspective-1000 h-[360px] cursor-pointer ${
                        isEven ? 'md:order-1' : 'md:order-2'
                      }`}
                    >
                      <div
                        className={`relative w-full h-full transform-style-3d transition-transform duration-700 ease-out shadow-xl rounded-3xl ${
                          isFlipped ? 'rotate-y-180' : 'group-hover:[transform:rotateY(180deg)]'
                        }`}
                      >
                        {/* FRONT FACE OF CARD */}
                        <div className="absolute inset-0 w-full h-full rounded-3xl bg-white border border-amber-200/80 backface-hidden overflow-hidden flex flex-col justify-between p-6">
                          <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-black -mt-1">
                            <img
                              src={m.image}
                              alt={m.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            <div className="absolute top-3 left-3 z-10">
                              <span className="text-[10px] font-sans font-extrabold uppercase tracking-widest text-amber-400 bg-black/80 px-3 py-1 rounded-md backdrop-blur-sm">
                                {m.year} • {m.tag}
                              </span>
                            </div>
                          </div>

                          <div className="space-y-2 pt-2">
                            <h3 className="font-serif text-xl font-bold text-black tracking-tight">
                              {m.title}
                            </h3>
                            <p className="text-black font-sans text-xs sm:text-sm font-light leading-relaxed line-clamp-2">
                              {m.shortDesc || m.desc}
                            </p>
                          </div>

                          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-900">
                            <span>{m.highlight}</span>
                          </div>
                        </div>

                        {/* BACK FACE OF CARD (REVERSE SIDE ON 180° ROTATION) */}
                        <div className="absolute inset-0 w-full h-full rounded-3xl bg-[#14161B] text-white border border-amber-400/30 backface-hidden rotate-y-180 p-7 flex flex-col justify-between overflow-hidden">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="font-serif text-3xl font-extrabold text-[#C68D53]">
                                {m.year}
                              </span>
                              <span className="text-[10px] font-sans font-extrabold uppercase tracking-widest text-amber-400 bg-black px-3 py-1 rounded-md border border-amber-400/20">
                                {m.highlight}
                              </span>
                            </div>

                            <h3 className="font-serif text-xl font-bold text-white tracking-tight">
                              {m.title}
                            </h3>

                            <p className="text-slate-300 font-sans text-xs sm:text-sm font-light leading-relaxed">
                              {m.fullDesc}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-amber-400 font-medium">
                            <span>ORA LAKE VIEW HERITAGE</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* PHOTO PREVIEW FRAME (OTHER SIDE ON DESKTOP) */}
                    <div className={`w-full md:w-[46%] ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                      <div className="rounded-3xl overflow-hidden border border-amber-200/80 shadow-lg bg-black h-[360px] relative group/img">
                        <img
                          src={m.image}
                          alt={m.title}
                          className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700 opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                          <span className="text-[10px] font-sans font-bold text-amber-400 uppercase tracking-widest bg-black/75 px-3 py-1 rounded-md backdrop-blur-sm">
                            HISTORIC ERA • {m.year}
                          </span>
                          <h4 className="font-serif text-xl font-bold text-white pt-1">
                            {m.title}
                          </h4>
                          <p className="text-xs text-slate-300 font-light">
                            {m.highlight}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* GEORGES SIMENON QUOTE SECTION */}
          <div className="max-w-3xl mx-auto pt-8">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border-l-4 border-[#C68D53] border-t border-r border-b border-amber-200/60 shadow-md space-y-3">
              <p className="font-serif italic text-lg sm:text-2xl text-black leading-relaxed">
                "The lake and the mountains have become my landscape, my real world."
              </p>
              <div className="text-xs font-bold text-amber-900 uppercase tracking-widest pt-1">
                — Georges Simenon
              </div>
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
