export interface PujaDetails {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  benefits: string[];
  items: string[];
  process: string[];
  duration_in_days?: number;
  is_active?: boolean;
  created_by?: string;
} 