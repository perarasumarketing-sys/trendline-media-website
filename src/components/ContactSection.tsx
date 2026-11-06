import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Send, CheckCircle2, ArrowRight, Phone, Mail, Clock, MapPin } from 'lucide-react';
import { generateWhatsAppUrl } from '../utils/text.ts';

const WHATSAPP_NUMBER = '9280079272';
const INSTAGRAM_URL = 'https://instagram.com/trendlinemedia';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService || 'Video Editing – 60 Seconds',
    footageLink: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const serviceOptions = [
    'Video Editing – 60 Seconds (₹750)',
    'Video Editing – 20 Seconds (₹499)',
    'Video + Voice Over – 60 Seconds (₹999)',
    'Voice Over Video – 20 Seconds (₹799)',
    'Video + Voice Over – 30 Seconds (₹850)',
    'AI Video: Multiple Character – 60s (₹3,999)',
    'AI Video: Single Character – 25s (₹1,500)',
    'AI Video: Double Character – 60s (₹2,999)',
    'AI Video: Single Character – 60s (₹1,999)',
    'Catalogue Design (₹600)',
    'Poster Design (₹250)',
    'Flex Board Design (₹500)',
    'Logo Making (₹2,000)',
    'Brochure Design (₹500)',
    'Label Design (₹400)',
    'Custom Agency Project / Consultation',
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      errs.phone = 'Please provide a valid phone or WhatsApp number.';
    }
    if (!formData.service) errs.service = 'Please select a service.';
    if (!formData.message.trim()) errs.message = 'Please describe your project requirements.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const url = generateWhatsAppUrl(WHATSAPP_NUMBER, {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: formData.service,
      footageLink: formData.footageLink,
      brief: formData.message,
    });

    setWhatsappUrl(url);
    setSubmitted(true);

    // Open WhatsApp link in a new tab safely
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setSubmitted(false);
    setWhatsappUrl('');
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'Video Editing – 60 Seconds',
      footageLink: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="bg-[#050505] py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-[#FFD400]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Contact Information & Direct Channels */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-xs uppercase tracking-widest text-[#FFD400] font-semibold mb-4">
              <span>Section 8 • Contact Us</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
              Let’s Create <span className="text-[#FFD400]">Something Amazing.</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              Have a project in mind? Let’s bring your ideas to life. Connect directly with our production desk for quotes, consultations, and rapid execution.
            </p>

            {/* Direct Connect Buttons */}
            <div className="space-y-3.5 mb-10">
              <a
                href={`https://wa.me/91${WHATSAPP_NUMBER}?text=Hello%20Trend%20Line%20Media%2C%20I%20have%20a%20project%20enquiry`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-[#171717] hover:bg-[#202020] border border-[#25D366]/40 hover:border-[#25D366] transition-all group shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                    <MessageCircle className="w-5 h-5 fill-[#25D366]" />
                  </div>
                  <div className="text-left">
                    <span className="block text-sm font-bold text-white group-hover:text-[#25D366] transition-colors">
                      WhatsApp Quick Chat
                    </span>
                    <span className="block text-xs font-mono text-gray-400">
                      +{WHATSAPP_NUMBER} (Instant Response)
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#25D366] group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-[#171717] hover:bg-[#202020] border border-pink-500/30 hover:border-pink-500 transition-all group shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-pink-500/15 border border-pink-500/40 flex items-center justify-center text-pink-400">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-sm font-bold text-white group-hover:text-pink-400 transition-colors">
                      Follow on Instagram
                    </span>
                    <span className="block text-xs font-mono text-gray-400">
                      @trendlinemedia (Behind the Scenes)
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-pink-400 group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            {/* Agency Details */}
            <div className="p-6 rounded-3xl bg-[#121212] border border-white/10 space-y-3.5 text-xs text-gray-400">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FFD400] shrink-0" />
                <span>Direct Line: +91 {WHATSAPP_NUMBER}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#FFD400] shrink-0" />
                <span>Working Hours: Mon – Sat (10:00 AM – 8:00 PM IST)</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#FFD400] shrink-0" />
                <span>Global Remote Digital Agency • Made for Visionary Brands</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#171717] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-10 sm:py-12">
                  <div className="w-16 h-16 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Enquiry Dispatched!
                  </h3>
                  <p className="text-sm text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your project brief has been compiled and forwarded to our lead producer.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#20be5b] text-black font-bold text-sm rounded-full px-6 py-3.5 inline-flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp (+91 {WHATSAPP_NUMBER})</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="bg-white/10 hover:bg-white/15 text-white font-medium text-sm rounded-full px-6 py-3.5 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-6">
                    <span className="text-[11px] font-mono text-[#FFD400] uppercase tracking-wider block mb-1">
                      Project Consultation Form
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      Start Your Project
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Your Full Name <span className="text-[#E52329]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="e.g. Vikram Malhotra"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        className={`w-full bg-[#202020] border ${
                          errors.name ? 'border-[#E52329]' : 'border-white/10 focus:border-[#FFD400]'
                        } rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors`}
                      />
                      {errors.name && <p className="text-xs text-[#E52329] mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone & Email Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-semibold text-gray-300 mb-1.5">
                          Phone / WhatsApp Number <span className="text-[#E52329]">*</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          placeholder="e.g. 9280079272"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: '' });
                          }}
                          className={`w-full bg-[#202020] border ${
                            errors.phone ? 'border-[#E52329]' : 'border-white/10 focus:border-[#FFD400]'
                          } rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors font-mono`}
                        />
                        {errors.phone && <p className="text-xs text-[#E52329] mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-300 mb-1.5">
                          Email Address (Optional)
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          placeholder="vikram@brand.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#202020] border border-white/10 focus:border-[#FFD400] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Select Service Required <span className="text-[#E52329]">*</span>
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => {
                          setFormData({ ...formData, service: e.target.value });
                          if (errors.service) setErrors({ ...errors, service: '' });
                        }}
                        className="w-full bg-[#202020] border border-white/10 focus:border-[#FFD400] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#171717] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.service && <p className="text-xs text-[#E52329] mt-1">{errors.service}</p>}
                    </div>

                    {/* Footage / Asset Link */}
                    <div>
                      <label htmlFor="contact-footage" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Raw Footage / Reference Link (Optional)
                      </label>
                      <input
                        id="contact-footage"
                        type="url"
                        placeholder="Google Drive, Dropbox, YouTube, Vimeo..."
                        value={formData.footageLink}
                        onChange={(e) => setFormData({ ...formData, footageLink: e.target.value })}
                        className="w-full bg-[#202020] border border-white/10 focus:border-[#FFD400] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Project Message / Requirements <span className="text-[#E52329]">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        placeholder="Describe your video editing, AI video, or graphic design project goals, deadline, style references..."
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: '' });
                        }}
                        className={`w-full bg-[#202020] border ${
                          errors.message ? 'border-[#E52329]' : 'border-white/10 focus:border-[#FFD400]'
                        } rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors resize-none`}
                      />
                      {errors.message && <p className="text-xs text-[#E52329] mt-1">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-[#FFD400] hover:bg-[#ffe14d] text-black font-bold text-sm sm:text-base rounded-full py-3.5 px-6 flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer shadow-xl shadow-[#FFD400]/25 active:scale-95"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit & Connect on WhatsApp ({WHATSAPP_NUMBER})</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-gray-500 text-center pt-1">
                      🔒 Your details are kept private. Clicking submit automatically formats your enquiry and launches our WhatsApp direct desk.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
