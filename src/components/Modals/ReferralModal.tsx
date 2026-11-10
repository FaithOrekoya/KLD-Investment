import React, { useState } from 'react';
import { X, CheckCircle, Share2, Loader2, AlertCircle } from 'lucide-react';
import { ReferralInquiryForm } from '../../types';

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReferralModal: React.FC<ReferralModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ReferralInquiryForm>({
    referrerName: '',
    referrerEmail: '',
    referrerPhone: '',
    propertyAddress: '',
    propertyType: 'Single-Family Residential',
    notes: '',
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
      const response = await fetch('/api/referral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit referral inquiry.');
      }

      setSubmittedRef(data.referenceId);
    } catch (err: any) {
      setError(err.message || 'An error occurred while submitting referral.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setFormData({
      referrerName: '',
      referrerEmail: '',
      referrerPhone: '',
      propertyAddress: '',
      propertyType: 'Single-Family Residential',
      notes: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white w-full max-w-xl rounded-xl shadow-2xl overflow-hidden border border-[#17334A] my-8 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#073449] text-white">
          <div className="flex items-center gap-2.5">
            <Share2 className="w-5 h-5 text-[#F2B600]" />
            <span className="font-['Montserrat'] text-base font-bold text-white">Submit a Property Referral</span>
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
                Referral Inquiry Received
              </h3>
              <p className="text-stone-600 text-sm max-w-md mx-auto">
                Thank you for connecting us with this opportunity. Our property acquisitions team will review the details promptly.
              </p>
              <div className="p-3 bg-[#F4F6F8] rounded border border-[#E2E8F0] inline-block font-mono text-sm text-[#073449]">
                Tracking Ref: <span className="font-bold text-[#F2B600]">{submittedRef}</span>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#073449] text-white text-xs font-['Montserrat'] font-bold uppercase tracking-wider rounded hover:bg-[#17334A] transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                Know of a property owner looking for an off-market disposition or have an opportunity you'd like our team to evaluate? Submit the basic information below.
              </p>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="space-y-3">
                <h4 className="text-xs font-['Montserrat'] uppercase tracking-wider font-bold text-[#073449] border-b pb-1">
                  Your Contact Information
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.referrerName}
                      onChange={(e) => setFormData({ ...formData, referrerName: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-stone-300 rounded focus:outline-none focus:border-[#F2B600] focus:ring-1 focus:ring-[#F2B600]"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Your Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.referrerPhone}
                      onChange={(e) => setFormData({ ...formData, referrerPhone: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-stone-300 rounded focus:outline-none focus:border-[#F2B600] focus:ring-1 focus:ring-[#F2B600]"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.referrerEmail}
                    onChange={(e) => setFormData({ ...formData, referrerEmail: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded focus:outline-none focus:border-[#F2B600] focus:ring-1 focus:ring-[#F2B600]"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-['Montserrat'] uppercase tracking-wider font-bold text-[#073449] border-b pb-1">
                  Property Opportunity Details
                </h4>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Property Address or Geographic Area <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.propertyAddress}
                    onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded focus:outline-none focus:border-[#F2B600] focus:ring-1 focus:ring-[#F2B600]"
                    placeholder="Street address, city, state, or parcel details"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Estimated Property Classification
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded focus:outline-none focus:border-[#F2B600] focus:ring-1 focus:ring-[#F2B600] bg-white"
                  >
                    <option value="Single-Family Residential">Single-Family Residential</option>
                    <option value="Multi-Family Residential">Multi-Family Residential</option>
                    <option value="Commercial / Mixed-Use">Commercial / Mixed-Use</option>
                    <option value="Vacant Land / Infill Lot">Vacant Land / Infill Lot</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Additional Context / Seller Situation
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded focus:outline-none focus:border-[#F2B600] focus:ring-1 focus:ring-[#F2B600]"
                    placeholder="Any notes regarding condition, timeline, or owner preferences..."
                  />
                </div>
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
                  <span>Submit Referral</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
