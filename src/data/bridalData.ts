import { ServiceItem, BridalPackage, GalleryItem, Testimonial, FaqItem } from '../types';

export const STUDIO_INFO = {
  name: 'Aruna Makeup Studio',
  founder: 'Aruna Sharma',
  experience: '9+ Years of Bridal Artistry',
  phone: '+91 98765 43210',
  whatsappNumber: '919876543210',
  email: 'bridal@arunamakeupstudio.com',
  address: 'Jubilee Hills, Road No. 36, Hyderabad, India',
  city: 'Hyderabad & Destination Weddings Pan-India',
  instagram: '@aruna_bridalmakeup',
  seasonBookingYear: '2026',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'bridal-makeup',
    name: 'Bridal Makeup',
    category: 'bridal',
    tagline: 'Regal, long-lasting wedding day glamour',
    description: 'Flawless, camera-ready bridal makeup designed specifically around your outfit, jewelry, skin tone, and wedding ceremonies. Engineered for 16+ hours of wear without oxidizing or creasing.',
    priceNote: 'Starting from ₹25,000 / event',
    duration: '3.5 - 4 Hours',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=85',
    features: [
      'High-definition Airbrush or HD Cream finish',
      'Custom lash mapping & luxury mink-style lashes',
      'Advanced skin prep & hydra-infusion facial base',
      'Long-lasting tear-proof & humidity-resistant formulation',
      'Complimentary mini touch-up kit for pheras'
    ]
  },
  {
    id: 'engagement-makeup',
    name: 'Engagement Makeup',
    category: 'occasion',
    tagline: 'Radiant, romantic & modern camera-ready look',
    description: 'A luminous, romantic aesthetic with soft glam eyes and glowing glass skin. Perfectly balanced between youthful freshness and celebration elegance for ring ceremonies.',
    priceNote: 'Starting from ₹18,000 / event',
    duration: '2.5 - 3 Hours',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85',
    features: [
      'Dewy glass-skin or velvet matte finish',
      'Soft champagne or rose gold eye glam',
      'Individual eyelash extensions application',
      'Designer floral or accessory hair setting',
      'Photography color correction profile'
    ]
  },
  {
    id: 'reception-makeup',
    name: 'Reception Makeup',
    category: 'occasion',
    tagline: 'Sophisticated cocktail drama & high-fashion editorial glam',
    description: 'An alluring evening transformation designed to shine under banquet chandeliers and stage spotlights. Features defined contours, statement lips or dramatic smokey eyes.',
    priceNote: 'Starting from ₹20,000 / event',
    duration: '3 Hours',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=85',
    features: [
      'Sculpted couture contouring & spotlight glow',
      'Dramatic cut-crease or sultry smoky eye work',
      'Modern red-carpet Hollywood waves or sculpted updo',
      'Flash photography flare-prevention powdering',
      'Body shimmer & decolletage highlighting'
    ]
  },
  {
    id: 'party-makeup',
    name: 'Party & Guest Glam',
    category: 'occasion',
    tagline: 'Effortless luxury for bridesmaids & sisters of the bride',
    description: 'Refined elegance for family members, sangeet attendees, and close bridal party guests who want to look stunning without overshadowing the bride.',
    priceNote: 'Starting from ₹8,500 / person',
    duration: '1.5 - 2 Hours',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=85',
    features: [
      'HD foundation tailored to personal skin tone',
      'Signature soft eye enhancement & natural flutter lashes',
      'Clean occasion hair styling (waves, curls, or half-up)',
      '12-hour budge-proof setting spray finish'
    ]
  },
  {
    id: 'hair-styling',
    name: 'Bridal Hair Styling',
    category: 'styling',
    tagline: 'Architectural bridal buns, ornate braids & Hollywood waves',
    description: 'Expert hair architecture from classic Indian floral veni buns with fresh jasmine to cascading textured braids, embellished hair extensions, and modern Hollywood waves.',
    priceNote: 'Starting from ₹6,500 / event',
    duration: '1.5 - 2 Hours',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=85',
    features: [
      'Fresh flower (gajra / baby breath) placement',
      'Hair extensions padding & volume structuring',
      'Heat-defying anti-frizz long-hold seal',
      'Jewelry & matha patti secure anchoring'
    ]
  },
  {
    id: 'draping-styling',
    name: 'Saree & Dupatta Draping',
    category: 'styling',
    tagline: 'Couture pleating, double dupatta pinning & lehenga styling',
    description: 'Precision iron-pleated saree draping (Kanjeevaram, Banarasi, Organza, Nauvari) and royal double dupatta setting that stays secure throughout vigorous ceremonies and dancing.',
    priceNote: 'Starting from ₹3,500 / outfit',
    duration: '45 - 60 Minutes',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=85',
    features: [
      'Custom waist flare & crisp pallu pleat pinning',
      'Double-dupatta head drape with featherlight weight distribution',
      'Belt, kamarbandh & waist chain alignment',
      'Micro-pinning technique that prevents silk fabric tears'
    ]
  }
];

