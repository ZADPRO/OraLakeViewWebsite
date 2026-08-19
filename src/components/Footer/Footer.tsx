import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {

  return (
    <footer className="bg-[#14161B] text-white pt-20 pb-12 select-none relative overflow-hidden border-t border-slate-800">
      <div className="max-w-[1380px] mx-auto px-6 md:px-10 relative z-10">
        {/* 4-Column Layout matching Gramentheme Restin Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-16">
          {/* COLUMN 1: Reach Us At */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-white uppercase tracking-wider">
              Reach Us At
            </h3>
            <div className="w-8 h-[2px] bg-[#C68D53]" />
            <div className="space-y-3 font-sans text-sm sm:text-base text-slate-300 font-normal">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-[#C68D53] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Ora Lakeview Hotel, Hauptstrasse 32, 3853 Niederried bei Interlaken, Switzerland</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#C68D53] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@oralakeview.com" className="hover:text-[#C68D53] transition-colors font-medium">
                  info@oralakeview.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#C68D53] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+41779731981" className="hover:text-[#C68D53] transition-colors font-medium">
                  +41 77 973 19 81
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <div className="w-8 h-[2px] bg-[#C68D53]" />
            <ul className="space-y-3 font-sans text-sm sm:text-base text-slate-300 font-normal">
              <li>
                <Link to="/rooms" className="hover:text-[#C68D53] transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-[#C68D53] transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-[#C68D53] transition-colors">
                  Activities Nearby
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-[#C68D53] transition-colors">
                  Connectivity
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Connect with us */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-white uppercase tracking-wider">
              Connect with us
            </h3>
            <div className="w-8 h-[2px] bg-[#C68D53]" />
            <ul className="space-y-3 font-sans text-sm sm:text-base text-slate-300 font-normal">
              <li>
                <a href="https://www.instagram.com/ora_lakeview?igsh=MTNvdWZjNjVja2dsNQ==" target="_blank" rel="noopener noreferrer" className="hover:text-[#C68D53] transition-colors flex items-center space-x-2">
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61574775855831" target="_blank" rel="noopener noreferrer" className="hover:text-[#C68D53] transition-colors flex items-center space-x-2">
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Contact Us */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-white uppercase tracking-wider">
              Contact Us
            </h3>
            <div className="w-8 h-[2px] bg-[#C68D53]" />
            <div className="space-y-3 font-sans text-sm sm:text-base text-slate-300 font-normal">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Have any questions or need assistance? Reach out for a seamless experience at Hotel Lakeview.
              </p>
              <div className="pt-2 flex flex-col space-y-2">
                <a
                  href="tel:+41779731981"
                  className="inline-flex items-center justify-center space-x-2 bg-[#C68D53] text-white py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-amber-600 transition-colors shadow-md"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>CALL US (+41 77 973 1981)</span>
                </a>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center space-x-2 bg-slate-900 border border-slate-700 text-white py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors"
                >
                  <span>SEND A MESSAGE</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-slate-800/80 pt-8 pb-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400 font-light">
          {/* Left: Vector Social Icons (Official Instagram & Facebook) */}
          <div className="flex items-center space-x-3">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/ora_lakeview?igsh=MTNvdWZjNjVja2dsNQ=="
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
              href="https://www.facebook.com/profile.php?id=61574775855831"
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
