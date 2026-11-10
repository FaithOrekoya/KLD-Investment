import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { KldLogo } from './KldLogo';

interface HeaderProps {
  onJoinVipClick: () => void;
  onContactClick: () => void;
  onHowItWorksClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onJoinVipClick,
  onContactClick,
  onHowItWorksClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white border-b border-[#E2E8F0] ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-3 shadow-md'
          : 'py-4 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        
        {/* Left: KLD Logo (Dark Variant for White Header) */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="shrink-0 cursor-pointer"
        >
          <KldLogo variant="dark" />
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs uppercase font-['Montserrat'] font-bold tracking-wider text-[#073449]">
          <button
            onClick={() => scrollToSection('home')}
            className="hover:text-[#F2B600] transition-colors cursor-pointer py-1"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-[#F2B600] transition-colors cursor-pointer py-1"
          >
            About Us
          </button>
          <button
            onClick={onHowItWorksClick}
            className="hover:text-[#F2B600] transition-colors cursor-pointer py-1"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection('featured-opportunities')}
            className="hover:text-[#F2B600] transition-colors cursor-pointer py-1"
          >
            Featured Properties
          </button>
          <button
            onClick={onContactClick}
            className="hover:text-[#F2B600] transition-colors cursor-pointer py-1"
          >
            Contact Us
          </button>
        </nav>

        {/* Right: Gold CTA button */}
        <div className="hidden sm:flex items-center shrink-0">
          <button
            onClick={onJoinVipClick}
            className="px-5 py-2.5 rounded bg-[#F2B600] hover:bg-[#D9A300] active:scale-[0.98] text-[#073449] font-['Montserrat'] font-bold text-xs uppercase tracking-wider transition-all duration-150 shadow-md flex items-center gap-2 cursor-pointer"
          >
            <span>Join VIP Buyers List</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={onJoinVipClick}
            className="sm:hidden px-3 py-1.5 rounded bg-[#F2B600] text-[#073449] font-['Montserrat'] font-bold text-[11px] uppercase tracking-wider"
          >
            VIP List
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#073449] hover:text-[#F2B600] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (White Theme) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E2E8F0] px-6 py-5 text-[#073449] space-y-3 shadow-2xl">
          <button
            onClick={() => scrollToSection('home')}
            className="block w-full text-left py-2 font-['Montserrat'] font-bold text-sm border-b border-stone-100 hover:text-[#F2B600]"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left py-2 font-['Montserrat'] font-bold text-sm border-b border-stone-100 hover:text-[#F2B600]"
          >
            About Us
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onHowItWorksClick();
            }}
            className="block w-full text-left py-2 font-['Montserrat'] font-bold text-sm border-b border-stone-100 hover:text-[#F2B600]"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection('featured-opportunities')}
            className="block w-full text-left py-2 font-['Montserrat'] font-bold text-sm border-b border-stone-100 hover:text-[#F2B600]"
          >
            Featured Properties
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onContactClick();
            }}
            className="block w-full text-left py-2 font-['Montserrat'] font-bold text-sm border-b border-stone-100 hover:text-[#F2B600]"
          >
            Contact Us
          </button>
          
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onJoinVipClick();
              }}
              className="w-full py-3 rounded bg-[#F2B600] hover:bg-[#D9A300] text-[#073449] font-['Montserrat'] font-bold text-xs uppercase tracking-wider text-center shadow"
            >
              Join VIP Buyers List
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
