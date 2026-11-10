import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What are off-market investment properties?',
      answer: 'Off-market investment properties are real estate assets available for purchase that are not publicly advertised on retail platforms such as the Multiple Listing Service (MLS), Zillow, or public auctions. Sourced directly from property owners and private networks, these properties provide serious investors with access to discounted purchase bases and negotiated contract terms without the friction of public bidding wars.',
    },
    {
      question: 'How do I join the VIP buyers list?',
      answer: 'You can join the VIP buyers list by completing the registration form on our website. Simply provide your contact details, investor classification (such as individual investor or property wholesaler), target budget range, and preferred investment types (Fix & Flip, Rental, Commercial, or Value-Add). Once submitted, your profile is logged with our acquisitions team to receive targeted off-market opportunities.',
    },
    {
      question: 'What types of investment properties are available?',
      answer: 'KLD Investments & Consulting focuses on prime investment categories: Fix & Flip restoration properties with attractive rehabilitation spreads; cash-flowing single-family and multi-family Rental Properties; boutique Commercial Real Estate and mixed-use assets; and strategic Value-Add Opportunities primed for physical or operational repositioning.',
    },
    {
      question: 'Can I participate in joint ventures or submit referrals?',
      answer: 'Yes. KLD Investments & Consulting actively explores joint venture partnerships with qualified private capital partners, developers, and experienced local operators. Additionally, we welcome property referrals from anyone who knows motivated sellers or off-market leads. You can submit inquiries directly through our Joint Venture and Referral links on this site.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <HelpCircle className="w-4 h-4 text-[#F2B600]" />
            <span className="text-[11px] font-['Montserrat'] font-bold uppercase tracking-[0.18em] text-[#F2B600]">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="font-['Montserrat'] text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#073449]">
            Common Investor Inquiries.
          </h2>

          <p className="text-stone-600 text-sm mt-2">
            Essential information regarding our off-market sourcing, buyer criteria, and partnership models.
          </p>
        </div>

        {/* Clean Accordion with Exactly 4 Questions */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#F4F6F8] rounded-xl border border-[#E2E8F0] overflow-hidden transition-all duration-150"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4.5 px-6 flex items-center justify-between text-left hover:bg-stone-100/70 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-['Montserrat'] text-base sm:text-lg font-bold text-[#073449] pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#073449] shrink-0 border border-stone-200 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#F2B600] text-[#073449] border-[#F2B600]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-stone-200/60 pt-3.5">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
