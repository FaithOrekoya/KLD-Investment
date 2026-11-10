import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Lock, Loader2, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';
import { VipRegistrationForm, InvestorType, InvestmentCategory } from '../types';

interface VipBuyersSectionProps {
  initialInvestmentType?: string;
}

export const VipBuyersSection: React.FC<VipBuyersSectionProps> = ({ initialInvestmentType }) => {
  const [formData, setFormData] = useState<VipRegistrationForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    investorType: 'Individual Investor',
    budgetRange: '$250,000 - $500,000',
    preferredLocations: '',
    investmentType: (initialInvestmentType as InvestmentCategory) || 'Fix & Flip',
    consent: true,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const budgetOptions = [
    '$100,000 - $250,000',
    '$250,000 - $500,000',
    '$500,000 - $1,000,000',
    '$1,000,000 - $2,500,000',
    '$2,500,000+',
  ];

  const investorTypeOptions: InvestorType[] = [
    'Individual Investor',
    'Real Estate Company',
    'Property Wholesaler',
    'Other',
  ];

  const investmentTypeOptions: InvestmentCategory[] = [
    'Fix & Flip',
    'Rental',
    'Commercial',
    'Other',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setError('Please provide your first and last name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError('Please provide a valid email address.');
      return;
    }

    if (!formData.phone.trim()) {
      setError('Please enter a valid telephone number.');
      return;
    }

    if (!formData.consent) {
      setError('Please agree to receive investment notifications.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/vip-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit VIP registration.');
      }

      setSubmittedRef(data.referenceId);
      try {
        localStorage.setItem(
          'kld_vip_member',
          JSON.stringify({
            ref: data.referenceId,
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            date: new Date().toISOString(),
          })
        );
      } catch (err) {
        // ignore
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during submission. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      investorType: 'Individual Investor',
      budgetRange: '$250,000 - $500,000',
      preferredLocations: '',
      investmentType: 'Fix & Flip',
      consent: true,
    });
  };

  return (
    <section id="vip-buyers-list" className="py-10 lg:py-14 bg-[#F4F6F8] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Compact Container */}
        <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: Investor Benefits (Image Removed, Height Compacted) */}
          <div className="lg:col-span-5 bg-[#073449] p-6 sm:p-8 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              
              <div className="inline-flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#F2B600]" />
                <span className="text-[11px] font-['Montserrat'] font-bold uppercase tracking-[0.2em] text-[#F2B600]">
                  VIP Investor Membership
                </span>
              </div>

              <h2 className="font-['Montserrat'] text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-snug">
                Get Exclusive Access to Off-Market Deals.
              </h2>

              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                Join our VIP buyers list to receive priority access to discounted investment opportunities before they reach the wider market.
              </p>

              {/* Investor Member Benefits */}
              <div className="space-y-2.5 pt-3 border-t border-white/10">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F2B600] shrink-0 mt-0.5" />
                  <div className="text-xs text-stone-200">
                    <strong className="text-white font-medium">Early access: </strong>
                    Receive off-market packets prior to broader syndication.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F2B600] shrink-0 mt-0.5" />
                  <div className="text-xs text-stone-200">
                    <strong className="text-white font-medium">Discounted deals: </strong>
                    Direct-to-seller contracts without retail markups.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F2B600] shrink-0 mt-0.5" />
                  <div className="text-xs text-stone-200">
                    <strong className="text-white font-medium">Targeted matching: </strong>
                    Opportunities tailored to your buy-box criteria.
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Badge */}
            <div className="relative z-10 pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-stone-300">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F2B600]" />
                <span>Strict Discretion &amp; Confidentiality</span>
              </div>
              <span className="font-mono text-[#F2B600]">KLD VIP</span>
            </div>

            {/* Subtle background glow */}
            <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-[#F2B600]/10 blur-2xl pointer-events-none" />
          </div>

          {/* Right Column: Compact Investor Registration Form */}
          <div className="lg:col-span-7 p-6 sm:p-7 lg:p-8 flex flex-col justify-center bg-white">
            {submittedRef ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                
                <h3 className="font-['Montserrat'] text-xl font-bold text-[#073449]">
                  Welcome to the VIP Buyers List
                </h3>

                <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Your investor registration has been logged. Our acquisitions desk will match incoming contracts to your buy box.
                </p>

                <div className="p-2.5 bg-[#F4F6F8] rounded border border-[#E2E8F0] inline-block font-mono text-xs text-[#073449]">
                  Membership ID: <span className="font-bold text-[#F2B600]">{submittedRef}</span>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2 rounded border border-stone-300 text-stone-700 text-xs font-['Montserrat'] font-bold uppercase tracking-wider hover:bg-stone-100 transition-colors cursor-pointer"
                  >
                    Submit Another Profile
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="border-b border-stone-200 pb-2 mb-1">
                  <h3 className="font-['Montserrat'] text-lg font-bold text-[#073449]">
                    Investor Registration
                  </h3>
                  <p className="text-stone-500 text-xs">
                    Define your acquisition parameters to receive curated off-market deal alerts.
                  </p>
                </div>

                {error && (
                  <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Name Row: 2 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="e.g. Eleanor"
                      className="w-full px-3 py-1.5 text-xs sm:text-sm border border-stone-300 rounded focus:outline-none focus:border-[#F2B600] focus:ring-1 focus:ring-[#F2B600]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="e.g. Hayes"
                      className="w-full px-3 py-1.5 text-xs sm:text-sm border border-stone-300 rounded focus:outline-none focus:border-[#F2B600] focus:ring-1 focus:ring-[#F2B600]"
                    />
                  </div>
                </div>

                {/* Contact Row: 2 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="investor@domain.com"
                      className="w-full px-3 py-1.5 text-xs sm:text-sm border border-stone-300 rounded focus:outline-none focus:border-[#F2B600] focus:ring-1 focus:ring-[#F2B600]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 000-0000"
                      className="w-full px-3 py-1.5 text-xs sm:text-sm border border-stone-300 rounded focus:outline-none focus:border-[#F2B600] focus:ring-1 focus:ring-[#F2B600]"
                    />
                  </div>
                </div>

                {/* Investor Type & Budget Range: 2 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                      Investor Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.investorType}
                      onChange={(e) => setFormData({ ...formData, investorType: e.target.value as InvestorType })}
                      className="w-full px-3 py-1.5 text-xs sm:text-sm border border-stone-300 rounded focus:outline-none focus:border-[#F2B600] focus:ring-1 focus:ring-[#F2B600] bg-white"
                    >
                      {investorTypeOptions.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                      Budget Range
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-3 py-1.5 text-xs sm:text-sm border border-stone-300 rounded focus:outline-none focus:border-[#F2B600] focus:ring-1 focus:ring-[#F2B600] bg-white"
                    >
                      {budgetOptions.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Preferred Locations & Investment Type: 2 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                      Preferred Location
                    </label>
                    <input
                      type="text"
                      value={formData.preferredLocations}
                      onChange={(e) => setFormData({ ...formData, preferredLocations: e.target.value })}
                      placeholder="e.g. City, Metro Areas, Counties"
                      className="w-full px-3 py-1.5 text-xs sm:text-sm border border-stone-300 rounded focus:outline-none focus:border-[#F2B600] focus:ring-1 focus:ring-[#F2B600]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                      Investment Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.investmentType}
                      onChange={(e) => setFormData({ ...formData, investmentType: e.target.value as InvestmentCategory })}
                      className="w-full px-3 py-1.5 text-xs sm:text-sm border border-stone-300 rounded focus:outline-none focus:border-[#F2B600] focus:ring-1 focus:ring-[#F2B600] bg-white"
                    >
                      {investmentTypeOptions.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-2 cursor-pointer text-[11px] text-stone-600 leading-tight">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 rounded border-stone-300 text-[#073449] focus:ring-[#F2B600]"
                    />
                    <span>
                      I consent to receive off-market alerts and property packets from KLD Investments &amp; Consulting.
                    </span>
                  </label>
                </div>

                {/* Submit Action */}
                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 px-5 rounded bg-[#F2B600] hover:bg-[#D9A300] active:scale-[0.99] text-[#073449] font-['Montserrat'] font-bold text-xs uppercase tracking-wider transition-all duration-150 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-[#073449]" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Join VIP Buyers List</span>
                        <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[10px] text-stone-400 text-center pt-0.5">
                  <Lock className="w-3 h-3 text-[#F2B600]" />
                  <span>Your investor preferences and contact details are kept strictly confidential.</span>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
