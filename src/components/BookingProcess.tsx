import React from 'react';
import { CalendarCheck, MessageSquareText, Sparkles, HeartHandshake, ArrowRight } from 'lucide-react';
import { BOOKING_STEPS } from '../data/bridalData';

interface BookingProcessProps {
  onStartProcess: () => void;
}

export const BookingProcess: React.FC<BookingProcessProps> = ({ onStartProcess }) => {
  const stepIcons = [CalendarCheck, MessageSquareText, Sparkles, HeartHandshake];

  return (
    <section className="bg-[#F7F2EA] text-[#120D0B] py-20 sm:py-28 border-b border-[#E8DED1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#A98245]"></span>
            <span className="text-[10px] font-sans font-semibold tracking-[0.3em] text-[#A98245] uppercase">
              Seamless & Serene Experience
            </span>
            <span className="w-5 h-[1.5px] bg-[#A98245]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#120D0B] tracking-tight mb-4">
            Your Bridal Beauty Journey
          </h2>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
            From the initial conversation to the moment you step into the wedding mandap, experience absolute clarity, warmth, and luxury.
          </p>
        </div>

        {/* 4-Step Horizontal Timeline on Desktop, Vertical on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Subtle connecting line across desktop */}
          <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-[1px] bg-[#C9A15B]/40 -z-0"></div>

          {BOOKING_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || Sparkles;

            return (
              <div
                key={idx}
                className="relative z-10 flex flex-col items-center text-center p-6 bg-[#FFFDFC] border border-[#E8DED1] hover:border-[#C9A15B] rounded-[2px] transition-all duration-300 hover:-translate-y-1 shadow-sm group"
              >
                {/* Step Circle with Number and Icon */}
                <div className="relative mb-5">
                  <div className="w-14 h-14 rounded-full bg-[#120D0B] border-2 border-[#C9A15B] text-[#C9A15B] flex items-center justify-center group-hover:bg-[#C9A15B] group-hover:text-[#120D0B] transition-colors shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-[#C9A15B] text-[#120D0B] text-[9px] font-bold tracking-wider rounded-full">
                    {step.step}
                  </span>
                </div>

                <span className="text-[10px] tracking-[0.25em] uppercase text-[#A98245] font-semibold mb-1">
                  Step {step.step}
                </span>

                <h3 className="font-serif text-lg sm:text-xl font-normal text-[#120D0B] mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quick Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onStartProcess}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#120D0B] text-[#FFFDFC] hover:bg-[#211612] text-xs font-semibold tracking-[0.18em] uppercase rounded-[2px] transition-all duration-200 cursor-pointer shadow-lg hover:-translate-y-0.5"
          >
            <span>Check Bridal Availability Now</span>
            <ArrowRight className="w-4 h-4 text-[#C9A15B]" />
          </button>
        </div>

      </div>
    </section>
  );
};
