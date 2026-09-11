import React from 'react';
import { Phone, Mail, MapPin, Instagram, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { STUDIO_INFO, SERVICES_DATA } from '../data/bridalData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Aruna', href: '#about' },
    { name: 'Signature Services', href: '#services' },
    { name: 'Bridal Packages', href: '#packages' },
    { name: 'The Bridal Edit', href: '#gallery' },
    { name: 'Real Bride Reviews', href: '#reviews' },
    { name: 'Book Bridal Date', href: '#contact' },
  ];

  return (
    <footer className="bg-[#120D0B] text-[#F7F2EA] border-t border-[#211612] pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#211612]">
          
          {/* Col 1: Brand Statement (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full border border-[#C9A15B]/50 flex items-center justify-center bg-[#211612]">
                <span className="font-serif text-lg font-bold text-[#C9A15B]">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-[0.22em] text-[#FFFDFC]">
                  ARUNA
                </span>
                <span className="text-[9px] font-sans font-medium tracking-[0.35em] text-[#C9A15B] uppercase">
                  Makeup Studio
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A99B8C] leading-relaxed mb-6 font-normal max-w-sm">
              Luxury bridal makeup artist studio curating elevated, personalized wedding beauty for brides across India and international destination weddings.
            </p>

            <div className="text-[11px] text-[#E8DED1]/70 tracking-wider uppercase">
              Established 2017 • Over 450+ Ceremonies
            </div>
          </div>

          {/* Col 2: Quick Links (2-3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A15B] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E8DED1]/80">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#C9A15B] transition-colors inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (2-3 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A15B] mb-5">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E8DED1]/80">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="hover:text-[#C9A15B] transition-colors inline-block py-0.5"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A15B] mb-5">
              Contact & Studio
            </h4>
            <ul className="space-y-3.5 text-xs text-[#E8DED1]/80">
              <li>
                <a
                  href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2.5 hover:text-[#C9A15B] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C9A15B]" />
                  <span>{STUDIO_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#C9A15B] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp Concierge</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="flex items-center gap-2.5 hover:text-[#C9A15B] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C9A15B]" />
                  <span>{STUDIO_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#C9A15B] shrink-0 mt-0.5" />
                <span>{STUDIO_INFO.address}</span>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#C9A15B] transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
                  <span>{STUDIO_INFO.instagram}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Thin Gold Divider */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A99B8C]">
          <div>
            © 2026 Aruna Makeup Studio. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#C9A15B] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-[#2D1F1A]">|</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#C9A15B] transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span className="text-[#2D1F1A]">|</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#C9A15B] transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
