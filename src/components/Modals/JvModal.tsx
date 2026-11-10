import React, { useState } from 'react';
import { X, CheckCircle, Handshake, Loader2, AlertCircle, ArrowRight } from 'lucide-react';
import { JvInquiryForm } from '../../types';

interface JvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JvModal: React.FC<JvModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<JvInquiryForm>({
    name: '',
    email: '',
    phone: '',
    role: 'Capital Partner',
    capitalAvailable: '$250,000 - $500,000',
    targetMarkets: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch('/api/jv-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit JV inquiry.');
      }

      setSubmittedRef(data.referenceId);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      role: 'Capital Partner',
      capitalAvailable: '$250,000 - $500,000',
      targetMarkets: '',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden border border-[#17334A] my-8 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#073449] text-white">
          <div className="flex items-center gap-2.5">
            <Handshake className="w-5 h-5 text-[#F2B600]" />
            <span className="font-['Montserrat'] text-base font-bold text-white">Joint Venture Partnership Inquiry</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-stone-300 hover:text-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submittedRef ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 border border-emerald-200">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-['Montserrat'] text-2xl font-bold text-[#073449]">
                Joint Venture Inquiry Logged
              </h3>
              <p className="text-stone-600 text-sm max-w-md mx-auto">
                Thank you for reaching out to KLD Investments &amp; Consulting. An executive acquisitions director will review your investment parameters.
              </p>
              <div className="p-3 bg-[#F4F6F8] rounded border border-[#E2E8F0] inline-block font-mono text-sm text-[#073449]">
                Reference ID: <span className="font-bold text-[#F2B600]">{submittedRef}</span>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#073449] text-white text-xs font-['Montserrat'] font-bold uppercase tracking-wider rounded hover:bg-[#17334A] transition-colors"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                Connect with our acquisitions and syndication team to discuss equity partnerships, co-investments, or capital deployment parameters.
              </p>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded focus:outline-none focus:border-[#F2B600] focus:ring-1 focus:ring-[#F2B600]"
                    placeholder="e.g. Marcus Vance"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded focus:outline-none focus:border-[#F2B600] focus:ring-1 focus:ring-[#F2B600]"
                    placeholder="marcus@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded focus:outline-none focus:border-[#F2B600] focus:ring-1 focus:ring-[#F2B600]"
                    placeholder="(555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    JV Role Structure
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e: any) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded focus:outline-none focus:border-[#F2B600] focus:ring-1 focus:ring-[#F2B600] bg-white"
                  >
                    <option value="Capital Partner">Capital Partner / Equity Provider</option>
                    <option value="Operational Partner">Operational / Contractor Partner</option>
                    <option value="Developer">Land / Development Partner</option>
                    <option value="Other">Other Strategic Alignment</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Capital Capacity Available
                  </label>
                  <select
                    value={formData.capitalAvailable}
                    onChange={(e) => setFormData({ ...formData, capitalAvailable: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded focus:outline-none focus:border-[#F2B600] focus:ring-1 focus:ring-[#F2B600] bg-white"
                  >
                    <option value="$100,000 - $250,000">$100,000 - $250,000</option>
                    <option value="$250,000 - $500,000">$250,000 - $500,000</option>
                    <option value="$500,000 - $1,000,000">$500,000 - $1,000,000</option>
                    <option value="$1,000,000 - $3,000,000">$1,000,000 - $3,000,000</option>
                    <option value="$3,000,000+">$3,000,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Target Geographies / Markets
                  </label>
                  <input
                    type="text"
                    value={formData.targetMarkets}
                    onChange={(e) => setFormData({ ...formData, targetMarkets: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded focus:outline-none focus:border-[#F2B600] focus:ring-1 focus:ring-[#F2B600]"
                    placeholder="e.g. Southeast, Midwest, Regional"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Brief Overview of Objectives &amp; Deal Criteria
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-stone-300 rounded focus:outline-none focus:border-[#F2B600] focus:ring-1 focus:ring-[#F2B600]"
                  placeholder="Share details on your target yields, past project experience, or specific partnership criteria..."
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-stone-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 bg-[#F2B600] hover:bg-[#D9A300] text-[#073449] font-['Montserrat'] font-bold text-xs uppercase tracking-wider rounded transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  <span>Submit JV Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
