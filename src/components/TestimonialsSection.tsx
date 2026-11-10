import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      id: 1,
      quote:
        'KLD Investments & Consulting has become our primary off-market acquisition channel. Sourcing direct-to-seller contracts with clear spreads has allowed our firm to deploy capital into three major residential projects without competitive retail bidding.',
      author: 'Marcus Vance',
      role: 'Managing Partner, Tri-State Capital Holdings',
      market: 'Single-Family & Multi-Unit Renovations',
      initials: 'MV',
    },
    {
      id: 2,
      quote:
        'Finding genuine fix-and-flip opportunities with solid equity margins is tough in today’s market. KLD’s VIP buyers list gave us first-look access to high-potential residential properties with verified comps and direct assignment terms.',
      author: 'Sarah Jenkins',
      role: 'Principal Operator, Horizon Residential Group',
      market: 'Value-Add & Heavy Rehab Projects',
      initials: 'SJ',
    },
    {
      id: 3,
      quote:
        'The speed, title clarity, and discretion of the KLD team are outstanding. Their deal packets provide thorough preliminary scope data that saves our acquisitions team hours of underwriting on every prospective opportunity.',
      author: 'David Reynolds',
      role: 'Acquisitions Lead, Capital Infill Partners',
      market: 'Rental Portfolio & Commercial Assets',
      initials: 'DR',
    },
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="text-[11px] font-['Montserrat'] font-bold uppercase tracking-[0.18em] text-[#F2B600]">
              Investor Reviews
            </span>
          </div>

          <h2 className="font-['Montserrat'] text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#073449]">
            Trusted by Serious Real Estate Investors.
          </h2>
        </div>

        {/* 3 Testimonial Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#F4F6F8] rounded-xl p-6 sm:p-7 border border-[#E2E8F0] hover:border-[#F2B600] transition-all duration-200 shadow-sm flex flex-col justify-between group"
            >
              <div>
                {/* 5-Star Rating & Quote Icon Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#F2B600]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F2B600] stroke-[#F2B600]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-stone-300 group-hover:text-[#F2B600]/60 transition-colors" />
                </div>

                {/* Review Quote */}
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic mb-6">
                  "{review.quote}"
                </p>
              </div>

              {/* Author Lockup */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#073449] border border-[#F2B600] text-[#F2B600] font-['Montserrat'] font-bold text-xs flex items-center justify-center shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <h3 className="font-['Montserrat'] font-bold text-sm text-[#073449]">
                      {review.author}
                    </h3>
                    <p className="text-[11px] text-stone-500 leading-tight">
                      {review.role}
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[10px] font-['Montserrat'] font-semibold text-[#073449]">
                  <CheckCircle2 className="w-3 h-3 text-[#F2B600]" />
                  <span>Verified VIP</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
