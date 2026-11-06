import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavClick?: (item: string) => void;
  onOrderClick?: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavClick, onOrderClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'About Us', target: 'about' },
    { label: 'Services', target: 'services' },
    { label: 'Our Work', target: 'work' },
    { label: 'Why Us', target: 'why-us' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleItemClick = (target: string, label: string) => {
    setMobileMenuOpen(false);
    onNavClick?.(label);
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-3 sm:pt-4">
        <nav
          aria-label="Primary Navigation"
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'bg-[#121212]/90 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/80'
              : 'bg-black/60 backdrop-blur-sm border border-white/5'
          }`}
        >
          {/* Logo & Brand Name */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleItemClick('home', 'Home');
            }}
            className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-[#FFD400]/40 shadow-md shadow-[#FFD400]/10 transition-transform duration-300 group-hover:scale-105 shrink-0">
              <img
                src="/assets/aistudio/unnamed_3042114e.jpg"
                alt="Trend Line Media Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-wider text-white uppercase leading-none">
                TREND LINE <span className="text-[#FFD400]">MEDIA</span>
              </span>
              <span className="text-[9px] sm:text-[10px] text-gray-400 font-medium tracking-widest uppercase mt-0.5">
                Digital Advertising Agency
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 m-0 p-0 list-none">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={`#${item.target}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(item.target, item.label);
                  }}
                  className="text-xs lg:text-sm font-medium text-gray-300 hover:text-[#FFD400] transition-colors py-1 cursor-pointer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA & WhatsApp Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/919280079272?text=Hello%20Trend%20Line%20Media%2C%20I%20would%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171717] hover:bg-[#202020] border border-[#25D366]/40 text-[#25D366] text-xs font-medium transition-all shadow-sm"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
              <span className="hidden lg:inline">WhatsApp</span>
              <span className="font-mono text-[11px] text-gray-300">9280079272</span>
            </a>

            <button
              type="button"
              onClick={() => onOrderClick?.()}
              className="px-4 py-1.5 rounded-full bg-[#FFD400] hover:bg-[#e6bf00] text-black font-semibold text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-md shadow-[#FFD400]/20 active:scale-95"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl bg-[#141414]/95 backdrop-blur-xl border border-white/10 shadow-2xl">
            <ul className="flex flex-col gap-3 m-0 p-0 list-none">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={`#${item.target}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleItemClick(item.target, item.label);
                    }}
                    className="block px-3 py-2 text-sm font-medium text-gray-200 hover:text-[#FFD400] hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3 mt-3 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href="https://wa.me/919280079272?text=Hello%20Trend%20Line%20Media%2C%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs font-semibold"
              >
                <MessageCircle className="w-4 h-4 fill-[#25D366]" />
                <span>WhatsApp: 9280079272</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOrderClick?.();
                }}
                className="w-full py-2.5 rounded-xl bg-[#FFD400] text-black font-semibold text-xs text-center"
              >
                Get a Quote / Order Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
