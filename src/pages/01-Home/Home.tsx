import React from 'react';
import { HeroWaterRipple } from '../../components/Hero/HeroWaterRipple';
import { WelcomeSection } from '../../components/Welcome/WelcomeSection';

export const Home: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <HeroWaterRipple />
      <WelcomeSection />
    </div>
  );
};

export default Home;
