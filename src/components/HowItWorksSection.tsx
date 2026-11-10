import React from 'react';
import { UserCheck, SlidersHorizontal, Search, Briefcase } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Join Our VIP Buyers List',
      description: 'Sign up and tell us about your real estate investment interests.',
      icon: UserCheck,
    },
    {
      num: '02',
      title: 'Share Your Preferences',
      description: 'Let us know your preferred locations, investment budget and property interests.',
      icon: SlidersHorizontal,
    },
    {
      num: '03',
      title: 'Discover Investment Opportunities',
      description: 'Get access to information about relevant discounted off-market property opportunities.',
      icon: Search,
    },
    {
      num: '04',
      title: 'Explore Your Next Deal',
      description: 'Review opportunities that match your investment goals and contact our team to discuss the next steps.',
      icon: Briefcase,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-20 bg-[#F4F6F8] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="text-[11px] font-['Montserrat'] font-bold uppercase tracking-[0.18em] text-[#F2B600]">
              Our Process
            </span>
          </div>

          <h2 className="font-['Montserrat'] text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#073449]">
            Your Next Investment Starts Here.
          </h2>
        </div>

        {/* Horizontal 4-Step Timeline on Desktop / Vertical Stack on Mobile */}
        <div className="relative">
          
          {/* Connecting Line across steps on Desktop (hidden on mobile) */}
          <div
            className="hidden lg:block absolute top-[42px] left-[8%] right-[8%] h-[2px] bg-stone-300 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-white rounded-xl p-6 border border-[#E2E8F0] shadow-sm flex flex-col justify-between group hover:border-[#F2B600] transition-colors"
                >
                  <div>
                    {/* Step Number & Icon Node */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-full bg-[#073449] border-2 border-[#F2B600] flex items-center justify-center text-[#F2B600] shadow-sm group-hover:scale-105 transition-transform shrink-0">
                        <Icon className="w-5 h-5 stroke-[2]" />
                      </div>
                      <span className="font-['Montserrat'] font-extrabold text-2xl text-[#F2B600]">
                        {step.num}
                      </span>
                    </div>

                    {/* Step Title & Description */}
                    <div className="text-[10px] font-['Montserrat'] font-bold uppercase tracking-wider text-stone-400 mb-1">
                      Step {step.num}
                    </div>

                    <h3 className="font-['Montserrat'] text-base font-bold text-[#073449] mb-2 leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-[11px] font-['Montserrat'] font-semibold text-stone-400">
                    <span>Phase 0{idx + 1}</span>
                    <span className="text-[#073449]">KLD Flow</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
