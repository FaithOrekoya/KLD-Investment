import React from 'react';

interface KldLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
  compact?: boolean;
}

export const KldLogo: React.FC<KldLogoProps> = ({
  variant = 'light',
  className = '',
  showSubtitle = false,
  compact = true,
}) => {
  const isLight = variant === 'light'; // Light variant for dark/navy backgrounds

  return (
    <div className={`flex items-center gap-2.5 select-none shrink-0 ${className}`}>
      {/* KLD Shield / Architectural Monogram Emblem */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center rounded bg-[#073449] border-2 border-[#F2B600] shadow-sm">
        <svg
          viewBox="0 0 40 40"
          className="w-full h-full p-1.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Architectural roofline / investment upward chevron */}
          <path
            d="M6 22L20 9L34 22L30 22L20 12.5L10 22H6Z"
            fill="#F2B600"
          />
          {/* Inner pillar structure */}
          <path
            d="M14 23H17V32H14V23Z"
            fill="#F2B600"
          />
          <path
            d="M23 23H26V32H23V23Z"
            fill="#F2B600"
          />
          {/* Foundation beam */}
          <rect
            x="11"
            y="32"
            width="18"
            height="2"
            rx="0.5"
            fill="#F2B600"
          />
        </svg>
      </div>

      {/* Compact Brand Typography */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-['Montserrat'] font-extrabold text-base sm:text-lg tracking-tight ${
              isLight ? 'text-white' : 'text-[#073449]'
            }`}
          >
            KLD
          </span>
          <span
            className={`font-['Montserrat'] font-bold text-xs tracking-wider uppercase ${
              isLight ? 'text-stone-200' : 'text-[#17334A]'
            }`}
          >
            INVESTMENTS
          </span>
        </div>
        <span
          className="text-[10px] tracking-widest font-semibold uppercase text-[#F2B600] mt-0.5"
        >
          &amp; CONSULTING
        </span>
        {showSubtitle && (
          <span
            className="text-[9px] tracking-wider text-stone-300 mt-1 uppercase"
          >
            BuyCheapHousesFast
          </span>
        )}
      </div>
    </div>
  );
};
