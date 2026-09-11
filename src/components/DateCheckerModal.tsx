import React, { useState } from 'react';
import { X, Calendar, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/bridalData';

interface DateCheckerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToBooking: (date: string, city: string) => void;
}

export const DateCheckerModal: React.FC<DateCheckerModalProps> = ({
  isOpen,
  onClose,
  onProceedToBooking,
}) => {
  const [date, setDate] = useState('');
  const [city, setCity] = useState('Hyderabad');
  const [eventType, setEventType] = useState('Wedding Ceremony');
  const [hasChecked, setHasChecked] = useState(false);

  if (!isOpen) return null;

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) return;
    setHasChecked(true);
  };

  const resetAndProceed = () => {
    onProceedToBooking(date, city);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative max-w-lg w-full bg-[#18110E] border border-[#C9A15B]/50 rounded-[2px] p-6 sm:p-8 shadow-2xl text-[#FFFDFC]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-white p-1"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#211612] border border-[#C9A15B]/30 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A15B]" />
          <span className="text-[10px] font-sans font-semibold tracking-[0.25em] text-[#C9A15B] uppercase">
            Instant Availability Check
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-normal mb-2">
          Check Your Bridal Date
        </h3>
        <p className="text-xs text-[#A99B8C] mb-6 leading-relaxed">
          Aruna accepts a strictly limited number of brides per auspicious muhurtham date. Check real-time scheduling for {STUDIO_INFO.seasonBookingYear}.
        </p>

        {!hasChecked ? (
          <form onSubmit={handleCheck} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#E8DED1] font-semibold mb-1">
                Your Wedding / Event Date
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#120D0B] border border-[#2D1F1A] focus:border-[#C9A15B] rounded-[2px] text-xs sm:text-sm text-[#FFFDFC] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#E8DED1] font-semibold mb-1">
                  City / Location
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Hyderabad"
                  className="w-full px-3.5 py-2.5 bg-[#120D0B] border border-[#2D1F1A] focus:border-[#C9A15B] rounded-[2px] text-xs sm:text-sm text-[#FFFDFC] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#E8DED1] font-semibold mb-1">
                  Event Function
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#120D0B] border border-[#2D1F1A] focus:border-[#C9A15B] rounded-[2px] text-xs sm:text-sm text-[#FFFDFC] focus:outline-none"
                >
                  <option>Wedding Ceremony</option>
                  <option>Reception</option>
                  <option>Engagement</option>
                  <option>Full Royal Package</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#C9A15B] hover:bg-[#E2C889] text-[#120D0B] text-xs font-semibold tracking-[0.16em] uppercase rounded-[2px] transition-colors flex items-center justify-center gap-2 cursor-pointer mt-4"
            >
              <Calendar className="w-4 h-4" />
              <span>Verify Date Availability</span>
            </button>
          </form>
        ) : (
          <div className="py-4 text-center animate-in fade-in duration-300">
            <div className="w-12 h-12 rounded-full bg-[#C9A15B]/20 border border-[#C9A15B] flex items-center justify-center mx-auto mb-4 text-[#E2C889]">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h4 className="font-serif text-xl font-normal text-[#FFFDFC] mb-2">
              Date Provisional Slot Open!
            </h4>
            <p className="text-xs text-[#E8DED1]/80 max-w-sm mx-auto mb-6 leading-relaxed">
              We currently have an available bridal slot for{' '}
              <span className="text-[#C9A15B] font-semibold">{date}</span> in{' '}
              <span className="text-[#C9A15B] font-semibold">{city}</span>. Would you like to proceed with lock-in details?
            </p>

            <div className="space-y-2">
              <button
                onClick={resetAndProceed}
                className="w-full py-3.5 bg-[#C9A15B] hover:bg-[#E2C889] text-[#120D0B] text-xs font-semibold tracking-[0.16em] uppercase rounded-[2px] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Reserve Your Date Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setHasChecked(false)}
                className="w-full py-2 text-xs text-[#A99B8C] hover:text-[#FFFDFC] uppercase tracking-wider"
              >
                Check another date
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
