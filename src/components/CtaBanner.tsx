import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, Calendar, ShieldCheck } from 'lucide-react';
import { STUDIO_INFO } from '../data/bridalData';

interface CtaBannerProps {
  onCheckAvailability: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onCheckAvailability }) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Aruna! I am planning my wedding in ${STUDIO_INFO.seasonBookingYear} and would love to check your bridal makeup availability and packages.`
    );
    window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="relative bg-[#120D0B] text-[#FFFDFC] py-24 sm:py-32 overflow-hidden border-b border-[#211612]">
      {/* Background Decorative Shimmer & Radial Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] bg-[#C9A15B]/10 rounded-full blur-[160px] pointer-events-none"></div>

      {/* Thin Gold Decorative Framing Lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A15B]/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A15B]/50 to-transparent"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-[2px] bg-[#211612] border border-[#C9A15B]/40 mb-6 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A15B]" />
          <span className="text-[10px] font-sans font-semibold tracking-[0.3em] text-[#C9A15B] uppercase">
            Limited Bridal Date Reservations
          </span>
        </div>

        {/* Serif Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.15] tracking-tight mb-6 text-[#FFFDFC]">
          Your Wedding Date Deserves{' '}
          <span className="italic font-light text-[#C9A15B] block sm:inline">
            The Perfect Look
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-sm sm:text-base lg:text-lg text-[#E8DED1]/80 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Bridal dates are strictly limited to ensure undivided personal attention for each bride. Get in touch early to check availability and design your bridal journey.
        </p>

        {/* Dual Conversion CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
          <button
            onClick={onCheckAvailability}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C9A15B] text-[#120D0B] text-xs font-semibold tracking-[0.16em] uppercase rounded-[2px] shadow-xl shadow-[#C9A15B]/20 hover:bg-[#E2C889] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Check Bridal Availability</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-transparent border border-[#C9A15B]/60 text-[#E8DED1] hover:text-[#C9A15B] hover:border-[#C9A15B] text-xs font-medium tracking-[0.16em] uppercase rounded-[2px] hover:bg-[#211612] transition-all duration-200 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Us</span>
          </button>
        </div>

        {/* Trust assurance footnote */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] text-[#A99B8C]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C9A15B]" />
            Direct Consultation with Aruna
          </span>
          <span className="hidden sm:inline text-[#3A2A20]">✦</span>
          <span>Zero-obligation enquiry</span>
          <span className="hidden sm:inline text-[#3A2A20]">✦</span>
          <span>Response within 2-4 business hours</span>
        </div>

      </div>
    </section>
  );
};
