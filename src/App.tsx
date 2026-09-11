import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ServicesSection } from './components/ServicesSection';
import { PackagesSection } from './components/PackagesSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TransformationSection } from './components/TransformationSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingProcess } from './components/BookingProcess';
import { CtaBanner } from './components/CtaBanner';
import { FaqSection } from './components/FaqSection';
import { BookingSection } from './components/BookingSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { DateCheckerModal } from './components/DateCheckerModal';
import { InfoModal } from './components/InfoModal';

export default function App() {
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [dateCheckerOpen, setDateCheckerOpen] = useState(false);
  const [infoModalType, setInfoModalType] = useState<'aruna' | 'privacy' | 'terms' | null>(null);
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    image: string;
    title: string;
    caption?: string;
  }>({
    isOpen: false,
    image: '',
    title: '',
    caption: '',
  });

  const scrollToBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesElem = document.getElementById('services');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLightbox = (image: string, title: string, caption?: string) => {
    setLightbox({
      isOpen: true,
      image,
      title,
      caption,
    });
  };

  const handleCloseLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const handleClaimOffer = () => {
    setSelectedService('The Royal Bride (10% Special Offer Applied)');
    scrollToBooking('The Royal Bride (10% Special Offer Applied)');
  };

  return (
    <div className="min-h-screen bg-[#120D0B] text-[#F7F2EA] flex flex-col selection:bg-[#C9A15B] selection:text-[#120D0B]">
      {/* Top Header & Sticky Navigation */}
      <Navbar
        onOpenBooking={() => scrollToBooking()}
        onOpenConsultation={() => setDateCheckerOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={() => scrollToBooking()}
          onExploreServices={scrollToServices}
          onClaimOffer={handleClaimOffer}
        />

        {/* 2. Trust Benefits Strip */}
        <TrustStrip />

        {/* 3. Signature Services Section */}
        <ServicesSection onSelectService={(s) => scrollToBooking(s)} />

        {/* 4. Featured Bridal Packages */}
        <PackagesSection onSelectPackage={(p) => scrollToBooking(p)} />

        {/* 5. Editorial About Aruna Section (Ivory/Cream Canvas) */}
        <AboutSection onMeetAruna={() => setInfoModalType('aruna')} />

        {/* 6. Why Brides Choose Us */}
        <WhyChooseUs />

        {/* 7. Bridal Transformation / Editorial Craft (Dark Luxury) */}
        <TransformationSection
          onOpenBooking={() => scrollToBooking()}
          onViewImage={handleOpenLightbox}
        />

        {/* 8. The Bridal Edit Gallery (Cream Canvas Masonry) */}
        <GallerySection
          onViewImage={handleOpenLightbox}
          onOpenBooking={() => scrollToBooking()}
        />

        {/* 9. Real Bride Testimonials */}
        <TestimonialsSection />

        {/* 10. 4-Step Booking Journey */}
        <BookingProcess onStartProcess={() => scrollToBooking()} />

        {/* 11. High-Conversion Special Offer Banner */}
        <CtaBanner onCheckAvailability={() => setDateCheckerOpen(true)} />

        {/* 12. FAQ Section */}
        <FaqSection />

        {/* 13. Interactive Booking Form & Direct Studio Contact */}
        <BookingSection initialService={selectedService} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setInfoModalType('privacy')}
        onOpenTerms={() => setInfoModalType('terms')}
      />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Modals */}
      <ImageLightboxModal
        isOpen={lightbox.isOpen}
        image={lightbox.image}
        title={lightbox.title}
        caption={lightbox.caption}
        onClose={handleCloseLightbox}
        onBookLook={() => scrollToBooking(lightbox.title)}
      />

      <DateCheckerModal
        isOpen={dateCheckerOpen}
        onClose={() => setDateCheckerOpen(false)}
        onProceedToBooking={(date, city) => {
          setSelectedService(`Date Reservation for ${date} (${city})`);
          scrollToBooking();
        }}
      />

      <InfoModal
        type={infoModalType}
        onClose={() => setInfoModalType(null)}
        onOpenBooking={() => scrollToBooking()}
      />
    </div>
  );
}
