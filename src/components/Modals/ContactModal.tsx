import React, { useState } from 'react';
import { X, CheckCircle, Mail, Loader2, AlertCircle } from 'lucide-react';
import { ContactForm } from '../../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: 'General Acquisition Inquiry',
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit contact message.');
      }

      setSubmittedRef(data.referenceId);
    } catch (err: any) {
      setError(err.message || 'Submission error. Please try again.');
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
      subject: 'General Acquisition Inquiry',
      message: '',
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
            <Mail className="w-5 h-5 text-[#F2B600]" />
            <span className="font-['Montserrat'] text-base font-bold text-white">Contact KLD Acquisitions</span>
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
                Message Delivered
              </h3>
              <p className="text-stone-600 text-sm max-w-md mx-auto">
                Thank you for contacting KLD Investments &amp; Consulting. An acquisition advisor will respond within 1 business day.
              </p>
              <div className="p-3 bg-[#F4F6F8] rounded border border-[#E2E8F0] inline-block font-mono text-sm text-[#073449]">
                Inquiry Ref: <span className="font-bold text-[#F2B600]">{submittedRef}</span>
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
                Have questions about our off-market sourcing model, property criteria, or partnership structures? Send our executive team a message.
              </p>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded focus:outline-none focus:border-[#F2B600] focus:ring-1 focus:ring-[#F2B600]"
                    placeholder="Full name"
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
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded focus:outline-none focus:border-[#F2B600] focus:ring-1 focus:ring-[#F2B600]"
                    placeholder="(555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded focus:outline-none focus:border-[#F2B600] focus:ring-1 focus:ring-[#F2B600] bg-white"
                  >
                    <option value="General Acquisition Inquiry">General Acquisition Inquiry</option>
                    <option value="VIP Buyers List Question">VIP Buyers List Question</option>
                    <option value="Joint Venture Discussion">Joint Venture Discussion</option>
                    <option value="Property Lead / Referral">Property Lead / Referral</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Message Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-stone-300 rounded focus:outline-none focus:border-[#F2B600] focus:ring-1 focus:ring-[#F2B600]"
                  placeholder="How can KLD Investments & Consulting assist your real estate investment strategy?"
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
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
