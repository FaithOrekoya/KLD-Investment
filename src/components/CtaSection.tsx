import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';
import jvEstateImage from '../assets/images/jv_development_estate_1794288072012.jpg';

interface CtaSectionProps {
  onJoinClick: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onJoinClick }) => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#073449] overflow-hidden text-white">
      {/* Background Full-Width Premium Property Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src={jvEstateImage}
          alt="Luxury architectural real estate investment"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Soft Navy Transparent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#073449]/90 via-[#073449]/80 to-[#17334A]/85" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 bg-[#073449]/80 backdrop-blur-md border border-[#F2B600]/40 px-3 py-1 rounded">
          <span className="text-[11px] font-['Montserrat'] font-bold uppercase tracking-[0.2em] text-[#F2B600]">
            Direct Off-Market Access
          </span>
        </div>

        <h2 className="font-['Montserrat'] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Your Next Investment Opportunity Starts Here.
        </h2>

        <p className="text-stone-200 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
          Connect with KLD Investments &amp; Consulting and discover new possibilities in real estate investing.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onJoinClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded bg-[#F2B600] text-[#073449] hover:bg-[#D9A300] active:scale-[0.98] font-['Montserrat'] font-bold text-xs tracking-wider uppercase transition-all duration-150 shadow-xl inline-flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span>Join the VIP Buyers List</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-stone-300">
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-[#F2B600]" />
            Exclusive Off-Market Inventory
          </span>
          <span className="text-stone-500">·</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-[#F2B600]" />
            Verified Buyer Community
          </span>
          <span className="text-stone-500">·</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#F2B600]" />
            Direct-to-Seller Contracts
          </span>
        </div>

      </div>
    </section>
  );
};
