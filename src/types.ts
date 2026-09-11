export interface ServiceItem {
  id: string;
  name: string;
  category: 'bridal' | 'occasion' | 'styling';
  tagline: string;
  description: string;
  priceNote: string;
  duration: string;
  image: string;
  features: string[];
}

export interface BridalPackage {
  id: string;
  name: string;
  subtitle: string;
  isPopular?: boolean;
  priceNote: string;
  idealFor: string;
  includes: string[];
  perks: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bridal' | 'engagement' | 'reception' | 'hair-draping' | 'details';
  caption: string;
  image: string;
  brideName: string;
  location: string;
  aspectRatio: 'portrait' | 'square' | 'tall';
}

export interface Testimonial {
  id: string;
  quote: string;
  brideName: string;
  event: string;
  weddingDate: string;
  location: string;
  rating: number;
  avatar: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  weddingDate: string;
  eventType: string;
  preferredService: string;
  location: string;
  message: string;
}
