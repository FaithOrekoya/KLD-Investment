/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutValueProposition } from './components/AboutValueProposition';
import { HowItWorksSection } from './components/HowItWorksSection';
import { FeaturedOpportunities } from './components/FeaturedOpportunities';
import { WhyInvestWithKld } from './components/WhyInvestWithKld';
import { TestimonialsSection } from './components/TestimonialsSection';
import { VipBuyersSection } from './components/VipBuyersSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { FooterSection } from './components/FooterSection';

// Modals
import { JvModal } from './components/Modals/JvModal';
import { ReferralModal } from './components/Modals/ReferralModal';
import { ContactModal } from './components/Modals/ContactModal';
import { HowItWorksModal } from './components/Modals/HowItWorksModal';
import { LegalModal } from './components/Modals/LegalModal';
import { PropertyPreview } from './data/properties';

export default function App() {
  const [jvModalOpen, setJvModalOpen] = useState(false);
  const [referralModalOpen, setReferralModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [howItWorksModalOpen, setHowItWorksModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [selectedInvestmentType, setSelectedInvestmentType] = useState<string>('Fix & Flip');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 76;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleInquireOnProperty = (property: PropertyPreview) => {
    if (property.propertyType.includes('Rental')) {
      setSelectedInvestmentType('Rental');
    } else if (property.propertyType.includes('Commercial')) {
      setSelectedInvestmentType('Commercial');
    } else {
      setSelectedInvestmentType('Fix & Flip');
    }
    scrollToSection('vip-buyers-list');
  };

  return (
    <div className="min-h-screen bg-[#F4F6F8] text-[#17334A] font-sans selection:bg-[#F2B600]/30 selection:text-[#073449]">
      
      {/* 1. HEADER (Compact Logo & Clear Navigation) */}
      <Header
        onJoinVipClick={() => scrollToSection('vip-buyers-list')}
        onContactClick={() => setContactModalOpen(true)}
        onHowItWorksClick={() => scrollToSection('how-it-works')}
      />

      <main>
        {/* 2. HERO */}
        <Hero
          onJoinVipClick={() => scrollToSection('vip-buyers-list')}
          onExploreClick={() => scrollToSection('featured-opportunities')}
        />

        {/* 3. ABOUT / VALUE PROPOSITION */}
        <AboutValueProposition />

        {/* 4. HOW IT WORKS */}
        <HowItWorksSection />

        {/* 5. FEATURED OPPORTUNITIES */}
        <FeaturedOpportunities
          onOpenJv={() => setJvModalOpen(true)}
          onOpenReferral={() => setReferralModalOpen(true)}
          onInquireOnProperty={handleInquireOnProperty}
        />

        {/* 6. WHY INVEST WITH KLD? */}
        <WhyInvestWithKld
          onJoinVipClick={() => scrollToSection('vip-buyers-list')}
        />

        {/* 7. TESTIMONIALS (3 INVESTOR REVIEW CARDS) */}
        <TestimonialsSection />

        {/* 8. VIP BUYERS LIST */}
        <VipBuyersSection
          initialInvestmentType={selectedInvestmentType}
        />

        {/* 9. FAQ SECTION */}
        <FaqSection />

        {/* 10. CTA SECTION */}
        <CtaSection
          onJoinClick={() => scrollToSection('vip-buyers-list')}
        />
      </main>

      {/* 11. FOOTER */}
      <FooterSection
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenContact={() => setContactModalOpen(true)}
        onOpenJv={() => setJvModalOpen(true)}
        onOpenReferral={() => setReferralModalOpen(true)}
        onScrollTo={scrollToSection}
      />

      {/* Interactive Modals */}
      <JvModal
        isOpen={jvModalOpen}
        onClose={() => setJvModalOpen(false)}
      />

      <ReferralModal
        isOpen={referralModalOpen}
        onClose={() => setReferralModalOpen(false)}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <HowItWorksModal
        isOpen={howItWorksModalOpen}
        onClose={() => setHowItWorksModalOpen(false)}
        onJoinVip={() => scrollToSection('vip-buyers-list')}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
