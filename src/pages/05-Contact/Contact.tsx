import React, { useState } from 'react';
import mapImg from '../../assets/images/maps/map.png';
import { Footer } from '../../components/Footer/Footer';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Room Booking Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: 'Room Booking Inquiry',
        message: '',
      });
    }, 5000);
  };

  return (
    <div className="bg-[#FFFAF4] text-black min-h-screen select-none">
      {/* HERO BANNER HEADER */}
      <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-24 bg-[#14161B] text-white overflow-hidden border-b border-amber-400/20">
        <div className="max-w-[1380px] mx-auto px-6 md:px-10 relative z-10 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="w-8 h-[2px] bg-[#C68D53]" />
            <span className="text-amber-400 font-sans text-xs font-bold tracking-widest uppercase">
              GET IN TOUCH WITH US
            </span>
            <span className="w-8 h-[2px] bg-[#C68D53]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Contact ORA Lake View
          </h1>

          <p className="max-w-2xl mx-auto font-sans text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            We are here to make your Swiss getaway effortless and unforgettable. Reach out to our team for room reservations, transit guidance, or special getaway arrangements.
          </p>
        </div>
      </section>

      {/* SECTION 1: CONTACT INFO (LEFT - ONE BY ONE CENTER ALIGNED) & TRANSIT MAP (RIGHT) */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* LEFT COLUMN: 3 CONTACT INFO ITEMS STACKED ONE-BY-ONE (VERTICALLY CENTER ALIGNED) */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-8 h-full">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-900 tracking-widest uppercase">
                  DIRECT CONTACT DETAILS
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-black tracking-tight">
                  Reach Out to Our Hotel Team
                </h2>
              </div>

              <div className="space-y-7">
                {/* Item 1: Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FFFAF4] border border-amber-200/80 shadow-sm flex items-center justify-center text-[#C68D53] shrink-0 mt-0.5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  </div>
                  <div>
                    <span className="text-[10px] font-sans font-extrabold uppercase tracking-widest text-amber-900">
                      OUR LOCATION
                    </span>
                    <h3 className="font-serif text-xl font-bold text-black leading-snug">
                      Niederried bei Interlaken
                    </h3>
                    <p className="text-black font-sans text-sm font-light leading-relaxed mt-1">
                      Hauptstrasse 32, 3853 Niederried bei Interlaken, Switzerland
                    </p>
                    <div className="text-xs font-medium text-amber-900 mt-1">
                      170m to Station • 20m to Dorf Bus Stop
                    </div>
                  </div>
                </div>

                {/* Item 2: Phone Support */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FFFAF4] border border-amber-200/80 shadow-sm flex items-center justify-center text-[#C68D53] shrink-0 mt-0.5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-sans font-extrabold uppercase tracking-widest text-amber-900">
                      PHONE SUPPORT
                    </span>
                    <h3 className="font-serif text-xl font-bold text-black leading-snug">
                      +41 78 693 88 47
                    </h3>
                    <p className="text-black font-sans text-sm font-light leading-relaxed mt-1">
                      Call us anytime for instant booking help and local recommendations.
                    </p>
                    <div className="text-xs font-medium text-amber-900 mt-1">
                      Daily 08:00 - 22:00 Swiss Time
                    </div>
                  </div>
                </div>

                {/* Item 3: Email Inquiries */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FFFAF4] border border-amber-200/80 shadow-sm flex items-center justify-center text-[#C68D53] shrink-0 mt-0.5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-sans font-extrabold uppercase tracking-widest text-amber-900">
                      EMAIL INQUIRIES
                    </span>
                    <h3 className="font-serif text-xl font-bold text-black leading-snug">
                      info@oralakeview.com
                    </h3>
                    <p className="text-black font-sans text-sm font-light leading-relaxed mt-1">
                      Send us your itinerary details or questions for prompt service.
                    </p>
                    <div className="text-xs font-medium text-amber-900 mt-1">
                      Response within 2-4 hours
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: NIEDERRIED TRANSIT MAP (CENTER ALIGNED) */}
            <div className="lg:col-span-6 flex flex-col justify-center h-full">
              <div className="bg-[#FFFAF4] p-5 sm:p-6 rounded-3xl border border-amber-200/80 shadow-md space-y-4">
                <div className="flex items-center justify-between px-2">
                  <h3 className="font-serif text-xl font-bold text-black">Niederried Transit Map</h3>
                  <span className="text-xs font-sans font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded-md">
                    2 MINS TO TRAIN STATION
                  </span>
                </div>
                <div className="h-[420px] w-full rounded-2xl overflow-hidden bg-white p-3 border border-slate-100 flex items-center justify-center">
                  <img
                    src={mapImg}
                    alt="ORA Lake View Hotel Local Transit Map"
                    className="w-full h-full object-contain hover:scale-102 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SIMPLE & CLEAN CONTACT MESSAGE FORM */}
      <section className="py-20 sm:py-28 bg-[#FFFAF4] border-b border-amber-200/60">
        <div className="max-w-[1000px] mx-auto px-6 md:px-10">
          <div className="space-y-10">
            {/* Header Text */}
            <div className="text-center space-y-3">
              <span className="text-xs font-bold text-amber-900 tracking-widest uppercase">
                SEND US A MESSAGE
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-black tracking-tight">
                How Can We Help You?
              </h2>
              <p className="text-black font-sans text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
                Fill out the simple form below and our guest experience team will get back to you shortly.
              </p>
            </div>

            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-sm font-medium flex items-center space-x-3 max-w-2xl mx-auto">
                <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Thank you! Your message has been sent successfully. We will reply shortly.</span>
              </div>
            )}

            {/* Simple Minimalist Form */}
            <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-black uppercase tracking-wider">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-[#C68D53] focus:ring-2 focus:ring-[#C68D53]/20 text-sm text-black outline-none transition-all bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-black uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-[#C68D53] focus:ring-2 focus:ring-[#C68D53]/20 text-sm text-black outline-none transition-all bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-black uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+41 79 000 00 00"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-[#C68D53] focus:ring-2 focus:ring-[#C68D53]/20 text-sm text-black outline-none transition-all bg-white"
                  />
                </div>

                {/* Inquiry Subject with Custom Arrow Padding */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-black uppercase tracking-wider">
                    Inquiry Subject
                  </label>
                  <div className="relative">
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 pr-10 py-3.5 rounded-xl border border-slate-300 focus:border-[#C68D53] focus:ring-2 focus:ring-[#C68D53]/20 text-sm text-black outline-none transition-all bg-white appearance-none cursor-pointer"
                    >
                      <option value="Room Booking Inquiry">Room Booking Inquiry</option>
                      <option value="Transportation & Arrival">Transportation & Arrival</option>
                      <option value="Special Package / Romantic Stay">Special Package / Romantic Stay</option>
                      <option value="Pet-Friendly Stay Request">Pet-Friendly Stay Request</option>
                      <option value="General Question">General Question</option>
                    </select>

                    {/* Custom SVG Chevron Arrow with Generous Padding */}
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-700">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-black uppercase tracking-wider">
                  Your Message *
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell us about your stay dates, preferred rooms, or special requests..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-[#C68D53] focus:ring-2 focus:ring-[#C68D53]/20 text-sm text-black outline-none transition-all bg-white resize-none"
                />
              </div>

              {/* Slanted Gold Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="relative overflow-hidden px-10 py-4 rounded-xl bg-black text-white text-xs font-bold uppercase tracking-widest transition-colors duration-300 shadow-xl group"
                >
                  <span className="absolute inset-0 bg-[#C68D53] -skew-x-[45deg] scale-x-0 group-hover:scale-x-[1.8] transition-transform duration-500 ease-out origin-center z-0" />
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>SEND MESSAGE</span>
                    <span>→</span>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 3: FULL-WIDTH GOOGLE LOCATION MAP AT THE LAST (BEFORE FOOTER) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-amber-900 tracking-widest uppercase">
              INTERACTIVE LOCATION MAP
            </span>
            <h2 className="font-serif text-3xl font-bold text-black">
              Find Us on Google Maps
            </h2>
          </div>

          <div className="w-full h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 relative">
            <iframe
              title="ORA Lake View Hotel Google Map Location"
              src="https://maps.google.com/maps?q=Hauptstrasse%2032,%203853%20Niederried%20bei%20Interlaken,%20Switzerland&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FOOTER COMPONENT */}
      <Footer />
    </div>
  );
};

export default Contact;
