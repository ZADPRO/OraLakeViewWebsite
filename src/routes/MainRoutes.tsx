import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/01-Home/Home';
import About from '../pages/02-About/About';
import Rooms from '../pages/03-Rooms/Rooms';
import Gallery from '../pages/04-Gallery/Gallery';
import Contact from '../pages/05-Contact/Contact';
import PrivacyPolicyTerms from '../pages/06-PrivacyPolicy/PrivacyPolicyTerms';

const MainRoutes: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyTerms />} />
      <Route path="/terms-and-conditions" element={<PrivacyPolicyTerms />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default MainRoutes;
