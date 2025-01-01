export interface Package {
  id: string;
  name: string;
  price: number;
  description: string;
  items: string[];
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface BookingDetails {
  puja_id: string | null;
  booking_date: string | null;
  booking_time: string | null;
  language: string;
  special_requirements: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  status?: 'pending' | 'confirmed' | 'completed' | 'cancelled';
} 