import React, { useState } from 'react';
import { FEATURED_PROPERTIES, PropertyPreview } from '../data/properties';
import { MapPin, ArrowRight, Handshake, Share2, Eye, X, CheckCircle2 } from 'lucide-react';

interface FeaturedOpportunitiesProps {
  onOpenJv: () => void;
  onOpenReferral: () => void;
  onInquireOnProperty: (property: PropertyPreview) => void;
}

export const FeaturedOpportunities: React.FC<FeaturedOpportunitiesProps> = ({
  onOpenJv,
  onOpenReferral,
  onInquireOnProperty,
}) => {
  const [activePropertyModal, setActivePropertyModal] = useState<PropertyPreview | null>(null);

  return (
    <section id="featured-opportunities" className="py-16 lg:py-20 bg-[#F4F6F8] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="text-[11px] font-['Montserrat'] font-bold uppercase tracking-[0.18em] text-[#F2B600]">
              Curated Off-Market Inventory
            </span>
          </div>

          <h2 className="font-['Montserrat'] text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#073449]">
            Discover Your Next Investment Opportunity.
          </h2>
        </div>

        {/* Up to Three Property Listings Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {FEATURED_PROPERTIES.slice(0, 3).map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl overflow-hidden border border-[#E2E8F0] hover:border-[#F2B600] transition-all duration-200 shadow-sm hover:shadow-md flex flex-col group"
            >
              {/* Property Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#073449]/90 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-['Montserrat'] font-bold tracking-wider text-white uppercase">
                  {property.propertyType}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#F2B600]" />
                    <span>{property.location}</span>
                  </div>

                  <h3 className="font-['Montserrat'] text-base font-bold text-[#073449] group-hover:text-[#17334A] leading-snug">
                    {property.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {property.description}
                  </p>
                </div>

                {/* View Details Link */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() => setActivePropertyModal(property)}
                    className="inline-flex items-center gap-1.5 text-xs font-['Montserrat'] font-bold uppercase tracking-wider text-[#073449] hover:text-[#F2B600] transition-colors cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-[10px] font-mono text-stone-400">
                    {property.id.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Two Smaller Opportunity Links Below Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          
          {/* Link 1: Joint Venture Opportunities */}
          <div className="bg-white p-5 rounded-lg border border-[#E2E8F0] hover:border-[#073449] transition-colors flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#073449] text-[#F2B600] flex items-center justify-center shrink-0">
                <Handshake className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h4 className="font-['Montserrat'] font-bold text-sm text-[#073449]">
                  Joint Venture Opportunities
                </h4>
                <p className="text-xs text-stone-500">
                  Partner on equity co-investments and strategic real estate projects.
                </p>
              </div>
            </div>

            <button
              onClick={onOpenJv}
              className="shrink-0 px-3.5 py-2 rounded bg-[#073449] text-white hover:bg-[#17334A] text-[11px] font-['Montserrat'] font-bold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5"
            >
              <span>Explore JV</span>
              <ArrowRight className="w-3 h-3 text-[#F2B600]" />
            </button>
          </div>

          {/* Link 2: Referral Opportunities */}
          <div className="bg-white p-5 rounded-lg border border-[#E2E8F0] hover:border-[#073449] transition-colors flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#F2B600] text-[#073449] flex items-center justify-center shrink-0">
                <Share2 className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h4 className="font-['Montserrat'] font-bold text-sm text-[#073449]">
                  Referral Opportunities
                </h4>
                <p className="text-xs text-stone-500">
                  Connect us with off-market property leads or motivated owners.
                </p>
              </div>
            </div>

            <button
              onClick={onOpenReferral}
              className="shrink-0 px-3.5 py-2 rounded bg-[#073449] text-white hover:bg-[#17334A] text-[11px] font-['Montserrat'] font-bold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5"
            >
              <span>Refer a Deal</span>
              <ArrowRight className="w-3 h-3 text-[#F2B600]" />
            </button>
          </div>

        </div>

      </div>

      {/* Property Details Modal */}
      {activePropertyModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div 
            className="relative bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden border border-[#E2E8F0] my-8 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#073449] text-white">
              <div className="flex items-center gap-2">
                <span className="font-['Montserrat'] font-bold text-sm text-[#F2B600] uppercase tracking-wider">
                  Opportunity Framework
                </span>
                <span className="text-white/40">|</span>
                <span className="text-xs font-mono text-stone-300">{activePropertyModal.id.toUpperCase()}</span>
              </div>
              <button
                onClick={() => setActivePropertyModal(null)}
                className="p-1 rounded text-stone-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 space-y-6">
              <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-stone-100">
                <img
                  src={activePropertyModal.imageUrl}
                  alt={activePropertyModal.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-medium text-stone-500 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#F2B600]" />
                  <span>{activePropertyModal.location}</span>
                  <span>·</span>
                  <span>{activePropertyModal.propertyType}</span>
                </div>
                <h3 className="font-['Montserrat'] text-xl font-bold text-[#073449]">
                  {activePropertyModal.title}
                </h3>
              </div>

              <div className="space-y-2">
                <h4 className="font-['Montserrat'] text-xs font-bold uppercase tracking-wider text-stone-700">
                  Opportunity Overview
                </h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {activePropertyModal.description}
                </p>
              </div>

              <div className="p-4 bg-[#F4F6F8] rounded-lg border border-[#E2E8F0] space-y-2">
                <h4 className="font-['Montserrat'] text-xs font-bold uppercase tracking-wider text-[#073449]">
                  Underwriting Highlights
                </h4>
                <ul className="space-y-1.5">
                  {activePropertyModal.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-stone-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#073449] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-amber-50 rounded border border-amber-200 text-xs text-amber-900">
                <strong>Confidentiality Notice:</strong> Specific parcel records, title documentation, and seller contract terms are shared under non-disclosure with verified members of our VIP Buyers List.
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-end gap-3">
              <button
                onClick={() => setActivePropertyModal(null)}
                className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const prop = activePropertyModal;
                  setActivePropertyModal(null);
                  onInquireOnProperty(prop);
                }}
                className="px-5 py-2.5 rounded bg-[#F2B600] hover:bg-[#D9A300] text-[#073449] font-['Montserrat'] font-bold text-xs uppercase tracking-wider transition-colors shadow"
              >
                Inquire via VIP List
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
