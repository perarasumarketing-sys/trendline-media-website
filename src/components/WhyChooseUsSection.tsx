import React from 'react';
import { motion } from 'framer-motion';
import { Award, IndianRupee, Sparkles, Zap, CheckCircle2 } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const features = [
    {
      title: 'Professional Quality',
      icon: Award,
      tag: 'Cinema Grade',
      description:
        'Industry-standard color grading, high-retention storytelling, studio-grade sound mixing, and pixel-perfect graphic vector precision.',
      bullets: ['Broadcast 4K master exports', 'Custom audio engineering & SFX', 'Flawless brand identity adherence'],
    },
    {
      title: 'Affordable Pricing',
      icon: IndianRupee,
      tag: 'Honest & Clear',
      description:
        'Transparent rates starting from just ₹250 for design and ₹499 for video editing. Zero hidden charges, enterprise agency quality at creator-friendly prices.',
      bullets: ['Clear upfront pricing cards', 'No hidden revision surprises', 'Scalable packages for monthly growth'],
    },
    {
      title: 'Creative AI Solutions',
      icon: Sparkles,
      tag: 'Next-Gen Tech',
      description:
        'Harness proprietary AI avatar pipelines, dynamic multi-character scripts, and automated captioning to produce world-class media at 10x speed.',
      bullets: ['Single & multi-character AI videos', 'Natural photorealistic lip-sync', 'Multi-language voice options'],
    },
    {
      title: 'Fast Delivery',
      icon: Zap,
      tag: '24-48 Hours',
      description:
        'Rapid turnaround workflows optimized for social trends, ad campaign launches, and immediate business announcements without sacrificing craft.',
      bullets: ['24-hour expedited options available', 'Real-time project updates on WhatsApp', 'On-time delivery commitment'],
    },
  ];

  return (
    <section id="why-us" className="bg-[#050505] py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFD400]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-xs uppercase tracking-widest text-[#FFD400] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Section 7 • Competitive Edge</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-4">
            Why <span className="text-[#FFD400]">Trend Line Media?</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-400">
            We bridge the gap between creative visual artistry and modern digital technology to deliver marketing assets that produce measurable impact.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-[#171717] rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-[#FFD400]/50 transition-all duration-300 group flex flex-col justify-between shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFD400]/10 border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400] transition-transform duration-300 group-hover:scale-110">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase text-[#FFD400] tracking-wider bg-black/60 px-2.5 py-1 rounded-full border border-white/10">
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFD400] transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  {feat.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-[11px] text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD400] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
