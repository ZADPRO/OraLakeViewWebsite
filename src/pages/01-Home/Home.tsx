import React from 'react';
import { HeroWaterRipple } from '../../components/Hero/HeroWaterRipple';
import { WelcomeSection } from '../../components/Welcome/WelcomeSection';
import { TickerDivider } from '../../components/Ticker/TickerDivider';
import { WhoWeAreSection } from '../../components/WhoWeAre/WhoWeAreSection';
import { RoomsSection } from '../../components/Rooms/RoomsSection';
import { AmenitiesSection } from '../../components/Amenities/AmenitiesSection';
import { AttractionsSection } from '../../components/Attractions/AttractionsSection';
import { TestimonialsSection } from '../../components/Testimonials/TestimonialsSection';
import { FAQSection } from '../../components/FAQ/FAQSection';
import { Footer } from '../../components/Footer/Footer';

const ATTRACTIONS_TICKER_ITEMS = [
  'AT THE HEART OF CONNECTIVITY',
  '1 MIN WALK TO BUS & TRAIN STATIONS',
  'EXPLORE NEARBY NATURAL WONDERS',
  'JUNGFRAUJOCH TOP OF EUROPE',
  'HARDER KULM PANORAMA',
  'GIESSBACH WATERFALLS & LAKE CRUISES',
  'DISCOVER ACTIVITIES AT HOTEL LAKEVIEW',
];

const REVIEW_TICKER_ITEMS = [
  '5-STAR GUEST REVIEWS',
  'AUTHENTIC SWISS HOSPITALITY',
  'UNFORGETTABLE LAKE BRIENZ MEMORIES',
  'RATED EXCELLENT BY GUESTS',
  'SPECTACULAR ALPINE BALCONY VIEWS',
  'WARM & FRIENDLY SERVICE',
  'PET-FRIENDLY SWISS ESCAPE',
  '2 MINS TO TRAIN & FERRY DOCK',
];

export const Home: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <HeroWaterRipple />
      <WelcomeSection />
      <TickerDivider />
      <WhoWeAreSection />
      <RoomsSection />
      <AmenitiesSection />
      {/* Ticker Divider Below Our Best Facilities */}
      <TickerDivider items={ATTRACTIONS_TICKER_ITEMS} />
      {/* Connectivity + 7 Nearby Attractions + 4 Hotel Activities */}
      <AttractionsSection />
      {/* Ticker Divider Above Guest Feedbacks */}
      <TickerDivider items={REVIEW_TICKER_ITEMS} />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
