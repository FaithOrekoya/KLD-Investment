import React from 'react';
import { KeyRound, Zap, Users2, ArrowRight } from 'lucide-react';

interface AboutValuePropositionProps {
  onLearnMoreClick?: () => void;
}

export const AboutValueProposition: React.FC<AboutValuePropositionProps> = ({ onLearnMoreClick }) => {
  const benefits = [
    {
      title: 'Exclusive Off-Market Deals',
      description: 'Access privately negotiated residential properties that never hit the MLS or public listing sites, safeguarding purchase spreads.',
      icon: KeyRound,
    },
    {
      title: 'Priority Access to Opportunities',
      description: 'Receive real-time notifications with preliminary comps, rehab estimates, and contract assignment details before others.',
      icon: Zap,
    },
    {
      title: 'Investor-Focused Connections',
      description: 'Opportunities structured around investor metrics—cap rates, equity margins, and cash flow rather than retail markups.',
      icon: Users2,
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="text-[11px] font-['Montserrat'] font-bold uppercase tracking-[0.18em] text-[#F2B600]">
              About KLD Investments &amp; Consulting
            </span>
          </div>

          <h2 className="font-['Montserrat'] text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#073449]">
            Invest Smarter. Move Faster.<br />Discover More.
          </h2>
        </div>

        {/* Three Benefits in a Visually Attractive Horizontal Arrangement */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-[#F4F6F8] rounded-xl p-6 border border-[#E2E8F0] hover:border-[#F2B600] transition-colors duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#073449] flex items-center justify-center text-[#F2B600] mb-4 shadow-sm group-hover:bg-[#17334A] transition-colors">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>

                  <h3 className="font-['Montserrat'] text-base font-bold text-[#073449] mb-2">
                    {benefit.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-200/60 flex items-center gap-1.5 text-[11px] font-['Montserrat'] font-bold uppercase text-[#073449]">
                  <span className="text-[#F2B600]">0{index + 1}</span>
                  <span>· Dedicated Investor Benefit</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
