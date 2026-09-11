import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Sparkles } from 'lucide-react';
import { FAQ_DATA } from '../data/bridalData';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="bg-[#18110E] text-[#FFFDFC] py-20 sm:py-28 border-b border-[#211612]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#211612] border border-[#C9A15B]/30 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#C9A15B]" />
            <span className="text-[10px] font-sans font-semibold tracking-[0.3em] text-[#C9A15B] uppercase">
              Common Inquiries
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FFFDFC] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base text-[#A99B8C] leading-relaxed max-w-xl mx-auto font-normal">
            Clear, transparent answers to help you plan your bridal beauty experience with complete confidence.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq: FaqItem) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className={`rounded-[2px] border transition-all duration-300 ${
                  isOpen
                    ? 'bg-[#211612] border-[#C9A15B]/60 shadow-lg'
                    : 'bg-[#120D0B] border-[#2D1F1A] hover:border-[#C9A15B]/30'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left py-5 px-6 sm:px-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-serif text-base sm:text-lg text-[#FFFDFC] font-normal tracking-wide">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#C9A15B] text-[#120D0B]'
                        : 'bg-[#211612] text-[#C9A15B] border border-[#C9A15B]/30'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-xs sm:text-sm text-[#E8DED1]/85 leading-relaxed border-t border-[#2D1F1A] animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-12 text-center text-xs text-[#A99B8C]">
          <span>Still have questions regarding your wedding venue or specific dates? </span>
          <a
            href="#contact"
            className="text-[#C9A15B] hover:text-[#FFFDFC] underline underline-offset-4 ml-1"
          >
            Send us a message directly →
          </a>
        </div>

      </div>
    </section>
  );
};
