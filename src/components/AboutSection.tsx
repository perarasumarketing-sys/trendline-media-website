import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Palette, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-60px' });

  const highlights = [
    {
      title: 'Creative Excellence',
      icon: Palette,
      description:
        'Crafting visually captivating video narratives, crisp edits, and brand visuals that immediately seize viewer retention and drive conversions.',
      badge: 'Editorial Mastery',
    },
    {
      title: 'Advanced AI Production',
      icon: Cpu,
      description:
        'Harnessing state-of-the-art AI character generation, photorealistic avatar lip-sync, and automated multi-angle workflows for next-gen media.',
      badge: 'Cutting-Edge AI',
    },
    {
      title: 'Professional Digital Design',
      icon: Sparkles,
      description:
        'From high-impact marketing flex boards and event posters to comprehensive corporate brochures, catalogues, and iconic logo design.',
      badge: 'Brand Architecture',
    },
  ];

  return (
    <section id="about" className="bg-[#050505] py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FFD400]/5 rounded-full blur-[140px] pointer-events-none" />

      <div ref={containerRef} className="max-w-6xl mx-auto relative z-10">
        {/* Section Header Card */}
        <div className="bg-[#171717] rounded-3xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-2xl relative overflow-hidden text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-xs uppercase tracking-widest text-[#FFD400] font-semibold mb-6">
            <span>About Trend Line Media</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight"
          >
            Creativity Meets <span className="text-[#FFD400] font-serif italic">Technology.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Trend Line Media is a creative digital media agency specializing in professional video editing, AI-powered video production, voice-over services and graphic design.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.65, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed"
          >
            We help businesses, brands and creators transform their ideas into engaging digital content through creativity, technology and professional execution.
          </motion.p>
        </div>

        {/* 3 Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + idx * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-[#171717] rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#FFD400]/40 transition-all duration-300 group shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FFD400]/10 border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400] transition-transform duration-300 group-hover:scale-110">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 group-hover:text-[#FFD400] transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFD400] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs text-gray-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD400]" />
                  <span>Guaranteed Agency Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
