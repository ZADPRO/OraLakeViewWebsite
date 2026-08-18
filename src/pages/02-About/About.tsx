import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const About: React.FC = () => {
  const { getContent } = useLanguage();
  const aboutContent = getContent('about');

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-32 pb-24">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4 mb-16">
        <span className="text-amber-400 font-serif italic text-lg tracking-wider uppercase block">
          {aboutContent?.badge || 'Who We Are'}
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-white">
          {aboutContent?.title || 'Whispers of Brienz at the Best Lakeview Hotel'}
        </h1>
        <p className="text-white/70 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          {aboutContent?.description}
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif text-amber-300">
            {aboutContent?.storyTitle || 'Our Alpine Heritage'}
          </h2>
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            {aboutContent?.storyText}
          </p>
          <p className="text-white/70 text-sm leading-relaxed">
            Located in Brienz, a traditional Swiss village famous for woodcarving, steam railways, and crystal-clear waters, ORA Lake View serves as your gateway to the Bernese Oberland region. Our dedicated staff is committed to making every moment of your stay memorable.
          </p>
        </div>

        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div className="rounded-3xl overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
              alt="Hotel View"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl mt-8">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
              alt="Lobby Lounge"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Key Highlights Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutContent?.features?.map((feat: any, idx: number) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-amber-400/50 transition-all duration-300 space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 text-amber-400 flex items-center justify-center text-xl font-bold">
                0{idx + 1}
              </div>
              <h3 className="font-serif text-lg text-white font-medium">{feat.title}</h3>
              <p className="text-xs text-white/60 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
