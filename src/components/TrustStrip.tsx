import React from 'react';
import { Crown, Sparkles, Wand2, ShieldCheck } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const benefits = [
    {
      title: 'Bridal Expertise',
      description: 'Looks designed for your wedding day',
      icon: Crown,
    },
    {
      title: 'Premium Products',
      description: 'Professional-quality beauty products',
      icon: Sparkles,
    },
    {
      title: 'Personalized Styling',
      description: 'Your features. Your style. Your look.',
      icon: Wand2,
    },
    {
      title: 'Hygiene & Care',
      description: 'Clean, safe and professional service',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="bg-[#18110E] border-b border-[#211612] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-[#2D1F1A]">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 px-2 lg:px-6 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-[2px] bg-[#211612] border border-[#C9A15B]/30 flex items-center justify-center text-[#C9A15B] shrink-0 group-hover:border-[#C9A15B] group-hover:bg-[#2D1F1A] transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-serif text-base font-medium text-[#FFFDFC] group-hover:text-[#E2C889] transition-colors tracking-wide">
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-xs text-[#A99B8C] mt-0.5 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
