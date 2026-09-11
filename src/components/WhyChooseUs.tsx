import React from 'react';
import { UserCheck, Clock, Sparkles, Camera, MessagesSquare, Smile } from 'lucide-react';
import { WHY_CHOOSE_US_POINTS } from '../data/bridalData';

export const WhyChooseUs: React.FC = () => {
  const icons = [
    UserCheck,
    Clock,
    Sparkles,
    Camera,
    MessagesSquare,
    Smile,
  ];

  return (
    <section className="bg-[#FFFDFC] text-[#120D0B] py-20 sm:py-24 border-b border-[#E8DED1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#A98245]"></span>
            <span className="text-[10px] font-sans font-semibold tracking-[0.3em] text-[#A98245] uppercase">
              The Aruna Difference
            </span>
            <span className="w-5 h-[1.5px] bg-[#A98245]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#120D0B] tracking-tight mb-4">
            Why Discerning Brides Choose Us
          </h2>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
            Bridal makeup is an intimate, high-stakes artistry. Here is what sets our signature studio experience apart.
          </p>
        </div>

        {/* 6 Grid Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US_POINTS.map((point, idx) => {
            const IconComponent = icons[idx] || Sparkles;
            return (
              <div
                key={idx}
                className="bg-[#F7F2EA] border border-[#E8DED1] hover:border-[#C9A15B] rounded-[2px] p-7 transition-all duration-300 hover:-translate-y-1 group shadow-sm hover:shadow-md"
              >
                {/* Minimal line icon */}
                <div className="w-11 h-11 rounded-[2px] bg-[#FFFDFC] border border-[#E8DED1] flex items-center justify-center text-[#A98245] group-hover:text-[#120D0B] group-hover:border-[#C9A15B] transition-colors mb-5">
                  <IconComponent className="w-5 h-5 stroke-[1.5]" />
                </div>

                <h3 className="font-serif text-xl font-normal text-[#120D0B] group-hover:text-[#A98245] transition-colors mb-2.5">
                  {point.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
