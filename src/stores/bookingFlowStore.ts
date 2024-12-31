import { create } from 'zustand';
import type { BookingDetails, Package, TimeSlot } from '../types/booking';

interface BookingFlowState {
  bookingDetails: BookingDetails;
  setPackage: (pkg: Package) => void;
  setDate: (date: string) => void;
  setTimeSlot: (slot: TimeSlot) => void;
  setAddress: (address: string) => void;
  setInstructions: (instructions: string) => void;
  resetBooking: () => void;
}

const initialState: BookingDetails = {
  package: null,
  date: null,
  timeSlot: null,
  address: '',
  instructions: '',
};

export const useBookingFlowStore = create<BookingFlowState>((set) => ({
  bookingDetails: initialState,
  setPackage: (pkg) => 
    set((state) => ({ 
      bookingDetails: { ...state.bookingDetails, package: pkg } 
    })),
  setDate: (date) =>
    set((state) => ({
      bookingDetails: { ...state.bookingDetails, date }
    })),
  setTimeSlot: (slot) =>
    set((state) => ({
      bookingDetails: { ...state.bookingDetails, timeSlot: slot }
    })),
  setAddress: (address) =>
    set((state) => ({
      bookingDetails: { ...state.bookingDetails, address }
    })),
  setInstructions: (instructions) =>
    set((state) => ({
      bookingDetails: { ...state.bookingDetails, instructions }
    })),
  resetBooking: () => set({ bookingDetails: initialState }),
})); 