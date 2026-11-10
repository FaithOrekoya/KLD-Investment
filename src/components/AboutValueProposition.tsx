import React from 'react';
import { KeyRound, Zap, Users2, CheckCircle2, ShieldCheck } from 'lucide-react';
import investorsImage from '../assets/images/investors_reviewing_deals_1794289178262.jpg';

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
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

        {/* Editorial Real Estate Analysis Spotlight with Photo */}
        <div className="bg-[#073449] text-white rounded-2xl overflow-hidden border border-[#17334A] shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[280px] overflow-hidden bg-[#17334A]">
            <img
              src={investorsImage}
              alt="Real estate investors analyzing underwriting dossiers and property financials"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#073449]/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#073449]/90" />
            <div className="absolute top-4 left-4 bg-[#073449]/90 backdrop-blur-md px-3 py-1.5 rounded border border-[#F2B600]/40 text-[11px] font-['Montserrat'] font-bold uppercase tracking-wider text-[#F2B600]">
              Acquisitions &amp; Underwriting Desk
            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-4">
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F2B600]" />
              <span className="text-[11px] font-['Montserrat'] font-bold uppercase tracking-[0.2em] text-[#F2B600]">
                Institutional Underwriting Discipline
              </span>
            </div>

            <h3 className="font-['Montserrat'] text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
              Pre-Vetted Opportunities With Verified Numbers.
            </h3>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              Every contract assigned by KLD Investments &amp; Consulting undergoes rigorous vetting. We verify repair scopes, examine county title records, analyze conservative sales comparables, and negotiate direct equitable spreads with sellers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2 text-xs text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#F2B600] shrink-0 mt-0.5" />
                <span>Zero retail bidding wars or hidden seller markups</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#F2B600] shrink-0 mt-0.5" />
                <span>Clear titles, assignment covenants &amp; closing escrow</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#F2B600] shrink-0 mt-0.5" />
                <span>Detailed scope documentation &amp; realistic ARV metrics</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#F2B600] shrink-0 mt-0.5" />
                <span>Expedited closing terms ready for quick deployment</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
