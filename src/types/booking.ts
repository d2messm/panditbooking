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
  package: Package | null;
  date: string | null;
  timeSlot: TimeSlot | null;
  address: string;
  instructions: string;
} 