import React from 'react';
import { ArrowRight, KeyRound, Bell, Target, Handshake } from 'lucide-react';
import architecturalPropertyImage from '../assets/images/about_architectural_property_1794288070785.jpg';

interface WhyInvestWithKldProps {
  onJoinVipClick: () => void;
}

export const WhyInvestWithKld: React.FC<WhyInvestWithKldProps> = ({ onJoinVipClick }) => {
  const valuePropositions = [
    {
      num: '01',
      title: 'Exclusive Off-Market Opportunities',
      description: 'Discover investment opportunities that may not be widely advertised on traditional property platforms.',
      icon: KeyRound,
    },
    {
      num: '02',
      title: 'Priority Access',
      description: 'Join our VIP buyers list to receive information about opportunities before they reach a wider audience.',
      icon: Bell,
    },
    {
      num: '03',
      title: 'Investor-Focused Approach',
      description: 'Explore property opportunities based on your investment preferences, budget and target locations.',
      icon: Target,
    },
    {
      num: '04',
      title: 'Partnership Opportunities',
      description: 'Connect with KLD Investments & Consulting to explore potential joint venture and referral opportunities.',
      icon: Handshake,
    },
  ];

  return (
    <section id="why-invest" className="py-16 lg:py-24 bg-[#073449] text-white border-b border-[#17334A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Prominent Professional Real Estate Photograph (Col span 5) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#F2B600]/40 shadow-2xl aspect-[4/5] bg-[#17334A]">
              <img
                src={architecturalPropertyImage}
                alt="Contemporary architectural property representing KLD investment opportunities"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#073449]/80 via-transparent to-transparent" />
              
              {/* Corner Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#073449]/90 backdrop-blur-md p-3.5 rounded-lg border border-[#F2B600]/30 text-xs text-stone-200 flex items-center justify-between">
                <div>
                  <span className="font-['Montserrat'] font-bold text-white block text-sm">
                    KLD Acquisition Pipeline
                  </span>
                  <span className="text-[11px] text-[#F2B600]">
                    Direct Sourcing &amp; Off-Market Access
                  </span>
                </div>
                <div className="w-8 h-8 rounded bg-[#F2B600] text-[#073449] font-['Montserrat'] font-bold text-xs flex items-center justify-center shrink-0">
                  KLD
                </div>
              </div>
            </div>

            {/* Subtle decorative gold accent frame */}
            <div
              className="hidden sm:block absolute -top-3 -left-3 w-28 h-28 border-t-2 border-l-2 border-[#F2B600] rounded-tl-xl pointer-events-none -z-0 opacity-70"
              aria-hidden="true"
            />
          </div>

          {/* Right Column: Editorial Value Propositions (Col span 7) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 mb-2 bg-[#17334A] border border-[#F2B600]/40 px-3 py-1 rounded">
                <span className="text-[11px] font-['Montserrat'] font-bold uppercase tracking-[0.18em] text-[#F2B600]">
                  The KLD Advantage
                </span>
              </div>

              <h2 className="font-['Montserrat'] text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                More Than Property Deals. A Smarter Way to Discover Opportunities.
              </h2>
            </div>

            {/* Clean Vertical List of Value Propositions */}
            <div className="space-y-4 pt-2 border-t border-white/10">
              {valuePropositions.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.num}
                    className="flex items-start gap-4 p-3.5 rounded-lg bg-[#17334A]/50 hover:bg-[#17334A] transition-colors border border-white/5 hover:border-[#F2B600]/30"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#073449] border border-[#F2B600]/60 flex items-center justify-center text-[#F2B600] shrink-0 mt-0.5 shadow-sm">
                      <Icon className="w-4 h-4 stroke-[2]" />
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-[#F2B600] font-bold">
                          {item.num}.
                        </span>
                        <h3 className="font-['Montserrat'] font-bold text-sm sm:text-base text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onJoinVipClick}
                className="px-7 py-3.5 rounded bg-[#F2B600] hover:bg-[#D9A300] active:scale-[0.98] text-[#073449] font-['Montserrat'] font-bold text-xs uppercase tracking-wider transition-all duration-150 shadow-lg inline-flex items-center gap-2.5 cursor-pointer"
              >
                <span>Join Our VIP Buyers List</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