export const BRIDAL_PACKAGES: BridalPackage[] = [
  {
    id: 'signature-bride',
    name: 'The Signature Bride',
    subtitle: 'Essential luxury for the primary wedding ceremony',
    isPopular: false,
    priceNote: 'Enquire for Package',
    idealFor: 'Single-event brides seeking bespoke wedding-day perfection',
    includes: [
      'Full Wedding Day Bridal HD/Airbrush Makeup',
      'Custom Bridal Hair Architecture & Gajra styling',
      'Precision Saree or Bridal Lehenga Dupatta Draping',
      'Premium 3D Lash Mapping & Eyebrow Styling',
      'Pre-wedding Skin Prep & Hydra-Infusion Mask',
      'Personal emergency touch-up kit with lipstick mini'
    ],
    perks: [
      'Complimentary false lash kit',
      'Lense insertion assistance',
      'Direct on-venue travel within city limits'
    ]
  },
  {
    id: 'royal-bride',
    name: 'The Royal Bride',
    subtitle: 'Our most sought-after multi-event bridal beauty experience',
    isPopular: true,
    priceNote: 'Enquire for Package',
    idealFor: 'Brides celebrating Engagement/Mehendi + Main Wedding Ceremony + Grand Reception',
    includes: [
      'Everything in The Signature Bride package',
      'Complete Engagement or Sangeet Glam Look',
      'Grand Reception Evening Couture Glam Look',
      '2 distinctly unique hairstyle designs & floral accessories',
      'Double-dupatta royal head placement technique',
      'Decolletage, back & arm illuminating radiance body polish',
      'Extended touch-up artist on standby during pheras'
    ],
    perks: [
      'Complimentary in-studio Bridal Trial session',
      'Customized 30-day pre-bridal skincare calendar',
      'Priority date holding with 0% rescheduling friction'
    ]
  },
  {
    id: 'complete-wedding',
    name: 'The Complete Wedding',
    subtitle: 'All-inclusive multi-day entourage & destination bridal curation',
    isPopular: false,
    priceNote: 'Enquire for Package',
    idealFor: 'Destination weddings or multi-day festivities with mother & bridesmaid styling',
    includes: [
      'Up to 4 custom bridal looks (Haldi, Mehendi, Wedding, Reception)',
      'Bridal makeup, advanced hair styling & luxury draping for all 4 functions',
      'Mother-of-the-bride complimentary signature glam look',
      '2 Bridesmaid / Sister party makeup & hair sessions',
      'Unlimited touch-up support between morning and evening events',
      'Dedicated lead artist Aruna + 2 senior assistant artists',
      'Full destination wedding travel coordination pan-India'
    ],
    perks: [
      'In-person bridal trial & jewelry styling consultation',
      'Full luxury skin revival kit gift box',
      'Private 24/7 concierge WhatsApp line with Aruna'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Heritage South Indian Bride',
    category: 'bridal',
    caption: 'Pure temple gold jewelry, lotus fresh veni, and radiant matte skin with winged Kohl eyes.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=85',
    brideName: 'Rhea Nambiar',
    location: 'Taj Falaknuma, Hyderabad',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-2',
    title: 'Modern Royal North Indian Bride',
    category: 'bridal',
    caption: 'Deep crimson velvet lehenga with soft champagne shimmer eye makeup and warm terracotta nude lips.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
    brideName: 'Kavya Singhania',
    location: 'Umaid Bhawan Palace, Jodhpur',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-3',
    title: 'Luminous Reception Glam',
    category: 'reception',
    caption: 'High-fashion glass skin, sculpted cheekbones, and soft Hollywood waves for an evening cocktail ballroom.',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=1000&q=85',
    brideName: 'Sanjana Patel',
    location: 'ITC Kohenur, Hyderabad',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-4',
    title: 'Intricate Floral Hair Artistry',
    category: 'hair-draping',
    caption: 'Meticulously braided South Indian jadai embellished with fresh white mogra and antique gold billas.',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1000&q=85',
    brideName: 'Harini Reddy',
    location: 'Golkonda Resort, Gandipet',
    aspectRatio: 'square'
  },
  {
    id: 'gal-5',
    title: 'Pastel Dream Engagement Look',
    category: 'engagement',
    caption: 'Soft blush rose gold eye pigments, glowing skin and romantic half-up textured curls.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85',
    brideName: 'Pooja Agarwal',
    location: 'The Leela Palace, Udaipur',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-6',
    title: 'Heritage Saree Pleating & Kundan',
    category: 'hair-draping',
    caption: 'Razor-crisp Kanjeevaram silk pleating, double dupatta pinning, and polki necklace placement.',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85',
    brideName: 'Ananya Sharma',
    location: 'Park Hyatt, Hyderabad',
    aspectRatio: 'square'
  },
  {
    id: 'gal-7',
    title: 'Smokey Kohl Eye Artistry',
    category: 'details',
    caption: 'Ultra-refined cut-crease with gold foil center reflection and seamless lash blend.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=85',
    brideName: 'Deepika Malhotra',
    location: 'JW Marriott, Bengaluru',
    aspectRatio: 'square'
  },
  {
    id: 'gal-8',
    title: 'Warm Golden Hour Bridal Portrait',
    category: 'bridal',
    caption: 'Designed to capture true tones under outdoor natural golden sunlight and mandap firelight.',
    image: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=1000&q=85',
    brideName: 'Meera Chordia',
    location: 'Fairmont, Jaipur',
    aspectRatio: 'portrait'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    brideName: 'Pooja M.',
    event: 'Bridal & Reception Makeup',
    weddingDate: 'December 2025',
    location: 'Taj Falaknuma, Hyderabad',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'Everything about my bridal look felt exactly like me. The makeup stayed flawless throughout the 6-hour ceremony, tears, and thousands of photographs. Not once did it feel cakey or heavy.'
  },
  {
    id: 't-2',
    brideName: 'Sneha R.',
    event: 'The Royal Bride Package (3 Events)',
    weddingDate: 'January 2026',
    location: 'ITC Kohenur, Hyderabad',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    quote: 'Aruna is not just an extraordinary makeup artist, she was the calmest presence in my bridal suite. She studied my jewelry and saree weeks in advance and created three completely distinct looks.'
  },
  {
    id: 't-3',
    brideName: 'Ananya K.',
    event: 'Destination Wedding Bridal Glam',
    weddingDate: 'November 2025',
    location: 'Udaipur, Rajasthan',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    quote: 'My wedding photographs look like an editorial spread in Vogue Brides. Her eye for symmetry, skin prep, and subtle undertone matching is unmatched. Every single guest asked who did my makeup!'
  },
  {
    id: 't-4',
    brideName: 'Meera V.',
    event: 'Engagement & Wedding Day',
    weddingDate: 'February 2026',
    location: 'Golkonda Resorts, Hyderabad',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    quote: 'I have very sensitive skin and was terrified of breaking out. Aruna used only top-shelf international luxury products like Charlotte Tilbury and Dior. My skin looked luminous and felt completely breathable.'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How early should I book my bridal makeup?',
    answer: 'We recommend booking 4 to 8 months in advance, especially for prime wedding muhurtham dates between October and March. Since Aruna takes only a strictly limited number of brides per day to ensure undivided personal attention, dates fill up rapidly.'
  },
  {
    id: 'faq-2',
    question: 'Do you offer bridal trials?',
    answer: 'Yes! We offer in-studio bridal trials where we evaluate your skin type, test product compatibility, swatch color palettes alongside your wedding outfit fabric, and finalize both makeup style and hair structure. Bridal trials are included with our Royal Bride and Complete Wedding packages.'
  },
  {
    id: 'faq-3',
    question: 'What is included in the bridal package?',
    answer: 'Every bridal package includes comprehensive skin prep, full face HD/Airbrush makeup, customized false lash application, bridal hair styling with fresh flowers or hair accessories, precision saree/lehenga dupatta draping, and a personalized emergency touch-up kit.'
  },
  {
    id: 'faq-4',
    question: 'Do you provide hair styling and saree/dupatta draping?',
    answer: 'Absolutely. We believe that true bridal beauty is holistic. Our packages include complete hair architecture (buns, braids, floral styling, extensions placement) and couture iron-pleated saree or royal double-dupatta draping.'
  },
  {
    id: 'faq-5',
    question: 'Which makeup products and brands do you use?',
    answer: 'We use exclusively world-class luxury and dermatologically tested prestige cosmetic lines including Charlotte Tilbury, Dior Backstage, MAC Cosmetics, NARS, Huda Beauty, Laura Mercier, Bobbi Brown, and Estée Lauder. Every product is sanitized before every application.'
  },
  {
    id: 'faq-6',
    question: 'Do you travel to the wedding venue or destination?',
    answer: 'Yes, Aruna travels on-location to your wedding venue, luxury hotel suite, or residence across Hyderabad, Telangana, and destination wedding locations pan-India and internationally (flight and accommodation arranged by client).'
  },
  {
    id: 'faq-7',
    question: 'How do you ensure the makeup looks natural yet photographically stunning?',
    answer: 'We specialize in "skin that looks like skin" with dimension. By understanding studio strobe lights, ambient wedding hall illumination, and natural sunlight, we formulate the base to prevent flash-back, chalkiness, or heavy cakey textures.'
  },
  {
    id: 'faq-8',
    question: 'What is the booking confirmation and payment process?',
    answer: 'To lock in your wedding date, a 40% advance retainer deposit is required along with a signed service agreement. The remaining balance is payable 7 days prior to or on the wedding day.'
  },
  {
    id: 'faq-9',
    question: 'Can you accommodate my mother and bridesmaids as well?',
    answer: 'Yes! For entourage glam (mother of the bride, sisters, bridesmaids), Aruna brings her trained senior associate team so everyone is ready smoothly without causing any delays to the bride’s schedule.'
  }
];

export const TRUST_BENEFITS = [
  {
    title: 'Bridal Expertise',
    desc: 'Looks designed for your wedding day',
    detail: '9+ years specializing purely in royal, regional, and contemporary bridal aesthetics.'
  },
  {
    title: 'Premium Products',
    desc: 'Professional-quality beauty products',
    detail: 'Prestige kit featuring Charlotte Tilbury, Dior, MAC, NARS & Tom Ford.'
  },
  {
    title: 'Personalized Styling',
    desc: 'Your features. Your style. Your look.',
    detail: 'Every nuance tailored to your facial symmetry, outfit embroidery, and jewelry.'
  },
  {
    title: 'Hygiene & Care',
    desc: 'Clean, safe and professional service',
    detail: 'Hospital-grade sanitized brushes, single-use disposables, and skin-safe protocols.'
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: 'Personalized Looks',
    desc: 'No copy-paste bridal makeup. Every look is custom-designed around your unique features, personal comfort, and bridal vision.'
  },
  {
    title: 'Long-Lasting Finish',
    desc: 'Engineered to withstand long hours of Vedic ceremonies, mandap heat, tears of joy, and dance celebrations without touch-up stress.'
  },
  {
    title: 'Premium Products',
    desc: 'Only authentic international prestige brands formulated for 16-hour sweat resistance and healthy, breathable skin glow.'
  },
  {
    title: 'Photography Ready',
    desc: 'Calibrated specifically for high-definition 4K cinematic wedding videography and flash photography without white-cast.'
  },
  {
    title: 'Detailed Consultation',
    desc: 'In-depth pre-wedding review of your lehenga fabrics, jewelry weight, skin sensitivities, and ceremony lighting.'
  },
  {
    title: 'Calm Bridal Experience',
    desc: 'A serene, punctual, and reassuring presence in your bridal suite so you step into your wedding day confident and relaxed.'
  }
];

export const BOOKING_STEPS = [
  {
    step: '01',
    title: 'CHECK YOUR DATE',
    desc: 'Submit your wedding dates, venues, and events to verify artist availability.'
  },
  {
    step: '02',
    title: 'CONSULTATION',
    desc: 'Discuss your bridal outfits, jewelry accents, skin needs, and desired mood.'
  },
  {
    step: '03',
    title: 'FINALIZE YOUR LOOK',
    desc: 'Lock in your signature package and reserve your date with our advance confirmation.'
  },
  {
    step: '04',
    title: 'YOUR BIG DAY',
    desc: 'Relax in your bridal chair as Aruna brings your timeless dream look to life.'
  }
];
