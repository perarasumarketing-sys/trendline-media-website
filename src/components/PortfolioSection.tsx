import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Eye, X, Sparkles, ExternalLink } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  category: 'video' | 'ai' | 'commercial' | 'poster' | 'logo' | 'branding';
  categoryLabel: string;
  image: string;
  videoUrl?: string;
  client: string;
  tags: string[];
}

interface PortfolioSectionProps {
  onSelectProject?: (item: PortfolioItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 'p1',
      title: 'Neon Horizon — Cyberpunk Trailer',
      category: 'video',
      categoryLabel: 'Video Editing Projects',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4',
      client: 'Apex Media Stream',
      tags: ['60s Cut', 'SFX Mastering', 'Color Grade'],
    },
    {
      id: 'p2',
      title: 'Synthetica — AI Virtual Spokesperson',
      category: 'ai',
      categoryLabel: 'AI Video Productions',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4',
      client: 'NeuroTech Solutions',
      tags: ['Multiple Character', 'AI Lip-Sync', 'Virtual Stage'],
    },
    {
      id: 'p3',
      title: 'Velocity Sportswear — Commercial Campaign',
      category: 'commercial',
      categoryLabel: 'Promotional Advertisements',
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4',
      client: 'Velocity Global',
      tags: ['Voice Over', 'Dynamic 30s', 'TV & Web Ad'],
    },
    {
      id: 'p4',
      title: 'Midnight Echo Film Festival Poster',
      category: 'poster',
      categoryLabel: 'Poster Designs',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
      client: 'Noir Film Circuit',
      tags: ['Print & Social', 'Minimalist', 'Typography'],
    },
    {
      id: 'p5',
      title: 'Apex Financial — Corporate Brand Identity',
      category: 'logo',
      categoryLabel: 'Logo Designs',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
      client: 'Apex Capital Group',
      tags: ['Vector Mark', 'Palette System', 'Style Guide'],
    },
    {
      id: 'p6',
      title: 'Verve Artisan Roasters Packaging & Brand',
      category: 'branding',
      categoryLabel: 'Branding Projects',
      image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=800&q=80',
      client: 'Verve Botanicals',
      tags: ['Label Design', 'Flex Board', 'Catalogue'],
    },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="work" className="bg-[#050505] py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-xs uppercase tracking-widest text-[#FFD400] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Section 6 • Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
              Our <span className="text-[#FFD400]">Work</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mt-2 max-w-xl">
              A curated selection of high-retention video edits, hyper-realistic AI video productions, promotional ads, and graphic designs.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'video', label: 'Video Editing' },
              { id: 'ai', label: 'AI Videos' },
              { id: 'commercial', label: 'Commercial Ads' },
              { id: 'poster', label: 'Posters' },
              { id: 'logo', label: 'Logos' },
              { id: 'branding', label: 'Branding' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#FFD400] text-black shadow-md shadow-[#FFD400]/20'
                    : 'bg-[#171717] text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl overflow-hidden bg-[#171717] border border-white/10 hover:border-[#FFD400]/60 transition-all duration-300 shadow-xl"
              >
                {/* Media Image */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-medium text-[#FFD400]">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Play / Preview Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                    {item.videoUrl ? (
                      <button
                        type="button"
                        onClick={() => setSelectedVideo(item)}
                        className="w-14 h-14 rounded-full bg-[#FFD400] text-black flex items-center justify-center shadow-xl shadow-[#FFD400]/30 transition-transform duration-300 hover:scale-110 cursor-pointer"
                        aria-label={`Preview video for ${item.title}`}
                      >
                        <Play className="w-6 h-6 fill-black ml-1" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => onSelectProject?.(item)}
                        className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/40 flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer"
                        aria-label={`View ${item.title}`}
                      >
                        <Eye className="w-6 h-6" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500 block mb-1">
                    Client: {item.client}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#FFD400] transition-colors mb-3">
                    {item.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md bg-[#252525] text-[10px] font-medium text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Video Project Preview Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVideo(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-[#171717] rounded-3xl overflow-hidden border border-white/15 shadow-2xl z-10"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 flex items-center justify-between border-b border-white/10 bg-black/50">
                <div>
                  <span className="text-[10px] font-mono text-[#FFD400] uppercase tracking-wider">
                    {selectedVideo.categoryLabel}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {selectedVideo.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedVideo(null)}
                  className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close video preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video w-full bg-black">
                <video
                  autoPlay
                  controls
                  playsInline
                  src={selectedVideo.videoUrl}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 bg-[#141414]">
                <div className="text-xs text-gray-400">
                  Produced by <strong className="text-white">Trend Line Media</strong> for {selectedVideo.client}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const videoItem = selectedVideo;
                    setSelectedVideo(null);
                    onSelectProject?.(videoItem);
                  }}
                  className="px-4 py-2 rounded-full bg-[#FFD400] text-black font-semibold text-xs flex items-center gap-1.5 cursor-pointer hover:bg-[#ffe14d]"
                >
                  <span>Request Similar Video</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
