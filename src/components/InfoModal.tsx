import React from 'react';
import { X, Award, Shield, Check } from 'lucide-react';
import { STUDIO_INFO } from '../data/bridalData';

interface InfoModalProps {
  type: 'aruna' | 'privacy' | 'terms' | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ type, onClose, onOpenBooking }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative max-w-2xl w-full bg-[#18110E] border border-[#C9A15B]/40 rounded-[2px] p-6 sm:p-8 shadow-2xl text-[#FFFDFC] max-h-[85vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-white p-1"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'aruna' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full border border-[#C9A15B] overflow-hidden bg-[#211612]">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                  alt="Aruna Sharma"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-normal text-[#FFFDFC]">
                  Aruna Sharma
                </h3>
                <span className="text-xs text-[#C9A15B] uppercase tracking-wider font-semibold">
                  Founder & Principal Bridal Artist
                </span>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#E8DED1]/85 leading-relaxed">
              <p>
                Certified by premier international makeup academies in Mumbai, Dubai, and London, Aruna has dedicated the last 9 years exclusively to Indian and destination bridal aesthetics.
              </p>
              <p>
                Her signature lies in creating luminous, skin-focused radiance that honors classic traditions—whether styling a 9-yard silk Kanjeevaram for a South Indian muhurtham or a regal Sabyasachi velvet lehenga for an Udaipur palace sangeet.
              </p>
              <p>
                “My brides often tell me that their favorite part of the wedding morning was the calm hour in my chair. Makeup should never feel like a chore or a mask; it is your crowning moment of peace before the whirlwind of joy.”
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-[#2D1F1A] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#A99B8C]">
                Based in Hyderabad • Pan-India Weddings
              </div>
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#C9A15B] text-[#120D0B] text-xs font-semibold tracking-wider uppercase rounded-[2px] hover:bg-[#E2C889] transition-colors"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        )}

        {type === 'privacy' && (
          <div>
            <h3 className="font-serif text-2xl font-normal text-[#FFFDFC] mb-4">
              Privacy Policy
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#E8DED1]/80 leading-relaxed">
              <p>
                At Aruna Makeup Studio, we respect your privacy. All personal details, wedding dates, venue locations, and contact information collected through our website forms are strictly utilized to coordinate your bridal booking and consultation.
              </p>
              <p>
                We do not sell, rent, or share your contact information with external third parties or promotional telemarketers. Any client photographs showcased in our gallery are published solely with explicit prior consent from the bride.
              </p>
              <p>
                If you have questions regarding data privacy or wish to update your details, please reach out to us at {STUDIO_INFO.email}.
              </p>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div>
            <h3 className="font-serif text-2xl font-normal text-[#FFFDFC] mb-4">
              Terms & Booking Policy
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#E8DED1]/80 leading-relaxed">
              <p>
                <strong>Date Reservation:</strong> Bridal dates are strictly locked only upon receipt of the official 40% advance retainer deposit and signed agreement.
              </p>
              <p>
                <strong>Travel & Accommodation:</strong> For venues outside Hyderabad city limits or destination weddings across India, round-trip air/cab transit and secure hotel accommodations are arranged by the client.
              </p>
              <p>
                <strong>Punctuality & Schedule:</strong> The client agrees to adhere to the designated call-time in the bridal suite to ensure ceremonies proceed seamlessly without stress.
              </p>
              <p>
                <strong>Cancellation:</strong> Retainer deposits are non-refundable as the date is reserved exclusively, preventing other inquiries from booking.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
