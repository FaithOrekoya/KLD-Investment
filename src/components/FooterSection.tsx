import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { KldLogo } from './KldLogo';

interface FooterSectionProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenContact: () => void;
  onOpenJv: () => void;
  onOpenReferral: () => void;
  onScrollTo: (id: string) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenContact,
  onOpenJv,
  onOpenReferral,
  onScrollTo,
}) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#073449] text-stone-300 border-t border-[#17334A] pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Logo & Short Description (Col span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <KldLogo variant="light" />

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-sm pt-2">
              KLD Investments &amp; Consulting connects qualified property investors with discounted off-market real estate opportunities, joint venture partnerships, and VIP buyer access.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#social-linkedin"
                onClick={(e) => e.preventDefault()}
                aria-label="LinkedIn"
                className="w-8 h-8 rounded bg-[#17334A] flex items-center justify-center text-stone-300 hover:text-[#F2B600] hover:bg-[#052433] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#social-twitter"
                onClick={(e) => e.preventDefault()}
                aria-label="Twitter"
                className="w-8 h-8 rounded bg-[#17334A] flex items-center justify-center text-stone-300 hover:text-[#F2B600] hover:bg-[#052433] transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#social-facebook"
                onClick={(e) => e.preventDefault()}
                aria-label="Facebook"
                className="w-8 h-8 rounded bg-[#17334A] flex items-center justify-center text-stone-300 hover:text-[#F2B600] hover:bg-[#052433] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#social-instagram"
                onClick={(e) => e.preventDefault()}
                aria-label="Instagram"
                className="w-8 h-8 rounded bg-[#17334A] flex items-center justify-center text-stone-300 hover:text-[#F2B600] hover:bg-[#052433] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-['Montserrat'] text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button
                  onClick={() => onScrollTo('home')}
                  className="hover:text-[#F2B600] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('about')}
                  className="hover:text-[#F2B600] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('how-it-works')}
                  className="hover:text-[#F2B600] transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('featured-opportunities')}
                  className="hover:text-[#F2B600] transition-colors"
                >
                  Featured Properties
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('why-invest')}
                  className="hover:text-[#F2B600] transition-colors"
                >
                  Why Invest
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('vip-buyers-list')}
                  className="hover:text-[#F2B600] transition-colors"
                >
                  VIP Buyers List
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('faq')}
                  className="hover:text-[#F2B600] transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Opportunities & Programs (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-['Montserrat'] text-xs font-bold uppercase tracking-wider text-white">
              Programs
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button
                  onClick={() => onScrollTo('featured-opportunities')}
                  className="hover:text-[#F2B600] transition-colors"
                >
                  Featured Properties
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenJv}
                  className="hover:text-[#F2B600] transition-colors font-medium text-white flex items-center gap-1"
                >
                  <span>Joint Ventures</span>
                  <span className="text-[#F2B600]">↗</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenReferral}
                  className="hover:text-[#F2B600] transition-colors font-medium text-white flex items-center gap-1"
                >
                  <span>Referral Program</span>
                  <span className="text-[#F2B600]">↗</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information Placeholders (Col span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-['Montserrat'] text-xs font-bold uppercase tracking-wider text-white">
              Contact &amp; Desk
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#F2B600] shrink-0 mt-0.5" />
                <a
                  href="mailto:contact@buycheaphousesfast.com"
                  className="hover:text-[#F2B600] transition-colors"
                >
                  contact@buycheaphousesfast.com
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#F2B600] shrink-0 mt-0.5" />
                <span>(800) 580-DEAL / (800) 580-3325</span>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F2B600] shrink-0 mt-0.5" />
                <span>KLD Investments &amp; Consulting Acquisitions</span>
              </div>

              <div className="pt-1">
                <button
                  onClick={onOpenContact}
                  className="w-full py-2 px-3 rounded bg-[#17334A] hover:bg-[#F2B600] hover:text-[#073449] text-[11px] font-['Montserrat'] font-bold uppercase tracking-wider transition-colors text-center cursor-pointer border border-white/10"
                >
                  Send Inquiry Message
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
          <div>
            © {currentYear} KLD Investments &amp; Consulting. All rights reserved. BuyCheapHousesFast is an investor opportunities platform.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-stone-200 transition-colors"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-stone-200 transition-colors"
            >
              Terms of Service
            </button>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="hover:text-[#F2B600] transition-colors flex items-center gap-1 font-medium"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
