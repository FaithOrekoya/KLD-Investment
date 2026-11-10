import React from 'react';
import { X, UserCheck, Search, Briefcase, ArrowRight } from 'lucide-react';

interface HowItWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJoinVip: () => void;
}

export const HowItWorksModal: React.FC<HowItWorksModalProps> = ({
  isOpen,
  onClose,
  onJoinVip,
}) => {
  if (!isOpen) return null;

  const steps = [
    {
      num: '01',
      title: 'Join the VIP Buyers List',
      description: 'Share your investment preferences, budget parameters, and target market locations.',
      icon: UserCheck,
    },
    {
      num: '02',
      title: 'Discover Opportunities',
      description: 'Receive confidential off-market deal packets with comps and preliminary underwriting before wider distribution.',
      icon: Search,
    },
    {
      num: '03',
      title: 'Explore Your Next Deal',
      description: 'Review property inspections, discuss terms with our acquisition team, and execute direct contract assignments.',
      icon: Briefcase,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div
        className="relative bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden border border-[#17334A] my-8 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#073449] text-white">
          <div className="flex items-center gap-2">
            <span className="font-['Montserrat'] font-bold text-sm text-[#F2B600] uppercase tracking-wider">
              How It Works
            </span>
            <span className="text-white/40">·</span>
            <span className="text-xs text-stone-300">Investor Acquisition Process</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-stone-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <h3 className="font-['Montserrat'] text-2xl font-bold text-[#073449]">
              Your Next Investment Starts Here.
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Our direct-to-seller model bypasses retail MLS friction to deliver vetted, discounted opportunities straight to qualified buyers.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="p-4 rounded-lg bg-[#F4F6F8] border border-[#E2E8F0] flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#073449] text-[#F2B600] flex items-center justify-center font-['Montserrat'] font-bold text-sm shrink-0">
                    {step.num}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-['Montserrat'] text-base font-bold text-[#073449]">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onJoinVip();
            }}
            className="px-5 py-2.5 rounded bg-[#F2B600] hover:bg-[#D9A300] text-[#073449] font-['Montserrat'] font-bold text-xs uppercase tracking-wider transition-colors shadow flex items-center gap-1.5"
          >
            <span>Join VIP Buyers List</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </div>
  );
};
