import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const FAQSection: React.FC = () => {
  const { getContent } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

  const faqList = [
    {
      q: 'What time is check-in and check-out?',
      a: 'Check-in is from 2:30 PM; check-out is by 10:00 AM – we’ll be waiting with a warm Swiss smile!',
    },
    {
      q: 'Are pets allowed at ORA Lake View?',
      a: 'Furry friends are welcome! We are a proud pet-friendly hotel. Just let us know before your arrival so we can prepare.',
    },
    {
      q: 'How far is Interlaken from your hotel?',
      a: 'Interlaken is just 7 km away (only 5 – 8 minutes by train or bus). With Dorf Bus Station (20m, 1 min walk) and Niederried Train Station (170m, 2–3 mins walk) right near the hotel, getting around is effortless.',
    },
    {
      q: 'Do rooms include lake or mountain views?',
      a: 'Yes! All our rooms feature picturesque direct views of Lake Brienz and the Bernese Swiss Alps.',
    },
    {
      q: 'Is there public transport nearby?',
      a: 'Yes, regular buses and trains connect you directly to Interlaken, Brienz, and beyond, just steps from our front door.',
    },
    {
      q: 'What’s the best way to reach ORA Lake View?',
      a: 'Whether you’re arriving by car, train, or boat ferry across Lake Brienz, we are easy to find. And did we mention the journey itself is half the charm!',
    },
    {
      q: 'Can I plan a romantic getaway at ORA Lake View?',
      a: 'Oh, absolutely! Picture private balconies, panoramic lake views, candlelit atmosphere, and mountain scenery. Let us help you create those unforgettable memories.',
    },
    {
      q: 'Can I cook my meals in the common kitchen?',
      a: 'Our common kitchen is equipped for quick fixes — think reheating or prepping snacks with basic utilities and a microwave. For full meals, we recommend exploring the delightful Swiss eateries and our restaurant nearby.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 lg:py-28 bg-white text-black overflow-hidden select-none border-t border-slate-200">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        {/* Centered Header Row */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          {/* Tagline Line Badge */}
          <div className="flex items-center justify-center space-x-3">
            <span className="w-8 h-[2px] bg-amber-600" />
            <span className="text-amber-900 font-sans text-xs font-bold tracking-widest uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <span className="w-8 h-[2px] bg-amber-600" />
          </div>

          {/* Main Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight">
            Everything You Need To Know
          </h2>

          {/* Sub-heading Narrative */}
          <p className="text-black font-sans text-sm sm:text-base font-light leading-relaxed">
            Have questions about check-in, transit access, room views, or pet policies? Explore our clear answers below.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-amber-50/40 border-[#C68D53] shadow-md'
                    : 'bg-white border-slate-200/90 hover:border-amber-300'
                }`}
              >
                {/* Question Row Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between space-x-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-semibold text-black tracking-tight">
                    {item.q}
                  </span>

                  {/* Plus / Minus Indicator Icon */}
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ${
                      isOpen
                        ? 'bg-[#C68D53] text-white rotate-180'
                        : 'bg-slate-100 text-slate-700 hover:bg-amber-100'
                    }`}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {/* Answer Content Panel */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? 'max-h-60 px-5 pb-6 sm:px-6 sm:pb-6 opacity-100' : 'max-h-0 px-5 sm:px-6 opacity-0'
                  }`}
                >
                  <p className="text-black font-sans text-sm sm:text-base leading-relaxed font-light border-t border-amber-200/60 pt-4">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
