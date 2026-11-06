import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Video, Cpu, Palette, ShoppingCart, Check, Clock, Sparkles } from 'lucide-react';
import { formatINR } from '../utils/text.ts';

export interface ServiceItem {
  id: string;
  category: 'video' | 'ai' | 'graphic';
  title: string;
  price: number;
  duration?: string;
  image: string;
  description: string;
  features: string[];
  popular?: boolean;
}

interface ServicesSectionProps {
  onOrderNow: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOrderNow }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'video' | 'ai' | 'graphic'>('all');

  // Section 3: Video Editing Services
  const videoServices: ServiceItem[] = [
    {
      id: 'v1',
      category: 'video',
      title: 'Video Editing – 60 Seconds',
      price: 750,
      duration: '60 Seconds',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive high-impact 60-second video edit with seamless cuts, transitions, sound effects, and color grading.',
      features: ['Full 60s High-Retention Edit', 'Color Correction & Grading', 'Dynamic Sound Effects & SFX', 'Subtitles & Motion Graphics'],
      popular: true,
    },
    {
      id: 'v2',
      category: 'video',
      title: 'Video Editing – 20 Seconds',
      price: 499,
      duration: '20 Seconds',
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80',
      description: 'Fast-paced, hook-driven 20-second edit engineered specifically for Instagram Reels, YouTube Shorts, and TikTok viral traction.',
      features: ['Viral Hook Formatting (9:16)', 'Quick Pacing & Cut Rhythm', 'Animated Captions & Popups', 'Trend-Ready Audio Sync'],
    },
    {
      id: 'v3',
      category: 'video',
      title: 'Video + Voice Over – 60 Seconds',
      price: 999,
      duration: '60 Seconds',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
      description: 'Complete commercial package: Professional voice-over recording synchronized flawlessly with a cinematic 60-second video edit.',
      features: ['Studio Voice-Over (Male/Female)', 'Pro Audio Mastering & Mixing', 'B-Roll & Visual Storytelling', 'Ready-to-Publish Export'],
      popular: true,
    },
    {
      id: 'v4',
      category: 'video',
      title: 'Voice Over Video – 20 Seconds',
      price: 799,
      duration: '20 Seconds',
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
      description: 'High-energy 20-second punchy promo video with voice-over narration built for paid ads and conversion campaigns.',
      features: ['Studio Voice Narration (20s)', 'Punchy Motion Graphics', 'Licensed Background Track', 'Conversion Hook Integration'],
    },
    {
      id: 'v5',
      category: 'video',
      title: 'Video + Voice Over – 30 Seconds',
      price: 850,
      duration: '30 Seconds',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80',
      description: 'The golden standard 30-second commercial: Balanced pacing with professional voice talent and crisp branded video montage.',
      features: ['30-Second Commercial Timing', 'Pro Voice Actor Sync', 'Dynamic Lower Thirds & Titles', 'Color Graded 4K/1080p Export'],
    },
  ];

  // Section 4: AI Video Services
  const aiServices: ServiceItem[] = [
    {
      id: 'ai1',
      category: 'ai',
      title: 'Multiple Character – 60 Seconds',
      price: 3999,
      duration: '60 Seconds',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      description: 'Next-generation cinematic AI video with multiple realistic characters, scripted dialogues, and photorealistic virtual environments.',
      features: ['Multiple AI Characters & Avatars', 'Complex Multi-Speaker Dialogue', 'Photorealistic Virtual Environments', 'Cinema Lighting & Camera Movement'],
      popular: true,
    },
    {
      id: 'ai2',
      category: 'ai',
      title: 'Single Character – 25 Seconds',
      price: 1500,
      duration: '25 Seconds',
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
      description: 'Engaging single AI avatar or character presenting your product or message with natural lip-sync and expressive gestures.',
      features: ['Single Custom AI Avatar', 'Perfect Lip-Sync Accuracy', 'Custom Scripted Presentation', 'Vertical or Horizontal Aspect'],
    },
    {
      id: 'ai3',
      category: 'ai',
      title: 'Double Character – 60 Seconds',
      price: 2999,
      duration: '60 Seconds',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      description: 'Engaging narrative dialogue between two distinct AI characters over 60 seconds with fluid scene cutting and audio realism.',
      features: ['Two Conversing AI Characters', 'Seamless Turn-Taking Dialogue', 'Adaptive Scene Camera Angles', 'Full Audio & Ambient FX'],
    },
    {
      id: 'ai4',
      category: 'ai',
      title: 'Single Character – 60 Seconds',
      price: 1999,
      duration: '60 Seconds',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
      description: 'In-depth 60-second AI presenter video ideal for product explainers, educational content, course intros, and brand dispatches.',
      features: ['60-Second Extended AI Avatar', 'Custom Wardrobe & Accent Tone', 'B-Roll & Graphics Cutaways', 'Multi-Language AI Voice Options'],
    },
  ];

  // Section 5: Graphic Design Services
  const graphicServices: ServiceItem[] = [
    {
      id: 'g1',
      category: 'graphic',
      title: 'Catalogue Design',
      price: 600,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
      description: 'Professional product catalogue layout designed to highlight your collection with clean grids, typography, and specifications.',
      features: ['Multi-Page Product Grid', 'High-Resolution Print & PDF', 'Modern Minimalist Typography', 'Editable Source Files'],
    },
    {
      id: 'g2',
      category: 'graphic',
      title: 'Poster Design',
      price: 250,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
      description: 'Creative promotional posters for movies, club events, festivals, digital marketing campaigns, and corporate announcements.',
      features: ['Eye-Catching Visual Hierarchy', 'Ready for Social & Print', 'Custom Creative Artwork', 'Rapid 24h Turnaround'],
    },
    {
      id: 'g3',
      category: 'graphic',
      title: 'Flex Board Design',
      price: 500,
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80',
      description: 'Large-scale outdoor flex boards, hoardings, shopfront banners, and exhibition standees configured in vector scale.',
      features: ['Vector Large-Format Resolution', 'High Contrast for Distance', 'Print-Shop Ready CYMK Output', 'Custom Dimensions Supported'],
    },
    {
      id: 'g4',
      category: 'graphic',
      title: 'Logo Making',
      price: 2000,
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
      description: 'Distinctive, memorable corporate brand logo creation with concept ideation, icon geometry, and full brand color scheme.',
      features: ['3 Unique Initial Concepts', 'Vector Files (AI, SVG, PNG, EPS)', 'Brand Color Palette Guide', 'Full Commercial Rights'],
      popular: true,
    },
    {
      id: 'g5',
      category: 'graphic',
      title: 'Brochure Design',
      price: 500,
      image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80',
      description: 'Bifold, trifold, or booklet brochures tailored to communicate your company services, portfolio, and value proposition.',
      features: ['Trifold or Bifold Setup', 'Corporate Information Flow', 'Custom Icons & Photography Sync', 'Print-Ready CMYK 300 DPI'],
    },
    {
      id: 'g6',
      category: 'graphic',
      title: 'Label Design',
      price: 400,
      image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=800&q=80',
      description: 'Custom product packaging and bottle labels designed for retail shelf appeal, compliance text, and barcode placement.',
      features: ['Die-Cut Line Preparation', 'Retail Ready Aesthetic', 'Nutritional / Compliance Space', 'Foil & Emboss Compatible'],
    },
  ];

  const renderCard = (service: ServiceItem) => (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className={`bg-[#171717] rounded-3xl overflow-hidden border ${
        service.popular ? 'border-[#FFD400]/60 shadow-xl shadow-[#FFD400]/10' : 'border-white/10'
      } flex flex-col justify-between group transition-all duration-300 hover:border-[#FFD400] hover:-translate-y-1`}
    >
      <div>
        {/* Thumbnail Preview Image */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-black/60">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/40 to-transparent" />

          {/* Duration or Category Tag */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            {service.duration ? (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono text-gray-200">
                <Clock className="w-3 h-3 text-[#FFD400]" />
                {service.duration}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono text-gray-200">
                <Palette className="w-3 h-3 text-[#FFD400]" />
                Design
              </span>
            )}

            {service.popular && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E52329] text-[10px] font-bold text-white uppercase tracking-wider shadow-md">
                Popular
              </span>
            )}
          </div>

          {/* Floating Price Badge */}
          <div className="absolute bottom-3 right-3">
            <span className="px-3.5 py-1.5 rounded-xl bg-black/90 backdrop-blur-md border border-[#FFD400]/50 text-base sm:text-lg font-black text-[#FFD400] tracking-tight shadow-lg">
              {formatINR(service.price)}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#FFD400] transition-colors leading-snug">
            {service.title}
          </h3>

          <p className="text-xs sm:text-sm text-gray-400 mb-5 leading-relaxed">
            {service.description}
          </p>

          {/* Features list */}
          <ul className="space-y-2 mb-6 m-0 p-0 list-none">
            {service.features.map((feat, fIdx) => (
              <li key={fIdx} className="flex items-start gap-2 text-xs text-gray-300">
                <Check className="w-3.5 h-3.5 text-[#FFD400] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Footer with Price and Order Now Button */}
      <div className="p-5 sm:p-6 pt-0 border-t border-white/5 flex items-center justify-between gap-4 mt-auto">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-mono text-gray-500 tracking-wider">All Inclusive</span>
          <span className="text-xl font-black text-[#FFD400]">
            {formatINR(service.price)}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onOrderNow(service)}
          className="flex-1 bg-[#FFD400] hover:bg-[#ffe047] text-black font-bold text-xs sm:text-sm rounded-full py-2.5 px-4 flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-md shadow-[#FFD400]/20 active:scale-95"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Order Now</span>
        </button>
      </div>
    </motion.div>
  );

  return (
    <section id="services" className="bg-[#050505] py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-xs uppercase tracking-widest text-[#FFD400] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Premium Creative Services</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-4">
            Transform Your Brand with <span className="text-[#FFD400]">Trend Line Media</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-400">
            Transparent pricing, swift delivery, and world-class craftsmanship across video editing, AI production, and graphic design.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#FFD400] text-black shadow-lg shadow-[#FFD400]/25'
                  : 'bg-[#171717] text-gray-300 hover:text-white border border-white/10'
              }`}
            >
              All Services ({videoServices.length + aiServices.length + graphicServices.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('video')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'video'
                  ? 'bg-[#FFD400] text-black shadow-lg shadow-[#FFD400]/25'
                  : 'bg-[#171717] text-gray-300 hover:text-white border border-white/10'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Video Editing</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('ai')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'ai'
                  ? 'bg-[#FFD400] text-black shadow-lg shadow-[#FFD400]/25'
                  : 'bg-[#171717] text-gray-300 hover:text-white border border-white/10'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>AI Video Production</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('graphic')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'graphic'
                  ? 'bg-[#FFD400] text-black shadow-lg shadow-[#FFD400]/25'
                  : 'bg-[#171717] text-gray-300 hover:text-white border border-white/10'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Graphic Design</span>
            </button>
          </div>
        </div>

        {/* SECTION 3: VIDEO EDITING SERVICES */}
        {(activeTab === 'all' || activeTab === 'video') && (
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-white/10 gap-3">
              <div>
                <span className="text-xs font-mono uppercase text-[#FFD400] tracking-widest block mb-1">
                  Section 3 • Production
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2.5">
                  <Video className="w-6 h-6 text-[#FFD400]" />
                  <span>Video Editing Services</span>
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 max-w-md">
                Fast-turnaround cinematic edits, voice-over recording, soundscapes, and color grading.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoServices.map(renderCard)}
            </div>
          </div>
        )}

        {/* SECTION 4: AI VIDEO SERVICES */}
        {(activeTab === 'all' || activeTab === 'ai') && (
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-white/10 gap-3">
              <div>
                <span className="text-xs font-mono uppercase text-[#FFD400] tracking-widest block mb-1">
                  Section 4 • Artificial Intelligence
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2.5">
                  <Cpu className="w-6 h-6 text-[#FFD400]" />
                  <span>AI Video Services</span>
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 max-w-md">
                Photorealistic AI digital avatars, scripted dialogues, and multi-character virtual productions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiServices.map(renderCard)}
            </div>
          </div>
        )}

        {/* SECTION 5: GRAPHIC DESIGN SERVICES */}
        {(activeTab === 'all' || activeTab === 'graphic') && (
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-white/10 gap-3">
              <div>
                <span className="text-xs font-mono uppercase text-[#FFD400] tracking-widest block mb-1">
                  Section 5 • Brand Visuals
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2.5">
                  <Palette className="w-6 h-6 text-[#FFD400]" />
                  <span>Creative Design Solutions</span>
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 max-w-md">
                High-resolution marketing flex boards, catalogues, brochures, labels, and vector logos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {graphicServices.map(renderCard)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
