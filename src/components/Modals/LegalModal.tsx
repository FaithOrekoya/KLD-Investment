import React from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden border border-[#17334A] my-8 flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 bg-[#073449] text-white shrink-0">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#F2B600]" />
            <span className="font-['Montserrat'] text-base font-bold text-white">
              {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-stone-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          {isPrivacy ? (
            <>
              <h4 className="font-['Montserrat'] text-base font-bold text-[#073449]">
                Investor Data &amp; Confidentiality Policy
              </h4>
              <p>
                KLD Investments &amp; Consulting (“KLD”, “BuyCheapHousesFast”, “we”, or “us”) respects your privacy. This policy outlines how we handle investor preferences, registration information, and inquiry submissions.
              </p>
              <h5 className="font-['Montserrat'] font-bold text-stone-800 pt-2">1. Information Collection</h5>
              <p>
                We collect information provided directly by real estate investors, including names, contact numbers, email addresses, acquisition criteria, and capital availability to match relevant off-market property opportunities.
              </p>
              <h5 className="font-['Montserrat'] font-bold text-stone-800 pt-2">2. Use of Information</h5>
              <p>
                Your contact details are used exclusively to deliver off-market property notifications, private underwriting packages, joint venture evaluations, and acquisition notices. We do not sell or trade your data to third-party telemarketers.
              </p>
              <h5 className="font-['Montserrat'] font-bold text-stone-800 pt-2">3. Unsubscribe &amp; Preferences</h5>
              <p>
                You may update your acquisition criteria or request removal from our VIP buyers list at any time by contacting our acquisitions desk.
              </p>
            </>
          ) : (
            <>
              <h4 className="font-['Montserrat'] text-base font-bold text-[#073449]">
                Investor Terms &amp; Off-Market Transaction Guidelines
              </h4>
              <p>
                Welcome to KLD Investments &amp; Consulting. By accessing this platform and participating in our VIP buyers list, you agree to these terms:
              </p>
              <h5 className="font-['Montserrat'] font-bold text-stone-800 pt-2">1. Investor Status &amp; Due Diligence</h5>
              <p>
                Opportunities presented through KLD Investments &amp; Consulting are intended for experienced, qualified real estate investors, cash purchasers, and institutional capital partners. All investors must conduct independent inspections, title verifications, and financial due diligence prior to executing contract assignments or purchase agreements.
              </p>
              <h5 className="font-['Montserrat'] font-bold text-stone-800 pt-2">2. Confidentiality &amp; Non-Circumvention</h5>
              <p>
                Specific property addresses, parcel numbers, seller identities, and private contracts distributed to VIP buyers are proprietary. Direct contact with property owners without explicit written consent from KLD Investments &amp; Consulting is strictly prohibited.
              </p>
              <h5 className="font-['Montserrat'] font-bold text-stone-800 pt-2">3. No Guarantee of Performance</h5>
              <p>
                Any estimates of after-repair value (ARV), rehabilitation expenses, or rental yields represent preliminary underwriting projections and do not constitute financial or legal advice.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-stone-50 border-t border-stone-200 text-right shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#073449] hover:bg-[#17334A] text-white text-xs font-['Montserrat'] font-bold uppercase tracking-wider rounded transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
