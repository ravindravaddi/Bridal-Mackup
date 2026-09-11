import React from 'react';
import { ArrowRight, Check, Sparkles, Crown, Star } from 'lucide-react';
import { BRIDAL_PACKAGES } from '../data/bridalData';

interface PackagesSectionProps {
  onSelectPackage: (packageName: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="bg-[#18110E] py-20 sm:py-28 relative overflow-hidden border-b border-[#211612]">
      {/* Subtle luxury ambient glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#C9A15B]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#211612] border border-[#C9A15B]/30 mb-4">
            <Crown className="w-3.5 h-3.5 text-[#C9A15B]" />
            <span className="text-[10px] font-sans font-semibold tracking-[0.3em] text-[#C9A15B] uppercase">
              Curated Luxury Bridal Collections
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FFFDFC] tracking-tight mb-4">
            Your Complete Bridal Beauty Experience
          </h2>

          <p className="text-sm sm:text-base text-[#E8DED1]/80 leading-relaxed font-normal">
            Whether preparing for a private sacred ceremony or a grand 3-day royal palace celebration, select an elevated curation designed to keep you breathtaking at every turn.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {BRIDAL_PACKAGES.map((pkg) => {
            const isFeatured = pkg.isPopular;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-[3px] p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-[#211612] border-2 border-[#C9A15B] shadow-2xl shadow-[#C9A15B]/10 lg:-translate-y-2'
                    : 'bg-[#120D0B] border border-[#2D1F1A] hover:border-[#C9A15B]/40'
                }`}
              >
                {/* Popular Recommended Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C9A15B] text-[#120D0B] text-[10px] font-bold tracking-[0.22em] uppercase px-4 py-1 rounded-[2px] shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Star className="w-3 h-3 fill-[#120D0B]" />
                    <span>Most Beloved by Brides</span>
                  </div>
                )}

                <div>
                  {/* Package Title & Subtitle */}
                  <div className="border-b border-[#2D1F1A] pb-6 mb-6">
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#FFFDFC] mb-2 tracking-wide">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#A99B8C] leading-relaxed">
                      {pkg.subtitle}
                    </p>
                    <div className="mt-4 pt-3 border-t border-[#2D1F1A]/60 flex items-center justify-between">
                      <span className="text-[11px] font-sans text-[#A99B8C] uppercase tracking-wider">
                        Package Pricing
                      </span>
                      <span className="text-xs font-semibold tracking-wider text-[#C9A15B] uppercase">
                        {pkg.priceNote}
                      </span>
                    </div>
                  </div>

                  {/* Ideal For Note */}
                  <div className="mb-6 bg-[#18110E] p-3 rounded-[2px] border border-[#2D1F1A]">
                    <span className="text-[10px] uppercase tracking-wider text-[#C9A15B] font-semibold block mb-0.5">
                      Ideal For:
                    </span>
                    <p className="text-xs text-[#E8DED1]/90 leading-snug">
                      {pkg.idealFor}
                    </p>
                  </div>

                  {/* Included Items Checklist */}
                  <div className="space-y-4 mb-8">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A15B] block">
                      Package Inclusions:
                    </span>
                    <ul className="space-y-2.5">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#E8DED1]/90">
                          <Check className="w-4 h-4 text-[#C9A15B] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Perks */}
                    <div className="pt-3 border-t border-[#2D1F1A]">
                      <span className="text-[10px] font-medium uppercase tracking-wider text-[#A99B8C] block mb-2">
                        Exclusive Studio Perks:
                      </span>
                      <ul className="space-y-1.5">
                        {pkg.perks.map((perk, i) => (
                          <li key={i} className="flex items-center gap-2 text-[11px] text-[#A98245]">
                            <Sparkles className="w-3 h-3 text-[#C9A15B] shrink-0" />
                            <span>{perk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-[#2D1F1A]">
                  <button
                    onClick={() => onSelectPackage(pkg.name)}
                    className={`w-full py-3.5 px-6 rounded-[2px] text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      isFeatured
                        ? 'bg-[#C9A15B] text-[#120D0B] hover:bg-[#E2C889] shadow-lg shadow-[#C9A15B]/20'
                        : 'bg-transparent border border-[#C9A15B]/50 text-[#E8DED1] hover:text-[#C9A15B] hover:border-[#C9A15B] hover:bg-[#211612]'
                    }`}
                  >
                    <span>Check Your Date</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Package Assurance Footnote */}
        <div className="mt-12 p-6 rounded-[2px] bg-[#120D0B] border border-[#2D1F1A] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#211612] border border-[#C9A15B]/30 flex items-center justify-center text-[#C9A15B] shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-serif text-base text-[#FFFDFC]">Custom Destination & Multi-City Itineraries</h4>
              <p className="text-xs text-[#A99B8C]">Planning a wedding in Udaipur, Goa, Jaipur, or abroad? We coordinate seamless travel logistics.</p>
            </div>
          </div>

          <button
            onClick={() => onSelectPackage('Destination Wedding Inquiries')}
            className="shrink-0 px-5 py-2.5 bg-[#211612] hover:bg-[#2D1F1A] border border-[#C9A15B]/40 text-[#C9A15B] hover:text-[#FFFDFC] text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-colors cursor-pointer"
          >
            Inquire For Destination
          </button>
        </div>

      </div>
    </section>
  );
};
