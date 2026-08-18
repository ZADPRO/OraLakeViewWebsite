import React from 'react';
import { HeroWaterRipple } from '../../components/Hero/HeroWaterRipple';
import { WelcomeSection } from '../../components/Welcome/WelcomeSection';
import { WhoWeAreSection } from '../../components/WhoWeAre/WhoWeAreSection';

export const Home: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <HeroWaterRipple />
      <WelcomeSection />
      <WhoWeAreSection />
    </div>
  );
};

export default Home;
