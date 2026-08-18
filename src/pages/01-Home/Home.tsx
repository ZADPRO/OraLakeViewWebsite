import React from 'react';
import { HeroWaterRipple } from '../../components/Hero/HeroWaterRipple';
import { WelcomeSection } from '../../components/Welcome/WelcomeSection';
import { TickerDivider } from '../../components/Ticker/TickerDivider';
import { WhoWeAreSection } from '../../components/WhoWeAre/WhoWeAreSection';
import { RoomsSection } from '../../components/Rooms/RoomsSection';
import { AmenitiesSection } from '../../components/Amenities/AmenitiesSection';
import { TestimonialsSection } from '../../components/Testimonials/TestimonialsSection';
import { FAQSection } from '../../components/FAQ/FAQSection';
import { Footer } from '../../components/Footer/Footer';

export const Home: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <HeroWaterRipple />
      <WelcomeSection />
      <TickerDivider />
      <WhoWeAreSection />
      <RoomsSection />
      <AmenitiesSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
