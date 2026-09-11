import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { STUDIO_INFO } from '../data/bridalData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    const text = encodeURIComponent(
      `Hello Aruna! I am exploring bridal makeup packages for ${STUDIO_INFO.seasonBookingYear} and would love to chat.`
    );
    window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on Desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#120D0B]/95 text-[#FFFDFC] text-xs py-2 px-3.5 rounded-[2px] border border-[#C9A15B]/40 shadow-xl backdrop-blur-sm animate-in fade-in slide-in-from-right-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping"></span>
          <span className="font-medium tracking-wide">Chat With Aruna</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-stone-400 hover:text-white ml-1 p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        aria-label="Chat with Aruna on WhatsApp"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-[#FFFDFC] cursor-pointer"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </button>
    </div>
  );
};
