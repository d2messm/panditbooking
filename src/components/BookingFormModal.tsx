import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';

interface BookingFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  pujaDetails: {
    id: string;
    name: string;
    price: number;
  };
}

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  booking_date: string;
  booking_time: string;
  special_requirements?: string;
}

const BookingFormModal = ({ isOpen, onClose, pujaDetails }: BookingFormModalProps) => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>();
  const [error, setError] = useState<string | null>(null);

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (formData: BookingFormData) => {
    try {
      setLoading(true);
      
      const res = await loadRazorpay();
      if (!res) {
        setError('Razorpay SDK failed to load. Please refresh the page.');
        return;
      }

      // Create Razorpay order via Supabase function
      const { data: orderData, error: orderError } = await supabase
        .functions.invoke('create-razorpay-order', {
          body: {
            amount: pujaDetails.price, // Convert to paise
            currency: 'INR',
            receipt: `puja_${pujaDetails.id}`,
            notes: {
              puja_id: pujaDetails.id,
              puja_name: pujaDetails.name,
              customer_name: formData.name,
              customer_email: formData.email,
              customer_phone: formData.phone
            }
          }
        });

      if (orderError) {
        setError(`Order creation failed: ${orderError.message}`);
        return;
      }

      if (!orderData?.id) {
        throw new Error('No order ID received');
      }

      const options = {
        key: 'rzp_test_e3shCqGWPE459i',
        amount: orderData.amount,
        currency: orderData.currency,
        order_id: orderData.id,
        name: 'Pandit Booking',
        description: `Booking for ${pujaDetails.name}`,
        handler: async function (response: any) {
          try {
            const { error: verificationError } = await supabase
              .functions.invoke('verify-payment', {
                body: {
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature,
                  booking_id: orderData.id
                }
              });

            if (verificationError) throw verificationError;

            const { error: bookingError } = await supabase
              .from('booking')
              .insert([
                {
                  user_id: user?.id,
                  puja_id: pujaDetails.id,
                  name: formData.name,
                  email: formData.email,
                  phone: formData.phone,
                  address: formData.address,
                  city: formData.city,
                  state: formData.state,
                  pincode: formData.pincode,
                  booking_date: formData.booking_date,
                  booking_time: formData.booking_time,
                  special_requirements: formData.special_requirements,
                  amount: pujaDetails.price,
                  payment_status: 'completed',
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id
                }
              ])
              .select()
              .single();

            if (bookingError) {
              setError(`Booking failed: ${bookingError.message}`);
              return;
            }

            onClose();
          } catch (err) {
            setError(err instanceof Error ? err.message : 'Payment verification failed');
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: '#ea580c'
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
          }
        }
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.on('payment.failed', function (response: any) {
        setError(`Payment failed: ${response.error.description} (Code ${response.error.code})`);
      });

      paymentObject.open();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Book {pujaDetails.name}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(handlePayment)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  {...register('phone', { required: 'Phone is required' })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  {...register('address', { required: 'Address is required' })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  {...register('city', { required: 'City is required' })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                <input
                  type="text"
                  {...register('state', { required: 'State is required' })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
              </div>

              {/* Pincode */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                <input
                  type="text"
                  {...register('pincode', { required: 'Pincode is required' })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode.message}</p>}
              </div>

              {/* Booking Date and Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Booking Date</label>
                <input
                  type="date"
                  {...register('booking_date', { required: 'Booking date is required' })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.booking_date && <p className="text-red-500 text-sm mt-1">{errors.booking_date.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Booking Time</label>
                <input
                  type="time"
                  {...register('booking_time', { required: 'Booking time is required' })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.booking_time && <p className="text-red-500 text-sm mt-1">{errors.booking_time.message}</p>}
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className={`px-6 py-3 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${loading ? 'bg-gray-400' : 'bg-orange-500'}`}
                disabled={loading}
              >
                {loading ? 'Processing Payment...' : `Pay ₹${pujaDetails.price}`}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingFormModal;