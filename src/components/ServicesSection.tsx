import React, { useState } from 'react';
import { ArrowRight, Sparkles, Clock, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data/bridalData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="bg-[#120D0B] py-20 sm:py-28 border-b border-[#211612]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#211612] border border-[#C9A15B]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A15B]" />
            <span className="text-[10px] font-sans font-semibold tracking-[0.3em] text-[#C9A15B] uppercase">
              Beauty, Designed Around You
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FFFDFC] tracking-tight mb-4">
            Our Signature Services
          </h2>

          <p className="text-sm sm:text-base text-[#E8DED1]/80 leading-relaxed font-normal">
            Aruna Makeup Studio offers meticulously tailored luxury beauty services for your most significant celebrations, blending traditional royalty with contemporary red-carpet radiance.
          </p>

          {/* Service Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'bridal', label: 'Bridal Core' },
              { id: 'occasion', label: 'Pre & Post Wedding' },
              { id: 'styling', label: 'Hair & Draping' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all duration-200 cursor-pointer rounded-[2px] ${
                  selectedCategory === cat.id
                    ? 'bg-[#C9A15B] text-[#120D0B] shadow-md shadow-[#C9A15B]/20 font-semibold'
                    : 'bg-[#211612] text-[#A99B8C] hover:text-[#FFFDFC] border border-[#2D1F1A] hover:border-[#C9A15B]/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Services Grid (3 desktop, 2 tablet, 1 mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="group bg-[#211612]/70 border border-[#2D1F1A] hover:border-[#C9A15B]/70 rounded-[2px] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-black/60"
            >
              {/* Card Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#120D0B]">
                <img
                  src={service.image}
                  alt={service.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#211612] via-transparent to-transparent opacity-90"></div>

                {/* Duration Badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-[#120D0B]/85 backdrop-blur-md border border-[#C9A15B]/30 text-[10px] tracking-wider text-[#E2C889] font-medium rounded-[2px]">
                  <Clock className="w-3 h-3 text-[#C9A15B]" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category Eyebrow */}
                  <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#C9A15B] font-semibold block mb-1">
                    {service.tagline}
                  </span>

                  {/* Service Title */}
                  <h3 className="font-serif text-2xl font-normal text-[#FFFDFC] group-hover:text-[#E2C889] transition-colors mb-3">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#A99B8C] leading-relaxed mb-5 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Highlights checklist */}
                  <ul className="space-y-1.5 mb-6 text-xs text-[#E8DED1]/90">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#C9A15B] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer with Pricing and Booking CTA */}
                <div className="pt-4 border-t border-[#2D1F1A] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] tracking-wider uppercase text-[#A99B8C] block">
                      Investment
                    </span>
                    <span className="text-xs font-semibold text-[#E2C889]">
                      {service.priceNote}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#C9A15B] group-hover:text-[#FFFDFC] uppercase hover:underline cursor-pointer"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom helper note */}
        <div className="mt-14 text-center">
          <p className="text-xs text-[#A99B8C] tracking-wide">
            Need a custom package combining multiple ceremonies?{' '}
            <button
              onClick={() => onSelectService('Custom Multi-Event Package')}
              className="text-[#C9A15B] hover:text-[#FFFDFC] underline underline-offset-4 cursor-pointer font-medium ml-1"
            >
              Consult with Aruna for bespoke wedding curation →
            </button>
          </p>
        </div>

      </div>
    </section>
  );
};
