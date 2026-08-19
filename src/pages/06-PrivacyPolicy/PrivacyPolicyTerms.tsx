import React from 'react';
import Footer from '../../components/Footer/Footer';

export const PrivacyPolicyTerms: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col pt-24">
      {/* Top Banner Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-amber-500/20">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <div className="inline-flex items-center space-x-3 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#C68D53]" />
            <span className="text-[#C68D53] text-xs font-bold uppercase tracking-widest">
              GUEST INFORMATION & POLICIES
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-white">
            Privacy Policy & Terms
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-sans font-light">
            Welcome to ORA Lake View Hotel. Below you will find our comprehensive privacy standards, terms of service, and essential guest stay guidelines for your alpine getaway in Switzerland.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 space-y-12 flex-1">
        {/* Core Privacy & Terms Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Privacy Policy Block */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 shadow-xl space-y-4 hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#C68D53]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl font-bold text-white tracking-tight">Privacy Policy</h2>
            <p className="text-slate-300 text-sm leading-relaxed font-sans">
              ORA Lakeview is committed to protecting your privacy. We collect and use personal data only for booking, communication, and improving guest experience. For detailed information, please refer to our full privacy guidelines outlined herein.
            </p>
          </div>

          {/* Terms & Conditions Block */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 shadow-xl space-y-4 hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#C68D53]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl font-bold text-white tracking-tight">Terms & Conditions</h2>
            <p className="text-slate-300 text-sm leading-relaxed font-sans">
              By booking with ORA Lakeview, you agree to our terms, including check-in and check-out times, payment policies, and adherence to our guest code of conduct.
            </p>
          </div>
        </div>

        {/* Detailed Hotel Policies Grid */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-[#C68D53]" />
            <h3 className="font-serif text-2xl font-semibold text-white tracking-wide uppercase">
              Hotel Guidelines & Amenities Policies
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Child Policies */}
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 space-y-3">
              <div className="flex items-center space-x-3 text-[#C68D53]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="font-bold text-sm text-white uppercase tracking-wider">Child Policies</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-sans leading-relaxed">
                <li className="flex items-start space-x-2">
                  <span className="text-[#C68D53] font-bold">•</span>
                  <span>Children 5 and under can stay for free.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#C68D53] font-bold">•</span>
                  <span>Children from 6 to 10 years old can stay for CHF 50.00 per child per night.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#C68D53] font-bold">•</span>
                  <span>Children from 11 to 17 years old can stay for CHF 75.00 per child per night.</span>
                </li>
              </ul>
            </div>

            {/* Internet & Parking */}
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 space-y-3">
              <div className="flex items-center space-x-3 text-[#C68D53]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.414 7.05a15 15 0 0121.172 0" />
                </svg>
                <h4 className="font-bold text-sm text-white uppercase tracking-wider">Internet & Parking</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-sans leading-relaxed">
                <li className="flex items-start space-x-2">
                  <span className="text-[#C68D53] font-bold">•</span>
                  <span><strong>Internet:</strong> WiFi is available in all areas and is free of charge.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#C68D53] font-bold">•</span>
                  <span><strong>Parking:</strong> Free private parking info is available on our facilities & services section.</span>
                </li>
              </ul>
            </div>

            {/* Pets Policy */}
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 space-y-3">
              <div className="flex items-center space-x-3 text-[#C68D53]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <h4 className="font-bold text-sm text-white uppercase tracking-wider">Pets Allowed</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-sans leading-relaxed">
                <li className="flex items-start space-x-2">
                  <span className="text-[#C68D53] font-bold">•</span>
                  <span>Pets are welcome at ORA Lake View with no extra charges.</span>
                </li>
              </ul>
            </div>

            {/* Check-in & Check-out */}
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 space-y-3">
              <div className="flex items-center space-x-3 text-[#C68D53]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="font-bold text-sm text-white uppercase tracking-wider">Check-in & Check-out</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-sans leading-relaxed">
                <li className="flex items-start space-x-2">
                  <span className="text-[#C68D53] font-bold">•</span>
                  <span><strong>Check-in:</strong> 2:00 PM to 10:00 PM</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#C68D53] font-bold">•</span>
                  <span><strong>Check-out:</strong> Until 11:00 AM</span>
                </li>
              </ul>
            </div>

            {/* Guest Booking Requirements */}
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 space-y-3">
              <div className="flex items-center space-x-3 text-[#C68D53]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <h4 className="font-bold text-sm text-white uppercase tracking-wider">Guest Requirements</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-sans leading-relaxed">
                <li className="flex items-start space-x-2">
                  <span className="text-[#C68D53] font-bold">•</span>
                  <span><strong>Address:</strong> Guests do not have to provide address details upon booking.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#C68D53] font-bold">•</span>
                  <span><strong>Phone Number:</strong> Guests must provide a valid phone number when booking.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#C68D53] font-bold">•</span>
                  <span><strong>Age Limit / Curfew:</strong> No age limit, no curfew.</span>
                </li>
              </ul>
            </div>

            {/* Stays & Damage Policies */}
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 space-y-3">
              <div className="flex items-center space-x-3 text-[#C68D53]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h4 className="font-bold text-sm text-white uppercase tracking-wider">Stays & Damage Policy</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-sans leading-relaxed">
                <li className="flex items-start space-x-2">
                  <span className="text-[#C68D53] font-bold">•</span>
                  <span><strong>30+ Night Stays:</strong> Stays longer than 30 nights are accepted up to 90 nights.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#C68D53] font-bold">•</span>
                  <span><strong>Group Stays:</strong> Policy exceptions apply for group reservations exceeding 4 rooms.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#C68D53] font-bold">•</span>
                  <span><strong>Damage Deposit:</strong> Guests are not required to pay a damage deposit.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Inspirational Quote Card */}
        <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/40 border border-amber-500/30 rounded-3xl p-8 md:p-12 text-center space-y-4 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 text-amber-500/10 text-9xl font-serif select-none pointer-events-none">
            “
          </div>
          <p className="font-serif italic text-xl md:text-3xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            “The lake and the mountains have become my landscape, my real world.”
          </p>
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-[#C68D53]">
            — GEORGES SIMENON
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyTerms;
