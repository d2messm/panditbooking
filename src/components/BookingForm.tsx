import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Clock, Calendar, MapPin, User, Mail, Phone } from 'lucide-react';

interface BookingFormProps {
  pujaDetails: {
    name: string;
    price: number;
    duration: string;
  };
}

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  specialRequirements?: string;
}

const BookingForm = ({ pujaDetails }: BookingFormProps) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>();

  const onSubmit = async (data: BookingFormData) => {
    setLoading(true);
    try {
      // Here you'll integrate with your booking API
      console.log('Booking data:', data);
      navigate('/payment');
    } catch (error) {
      console.error('Booking failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Book {pujaDetails.name}</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Personal Information</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="mt-1 relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                {...register('name', { required: 'Name is required' })}
                type="text"
                className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1 relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                type="email"
                className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div className="mt-1 relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                {...register('phone', { 
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Invalid phone number'
                  }
                })}
                type="tel"
                className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Booking Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Booking Details</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Preferred Date
              </label>
              <div className="mt-1 relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  {...register('date', { required: 'Date is required' })}
                  type="date"
                  className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Preferred Time
              </label>
              <div className="mt-1 relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  {...register('time', { required: 'Time is required' })}
                  type="time"
                  className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Address Details</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <div className="mt-1 relative">
              <MapPin className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
              <textarea
                {...register('address', { required: 'Address is required' })}
                rows={3}
                className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                {...register('city', { required: 'City is required' })}
                type="text"
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
              {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                State
              </label>
              <input
                {...register('state', { required: 'State is required' })}
                type="text"
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
              {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pincode
            </label>
            <input
              {...register('pincode', { 
                required: 'Pincode is required',
                pattern: {
                  value: /^[0-9]{6}$/,
                  message: 'Invalid pincode'
                }
              })}
              type="text"
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
            {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode.message}</p>}
          </div>
        </div>

        {/* Special Requirements */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Special Requirements (Optional)
          </label>
          <textarea
            {...register('specialRequirements')}
            rows={4}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            placeholder="Any special requirements or preferences..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-600 text-white py-3 px-4 rounded-md hover:bg-orange-700 transition-colors duration-300 disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Proceed to Payment'}
        </button>
      </form>
    </div>
  );
};

export default BookingForm; 