import React from 'react';
import { Sparkles, Eye, Scissors, Gem, ArrowRight } from 'lucide-react';

interface TransformationSectionProps {
  onOpenBooking: () => void;
  onViewImage: (image: string, title: string) => void;
}

export const TransformationSection: React.FC<TransformationSectionProps> = ({
  onOpenBooking,
  onViewImage,
}) => {
  return (
    <section className="bg-[#120D0B] text-[#F7F2EA] py-20 sm:py-28 relative overflow-hidden border-b border-[#211612]">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#C9A15B]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#211612] border border-[#C9A15B]/30 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A15B]" />
              <span className="text-[10px] font-sans font-semibold tracking-[0.3em] text-[#C9A15B] uppercase">
                The Editorial Craft
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FFFDFC] tracking-tight">
              From Vision to Your Final Look
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#A99B8C] leading-relaxed">
            Every layer is executed with obsessive precision—from base hydra-priming to intricate hair pleating and jewel placement, culminating in an awe-inspiring bridal presence.
          </p>
        </div>

        {/* Asymmetrical Editorial Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Large Hero Bridal Portrait (7 columns) */}
          <div className="md:col-span-7 relative group">
            <div className="relative rounded-[2px] overflow-hidden border border-[#C9A15B]/30 bg-[#211612] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85"
                alt="Full Indian Bridal Portrait in Royal Crimson and Gold"
                referrerPolicy="no-referrer"
                className="w-full h-[480px] sm:h-[600px] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 cursor-pointer"
                onClick={() =>
                  onViewImage(
                    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=85',
                    'Royal Crimson & Heritage Bridal Portrait'
                  )
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120D0B]/90 via-transparent to-transparent pointer-events-none"></div>

              {/* Tag and Caption */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#C9A15B] font-semibold flex items-center gap-1.5 mb-1">
                    <Gem className="w-3 h-3" />
                    Full Ceremony Portrait
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#FFFDFC]">
                    The Royal Heritage Bride
                  </h3>
                  <p className="text-xs text-[#E8DED1]/75 max-w-sm mt-1">
                    Seamless harmony between antique gold jewelry, velvet embroidery, and warm glowing complexion.
                  </p>
                </div>

                <span className="text-[11px] text-[#C9A15B] border border-[#C9A15B]/40 px-2.5 py-1 bg-[#120D0B]/80 uppercase tracking-wider hidden sm:inline">
                  Click to View
                </span>
              </div>
            </div>
          </div>

          {/* Supporting Micro Editorial Blocks (5 columns stacked & offset) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            
            {/* Top Detail: Eye Makeup Artistry */}
            <div
              className="relative group rounded-[2px] overflow-hidden border border-[#2D1F1A] hover:border-[#C9A15B]/60 bg-[#211612] transition-all duration-300 cursor-pointer"
              onClick={() =>
                onViewImage(
                  'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=85',
                  'Macro Bridal Eye Makeup & Gold Pigment Precision'
                )
              }
            >
              <div className="grid grid-cols-5 h-44 sm:h-48">
                <div className="col-span-3 p-5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A15B] font-semibold flex items-center gap-1 mb-1">
                      <Eye className="w-3 h-3" />
                      Detail 01
                    </span>
                    <h4 className="font-serif text-lg text-[#FFFDFC] leading-tight">
                      Kohl & Champagne Pigment
                    </h4>
                    <p className="text-xs text-[#A99B8C] mt-2 line-clamp-2">
                      Precision winged kohl and light-reflecting champagne gold foil formulated for mandap strobe clarity.
                    </p>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[#C9A15B] group-hover:underline">
                    View Detail →
                  </span>
                </div>
                <div className="col-span-2 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=85"
                    alt="Close up bridal eye makeup detail"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Middle Detail: Intricate Bridal Hair Architecture */}
            <div
              className="relative group rounded-[2px] overflow-hidden border border-[#2D1F1A] hover:border-[#C9A15B]/60 bg-[#211612] transition-all duration-300 cursor-pointer"
              onClick={() =>
                onViewImage(
                  'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=85',
                  'Architectural Bridal Bun with Fresh Jasmine & Gold Adornments'
                )
              }
            >
              <div className="grid grid-cols-5 h-44 sm:h-48">
                <div className="col-span-2 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=600&q=85"
                    alt="Intricate bridal hair styling with fresh flowers"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="col-span-3 p-5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A15B] font-semibold flex items-center gap-1 mb-1">
                      <Scissors className="w-3 h-3" />
                      Detail 02
                    </span>
                    <h4 className="font-serif text-lg text-[#FFFDFC] leading-tight">
                      Hair Architecture & Veni
                    </h4>
                    <p className="text-xs text-[#A99B8C] mt-2 line-clamp-2">
                      Structural bridal bun anchoring 1.5kg matha patti and fragrant jasmine veni with zero sagging.
                    </p>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[#C9A15B] group-hover:underline">
                    View Detail →
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Callout banner */}
            <div className="p-5 rounded-[2px] bg-[#211612]/60 border border-[#C9A15B]/30 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#C9A15B] font-semibold block">
                  Reserve Your Date
                </span>
                <p className="text-xs text-[#E8DED1]">
                  Dates are secured strictly on first-come reservation basis.
                </p>
              </div>
              <button
                onClick={onOpenBooking}
                className="shrink-0 px-4 py-2 bg-[#C9A15B] hover:bg-[#E2C889] text-[#120D0B] text-[11px] font-bold tracking-wider uppercase rounded-[2px] transition-colors cursor-pointer"
              >
                Inquire Date
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
