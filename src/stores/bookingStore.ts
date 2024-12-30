import { create } from 'zustand';
import { createBooking, getUserBookings, updateBookingStatus } from '../lib/api';
import type { Booking } from '../types';

interface BookingState {
  bookings: Booking[];
  loading: boolean;
  error: string | null;
  fetchUserBookings: () => Promise<void>;
  createNewBooking: (booking: Omit<Booking, 'id' | 'status'>) => Promise<void>;
  updateStatus: (id: string, status: Booking['status']) => Promise<void>;
}

export const useBookingStore = create<BookingState>((set) => ({
  bookings: [],
  loading: false,
  error: null,
  fetchUserBookings: async () => {
    set({ loading: true, error: null });
    try {
      const bookings = await getUserBookings();
      set({ bookings, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
  createNewBooking: async (booking) => {
    set({ loading: true, error: null });
    try {
      const newBooking = await createBooking(booking);
      set((state) => ({
        bookings: [...state.bookings, newBooking],
        loading: false
      }));
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
  updateStatus: async (id, status) => {
    set({ loading: true, error: null });
    try {
      await updateBookingStatus(id, status);
      set((state) => ({
        bookings: state.bookings.map((booking) =>
          booking.id === id ? { ...booking, status } : booking
        ),
        loading: false
      }));
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  }
}));