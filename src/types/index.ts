export interface Puja {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  image: string;
}

export interface Booking {
  id: string;
  pujaId: string;
  userId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  language: string;
  specialRequirements?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}