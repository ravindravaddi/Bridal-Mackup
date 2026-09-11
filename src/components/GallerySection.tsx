import React, { useState } from 'react';
import { Sparkles, Eye, MapPin, Heart } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/bridalData';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onViewImage: (image: string, title: string, caption?: string) => void;
  onOpenBooking: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onViewImage,
  onOpenBooking,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Looks' },
    { id: 'bridal', label: 'Wedding Day' },
    { id: 'engagement', label: 'Engagement & Mehendi' },
    { id: 'reception', label: 'Reception Glam' },
    { id: 'hair-draping', label: 'Hair & Draping' },
    { id: 'details', label: 'Close-Up Details' },
  ];

  const filteredGallery = activeTab === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" className="bg-[#F7F2EA] text-[#120D0B] py-20 sm:py-28 border-b border-[#E8DED1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#A98245]"></span>
            <span className="text-[10px] font-sans font-semibold tracking-[0.3em] text-[#A98245] uppercase">
              Portfolio & Transformations
            </span>
            <span className="w-5 h-[1.5px] bg-[#A98245]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#120D0B] tracking-tight mb-3">
            The Bridal Edit
          </h2>

          <p className="text-sm sm:text-base text-stone-600 font-normal">
            Real beauty. Real celebrations. Timeless looks.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer rounded-[2px] ${
                  activeTab === cat.id
                    ? 'bg-[#120D0B] text-[#FFFDFC] shadow-sm font-semibold'
                    : 'bg-[#FFFDFC] text-stone-600 hover:text-[#120D0B] border border-[#E8DED1] hover:border-[#A98245]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Asymmetric Editorial Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item: GalleryItem, index: number) => {
            // Give specific cards visual variety
            const isTall = index === 0 || index === 3 || index === 7;

            return (
              <div
                key={item.id}
                onClick={() => onViewImage(item.image, item.title, `${item.brideName} • ${item.location}`)}
                className={`group relative rounded-[2px] overflow-hidden bg-[#211612] border border-[#E8DED1] hover:border-[#C9A15B] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 ${
                  isTall ? 'sm:row-span-2' : ''
                }`}
              >
                <div className="relative w-full h-full min-h-[300px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  {/* Elegant Dark Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120D0B]/95 via-[#120D0B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-[#FFFDFC]">
                    
                    {/* Top indicator */}
                    <div className="flex justify-end">
                      <span className="w-8 h-8 rounded-full bg-[#C9A15B] text-[#120D0B] flex items-center justify-center shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye className="w-4 h-4" />
                      </span>
                    </div>

                    {/* Bottom Metadata */}
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-[10px] tracking-[0.25em] text-[#C9A15B] uppercase font-semibold block mb-1">
                        {item.brideName}
                      </span>
                      <h3 className="font-serif text-lg font-normal leading-snug mb-1 text-[#FFFDFC]">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#A99B8C]">
                        <MapPin className="w-3 h-3 text-[#C9A15B]" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Action Footer */}
        <div className="mt-14 p-8 rounded-[2px] bg-[#FFFDFC] border border-[#E8DED1] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl text-[#120D0B] font-normal">
              Have a specific bridal vision or mood board?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Share your pinterest pins, jewelry swatches, and ceremony themes during our bridal consultation.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="shrink-0 px-7 py-3.5 bg-[#120D0B] text-[#FFFDFC] hover:bg-[#211612] text-xs font-semibold tracking-[0.16em] uppercase rounded-[2px] transition-all duration-200 cursor-pointer shadow-md hover:-translate-y-0.5"
          >
            Start Your Booking
          </button>
        </div>

      </div>
    </section>
  );
};
