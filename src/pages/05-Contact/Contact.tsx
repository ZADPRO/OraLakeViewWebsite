import React, { useState } from "react";
import mapImg from "../../assets/images/maps/map.jpeg";
import { Footer } from "../../components/Footer/Footer";
import bannerBg from "../../assets/Banners/Banners.jpg";

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Room Booking Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "Room Booking Inquiry",
        message: "",
      });
    }, 5000);
  };

  return (
    <div className="bg-[#FFFAF4] text-black min-h-screen select-none">
      {/* HERO BANNER HEADER (60vh Height with Top-Focused Background Image) */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden border-b border-amber-400/20 pt-20">
        {/* Background Banner Image Focused from Top */}
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBg}
            alt="ORA Lake View Contact Banner"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
        </div>
        <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 relative z-10 text-center">
          {/* Top Subtitle Badge */}
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="w-8 h-[2px] bg-[#C68D53]" />
            <span className="text-amber-400 font-sans text-xs sm:text-sm font-bold tracking-widest uppercase">
              GET IN TOUCH, WE’RE HERE TO HELP
            </span>
            <span className="w-8 h-[2px] bg-[#C68D53]" />
          </div>

          {/* Main Hero Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
            Contact ORA Lake View
          </h1>

          {/* Sub-Hero Paragraph */}
          <p className="max-w-2xl mx-auto font-sans text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Have questions or need assistance? Reach out to us for a seamless
            experience at Hotel Lakeview.
          </p>
        </div>
      </section>

      {/* SECTION 1: CONTACT INFO (LEFT - STACKED) & TRANSIT MAP IMAGE (RIGHT) */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* LEFT COLUMN: 3 CONTACT INFO ITEMS STACKED ONE-BY-ONE */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-8 h-full">
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-[2px] bg-[#C68D53]" />
                  <span className="text-amber-900 font-sans text-xs font-bold tracking-widest uppercase">
                    REACH US ANYTIME
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-black tracking-tight">
                  Get in Touch, We’re Here to Help
                </h2>
                <p className="text-black font-sans text-sm sm:text-base font-normal leading-relaxed">
                  Have any questions or need assistance? Contact us by phone or
                  WhatsApp using the icons below, and our team will get back to
                  you shortly.
                </p>
              </div>

              {/* 3 STACKED CARDS WITH VECTOR SVG ICONS */}
              <div className="space-y-5">
                {/* Item 1: Address */}
                <div className="bg-[#FFFAF4] p-6 rounded-2xl border border-amber-200/80 shadow-sm flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-amber-300/60 flex items-center justify-center text-[#C68D53] shrink-0 font-bold shadow-xs">
                    <svg
                      className="w-6 h-6 text-[#C68D53]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg font-bold text-black">
                      Address
                    </h3>
                    <p className="text-black font-sans text-sm sm:text-base font-normal leading-relaxed">
                      Ora Lakeview Hotel, Hauptstrasse 32, 3853 Niederried bei
                      Interlaken, Switzerland
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-amber-900 pt-1">
                      2 mins walk from Niederried Train Station & Ferry Dock
                    </p>
                  </div>
                </div>

                {/* Item 2: Phone Number */}
                <div className="bg-[#FFFAF4] p-6 rounded-2xl border border-amber-200/80 shadow-sm flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-amber-300/60 flex items-center justify-center text-[#C68D53] shrink-0 font-bold shadow-xs">
                    <svg
                      className="w-6 h-6 text-[#C68D53]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg font-bold text-black">
                      Phone Number
                    </h3>
                    <a
                      href="tel:+41779731981"
                      className="text-black hover:text-[#C68D53] font-sans text-base sm:text-lg font-bold transition-colors block"
                    >
                      +41 77 973 19 81
                    </a>
                    <p className="text-xs sm:text-sm text-black font-normal">
                      Available by phone or WhatsApp 24/7
                    </p>
                  </div>
                </div>

                {/* Item 3: Email */}
                <div className="bg-[#FFFAF4] p-6 rounded-2xl border border-amber-200/80 shadow-sm flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-amber-300/60 flex items-center justify-center text-[#C68D53] shrink-0 font-bold shadow-xs">
                    <svg
                      className="w-6 h-6 text-[#C68D53]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg font-bold text-black">
                      Email
                    </h3>
                    <a
                      href="mailto:info@oralakeview.com"
                      className="text-black hover:text-[#C68D53] font-sans text-base sm:text-lg font-bold transition-colors block"
                    >
                      info@oralakeview.com
                    </a>
                    <p className="text-xs sm:text-sm text-black font-normal">
                      Fast responses guaranteed within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: TRANSIT MAP IMAGE */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="w-full h-[400px] sm:h-[480px] overflow-hidden rounded-3xl border border-amber-200/60 shadow-lg bg-[#181C24] p-2">
                <img
                  src={mapImg}
                  alt="Niederried Transit & Location Map"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-700 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE GOOGLE MAP */}
      <section className="py-16 bg-[#FFFAF4] border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <span className="w-8 h-[2px] bg-[#C68D53]" />
              <span className="text-amber-900 font-sans text-xs font-bold tracking-widest uppercase">
                LOCATION MAP
              </span>
              <span className="w-8 h-[2px] bg-[#C68D53]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-black tracking-tight">
              Find Us in Niederried bei Interlaken
            </h2>
            <p className="text-black font-sans text-sm sm:text-base font-normal">
              Located on the pristine shores of Lake Brienz, just 2 minutes from
              Niederried train station.
            </p>
          </div>

          <div className="w-full h-[450px] sm:h-[520px] rounded-3xl overflow-hidden shadow-xl border border-amber-200/80">
            <iframe
              title="ORA Lake View Hotel Location Map"
              src="https://maps.google.com/maps?q=Ora%20Lakeview%20Hotel%2C%20Hauptstrasse%2032%2C%203853%20Niederried%20bei%20Interlaken%2C%20Switzerland&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: ONLINE CONTACT & RESERVATION INQUIRY FORM */}
      <section className="py-20 lg:py-28 bg-[#FFFAF4]">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-amber-200/80 shadow-xl space-y-8">
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center space-x-3">
                <span className="w-8 h-[2px] bg-[#C68D53]" />
                <span className="text-amber-900 font-sans text-xs font-bold tracking-widest uppercase">
                  SEND US A MESSAGE
                </span>
                <span className="w-8 h-[2px] bg-[#C68D53]" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-black tracking-tight">
                Online Inquiry & Message
              </h2>

              <p className="text-black font-sans text-sm font-light max-w-xl mx-auto">
                Fill out the form below and our guest experience team will get
                back to you promptly.
              </p>
            </div>

            {submitted && (
              <div className="bg-emerald-50 border border-emerald-300 text-emerald-900 p-4 rounded-xl text-center text-xs font-bold tracking-wide animate-fade-in">
                ✓ Thank you! Your message has been sent successfully. We will
                reply to your email shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    placeholder="e.g. John Doe"
                    className="w-full bg-[#FFFAF4] border border-amber-200 rounded-xl px-4 py-3.5 text-xs text-black focus:outline-none focus:border-[#C68D53]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    placeholder="e.g. john@example.com"
                    className="w-full bg-[#FFFAF4] border border-amber-200 rounded-xl px-4 py-3.5 text-xs text-black focus:outline-none focus:border-[#C68D53]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState({ ...formState, phone: e.target.value })
                    }
                    placeholder="+41 77 973 19 81"
                    className="w-full bg-[#FFFAF4] border border-amber-200 rounded-xl px-4 py-3.5 text-xs text-black focus:outline-none focus:border-[#C68D53]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2">
                    Inquiry Subject
                  </label>
                  <select
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    className="w-full bg-[#FFFAF4] border border-amber-200 rounded-xl px-4 py-3.5 text-xs text-black focus:outline-none focus:border-[#C68D53]"
                  >
                    <option value="Room Booking Inquiry">
                      Room Booking Inquiry
                    </option>
                    <option value="Special Arrangements / Celebration">
                      Special Arrangements / Celebration
                    </option>
                    <option value="Transportation & Transit Guidance">
                      Transportation & Transit Guidance
                    </option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  placeholder="How can we assist you with your upcoming Swiss getaway?"
                  className="w-full bg-[#FFFAF4] border border-amber-200 rounded-xl p-4 text-xs text-black focus:outline-none focus:border-[#C68D53]"
                />
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="relative overflow-hidden bg-black text-white text-xs font-bold uppercase tracking-widest py-4 px-10 rounded-xl inline-flex items-center space-x-2 group/send shadow-lg"
                >
                  <span className="absolute inset-0 bg-[#C68D53] -skew-x-[45deg] scale-x-0 group-hover/send:scale-x-[1.8] transition-transform duration-500 ease-out origin-center z-0" />
                  <span className="relative z-10 font-sans">
                    SEND MESSAGE NOW
                  </span>
                  <span className="relative z-10 group-hover/send:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER COMPONENT */}
      <Footer />
    </div>
  );
};

export default Contact;
