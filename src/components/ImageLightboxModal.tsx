import React from 'react';
import { X, Sparkles, Calendar } from 'lucide-react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  image: string;
  title: string;
  caption?: string;
  onClose: () => void;
  onBookLook: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  image,
  title,
  caption,
  onClose,
  onBookLook,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative max-w-4xl w-full bg-[#120D0B] border border-[#C9A15B]/40 rounded-[2px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#120D0B]/80 text-[#FFFDFC] hover:text-[#C9A15B] border border-[#C9A15B]/40 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image */}
        <div className="md:w-3/5 bg-black flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={title}
            referrerPolicy="no-referrer"
            className="w-full h-full max-h-[60vh] md:max-h-[85vh] object-cover object-center"
          />
        </div>

        {/* Content Sidebar */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#18110E] border-t md:border-t-0 md:border-l border-[#211612]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.25em] text-[#C9A15B] uppercase font-semibold mb-2">
              <Sparkles className="w-3 h-3" />
              <span>The Bridal Edit</span>
            </div>

            <h3 className="font-serif text-2xl font-normal text-[#FFFDFC] mb-3 leading-snug">
              {title}
            </h3>

            {caption && (
              <p className="text-xs sm:text-sm text-[#A99B8C] leading-relaxed mb-6 font-normal">
                {caption}
              </p>
            )}

            <div className="space-y-3 pt-4 border-t border-[#2D1F1A] text-xs text-[#E8DED1]/80">
              <div className="flex justify-between">
                <span className="text-[#A99B8C]">Artistry Lead:</span>
                <span className="text-[#FFFDFC] font-medium">Aruna Sharma</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A99B8C]">Products Used:</span>
                <span className="text-[#FFFDFC] font-medium">Charlotte Tilbury, Dior</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A99B8C]">Look Style:</span>
                <span className="text-[#FFFDFC] font-medium">Royal Heritage & Glass Glow</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#2D1F1A] mt-6">
            <button
              onClick={() => {
                onClose();
                onBookLook();
              }}
              className="w-full py-3.5 bg-[#C9A15B] hover:bg-[#E2C889] text-[#120D0B] text-xs font-semibold tracking-[0.16em] uppercase rounded-[2px] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Book This Bridal Look</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
