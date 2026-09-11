import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake, Award, Sparkle, Tag } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
  onClaimOffer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices, onClaimOffer }) => {
  const trustHighlights = [
    { label: 'Professional Bridal Artist', icon: Award },
    { label: 'Premium Luxury Products', icon: Sparkle },
    { label: 'Personalized Bespoke Looks', icon: HeartHandshake },
    { label: 'Hygiene-First Protocols', icon: ShieldCheck },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[680px] lg:min-h-[760px] bg-[#120D0B] pt-32 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden border-b border-[#211612]"
    >
      {/* Subtle Luxury Radial Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#C9A15B]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#211612]/60 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Delicate background decorative line pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C9A15B_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (Approx 45-48%) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center text-left">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] bg-[#211612] border border-[#C9A15B]/30 w-fit mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A15B]" />
              <span className="text-[11px] font-sans font-semibold tracking-[0.28em] text-[#C9A15B] uppercase">
                Bridal Beauty • Elevated
              </span>
            </div>

            {/* Main Editorial Serif Heading */}
            <h1 className="font-serif text-3xl sm:text-5xl xl:text-[54px] font-normal leading-[1.12] text-[#FFFDFC] mb-6 tracking-tight">
              Makeup That Makes Your{' '}
              <span className="italic font-light text-[#C9A15B] block sm:inline">
                Bridal Moments
              </span>{' '}
              Unforgettable
            </h1>

            {/* Supporting Text */}
            <p className="font-sans text-base sm:text-lg text-[#E8DED1]/85 leading-relaxed mb-8 max-w-xl font-normal">
              Timeless bridal makeup crafted around your features, your heritage style, and the precious sacred moments you will cherish for a lifetime.
            </p>

            {/* Conversion CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenBooking}
                id="hero-primary-cta"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C9A15B] text-[#120D0B] text-xs font-semibold tracking-[0.16em] uppercase rounded-[2px] shadow-xl shadow-[#C9A15B]/15 hover:bg-[#E2C889] hover:shadow-[#C9A15B]/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>Book Your Bridal Date</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreServices}
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-transparent border border-[#C9A15B]/40 text-[#E8DED1] hover:text-[#C9A15B] hover:border-[#C9A15B] text-xs font-medium tracking-[0.16em] uppercase rounded-[2px] hover:bg-[#211612]/50 transition-all duration-200 cursor-pointer"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Trust Row with line icons */}
            <div className="pt-6 border-t border-[#211612] grid grid-cols-2 sm:grid-cols-4 gap-4">
              {trustHighlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-start gap-1.5">
                    <div className="w-7 h-7 rounded-full bg-[#211612] border border-[#C9A15B]/25 flex items-center justify-center text-[#C9A15B]">
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] leading-tight font-medium text-[#A99B8C] tracking-wide">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column (Approx 52-55% visual domination) */}
          <div className="lg:col-span-6 xl:col-span-7 relative flex justify-center lg:justify-end mt-6 lg:mt-0">
            
            {/* Elegant Background Gold Offset Frame */}
            <div className="relative w-full max-w-[500px] sm:max-w-[520px] lg:max-w-[560px]">
              
              {/* Gold Decorative Backing Border */}
              <div className="absolute -inset-3 sm:-inset-4 border border-[#C9A15B]/30 rounded-[4px] pointer-events-none translate-x-2 translate-y-2 hidden sm:block"></div>
              
              {/* Outer Image Wrapper */}
              <div className="relative rounded-[3px] overflow-hidden shadow-2xl shadow-black/80 border border-[#C9A15B]/40 bg-[#211612] group">
                
                {/* Main Hero Photographic Image */}
                <img
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85"
                  alt="Traditional Indian Bride in Royal Wedding Attire with Flawless Makeup by Aruna Makeup Studio"
                  referrerPolicy="no-referrer"
                  className="w-full h-[460px] sm:h-[560px] lg:h-[620px] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

                {/* Subtle dark gradient overlay toward text side and bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#120D0B]/90 via-transparent to-transparent opacity-80 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#120D0B]/30 via-transparent to-transparent pointer-events-none"></div>

                {/* Bottom Photo Caption Tag */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 flex items-center justify-between pointer-events-none">
                  <div>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#C9A15B] font-semibold block">
                      Featured Bride
                    </span>
                    <span className="font-serif text-base sm:text-lg text-[#FFFDFC] font-normal">
                      Royal Heritage Wedding Look
                    </span>
                  </div>
                  <span className="text-[11px] font-sans text-[#E8DED1]/70 bg-[#120D0B]/70 backdrop-blur-sm px-2.5 py-1 border border-[#C9A15B]/20">
                    Hyderabad
                  </span>
                </div>
              </div>

              {/* Floating Promotional Card */}
              <div
                onClick={onClaimOffer}
                className="absolute -bottom-6 -left-3 sm:-left-6 sm:bottom-10 bg-[#211612]/95 backdrop-blur-md border border-[#C9A15B]/50 p-4 sm:p-5 rounded-[2px] shadow-2xl shadow-black max-w-[240px] sm:max-w-[260px] hover:border-[#C9A15B] hover:-translate-y-1 transition-all duration-300 cursor-pointer z-20 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-bold tracking-[0.25em] text-[#C9A15B] uppercase flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    Bridal Special
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 bg-[#C9A15B]/20 text-[#E2C889] font-medium border border-[#C9A15B]/30">
                    2026
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#FFFDFC] tracking-tight">
                    10% OFF
                  </span>
                </div>

                <p className="text-xs text-[#E8DED1]/80 mb-3 leading-snug">
                  On your first bridal package booking when reserved this month.
                </p>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-[#C9A15B] group-hover:text-[#FFFDFC] uppercase">
                  <span>Claim Offer</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
