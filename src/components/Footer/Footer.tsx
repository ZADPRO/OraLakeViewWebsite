import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {

  return (
    <footer className="bg-[#14161B] text-white pt-20 pb-12 select-none relative overflow-hidden border-t border-slate-800">
      <div className="max-w-[1380px] mx-auto px-6 md:px-10 relative z-10">
        {/* 4-Column Layout matching Gramentheme Restin Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-16">
          {/* COLUMN 1: About Us */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium text-white tracking-wide">
              About us
            </h3>
            <div className="w-8 h-[2px] bg-[#C68D53]" />
            <p className="text-slate-400 font-sans text-xs sm:text-sm leading-relaxed font-light">
              Welcome to ORA Lake View Hotel & Restaurant, your trusted sanctuary for discovering and experiencing the best of Swiss hospitality on Lake Brienz. Since our journey began, we have been committed to making every stay unforgettable.
            </p>
          </div>

          {/* COLUMN 2: Hotel Best Services */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium text-white tracking-wide">
              hotel best services
            </h3>
            <div className="w-8 h-[2px] bg-[#C68D53]" />
            <ul className="space-y-3 font-sans text-xs sm:text-sm text-slate-400 font-light">
              <li>
                <Link to="/rooms" className="hover:text-[#C68D53] transition-colors">
                  Free Private Parking
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-[#C68D53] transition-colors">
                  Room booking
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-[#C68D53] transition-colors">
                  Special offers & packages
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-[#C68D53] transition-colors">
                  Lakeview gastronomy
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Check in & Out Time */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium text-white tracking-wide">
              check in & out time
            </h3>
            <div className="w-8 h-[2px] bg-[#C68D53]" />
            <div className="space-y-3 font-sans text-xs sm:text-sm text-slate-400 font-light">
              <div className="flex justify-between max-w-[220px]">
                <span>Mon to Fri :</span>
                <span className="text-white font-medium">15:00 - 22:00</span>
              </div>
              <div className="flex justify-between max-w-[220px]">
                <span>Saturday :</span>
                <span className="text-white font-medium">15:00 - 22:00</span>
              </div>
              <div className="flex justify-between max-w-[220px]">
                <span>Sunday :</span>
                <span className="text-white font-medium">15:00 - 22:00</span>
              </div>
            </div>
          </div>

          {/* COLUMN 4: Contact Us (Vector SVG Icons - No Emojis) */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium text-white tracking-wide">
              Contact Us
            </h3>
            <div className="w-8 h-[2px] bg-[#C68D53]" />
            <div className="space-y-3.5 font-sans text-xs sm:text-sm text-slate-400 font-light">
              {/* Address Icon (MapPin) */}
              <div className="flex items-start space-x-3">
                <svg
                  className="w-4 h-4 text-[#C68D53] shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Hauptstrasse 32, 3853 Niederried bei Interlaken, Switzerland</span>
              </div>

              {/* Email Icon (Mail) */}
              <div className="flex items-center space-x-3">
                <svg
                  className="w-4 h-4 text-[#C68D53] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href="mailto:info@oralakeview.com" className="hover:text-[#C68D53] transition-colors">
                  info@oralakeview.com
                </a>
              </div>

              {/* Phone Icon (Phone) */}
              <div className="flex items-center space-x-3">
                <svg
                  className="w-4 h-4 text-[#C68D53] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href="tel:+41786938847" className="hover:text-[#C68D53] transition-colors">
                  +41 78 693 88 47
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-slate-800/80 pt-8 pb-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400 font-light">
          {/* Left: Vector Social Icons (No Emojis) */}
          <div className="flex items-center space-x-3">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#C68D53] hover:border-[#C68D53] transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#C68D53] hover:border-[#C68D53] transition-all duration-300 group"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#C68D53] hover:border-[#C68D53] transition-all duration-300 group"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#C68D53] hover:border-[#C68D53] transition-all duration-300 group"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>

          {/* Center: Legal Links */}
          <div className="flex items-center space-x-6 text-slate-400">
            <Link to="/about-us" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span>/</span>
            <Link to="/about-us" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>/</span>
            <Link to="/contact-us" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Right: Copyright Line */}
          <div>
            Copyright© <span className="text-[#C68D53] font-medium">ORA LAKEVIEW</span>
          </div>
        </div>

        {/* Bottom Giant Brand Logo Stamp (Exact Gramentheme Restin Replica) */}
        <div className="pt-6 border-t border-slate-900/60 text-center">
          <div className="inline-flex flex-col items-center group cursor-pointer">
            <span className="font-serif text-4xl sm:text-6xl font-bold tracking-[0.25em] text-white/90 group-hover:text-[#C68D53] transition-colors duration-500 uppercase block">
              ORA LAKEVIEW
            </span>
            <span className="text-xs sm:text-sm font-sans tracking-[0.4em] text-amber-500/80 uppercase mt-1">
              BEI INTERLAKEN • LAKE BRIENZ
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
