import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Award } from 'lucide-react';
import { STUDIO_INFO } from '../data/bridalData';

interface AboutSectionProps {
  onMeetAruna: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onMeetAruna }) => {
  return (
    <section id="about" className="bg-[#F7F2EA] text-[#120D0B] py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Photo of Artist in Action (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Gold Offset Accent Border */}
              <div className="absolute -inset-3 sm:-inset-4 border border-[#C9A15B]/40 rounded-[2px] pointer-events-none -translate-x-2 -translate-y-2 hidden sm:block"></div>
              
              {/* Photo Container */}
              <div className="relative rounded-[2px] overflow-hidden shadow-2xl shadow-stone-400/50 bg-[#211612]">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85"
                  alt="Aruna Sharma, Luxury Bridal Makeup Artist sculpting an Indian bride in vanity suite"
                  referrerPolicy="no-referrer"
                  className="w-full h-[480px] sm:h-[540px] object-cover object-center"
                />
                
                {/* Floating Experience Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-[#120D0B]/90 backdrop-blur-md p-4 border-l-2 border-[#C9A15B] text-[#FFFDFC] shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#211612] border border-[#C9A15B]/40 flex items-center justify-center text-[#C9A15B] shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-serif text-lg font-medium text-[#FFFDFC] block leading-tight">
                        {STUDIO_INFO.experience}
                      </span>
                      <span className="text-[11px] font-sans text-[#C9A15B] tracking-wider uppercase">
                        Over 450+ Unforgettable Brides
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-[1.5px] bg-[#C9A15B]"></span>
              <span className="text-[11px] font-sans font-semibold tracking-[0.3em] text-[#A98245] uppercase">
                The Art Behind The Look
              </span>
            </div>

            {/* Editorial Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#120D0B] leading-[1.18] tracking-tight mb-6">
              Beauty That Still Feels Like You
            </h2>

            {/* Story Paragraphs */}
            <div className="space-y-4 text-stone-700 font-sans text-sm sm:text-base leading-relaxed mb-8">
              <p>
                A wedding day is not an occasion to transform into someone unrecognizable. It is the day when your authentic grace, heritage, and joy should shine with radiant confidence.
              </p>
              <p>
                At Aruna Makeup Studio, our philosophy begins with deep listening. We analyze your skin undertones, bridal attire embroidery, jewelry weight, and venue lighting—from early morning mandap firelight to high-wattage evening reception stages—ensuring your makeup looks effortlessly natural in person and breathtaking in high-resolution photography.
              </p>
              <p>
                Beyond technical perfection with world-renowned luxury formulations like Charlotte Tilbury and Dior, we bring a calm, reassuring, and unhurried sanctuary to your bridal suite. When the hours before your ceremony are peaceful, your bridal glow begins from within.
              </p>
            </div>

            {/* Core Values / Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 border-y border-[#E8DED1] py-5">
              {[
                'Flawless skin without cakey textures',
                'Custom pigment matching for Indian tones',
                'Advanced 16-hour sweat & tear resistance',
                'Calm, punctual & supportive bridal suite etiquette',
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-medium text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-[#A98245] shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Signature Block & CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <span className="font-script text-4xl sm:text-5xl text-[#120D0B] block leading-none select-none">
                  Aruna
                </span>
                <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#A98245] font-semibold block mt-1">
                  Bridal Makeup Artist & Founder
                </span>
              </div>

              <button
                onClick={onMeetAruna}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#120D0B] text-[#FFFDFC] hover:bg-[#211612] text-xs font-semibold tracking-[0.18em] uppercase rounded-[2px] transition-all duration-200 cursor-pointer shadow-md hover:-translate-y-0.5"
              >
                <span>Meet Aruna</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C9A15B]" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
