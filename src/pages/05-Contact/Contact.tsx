import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const BOOKING_URL =
  'https://direct-book.com/properties/lakeviewhotelrestaurant?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=CHF';

export const Contact: React.FC = () => {
  const { getContent } = useLanguage();
  const contactContent = getContent('contact');

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-32 pb-24">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4 mb-16">
        <span className="text-amber-400 font-serif italic text-lg tracking-wider uppercase block">
          Reach Out To Us
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-white">
          {contactContent?.title || 'Get In Touch With Us'}
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base">
          {contactContent?.subtitle}
        </p>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900/80 rounded-3xl p-6 md:p-8 border border-white/10 space-y-6 shadow-2xl">
            <h2 className="font-serif text-2xl font-medium text-amber-300">
              Hotel Information
            </h2>

            <div className="space-y-4 text-xs md:text-sm text-white/80">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-400/10 text-amber-400 flex items-center justify-center text-lg shrink-0">
                  📍
                </div>
                <div>
                  <h4 className="font-semibold text-white">{contactContent?.addressTitle || 'Address'}</h4>
                  <p className="text-white/60 leading-relaxed">
                    {contactContent?.addressValue || 'Hauptstrasse 44, 3855 Brienz, Switzerland'}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-400/10 text-amber-400 flex items-center justify-center text-lg shrink-0">
                  📞
                </div>
                <div>
                  <h4 className="font-semibold text-white">{contactContent?.phoneTitle || 'Phone'}</h4>
                  <a href="tel:+41339511341" className="text-white/60 hover:text-amber-400 transition-colors">
                    {contactContent?.phoneValue || '+41 33 951 13 41'}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-400/10 text-amber-400 flex items-center justify-center text-lg shrink-0">
                  ✉️
                </div>
                <div>
                  <h4 className="font-semibold text-white">{contactContent?.emailTitle || 'Email'}</h4>
                  <a href="mailto:info@oralakeview.com" className="text-white/60 hover:text-amber-400 transition-colors">
                    {contactContent?.emailValue || 'info@oralakeview.com'}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-400/10 text-amber-400 flex items-center justify-center text-lg shrink-0">
                  ⏰
                </div>
                <div>
                  <h4 className="font-semibold text-white">{contactContent?.hoursTitle || 'Front Desk'}</h4>
                  <p className="text-white/60">{contactContent?.hoursValue || '07:30 - 22:00 daily'}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block text-center py-3.5 rounded-full text-xs font-bold tracking-widest uppercase text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:scale-[1.02] transition-transform shadow-xl"
              >
                Book Your Stay Online
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-slate-900/80 rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl">
            <h2 className="font-serif text-2xl font-medium text-white mb-6">
              Send Us A Message
            </h2>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-amber-400/20 border border-amber-400/50 text-amber-200 text-center space-y-2 animate-fade-in">
                <span className="text-3xl">✨</span>
                <h3 className="font-serif text-xl font-bold">Thank You!</h3>
                <p className="text-xs">
                  {contactContent?.form?.success || 'Thank you! Your message has been sent successfully.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-white/70">
                      {contactContent?.form?.name || 'Your Full Name'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-amber-400 transition-colors"
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-white/70">
                      {contactContent?.form?.email || 'Email Address'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-amber-400 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-white/70">
                    {contactContent?.form?.subject || 'Subject'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-amber-400 transition-colors"
                    placeholder="Room inquiry / Dining reservation"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-white/70">
                    {contactContent?.form?.message || 'Message'}
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-amber-400 transition-colors"
                    placeholder="How can we assist you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full text-xs font-bold tracking-widest uppercase text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all shadow-xl hover:scale-[1.01]"
                >
                  {contactContent?.form?.submit || 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Embedded Google Map */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-96 relative">
          <iframe
            title="ORA Lake View Hotel Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2737.382424901235!2d8.0366!3d46.7554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478f9f6000000000%3A0x0!2sHauptstrasse%2044%2C%203855%20Brienz%2C%20Switzerland!5e0!3m2!1sen!2sch!4v1700000000000!5m2!1sen!2sch"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
