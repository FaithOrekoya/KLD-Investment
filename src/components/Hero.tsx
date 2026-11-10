import React from 'react';
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import heroImage from '../assets/images/hero_luxury_estate_1794288070159.jpg';

interface HeroProps {
  onJoinVipClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinVipClick, onExploreClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-[560px] lg:min-h-[620px] flex items-center bg-[#073449] overflow-hidden pt-20"
    >
      {/* Background 5-Second Cinematic Architectural Zoom View */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Cinematic architectural view of residential investment property"
          className="w-full h-full object-cover object-center animate-hero-cycle-5s"
          referrerPolicy="no-referrer"
          style={{ transformOrigin: 'center center' }}
        />
        {/* Soft, Reduced Navy Overlay - Allows Property to Shine While Ensuring Sharp Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#073449]/85 via-[#073449]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#073449]/60 via-transparent to-black/25" />
      </div>

      {/* Content Container - Positioned on the Left */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 w-full">
        <div className="max-w-2xl text-left">
          
          {/* Small Label */}
          <div className="inline-flex items-center gap-2 mb-4 bg-[#073449]/80 backdrop-blur-md border border-[#F2B600]/60 px-3 py-1 rounded shadow-sm">
            <span className="text-[11px] font-['Montserrat'] font-bold uppercase tracking-[0.18em] text-[#F2B600]">
              Exclusive Real Estate Investment Opportunities
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-['Montserrat'] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-4 drop-shadow-md">
            Find Exclusive Off-Market Deals &amp;{' '}
            <span className="text-[#F2B600]">Discounted Properties.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-stone-100 text-base sm:text-lg leading-relaxed mb-7 max-w-xl font-normal drop-shadow-sm">
            Invest smarter, move faster and discover discounted real estate opportunities before they reach the wider market.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
            <button
              onClick={onJoinVipClick}
              className="px-7 py-3.5 rounded bg-[#F2B600] hover:bg-[#D9A300] active:scale-[0.98] text-[#073449] font-['Montserrat'] font-bold text-xs uppercase tracking-wider transition-all duration-150 shadow-lg flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Join Our VIP Buyers List</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              onClick={onExploreClick}
              className="px-6 py-3.5 rounded border-2 border-white/90 hover:border-white hover:bg-white/15 text-white font-['Montserrat'] font-bold text-xs uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md shadow-sm"
            >
              <span>Explore Properties</span>
            </button>
          </div>

          {/* Investor Confidence Markers */}
          <div className="pt-4 border-t border-white/20 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-stone-100 font-medium drop-shadow-sm">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#F2B600]" />
              <span>Direct-to-Seller Contracts</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#F2B600]" />
              <span>Deep Purchase Discounts</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#F2B600]" />
              <span>Verified VIP Delivery</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
