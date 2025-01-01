import { create } from 'zustand';
import type { BookingDetails } from '../types/booking';

interface BookingFlowState {
  bookingDetails: BookingDetails;
  amount: number;
  setAmount: (amount: number) => void;
  setPuja: (pujaId: string) => void;
  setDate: (date: string) => void;
  setTime: (time: string) => void;
  setLanguage: (language: string) => void;
  setSpecialRequirements: (requirements: string) => void;
  setAddress: (address: string) => void;
  setCity: (city: string) => void;
  setState: (state: string) => void;
  setPincode: (pincode: string) => void;
  resetBooking: () => void;
}

const initialState: BookingDetails = {
  puja_id: null,
  booking_date: null,
  booking_time: null,
  language: '',
  special_requirements: '',
  address: '',
  city: '',
  state: '',
  pincode: '',
  status: 'pending'
};

export const useBookingFlowStore = create<BookingFlowState>((set) => ({
  bookingDetails: initialState,
  amount: 0,
  setAmount: (amount) => set({ amount }),
  setPuja: (pujaId) => {
    if (!pujaId) return;
    set((state) => ({ 
      bookingDetails: { ...state.bookingDetails, puja_id: pujaId } 
    }));
  },
  setDate: (date) =>
    set((state) => ({
      bookingDetails: { ...state.bookingDetails, booking_date: date }
    })),
  setTime: (time) =>
    set((state) => ({
      bookingDetails: { ...state.bookingDetails, booking_time: time }
    })),
  setLanguage: (language) =>
    set((state) => ({
      bookingDetails: { ...state.bookingDetails, language }
    })),
  setSpecialRequirements: (requirements) =>
    set((state) => ({
      bookingDetails: { ...state.bookingDetails, special_requirements: requirements }
    })),
  setAddress: (address) =>
    set((state) => ({
      bookingDetails: { ...state.bookingDetails, address }
    })),
  setCity: (city) =>
    set((state) => ({
      bookingDetails: { ...state.bookingDetails, city }
    })),
  setState: (state) =>
    set((prev) => ({
      bookingDetails: { ...prev.bookingDetails, state }
    })),
  setPincode: (pincode) =>
    set((state) => ({
      bookingDetails: { ...state.bookingDetails, pincode }
    })),
  resetBooking: () => set({ bookingDetails: initialState }),
})); 