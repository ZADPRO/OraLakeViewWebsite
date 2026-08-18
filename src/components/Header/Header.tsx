import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage, LANGUAGES, type Language } from '../../context/LanguageContext';

const BOOKING_URL =
  'https://direct-book.com/properties/lakeviewhotelrestaurant?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=CHF';

const Header: React.FC = () => {
  const { language, setLanguage, getContent } = useLanguage();
  const navContent = getContent('nav');
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  const isActivePath = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-md shadow-2xl py-3 border-b border-white/10'
          : 'bg-gradient-to-b from-black/70 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-amber-200 p-0.5 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
              <span className="font-serif text-amber-400 font-bold text-lg">O</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-widest text-white uppercase group-hover:text-amber-300 transition-colors">
              ORA LAKEVIEW
            </span>
            <span className="text-[9px] tracking-widest uppercase text-amber-400 font-light">
              Hotel & Restaurant
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className={`text-sm font-medium tracking-wide uppercase transition-colors relative py-1 ${
              isActivePath('/')
                ? 'text-amber-400 font-semibold'
                : 'text-white/80 hover:text-white'
            }`}
          >
            {navContent?.home || 'Home'}
            {isActivePath('/') && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 rounded-full" />
            )}
          </Link>

          <Link
            to="/about-us"
            className={`text-sm font-medium tracking-wide uppercase transition-colors relative py-1 ${
              isActivePath('/about-us')
                ? 'text-amber-400 font-semibold'
                : 'text-white/80 hover:text-white'
            }`}
          >
            {navContent?.about || 'About Us'}
            {isActivePath('/about-us') && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 rounded-full" />
            )}
          </Link>

          <Link
            to="/rooms"
            className={`text-sm font-medium tracking-wide uppercase transition-colors relative py-1 ${
              isActivePath('/rooms')
                ? 'text-amber-400 font-semibold'
                : 'text-white/80 hover:text-white'
            }`}
          >
            {navContent?.rooms || 'Rooms'}
            {isActivePath('/rooms') && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 rounded-full" />
            )}
          </Link>

          <Link
            to="/gallery"
            className={`text-sm font-medium tracking-wide uppercase transition-colors relative py-1 ${
              isActivePath('/gallery')
                ? 'text-amber-400 font-semibold'
                : 'text-white/80 hover:text-white'
            }`}
          >
            {navContent?.gallery || 'Gallery'}
            {isActivePath('/gallery') && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 rounded-full" />
            )}
          </Link>

          <Link
            to="/contact-us"
            className={`text-sm font-medium tracking-wide uppercase transition-colors relative py-1 ${
              isActivePath('/contact-us')
                ? 'text-amber-400 font-semibold'
                : 'text-white/80 hover:text-white'
            }`}
          >
            {navContent?.contact || 'Contact Us'}
            {isActivePath('/contact-us') && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 rounded-full" />
            )}
          </Link>
        </nav>

        {/* Right Section: Multi-Language Switcher & Book Now CTA */}
        <div className="hidden lg:flex items-center space-x-5">
          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold uppercase text-white transition-all backdrop-blur-md"
            >
              <span>{activeLang.flag}</span>
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
                    className={`w-full flex items-center space-x-3 px-4 py-2 text-xs font-medium transition-colors ${
                      language === lang.code
                        ? 'bg-amber-400/20 text-amber-300 font-semibold'
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="text-sm">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Book Now Button */}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all duration-300 shadow-lg hover:shadow-amber-400/30 hover:scale-105 active:scale-95"
          >
            {navContent?.bookNow || 'Book Now'}
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center space-x-3">
          {/* Mobile Language Pill */}
          <button
            onClick={() => setLangDropdownOpen(!langDropdownOpen)}
            className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white"
          >
            <span>{activeLang.flag}</span>
            <span>{activeLang.code.toUpperCase()}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-white/10 px-6 py-6 space-y-4 backdrop-blur-xl animate-fade-in">
          <nav className="flex flex-col space-y-3">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-wider uppercase text-white hover:text-amber-400 py-1"
            >
              {navContent?.home || 'Home'}
            </Link>
            <Link
              to="/about-us"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-wider uppercase text-white hover:text-amber-400 py-1"
            >
              {navContent?.about || 'About Us'}
            </Link>
            <Link
              to="/rooms"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-wider uppercase text-white hover:text-amber-400 py-1"
            >
              {navContent?.rooms || 'Rooms'}
            </Link>
            <Link
              to="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-wider uppercase text-white hover:text-amber-400 py-1"
            >
              {navContent?.gallery || 'Gallery'}
            </Link>
            <Link
              to="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-wider uppercase text-white hover:text-amber-400 py-1"
            >
              {navContent?.contact || 'Contact Us'}
            </Link>
          </nav>

          <div className="pt-4 border-t border-white/10 flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/60 uppercase tracking-widest font-medium">Select Language</span>
              <div className="flex space-x-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as Language);
                    }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                      language === lang.code
                        ? 'bg-amber-400 text-slate-950'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {lang.flag} {lang.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 rounded-full text-xs font-bold tracking-widest uppercase text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 shadow-lg"
            >
              {navContent?.bookNow || 'Book Now'}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
