import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/bridalData';
import { Testimonial } from '../types';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="bg-[#FFFDFC] text-[#120D0B] py-20 sm:py-28 border-b border-[#E8DED1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#A98245]"></span>
            <span className="text-[10px] font-sans font-semibold tracking-[0.3em] text-[#A98245] uppercase">
              Love From Our Brides
            </span>
            <span className="w-5 h-[1.5px] bg-[#A98245]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#120D0B] tracking-tight mb-4">
            Brides Who Trusted Aruna
          </h2>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
            Real experiences from women who walked down their wedding aisles feeling poised, authentic, and radiant.
          </p>
        </div>

        {/* Testimonials Grid (Cream cards with thin borders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((review: Testimonial) => (
            <div
              key={review.id}
              className="bg-[#F7F2EA] border border-[#E8DED1] hover:border-[#C9A15B] rounded-[2px] p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group shadow-sm hover:shadow-md"
            >
              <div>
                {/* Decorative Quotation Mark & Star Rating */}
                <div className="flex items-center justify-between mb-5">
                  <Quote className="w-6 h-6 text-[#C9A15B] rotate-180" />
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C9A15B] text-[#C9A15B]" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="font-sans text-xs sm:text-sm text-stone-700 leading-relaxed italic mb-6">
                  "{review.quote}"
                </p>
              </div>

              {/* Bride Details */}
              <div className="pt-4 border-t border-[#E8DED1] flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.brideName}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-[#C9A15B]/40"
                />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#120D0B] leading-tight">
                    {review.brideName}
                  </h4>
                  <span className="text-[11px] font-sans text-[#A98245] block mt-0.5 leading-snug">
                    {review.event}
                  </span>
                  <span className="text-[10px] text-stone-500 block">
                    {review.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metric Banner */}
        <div className="mt-14 max-w-3xl mx-auto text-center border-t border-[#E8DED1] pt-8 flex flex-wrap items-center justify-around gap-6">
          <div>
            <span className="font-serif text-3xl font-normal text-[#120D0B]">450+</span>
            <span className="text-xs text-stone-500 block uppercase tracking-wider mt-1">Weddings Curated</span>
          </div>
          <div className="w-[1px] h-8 bg-[#E8DED1] hidden sm:block"></div>
          <div>
            <span className="font-serif text-3xl font-normal text-[#120D0B]">100%</span>
            <span className="text-xs text-stone-500 block uppercase tracking-wider mt-1">Prestige Cosmetics</span>
          </div>
          <div className="w-[1px] h-8 bg-[#E8DED1] hidden sm:block"></div>
          <div>
            <span className="font-serif text-3xl font-normal text-[#120D0B]">4.98 ★</span>
            <span className="text-xs text-stone-500 block uppercase tracking-wider mt-1">Average Bride Rating</span>
          </div>
        </div>

      </div>
    </section>
  );
};
