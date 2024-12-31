import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, Languages, MapPin, Phone, Mail, User } from 'lucide-react';
import { useBookingStore } from '../stores/bookingStore';
import { getPujas } from '../lib/api';
import type { Puja } from '../types';

interface BookingFormData {
  pujaId: string;
  date: string;
  time: string;
  language: string;
  name: string;
  email: string;
  phone: string;
  address: string;
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
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Book Your Puja</h1>
          <p className="text-lg">Fill in the details below to schedule your puja ceremony</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Puja Selection */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Select Puja</label>
                <select
                  {...register('pujaId', { required: 'Please select a puja' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                >
                  <option value="">Choose a puja service</option>
                  {pujas.map((puja) => (
                    <option key={puja.id} value={puja.id}>
                      {puja.name} - ₹{puja.price}
                    </option>
                  ))}
                </select>
                {errors.pujaId && (
                  <p className="mt-1 text-sm text-red-600">{errors.pujaId.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  <Languages className="inline-block w-4 h-4 mr-2" />
                  Preferred Language
                </label>
                <select
                  {...register('language', { required: 'Please select a language' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                >
                  <option value="">Select language</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Sanskrit">Sanskrit</option>
                  <option value="English">English</option>
                </select>
                {errors.language && (
                  <p className="mt-1 text-sm text-red-600">{errors.language.message}</p>
                )}
              </div>
            </div>

            {/* Date and Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  <Calendar className="inline-block w-4 h-4 mr-2" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  {...register('date', { required: 'Date is required' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
                {errors.date && (
                  <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  <Clock className="inline-block w-4 h-4 mr-2" />
                  Preferred Time
                </label>
                <input
                  type="time"
                  {...register('time', { required: 'Time is required' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
                {errors.time && (
                  <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
                )}
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  <User className="inline-block w-4 h-4 mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  <Phone className="inline-block w-4 h-4 mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  {...register('phone', { required: 'Phone number is required' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                <Mail className="inline-block w-4 h-4 mr-2" />
                Email Address
              </label>
              <input
                type="email"
                {...register('email', { required: 'Email is required' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                <MapPin className="inline-block w-4 h-4 mr-2" />
                Address
              </label>
              <textarea
                {...register('address', { required: 'Address is required' })}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                placeholder="Enter your complete address"
              />
              {errors.address && (
                <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Special Requirements (Optional)
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
              className="w-full bg-orange-600 text-white py-3 px-4 rounded-md hover:bg-orange-700 transition-colors duration-300 disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Book Now'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;