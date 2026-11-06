import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MessageCircle, Play } from 'lucide-react';
import { Navbar } from './Navbar.tsx';

interface HeroSectionProps {
  onExploreServices?: () => void;
  onContactClick?: () => void;
  onNavClick?: (item: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreServices,
  onContactClick,
  onNavClick,
}) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen w-full p-3 sm:p-5 md:p-6 box-border bg-[#050505] relative flex flex-col justify-between">
      {/* Top Fixed Navbar */}
      <Navbar onNavClick={onNavClick} onOrderClick={onContactClick} />

      {/* Main Cinematic Card Container */}
      <div className="relative mt-16 sm:mt-20 w-full min-h-[calc(100vh-5rem)] rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-black border border-white/10 flex flex-col justify-end p-6 sm:p-10 md:p-14 lg:p-16 select-none shadow-2xl">
        {/* Background Cinematic Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105 transition-transform duration-1000"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />

        {/* Ambient Dark Gradients & Noise */}
        <div className="noise-overlay absolute inset-0 opacity-[0.45] mix-blend-overlay pointer-events-none z-[1]" />
        <div className="bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent absolute inset-0 pointer-events-none z-[2]" />
        <div className="bg-gradient-to-r from-[#050505]/90 via-[#050505]/50 to-transparent absolute inset-0 pointer-events-none z-[2]" />

        {/* Hero Central / Bottom Content */}
        <div className="relative z-10 max-w-5xl pointer-events-auto">
          {/* Logo Badge & Category */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-[#FFD400] shadow-lg shadow-[#FFD400]/25 bg-black p-0.5 shrink-0">
              <img
                src="/assets/aistudio/unnamed_3042114e.jpg"
                alt="Trend Line Media Official Logo"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#171717]/80 backdrop-blur-md border border-[#FFD400]/30 text-xs sm:text-sm text-[#FFD400] font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Premium Digital Creative Advertising Agency</span>
            </div>
          </motion.div>

          {/* Main Title: TREND LINE MEDIA */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[0.95] mb-4 sm:mb-5"
          >
            TREND LINE <span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.35)]">MEDIA</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-2xl md:text-3xl font-light text-[#FFD400] italic font-serif tracking-wide mb-4 sm:mb-6"
          >
            “Creative Ideas. Powerful Visuals. Digital Impact.”
          </motion.p>

          {/* Agency Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed mb-8 sm:mb-10 font-normal"
          >
            We turn your ideas into powerful visual experiences. From professional video editing and AI video production to creative graphic design, we help brands stand out and grow.
          </motion.p>

          {/* Two CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 sm:gap-5"
          >
            {/* CTA 1: Explore Our Services */}
            <button
              type="button"
              onClick={() => {
                onExploreServices ? onExploreServices() : handleScrollTo('services');
              }}
              className="group bg-[#FFD400] hover:bg-[#ffe14d] text-black font-bold text-sm sm:text-base rounded-full inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 transition-all duration-300 shadow-xl shadow-[#FFD400]/25 cursor-pointer active:scale-95"
            >
              <span>Explore Our Services</span>
              <span className="w-7 h-7 rounded-full bg-black flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <ArrowRight className="w-4 h-4 text-[#FFD400]" />
              </span>
            </button>

            {/* CTA 2: Contact Us */}
            <button
              type="button"
              onClick={() => {
                onContactClick ? onContactClick() : handleScrollTo('contact');
              }}
              className="group bg-[#171717]/90 hover:bg-[#222222] text-white font-medium text-sm sm:text-base rounded-full inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 border border-white/15 hover:border-[#FFD400]/50 transition-all duration-300 backdrop-blur-md cursor-pointer active:scale-95 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Contact Us</span>
            </button>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left"
          >
            <div>
              <span className="block text-xl sm:text-2xl font-black text-[#FFD400]">500+</span>
              <span className="text-[11px] sm:text-xs text-gray-400">Videos Edited</span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-black text-white">AI Studio</span>
              <span className="text-[11px] sm:text-xs text-gray-400">Character & Avatars</span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-black text-[#FFD400]">24 - 48h</span>
              <span className="text-[11px] sm:text-xs text-gray-400">Fast Turnaround</span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-black text-white">₹250+</span>
              <span className="text-[11px] sm:text-xs text-gray-400">Transparent Pricing</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
