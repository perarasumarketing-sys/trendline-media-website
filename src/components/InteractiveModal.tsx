import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, MessageCircle, ShoppingBag, Sparkles } from 'lucide-react';
import { generateWhatsAppUrl, formatINR } from '../utils/text.ts';

interface InteractiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  defaultService?: string;
  defaultPrice?: number;
}

const WHATSAPP_NUMBER = '9280079272';

export const InteractiveModal: React.FC<InteractiveModalProps> = ({
  isOpen,
  onClose,
  title = 'Order Service / Project Consultation',
  defaultService = 'Video Editing – 60 Seconds',
  defaultPrice,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService,
    price: defaultPrice ? formatINR(defaultPrice) : '',
    footageLink: '',
    brief: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({
        ...prev,
        service: defaultService,
        price: defaultPrice ? formatINR(defaultPrice) : prev.price,
      }));
    }
  }, [defaultService, defaultPrice]);

  const serviceOptions = [
    { label: 'Video Editing – 60 Seconds', price: '₹750' },
    { label: 'Video Editing – 20 Seconds', price: '₹499' },
    { label: 'Video + Voice Over – 60 Seconds', price: '₹999' },
    { label: 'Voice Over Video – 20 Seconds', price: '₹799' },
    { label: 'Video + Voice Over – 30 Seconds', price: '₹850' },
    { label: 'Multiple Character – 60 Seconds (AI)', price: '₹3,999' },
    { label: 'Single Character – 25 Seconds (AI)', price: '₹1,500' },
    { label: 'Double Character – 60 Seconds (AI)', price: '₹2,999' },
    { label: 'Single Character – 60 Seconds (AI)', price: '₹1,999' },
    { label: 'Catalogue Design', price: '₹600' },
    { label: 'Poster Design', price: '₹250' },
    { label: 'Flex Board Design', price: '₹500' },
    { label: 'Logo Making', price: '₹2,000' },
    { label: 'Brochure Design', price: '₹500' },
    { label: 'Label Design', price: '₹400' },
    { label: 'Custom Agency Commercial Project', price: 'Custom Quote' },
  ];

  const handleServiceChange = (selectedName: string) => {
    const found = serviceOptions.find((s) => s.label === selectedName);
    setFormData((prev) => ({
      ...prev,
      service: selectedName,
      price: found ? found.price : '',
    }));
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      errs.phone = 'Please provide a valid phone or WhatsApp number.';
    }
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
      price: formData.price,
      footageLink: formData.footageLink,
      brief: formData.brief,
    });

    setWhatsappUrl(url);
    setSubmitted(true);

    // Automatically trigger WhatsApp tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setSubmitted(false);
    setWhatsappUrl('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.35 }}
            className="relative w-full max-w-lg bg-[#141414] border border-white/10 rounded-3xl p-6 sm:p-8 text-white shadow-2xl z-10 my-8"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-6 sm:py-8">
                <div className="w-14 h-14 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center mx-auto mb-4 text-[#25D366]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <span className="text-[10px] sm:text-xs font-mono uppercase text-[#FFD400] tracking-widest block mb-1">
                  Order Details Formatted
                </span>

                <h3 id="modal-title" className="text-xl sm:text-2xl font-bold mb-2 text-white">
                  Connect on WhatsApp to Confirm
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 max-w-sm mx-auto mb-6 leading-relaxed">
                  Your order for <strong className="text-[#FFD400]">{formData.service}</strong> {formData.price && `(${formData.price})`} has been structured. Our WhatsApp desk is ready to confirm raw assets and start production.
                </p>

                <div className="space-y-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20be5b] text-black font-bold text-sm rounded-full px-6 py-3.5 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-[#25D366]/20"
                  >
                    <MessageCircle className="w-5 h-5 fill-black" />
                    <span>Open WhatsApp Chat ({WHATSAPP_NUMBER})</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full bg-white/5 hover:bg-white/10 text-gray-300 font-medium text-xs sm:text-sm rounded-full px-5 py-2.5 transition-colors cursor-pointer"
                  >
                    Return to Website
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded overflow-hidden">
                    <img
                      src="/assets/aistudio/unnamed_3042114e.jpg"
                      alt="Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono uppercase text-[#FFD400] tracking-widest font-bold">
                    TREND LINE MEDIA
                  </span>
                  <span className="text-xs text-gray-600">/</span>
                  <span className="text-[10px] sm:text-xs text-[#25D366] flex items-center gap-1 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    WhatsApp: {WHATSAPP_NUMBER}
                  </span>
                </div>

                <h2 id="modal-title" className="text-2xl sm:text-3xl font-black mb-1.5 text-white">
                  {title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-400 mb-6">
                  Complete your project details below to connect directly with our production manager on WhatsApp ({WHATSAPP_NUMBER}).
                </p>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Service & Price Badge */}
                  <div className="bg-[#1f1f1f] rounded-2xl p-3.5 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-gray-400 block">
                        Selected Service
                      </span>
                      <span className="text-sm font-bold text-white">
                        {formData.service}
                      </span>
                    </div>
                    {formData.price && (
                      <span className="px-3 py-1 rounded-xl bg-[#FFD400] text-black font-black text-sm">
                        {formData.price}
                      </span>
                    )}
                  </div>

                  {/* Name Field */}
                  <div>
                    <label htmlFor="modal-name" className="block text-xs font-semibold text-gray-300 mb-1">
                      Full Name <span className="text-[#E52329]">*</span>
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      placeholder="e.g. Ananya Roy"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      className={`w-full bg-[#202020] border ${
                        errors.name ? 'border-[#E52329]' : 'border-white/10 focus:border-[#FFD400]'
                      } rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors`}
                    />
                    {errors.name && <p className="text-xs text-[#E52329] mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="modal-phone" className="block text-xs font-semibold text-gray-300 mb-1">
                        Phone / WhatsApp <span className="text-[#E52329]">*</span>
                      </label>
                      <input
                        id="modal-phone"
                        type="tel"
                        placeholder="e.g. 9280079272"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        className={`w-full bg-[#202020] border ${
                          errors.phone ? 'border-[#E52329]' : 'border-white/10 focus:border-[#FFD400]'
                        } rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors font-mono`}
                      />
                      {errors.phone && <p className="text-xs text-[#E52329] mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="modal-email" className="block text-xs font-semibold text-gray-300 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        id="modal-email"
                        type="email"
                        placeholder="ananya@studio.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#202020] border border-white/10 focus:border-[#FFD400] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Selection Dropdown */}
                  <div>
                    <label htmlFor="modal-service" className="block text-xs font-semibold text-gray-300 mb-1">
                      Change Service Package
                    </label>
                    <select
                      id="modal-service"
                      value={formData.service}
                      onChange={(e) => handleServiceChange(e.target.value)}
                      className="w-full bg-[#202020] border border-white/10 focus:border-[#FFD400] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt.label} value={opt.label} className="bg-[#171717] text-white">
                          {opt.label} — {opt.price}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Raw Footage or Drive Link */}
                  <div>
                    <label htmlFor="modal-footage" className="block text-xs font-semibold text-gray-300 mb-1">
                      Raw Footage / Reference Link (Optional)
                    </label>
                    <input
                      id="modal-footage"
                      type="url"
                      placeholder="Google Drive, Dropbox, YouTube, Vimeo..."
                      value={formData.footageLink}
                      onChange={(e) => setFormData({ ...formData, footageLink: e.target.value })}
                      className="w-full bg-[#202020] border border-white/10 focus:border-[#FFD400] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Project Brief */}
                  <div>
                    <label htmlFor="modal-brief" className="block text-xs font-semibold text-gray-300 mb-1">
                      Project Notes / Desired Style & Deadline
                    </label>
                    <textarea
                      id="modal-brief"
                      rows={3}
                      placeholder="Describe target video length, tone, subtitles, references, or urgent deadlines..."
                      value={formData.brief}
                      onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                      className="w-full bg-[#202020] border border-white/10 focus:border-[#FFD400] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-[#FFD400] hover:bg-[#ffe14d] text-black font-bold text-xs sm:text-sm rounded-full px-5 sm:px-6 py-2.5 flex items-center gap-2 transition-all cursor-pointer shadow-md shadow-[#FFD400]/20 active:scale-95"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Order & Chat on WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
