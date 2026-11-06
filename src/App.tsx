/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ServicesSection, ServiceItem } from './components/ServicesSection.tsx';
import { PortfolioSection } from './components/PortfolioSection.tsx';
import { WhyChooseUsSection } from './components/WhyChooseUsSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { InteractiveModal } from './components/InteractiveModal.tsx';

export default function App() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    serviceName: string;
    price?: number;
  }>({
    isOpen: false,
    title: 'Order Service / Project Consultation',
    serviceName: 'Video Editing – 60 Seconds',
    price: 750,
  });

  const handleOrderService = (service: ServiceItem) => {
    setModalState({
      isOpen: true,
      title: `Order: ${service.title}`,
      serviceName: service.title,
      price: service.price,
    });
  };

  const handleCustomOrder = (serviceName?: string) => {
    setModalState({
      isOpen: true,
      title: serviceName ? `Order ${serviceName}` : 'Order Custom Production Package',
      serviceName: serviceName || 'Video Editing – 60 Seconds',
      price: undefined,
    });
  };

  const handleScrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#FFD400]/25 selection:text-[#FFD400]">
      <main>
        {/* Section 1: Hero */}
        <HeroSection
          onExploreServices={handleScrollToServices}
          onContactClick={handleScrollToContact}
        />

        {/* Section 2: About Us */}
        <AboutSection />

        {/* Sections 3, 4, 5: Services & Pricing */}
        <ServicesSection onOrderNow={handleOrderService} />

        {/* Section 6: Our Work (Portfolio Gallery) */}
        <PortfolioSection
          onSelectProject={(project) => {
            handleCustomOrder(project.title);
          }}
        />

        {/* Section 7: Why Choose Us? */}
        <WhyChooseUsSection />

        {/* Section 8: Contact Us */}
        <ContactSection />
      </main>

      {/* Section 9: Footer */}
      <Footer
        onOrderClick={(service) => handleCustomOrder(service)}
      />

      {/* Interactive Order & Enquiry Modal */}
      <InteractiveModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        defaultService={modalState.serviceName}
        defaultPrice={modalState.price}
      />
    </div>
  );
}
