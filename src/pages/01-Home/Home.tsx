import React from 'react';
import { HeroWaterRipple } from '../../components/Hero/HeroWaterRipple';
import { WelcomeSection } from '../../components/Welcome/WelcomeSection';
import { TickerDivider } from '../../components/Ticker/TickerDivider';
import { WhoWeAreSection } from '../../components/WhoWeAre/WhoWeAreSection';
import { RoomsSection } from '../../components/Rooms/RoomsSection';

export const Home: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <HeroWaterRipple />
      <WelcomeSection />
      <TickerDivider />
      <WhoWeAreSection />
      <RoomsSection />
    </div>
  );
};

export default Home;
