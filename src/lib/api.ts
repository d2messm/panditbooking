import { supabase } from './supabase';
import type { Puja, Booking } from '../types';

// Puja API functions
export async function getPujas() {
  const { data, error } = await supabase
    .from('pujas')
    .select('*')
    .order('name');
  
  if (error) throw error;
  return data as Puja[];
}

export async function getPuja(id: string) {
  const { data, error } = await supabase
    .from('pujas')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) throw error;
  return data as Puja;
}

// Booking API functions
export async function createBooking(booking: Omit<Booking, 'id' | 'status'>) {
  const { data, error } = await supabase
    .from('bookings')
    .insert([{ ...booking, status: 'pending' }])
    .select()
    .single();
  
  if (error) throw error;
  return data as Booking;
}

export async function getUserBookings() {
  const { data, error } = await supabase
    .from('bookings')
    .select(`
      *,
      puja:pujas(*)
    `)
    .order('booking_date', { ascending: false });
  
  if (error) throw error;
  return data;
}

export async function updateBookingStatus(id: string, status: Booking['status']) {
  const { error } = await supabase
    .from('bookings')
    .update({ status })
    .eq('id', id);
  
  if (error) throw error;
}

// Profile API functions
export async function updateProfile(id: string, data: { name: string; phone: string }) {
  const { error } = await supabase
    .from('profiles')
    .update(data)
    .eq('id', id);
  
  if (error) throw error;
}

export async function getProfile(id: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) throw error;
  return data;
}