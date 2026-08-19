import React, { useState } from 'react';
import { WhoWeAreSection } from '../../components/WhoWeAre/WhoWeAreSection';
import { FAQSection } from '../../components/FAQ/FAQSection';
import { Footer } from '../../components/Footer/Footer';

// Hero & About Banner Images
import bannerBg from '../../assets/Banners/Banners.jpg';
import knowYourHotelImg from '../../assets/about/know-your-hotel.jpeg';

// Our Journey Local Assets Imports (1_1.jpg for flip card, 1_2.jpg for full image frame)
import journey1_1 from '../../assets/Our Journey/1_1.jpg';
import journey1_2 from '../../assets/Our Journey/1_2.jpg';
import journey2_1 from '../../assets/Our Journey/2_1.jpg';
import journey2_2 from '../../assets/Our Journey/2_2.jpg';
import journey3_1 from '../../assets/Our Journey/3_1.jpg';
import journey3_2 from '../../assets/Our Journey/3_2.jpg';
import journey4_1 from '../../assets/Our Journey/4_1.jpg';
import journey4_2 from '../../assets/Our Journey/4_2.jpg';

export const About: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // 4 Milestone timeline items with local assets
  const milestones = [
    {
      year: '1974',
      tag: 'THE BEGINNING',
      title: 'The Beginning of Something Special',
      shortDesc: 'By the peaceful shores of Interlaken, a hidden gem was born in 1974. A feeling of calm and alpine nature right outside your window.',
      fullDesc: 'From the moment the first guests arrived in 1974, the property offered more than just a stay — it offered a feeling of calm, of being connected to nature, and of escaping to a place where the beauty of the Swiss Alps and the tranquil lake were always just outside your window.',
      frontImage: journey1_1,
      fullImage: journey1_2,
      highlight: 'Established on Lake Brienz Shoreline',
    },
    {
      year: '1988',
      tag: 'TRANSFORMATION',
      title: 'A Heartfelt Transformation',
      shortDesc: 'In 1988, a renovation breathed new life into the hotel, blending modern comfort with the stunning surroundings. Deepening the connection between space and landscape.',
      fullDesc: 'In 1988, a renovation breathed new life into the hotel, blending modern comfort with the stunning surroundings. This wasn’t just about upgrading a building — it was about deepening the connection between the space and the landscape for a peaceful getaway.',
      frontImage: journey2_1,
      fullImage: journey2_2,
      highlight: 'Lakeside Architectural Upgrade',
    },
    {
      year: '2015',
      tag: 'VISION REALIZED',
      title: 'A Vision Realized',
      shortDesc: 'New owners infused the hotel with new energy honoring its roots while creating an alpine sanctuary for the modern traveler.',
      fullDesc: 'When new owners took the reins in 2015, they infused the hotel with a new energy — one that honored its roots while embracing the needs of the modern traveler. The aim was simple: to create not just a hotel, but a sanctuary where the spirit of Interlaken was brought into every corner.',
      frontImage: journey3_1,
      fullImage: journey3_2,
      highlight: 'Sanctuary Design & Modern Luxury',
    },
    {
      year: '2019',
      tag: 'REBIRTH OF ELEGANCE',
      title: 'A Rebirth of Elegance',
      shortDesc: 'A complete reimagining added a spacious terrace, luxury living areas, and four apartment suites to live the lake view moment.',
      fullDesc: 'In 2019, the hotel underwent a complete reimagining. The addition of a spacious terrace, luxurious living areas, and four new apartment rooms elevated the experience to new heights. It became a place to truly live the moment, savor the lake views, and enjoy nature.',
      frontImage: journey4_1,
      fullImage: journey4_2,
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

      {/* HERO BANNER HEADER (60vh Height with Top-Focused Background Image) */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden border-b border-amber-400/20 pt-20">
        {/* Background Banner Image Focused from Top */}
        <div className="absolute inset-0 z-0">
          <img src={bannerBg} alt="ORA Lake View Hotel Banner" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
        </div>

        <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 relative z-10 text-center">
          {/* Top Subtitle Badge */}
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="w-8 h-[2px] bg-[#C68D53]" />
            <span className="text-amber-400 font-sans text-xs sm:text-sm font-bold tracking-widest uppercase">
              ABOUT ORA LAKEVIEW HOTEL
            </span>
            <span className="w-8 h-[2px] bg-[#C68D53]" />
          </div>

          {/* Main Hero Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
            Timeless Swiss Charm, Lakeside Dreams
          </h1>

          {/* Sub-Hero Paragraph */}
          <p className="max-w-2xl mx-auto font-sans text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Experience Swiss charm, lake views, and modern elegance with every dawn and dusk.
          </p>
        </div>
      </section>

      {/* WHO WE ARE (OUR STORY) SECTION */}
      <WhoWeAreSection />

      {/* SECTION: KNOW YOUR HOTEL (HERITAGE & TRADITION) */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-[1380px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Photo Frame */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-amber-200/80 shadow-2xl bg-black">
                <img
                  src={knowYourHotelImg}
                  alt="Know Your Hotel Heritage"
                  className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-black/70 px-3 py-1 rounded-md backdrop-blur-sm">
                    SWISS HERITAGE SINCE 1974
                  </span>
                  <p className="font-serif text-2xl font-bold text-white mt-2">
                    Anchored in Swiss Warmth
                  </p>
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

      {/* SECTION: OUR JOURNEY (FLIP CARD ON ONE SIDE + FULL IMAGE ON OPPOSITE SIDE) */}
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

            <p className="text-slate-800 font-sans text-base sm:text-lg font-normal leading-relaxed">
              Explore how ORA Lake View evolved from a tranquil hidden gem into an extraordinary Swiss sanctuary.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Central Vertical Timeline Axis Line (Desktop Only) */}
            <div className="hidden md:block absolute left-1/2 top-6 bottom-6 -translate-x-1/2 w-1 bg-gradient-to-b from-[#C68D53] via-amber-400 to-[#C68D53] rounded-full z-0" />

            <div className="space-y-12 md:space-y-20">
              {milestones.map((m, idx) => {
                const isEven = idx % 2 === 0;
                const isFlipped = flippedCards[idx];

                return (
                  <div
                    key={idx}
                    className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 group"
                  >
                    {/* Milestone Year Center Circle Badge with Glow Pulse */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-black border-4 border-[#C68D53] timeline-pulse text-white font-serif font-extrabold text-sm items-center justify-center z-30 group-hover:scale-110 transition-transform duration-300">
                      <span>{m.year}</span>
                    </div>

                    {/* 3D FLIP CARD CONTAINER (Handles 1_1.jpg + Narrative Text on Back) */}
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
                        {/* FRONT FACE OF CARD (Uses 1_1.jpg, 2_1.jpg, 3_1.jpg, 4_1.jpg) */}
                        <div className="absolute inset-0 w-full h-full rounded-3xl bg-white border border-amber-200/80 backface-hidden overflow-hidden flex flex-col justify-between p-6">
                          <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-black -mt-1">
                            <img
                              src={m.frontImage}
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
                            <h3 className="font-serif text-xl sm:text-2xl font-bold text-black tracking-tight">
                              {m.title}
                            </h3>
                            <p className="text-slate-800 font-sans text-sm sm:text-base leading-relaxed font-normal">
                              {m.shortDesc}
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-amber-100">
                            <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider">
                              {m.highlight}
                            </span>
                          </div>
                        </div>

                        {/* BACK FACE OF CARD (Full Narrative History Text behind _1) */}
                        <div className="absolute inset-0 w-full h-full rounded-3xl bg-black border border-amber-400/80 text-white backface-hidden rotate-y-180 overflow-hidden flex flex-col justify-between p-6">
                          <div className="space-y-3 pt-2">
                            <div className="flex items-center justify-between border-b border-amber-400/30 pb-2">
                              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                                {m.year} ARCHIVES
                              </span>
                              <span className="text-[10px] font-semibold text-slate-400 uppercase">
                                {m.tag}
                              </span>
                            </div>
                            <h4 className="font-serif text-lg font-bold text-amber-400 tracking-wide">
                              {m.title}
                            </h4>
                            <p className="text-slate-200 font-sans text-sm sm:text-base leading-relaxed font-normal">
                              {m.fullDesc}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[10px] text-amber-400 font-semibold tracking-wider uppercase">
                            <span>ORA LAKE VIEW HERITAGE</span>
                            <span>SWISS ALPS SANCTUARY</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* FULL IMAGE CARD ON OPPOSITE SIDE (Displays 1_2.jpg, 2_2.jpg, 3_2.jpg, 4_2.jpg in Full) */}
                    <div
                      className={`w-full md:w-[46%] h-[360px] rounded-3xl overflow-hidden shadow-xl border border-amber-200/80 bg-black relative group ${
                        isEven ? 'md:order-2' : 'md:order-1'
                      }`}
                    >
                      <img
                        src={m.fullImage}
                        alt={`${m.title} Full View`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-amber-400 bg-black/80 px-2.5 py-1 rounded-md backdrop-blur-sm border border-amber-400/30">
                          {m.year} • PHOTO SCENE
                        </span>
                        <p className="font-serif text-sm font-semibold text-white mt-1.5 truncate">
                          {m.highlight}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQSection />

      {/* FOOTER COMPONENT */}
      <Footer />
    </div>
  );
};

export default About;
