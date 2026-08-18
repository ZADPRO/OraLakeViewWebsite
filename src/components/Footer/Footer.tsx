import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, LANGUAGES, type Language } from '../../context/LanguageContext';

const BOOKING_URL =
  'https://direct-book.com/properties/lakeviewhotelrestaurant?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=CHF';

const Footer: React.FC = () => {
  const { language, setLanguage, getContent } = useLanguage();
  const footerContent = getContent('footer');
  const navContent = getContent('nav');
  const contactContent = getContent('contact');

  return (
    <footer className="bg-slate-950 text-white border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Glow decorative accent */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Brand & About Column */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-amber-200 p-0.5 flex items-center justify-center shadow-lg">
              <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                <span className="font-serif text-amber-400 font-bold text-lg">O</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-widest text-white uppercase">
                ORA LAKEVIEW
              </span>
              <span className="text-[9px] tracking-widest uppercase text-amber-400 font-light">
                Hotel & Restaurant
              </span>
            </div>
          </div>

          <p className="text-white/70 text-xs leading-relaxed">
            {footerContent?.brandText ||
              'ORA Lake View Hotel & Restaurant - Your serene sanctuary in the Swiss Alps on Lake Brienz.'}
          </p>

          {/* Language Pills */}
          <div className="pt-2 flex flex-wrap gap-2">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code as Language)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  language === lang.code
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {lang.flag} {lang.name}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-4">
          <h4 className="font-serif text-base font-medium text-amber-400 tracking-wider uppercase border-b border-white/10 pb-2">
            {footerContent?.quickLinks || 'Quick Links'}
          </h4>
          <ul className="space-y-2.5 text-xs text-white/80">
            <li>
              <Link to="/" className="hover:text-amber-400 transition-colors flex items-center space-x-2">
                <span>&rsaquo;</span>
                <span>{navContent?.home || 'Home'}</span>
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-amber-400 transition-colors flex items-center space-x-2">
                <span>&rsaquo;</span>
                <span>{navContent?.about || 'About Us'}</span>
              </Link>
            </li>
            <li>
              <Link to="/rooms" className="hover:text-amber-400 transition-colors flex items-center space-x-2">
                <span>&rsaquo;</span>
                <span>{navContent?.rooms || 'Rooms'}</span>
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-amber-400 transition-colors flex items-center space-x-2">
                <span>&rsaquo;</span>
                <span>{navContent?.gallery || 'Gallery'}</span>
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-amber-400 transition-colors flex items-center space-x-2">
                <span>&rsaquo;</span>
                <span>{navContent?.contact || 'Contact Us'}</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Room Types Column */}
        <div className="space-y-4">
          <h4 className="font-serif text-base font-medium text-amber-400 tracking-wider uppercase border-b border-white/10 pb-2">
            {footerContent?.roomTypes || 'Room Types'}
          </h4>
          <ul className="space-y-2.5 text-xs text-white/80">
            <li>
              <Link to="/rooms" className="hover:text-amber-400 transition-colors">
                Classic Lakeview Room (22m²)
              </Link>
            </li>
            <li>
              <Link to="/rooms" className="hover:text-amber-400 transition-colors">
                Lakeview Studio (22m²)
              </Link>
            </li>
            <li>
              <Link to="/rooms" className="hover:text-amber-400 transition-colors">
                Lakeview Trio Room (28m²)
              </Link>
            </li>
            <li>
              <Link to="/rooms" className="hover:text-amber-400 transition-colors">
                Majestic Lakeview King (32m²)
              </Link>
            </li>
            <li>
              <Link to="/rooms" className="hover:text-amber-400 transition-colors">
                Queens Vista Suite (40m²)
              </Link>
            </li>
            <li>
              <Link to="/rooms" className="hover:text-amber-400 transition-colors">
                Alpine Family Retreat (50m²)
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="space-y-4">
          <h4 className="font-serif text-base font-medium text-amber-400 tracking-wider uppercase border-b border-white/10 pb-2">
            {footerContent?.contactUs || 'Contact Us'}
          </h4>
          <div className="space-y-3 text-xs text-white/80">
            <p className="flex items-start space-x-3">
              <span className="text-amber-400 mt-0.5">📍</span>
              <span>{contactContent?.addressValue || 'Hauptstrasse 44, 3855 Brienz, Switzerland'}</span>
            </p>
            <p className="flex items-center space-x-3">
              <span className="text-amber-400">📞</span>
              <a href="tel:+41339511341" className="hover:text-amber-400 transition-colors">
                +41 33 951 13 41
              </a>
            </p>
            <p className="flex items-center space-x-3">
              <span className="text-amber-400">✉️</span>
              <a href="mailto:info@oralakeview.com" className="hover:text-amber-400 transition-colors">
                info@oralakeview.com
              </a>
            </p>

            <div className="pt-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md"
              >
                {navContent?.bookNow || 'Book Now'}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/50">
        <p>{footerContent?.copyright || '© 2026 ORA Lake View Hotel. All rights reserved.'}</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</span>
          <span className="hover:text-white transition-colors cursor-pointer">Imprint</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
