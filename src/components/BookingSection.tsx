import React, { useState, useEffect } from 'react';
import {
  Send,
  Phone,
  MessageCircle,
  Instagram,
  Mail,
  MapPin,
  Calendar,
  Sparkles,
  CheckCircle,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { STUDIO_INFO, SERVICES_DATA, BRIDAL_PACKAGES } from '../data/bridalData';
import { BookingFormData } from '../types';

interface BookingSectionProps {
  initialService?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    weddingDate: '',
    eventType: 'Wedding Ceremony',
    preferredService: initialService || 'The Royal Bride (Recommended)',
    location: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, preferredService: initialService }));
    }
  }, [initialService]);

  const validate = () => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your contact phone number';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.weddingDate) newErrors.weddingDate = 'Please select your wedding date';
    if (!formData.location.trim()) newErrors.location = 'Please provide your city or venue name';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate swift luxury API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleWhatsAppForward = () => {
    const text = encodeURIComponent(
      `Hello Aruna! I submitted a booking enquiry:\n\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Event Date:* ${formData.weddingDate}\n` +
      `*Event Type:* ${formData.eventType}\n` +
      `*Package/Service:* ${formData.preferredService}\n` +
      `*Location/Venue:* ${formData.location}\n` +
      `*Message:* ${formData.message || 'Looking forward to checking availability.'}`
    );
    window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="bg-[#F7F2EA] text-[#120D0B] py-20 sm:py-28 border-b border-[#E8DED1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#A98245]"></span>
            <span className="text-[10px] font-sans font-semibold tracking-[0.3em] text-[#A98245] uppercase">
              Begin Your Bridal Story
            </span>
            <span className="w-5 h-[1.5px] bg-[#A98245]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#120D0B] tracking-tight mb-4">
            Let's Create Your Bridal Look
          </h2>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
            Tell us your wedding date, ceremonies, and the aesthetic you are dreaming of. We will verify artist availability and curate your bespoke itinerary.
          </p>
        </div>

        {/* 2-Column Booking Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Concierge & Studio Info (5 cols) */}
          <div className="lg:col-span-5 bg-[#FFFDFC] border border-[#E8DED1] p-8 sm:p-10 rounded-[2px] shadow-sm">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#A98245] font-semibold block mb-2">
              Direct Bridal Concierge
            </span>
            <h3 className="font-serif text-2xl font-normal text-[#120D0B] mb-4">
              Aruna Makeup Studio
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-8">
              We welcome brides to connect via phone, WhatsApp, or in-person studio appointments by prior schedule.
            </p>

            {/* Contact Details List */}
            <div className="space-y-5 border-y border-[#E8DED1] py-6 mb-8 text-xs sm:text-sm">
              <a
                href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-start gap-3.5 text-stone-800 hover:text-[#A98245] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#F7F2EA] border border-[#E8DED1] flex items-center justify-center text-[#A98245] shrink-0 group-hover:bg-[#120D0B] group-hover:text-[#FFFDFC] transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 block">Call Us</span>
                  <span className="font-medium text-[#120D0B]">{STUDIO_INFO.phone}</span>
                </div>
              </a>

              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3.5 text-stone-800 hover:text-[#A98245] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#F7F2EA] border border-[#E8DED1] flex items-center justify-center text-[#25D366] shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 block">WhatsApp Us</span>
                  <span className="font-medium text-[#120D0B]">Chat Directly with Aruna's Team</span>
                </div>
              </a>

              <a
                href={`mailto:${STUDIO_INFO.email}`}
                className="flex items-start gap-3.5 text-stone-800 hover:text-[#A98245] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#F7F2EA] border border-[#E8DED1] flex items-center justify-center text-[#A98245] shrink-0 group-hover:bg-[#120D0B] group-hover:text-[#FFFDFC] transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 block">Email Inquiries</span>
                  <span className="font-medium text-[#120D0B]">{STUDIO_INFO.email}</span>
                </div>
              </a>

              <div className="flex items-start gap-3.5 text-stone-800">
                <div className="w-8 h-8 rounded-full bg-[#F7F2EA] border border-[#E8DED1] flex items-center justify-center text-[#A98245] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 block">Studio Location</span>
                  <span className="font-medium text-[#120D0B]">{STUDIO_INFO.address}</span>
                  <span className="text-[11px] text-stone-500 block mt-0.5">Destination Weddings Available Pan-India</span>
                </div>
              </div>
            </div>

            {/* Social media presence */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-stone-500 font-medium">Follow Real Wedding Stories:</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F7F2EA] hover:bg-[#120D0B] hover:text-[#FFFDFC] text-stone-700 text-xs font-medium rounded-[2px] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
                <span>{STUDIO_INFO.instagram}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#FFFDFC] border border-[#E8DED1] p-8 sm:p-10 rounded-[2px] shadow-sm relative">
            
            {isSubmitted ? (
              /* Success State */
              <div className="py-12 px-4 text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#C9A15B]/15 border-2 border-[#C9A15B] text-[#120D0B] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-[#A98245]" />
                </div>

                <span className="text-[10px] tracking-[0.25em] uppercase text-[#A98245] font-semibold block mb-1">
                  Enquiry Received
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#120D0B] mb-3">
                  Thank You, {formData.fullName}!
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto mb-6 leading-relaxed">
                  We have received your bridal enquiry for{' '}
                  <strong className="text-stone-900 font-semibold">{formData.weddingDate}</strong> in{' '}
                  <strong className="text-stone-900 font-semibold">{formData.location}</strong>. Aruna will review date availability and respond via WhatsApp / Call within 2-4 hours.
                </p>

                {/* Instant WhatsApp forward option */}
                <div className="p-4 bg-[#F7F2EA] border border-[#E8DED1] rounded-[2px] max-w-md mx-auto mb-8 text-left text-xs text-stone-700">
                  <div className="font-semibold text-stone-900 mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#A98245]" />
                    Want an instant date confirmation?
                  </div>
                  <p className="mb-3 text-[11px] text-stone-600">
                    You can forward this enquiry directly to Aruna on WhatsApp right now:
                  </p>
                  <button
                    onClick={handleWhatsAppForward}
                    className="w-full py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs rounded-[2px] flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Forward Details to WhatsApp</span>
                  </button>
                </div>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      phone: '',
                      email: '',
                      weddingDate: '',
                      eventType: 'Wedding Ceremony',
                      preferredService: 'The Royal Bride (Recommended)',
                      location: '',
                      message: '',
                    });
                  }}
                  className="text-xs text-[#A98245] hover:text-[#120D0B] underline uppercase tracking-wider font-semibold cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              /* Booking Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-[#120D0B] mb-1">
                    Bridal Date Reservation Form
                  </h3>
                  <p className="text-xs text-stone-500">
                    Fields marked with <span className="text-[#A98245]">*</span> are required.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                      Bride's Full Name <span className="text-[#A98245]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g., Deepika Rao"
                      className={`w-full px-3.5 py-2.5 bg-[#F7F2EA] border rounded-[2px] text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#A98245] focus:bg-[#FFFDFC] transition-colors ${
                        errors.fullName ? 'border-red-500' : 'border-[#E8DED1]'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-600 mt-1 block">{errors.fullName}</span>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                      Phone / WhatsApp Number <span className="text-[#A98245]">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g., +91 98765 43210"
                      className={`w-full px-3.5 py-2.5 bg-[#F7F2EA] border rounded-[2px] text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#A98245] focus:bg-[#FFFDFC] transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-[#E8DED1]'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-600 mt-1 block">{errors.phone}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g., bride@gmail.com"
                      className="w-full px-3.5 py-2.5 bg-[#F7F2EA] border border-[#E8DED1] rounded-[2px] text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#A98245] focus:bg-[#FFFDFC] transition-colors"
                    />
                  </div>

                  {/* Wedding Date */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                      Wedding / Event Date <span className="text-[#A98245]">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.weddingDate}
                      onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                      className={`w-full px-3.5 py-2.5 bg-[#F7F2EA] border rounded-[2px] text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#A98245] focus:bg-[#FFFDFC] transition-colors ${
                        errors.weddingDate ? 'border-red-500' : 'border-[#E8DED1]'
                      }`}
                    />
                    {errors.weddingDate && (
                      <span className="text-[11px] text-red-600 mt-1 block">{errors.weddingDate}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Event Type */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                      Event Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F7F2EA] border border-[#E8DED1] rounded-[2px] text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#A98245] focus:bg-[#FFFDFC] transition-colors"
                    >
                      <option value="Wedding Ceremony">Wedding Ceremony (Mandap / Muhurtham)</option>
                      <option value="The Royal Bride (3 Events)">Full Royal Wedding (Engagement + Pheras + Reception)</option>
                      <option value="Reception Ceremony">Reception Evening</option>
                      <option value="Engagement / Ring Ceremony">Engagement / Ring Ceremony</option>
                      <option value="Sangeet / Mehendi">Sangeet / Mehendi Night</option>
                      <option value="Destination Wedding Pan-India">Destination Wedding</option>
                    </select>
                  </div>

                  {/* Preferred Package / Service */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                      Preferred Service / Package
                    </label>
                    <select
                      value={formData.preferredService}
                      onChange={(e) => setFormData({ ...formData, preferredService: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F7F2EA] border border-[#E8DED1] rounded-[2px] text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#A98245] focus:bg-[#FFFDFC] transition-colors"
                    >
                      <optgroup label="Bridal Packages">
                        {BRIDAL_PACKAGES.map((pkg) => (
                          <option key={pkg.id} value={pkg.name}>
                            {pkg.name}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Individual Services">
                        {SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>
                </div>

                {/* City / Venue Location */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    City, Venue or Hotel <span className="text-[#A98245]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g., Taj Falaknuma, Hyderabad or ITC Grand Bharat"
                    className={`w-full px-3.5 py-2.5 bg-[#F7F2EA] border rounded-[2px] text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#A98245] focus:bg-[#FFFDFC] transition-colors ${
                      errors.location ? 'border-red-500' : 'border-[#E8DED1]'
                    }`}
                  />
                  {errors.location && (
                    <span className="text-[11px] text-red-600 mt-1 block">{errors.location}</span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    Bridal Vision, Outfits or Special Notes
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your outfit colors, jewelry style, ceremony timing, or questions..."
                    className="w-full px-3.5 py-2.5 bg-[#F7F2EA] border border-[#E8DED1] rounded-[2px] text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#A98245] focus:bg-[#FFFDFC] transition-colors"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#120D0B] text-[#FFFDFC] hover:bg-[#211612] text-xs font-semibold tracking-[0.2em] uppercase rounded-[2px] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:-translate-y-0.5 disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Verifying Date Availability...</span>
                  ) : (
                    <>
                      <span>Send Booking Enquiry</span>
                      <ArrowRight className="w-4 h-4 text-[#C9A15B]" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-stone-500">
                  By submitting, your date details are forwarded confidentially. No spam, ever.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
