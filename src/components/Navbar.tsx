import React, { useState, useEffect } from 'react';
import { Phone, Calendar, ArrowRight, Menu, X, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '../data/bridalData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Bridal Packages', href: '#packages' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top announcement strip */}
      <div className="bg-[#120D0B] border-b border-[#C9A15B]/25 text-[#F7F2EA] text-xs py-2 px-4 tracking-wider transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Call to consultation */}
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C9A15B] animate-pulse"></span>
            <span className="font-medium tracking-widest text-[#E2C889] uppercase text-[11px]">
              Bridal Bookings Open for {STUDIO_INFO.seasonBookingYear}
            </span>
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-1 text-[#C9A15B] hover:text-[#FFFDFC] transition-colors ml-2 cursor-pointer group"
            >
              <span>Book Your Consultation</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Right: Phone contact & Hours */}
          <div className="flex items-center gap-4 text-[11px] text-[#A99B8C]">
            <a
              href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-[#E2C889] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#C9A15B]" />
              <span>{STUDIO_INFO.phone}</span>
            </a>
            <span className="hidden md:inline text-[#3A2A20]">|</span>
            <span className="hidden md:inline text-[#E8DED1]/75">Jubilee Hills, Hyderabad</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#120D0B]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#C9A15B]/20'
            : 'bg-[#120D0B]/85 backdrop-blur-sm py-4 border-b border-[#211612]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand Treatment */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Aruna Makeup Studio Home"
          >
            {/* Elegant Monogram Emblem */}
            <div className="relative w-10 h-10 rounded-full border border-[#C9A15B]/50 flex items-center justify-center bg-[#211612] group-hover:border-[#C9A15B] transition-colors shadow-inner">
              <span className="font-serif text-lg font-semibold text-[#C9A15B] tracking-tight">A</span>
              <span className="absolute -top-1 -right-1 text-[#E2C889] text-[9px]">✦</span>
            </div>

            {/* Brand Wordmark */}
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.22em] text-[#FFFDFC] leading-tight group-hover:text-[#E2C889] transition-colors">
                ARUNA
              </span>
              <span className="text-[9px] sm:text-[10px] font-sans font-medium tracking-[0.35em] text-[#C9A15B] uppercase leading-tight -mt-0.5">
                Makeup Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-xs uppercase tracking-[0.2em] text-[#E8DED1] hover:text-[#C9A15B] transition-colors duration-200 py-1 relative group font-medium"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C9A15B] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              id="nav-book-btn"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#C9A15B] text-[#120D0B] text-xs font-semibold tracking-wider uppercase rounded-[2px] shadow-lg shadow-[#C9A15B]/10 hover:bg-[#E2C889] hover:shadow-[#C9A15B]/25 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 bg-[#C9A15B] text-[#120D0B] text-[11px] font-semibold uppercase tracking-wider rounded-[2px]"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#E8DED1] hover:text-[#C9A15B] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#120D0B] border-b border-[#C9A15B]/20 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-sm uppercase tracking-widest text-[#E8DED1] hover:text-[#C9A15B] py-2 border-b border-[#211612] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9A15B]/60" />
                </a>
              ))}
            </div>

            <div className="pt-2 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-[#C9A15B] text-[#120D0B] text-xs font-semibold tracking-widest uppercase rounded-[2px] flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK YOUR BRIDAL DATE</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-2.5 border border-[#C9A15B]/40 text-[#C9A15B] text-xs font-medium tracking-widest uppercase rounded-[2px] flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Quick Date Availability</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
