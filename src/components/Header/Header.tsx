import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage, LANGUAGES, type Language } from '../../context/LanguageContext';
import lakeviewLogo from '../../assets/logo/Lakeview.svg';

const BOOKING_URL =
  'https://direct-book.com/properties/lakeviewhotelrestaurant?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=CHF';

export const Header: React.FC = () => {
  const { language, setLanguage, getContent } = useLanguage();
  const navContent = getContent('nav');
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const activeLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'py-3 bg-slate-950/70 backdrop-blur-md shadow-2xl' : 'py-5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between relative">
          {/* Left: Official Lakeview.svg Logo */}
          <Link to="/" className="flex items-center space-x-3 group z-50">
            <img
              src={lakeviewLogo}
              alt="ORA Lake View Logo"
              className="h-10 md:h-12 w-auto object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Center: Perfectly Centered Glassmorphism Navigation Pill Bar */}
          <nav className="hidden lg:flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-2.5 shadow-2xl space-x-8 absolute left-1/2 -translate-x-1/2">
            <Link
              to="/"
              className={`font-sans text-[15px] font-medium tracking-wide transition-colors duration-200 ${
                isActive('/') ? 'text-amber-400 font-semibold' : 'text-white/90 hover:text-white'
              }`}
            >
              {navContent?.home || 'Home'}
            </Link>

            <Link
              to="/about-us"
              className={`font-sans text-[15px] font-medium tracking-wide transition-colors duration-200 ${
                isActive('/about-us')
                  ? 'text-amber-400 font-semibold'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {navContent?.about || 'About Us'}
            </Link>

            <Link
              to="/rooms"
              className={`font-sans text-[15px] font-medium tracking-wide transition-colors duration-200 ${
                isActive('/rooms')
                  ? 'text-amber-400 font-semibold'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {navContent?.rooms || 'Rooms'}
            </Link>

            <Link
              to="/gallery"
              className={`font-sans text-[15px] font-medium tracking-wide transition-colors duration-200 ${
                isActive('/gallery')
                  ? 'text-amber-400 font-semibold'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {navContent?.gallery || 'Gallery'}
            </Link>

            <Link
              to="/contact-us"
              className={`font-sans text-[15px] font-medium tracking-wide transition-colors duration-200 ${
                isActive('/contact-us')
                  ? 'text-amber-400 font-semibold'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {navContent?.contact || 'Contact Us'}
            </Link>
          </nav>

          {/* Right Action Pills: Text-Only Language Selector, Phone Call Icon & Book Now */}
          <div className="hidden lg:flex items-center space-x-3.5 z-50">
            {/* Text-Only Language Selector Pill */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-1.5 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold tracking-wider uppercase text-white transition-all backdrop-blur-xl shadow-lg"
              >
                <span>{activeLang.code.toUpperCase()}</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    langDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-2xl bg-slate-900/95 border border-white/15 shadow-2xl py-2 backdrop-blur-xl z-50 animate-fade-in">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as Language);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold tracking-wider transition-colors ${
                        language === lang.code
                          ? 'bg-amber-400/20 text-amber-300 font-bold'
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span>{lang.name}</span>
                      <span className="text-[10px] text-white/50">{lang.code.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Compact Phone Call Icon Button */}
            <a
              href="tel:+41339511341"
              title="Call ORA Lake View (+41 33 951 13 41)"
              aria-label="Call Hotel (+41 33 951 13 41)"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-400 hover:text-slate-950 text-white backdrop-blur-xl border border-white/20 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 active:scale-95 group"
            >
              <svg
                className="w-4 h-4 text-amber-400 group-hover:text-slate-950 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </a>

            {/* Book Now Glassmorphic Pill */}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-amber-400 hover:text-slate-950 backdrop-blur-xl border border-white/20 rounded-full px-6 py-2.5 text-xs font-bold tracking-widest uppercase text-white transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
            >
              {navContent?.bookNow || 'BOOK NOW'}
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Overlay Navigation (100% Opaque Solid Dark Background for Perfect Readability) */}
      <div
        className={`fixed inset-0 w-full h-full bg-[#0E1015] z-50 lg:hidden flex flex-col justify-between p-8 md:p-12 transition-all duration-500 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto scale-100'
            : 'opacity-0 pointer-events-none scale-95'
        }`}
      >
        {/* Top Header Row in Mobile Overlay */}
        <div className="flex items-center justify-between w-full pb-6 border-b border-white/10">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center space-x-3"
          >
            <img
              src={lakeviewLogo}
              alt="ORA Lake View Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Boxed Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-11 h-11 rounded-lg border border-amber-400/60 bg-amber-400/10 text-amber-400 flex items-center justify-center transition-all hover:bg-amber-400 hover:text-slate-950 focus:outline-none"
            aria-label="Close Navigation Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Center: Large Bold Serif Typography Menu Items */}
        <div className="my-auto py-8 space-y-6 md:space-y-8">
          <nav className="flex flex-col space-y-5 md:space-y-7">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-serif text-3xl md:text-5xl font-bold tracking-widest uppercase transition-all duration-300 block ${
                isActive('/')
                  ? 'text-amber-400 scale-105 origin-left'
                  : 'text-white/90 hover:text-amber-300'
              }`}
            >
              {navContent?.home || 'HOME'}
            </Link>

            <Link
              to="/about-us"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-serif text-3xl md:text-5xl font-bold tracking-widest uppercase transition-all duration-300 block ${
                isActive('/about-us')
                  ? 'text-amber-400 scale-105 origin-left'
                  : 'text-white/90 hover:text-amber-300'
              }`}
            >
              {navContent?.about || 'ABOUT US'}
            </Link>

            <Link
              to="/rooms"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-serif text-3xl md:text-5xl font-bold tracking-widest uppercase transition-all duration-300 block ${
                isActive('/rooms')
                  ? 'text-amber-400 scale-105 origin-left'
                  : 'text-white/90 hover:text-amber-300'
              }`}
            >
              {navContent?.rooms || 'ROOMS'}
            </Link>

            <Link
              to="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-serif text-3xl md:text-5xl font-bold tracking-widest uppercase transition-all duration-300 block ${
                isActive('/gallery')
                  ? 'text-amber-400 scale-105 origin-left'
                  : 'text-white/90 hover:text-amber-300'
              }`}
            >
              {navContent?.gallery || 'GALLERY'}
            </Link>

            <Link
              to="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-serif text-3xl md:text-5xl font-bold tracking-widest uppercase transition-all duration-300 block ${
                isActive('/contact-us')
                  ? 'text-amber-400 scale-105 origin-left'
                  : 'text-white/90 hover:text-amber-300'
              }`}
            >
              {navContent?.contact || 'CONTACT US'}
            </Link>
          </nav>
        </div>

        {/* Bottom Section: Text-Only Multi-Language Selector & Book Now CTA */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Language
            </span>
            <div className="flex space-x-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as Language)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider transition-all ${
                    language === lang.code
                      ? 'bg-amber-400 text-slate-950 shadow-md'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  {lang.code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-block text-center py-4 rounded-full text-xs font-bold tracking-widest uppercase text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 shadow-xl active:scale-95"
          >
            {navContent?.bookNow || 'BOOK NOW'}
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
