import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, Languages } from 'lucide-react';
import { useBookingStore } from '../stores/bookingStore';
import { getPujas } from '../lib/api';
import type { Puja } from '../types';

interface BookingFormData {
  pujaId: string;
  date: string;
  time: string;
  language: string;
  specialRequirements?: string;
}

const BookingPage = () => {
  const [pujas, setPujas] = useState<Puja[]>([]);
  const { createNewBooking, loading, error } = useBookingStore();
  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>();

  useEffect(() => {
    const loadPujas = async () => {
      const data = await getPujas();
      setPujas(data);
    };
    loadPujas();
  }, []);

  const onSubmit = async (data: BookingFormData) => {
    try {
      await createNewBooking({
        ...data,
        userId: '', // Will be set by RLS
      });
    } catch (err) {
      console.error('Booking failed:', err);
    }
  };

  return (
    <div className="bg-orange-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Book Your Puja</h1>

        <div className="bg-white rounded-lg shadow-md p-8">
          {error && (
            <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Puja</label>
              <select
                {...register('pujaId', { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              >
                <option value="">Choose a puja service</option>
                {pujas.map((puja) => (
                  <option key={puja.id} value={puja.id}>
                    {puja.name} - ₹{puja.price}
                  </option>
                ))}
              </select>
              {errors.pujaId && <span className="text-red-500 text-sm">Please select a puja</span>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  <Calendar className="inline-block w-4 h-4 mr-2" />
                  Date
                </label>
                <input
                  type="date"
                  {...register('date', { required: true })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
                {errors.date && <span className="text-red-500 text-sm">Date is required</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  <Clock className="inline-block w-4 h-4 mr-2" />
                  Time
                </label>
                <input
                  type="time"
                  {...register('time', { required: true })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
                {errors.time && <span className="text-red-500 text-sm">Time is required</span>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                <Languages className="inline-block w-4 h-4 mr-2" />
                Preferred Language
              </label>
              <select
                {...register('language', { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              >
                <option value="">Select language</option>
                <option value="Hindi">Hindi</option>
                <option value="Sanskrit">Sanskrit</option>
                <option value="English">English</option>
              </select>
              {errors.language && <span className="text-red-500 text-sm">Please select a language</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Special Requirements
              </label>
              <textarea
                {...register('specialRequirements')}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                placeholder="Any special requirements or preferences..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors duration-300 disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Book Now'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;