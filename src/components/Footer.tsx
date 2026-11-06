import React from 'react';
import { MessageCircle, Instagram, Youtube, Mail, Phone, ArrowUp } from 'lucide-react';

const WHATSAPP_NUMBER = '9280079272';

interface FooterProps {
  onNavClick?: (target: string) => void;
  onOrderClick?: (service: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onOrderClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (id: string) => {
    onNavClick?.(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-16 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative select-none">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-[#FFD400] shadow-md shadow-[#FFD400]/20 bg-black p-0.5 shrink-0">
                <img
                  src="/assets/aistudio/unnamed_3042114e.jpg"
                  alt="Trend Line Media Logo"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div>
                <h3 className="text-xl font-black text-white uppercase tracking-wider">
                  TREND LINE <span className="text-[#FFD400]">MEDIA</span>
                </h3>
                <p className="text-xs text-gray-400 font-mono tracking-wider">
                  DIGITAL CREATIVE ADVERTISING AGENCY
                </p>
              </div>
            </div>

            <p className="text-sm font-serif italic text-[#FFD400] text-base mb-4">
              “Your Vision. Our Creativity.”
            </p>

            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed mb-6">
              We turn your ideas into powerful visual experiences through professional video editing, cutting-edge AI video production, and high-impact graphic design.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/91${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#171717] hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366] text-gray-300 hover:text-[#25D366] flex items-center justify-center transition-all cursor-pointer"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://instagram.com/trendlinemedia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#171717] hover:bg-pink-500/20 border border-white/10 hover:border-pink-500 text-gray-300 hover:text-pink-400 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@trendlinemedia.com"
                className="w-10 h-10 rounded-xl bg-[#171717] hover:bg-[#FFD400]/20 border border-white/10 hover:border-[#FFD400] text-gray-300 hover:text-[#FFD400] flex items-center justify-center transition-all cursor-pointer"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFD400] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400 m-0 p-0 list-none">
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('home')}
                  className="hover:text-[#FFD400] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('about')}
                  className="hover:text-[#FFD400] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('services')}
                  className="hover:text-[#FFD400] transition-colors cursor-pointer"
                >
                  Services & Pricing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('work')}
                  className="hover:text-[#FFD400] transition-colors cursor-pointer"
                >
                  Our Work (Portfolio)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('why-us')}
                  className="hover:text-[#FFD400] transition-colors cursor-pointer"
                >
                  Why Trend Line Media
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('contact')}
                  className="hover:text-[#FFD400] transition-colors cursor-pointer"
                >
                  Contact Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Production Services */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFD400] mb-4">
              Top Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400 m-0 p-0 list-none">
              <li>
                <button
                  type="button"
                  onClick={() => onOrderClick?.('Video Editing – 60 Seconds')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Video Editing 60s (₹750)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOrderClick?.('Video Editing – 20 Seconds')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Viral Reels 20s (₹499)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOrderClick?.('Video + Voice Over – 60 Seconds')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Video + Voice Over (₹999)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOrderClick?.('Multiple Character – 60 Seconds')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Multi-Character AI (₹3,999)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOrderClick?.('Logo Making')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Logo Making (₹2,000)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOrderClick?.('Poster Design')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Poster Design (₹250)
                </button>
              </li>
            </ul>
          </div>

          {/* Direct WhatsApp Desk */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFD400] mb-4">
              Quick Connect
            </h4>
            <div className="p-4 rounded-2xl bg-[#171717] border border-white/10 space-y-3">
              <span className="text-xs text-gray-300 block leading-snug">
                Need an immediate quote or urgent 24h delivery?
              </span>
              <a
                href={`https://wa.me/91${WHATSAPP_NUMBER}?text=Hello%20Trend%20Line%20Media%2C%20I%20would%20like%20to%20order`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20be5b] text-black font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-black" />
                <span>WhatsApp: {WHATSAPP_NUMBER}</span>
              </a>
              <span className="text-[10px] text-gray-500 font-mono block text-center">
                Operating IST 10am – 8pm
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Trend Line Media. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#FFD400] font-mono">Creative Ideas. Powerful Visuals. Digital Impact.</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#171717] hover:bg-[#FFD400] text-gray-400 hover:text-black flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
