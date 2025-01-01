import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBookingFlowStore } from '../stores/bookingFlowStore';
import { useAuthStore } from '../stores/authStore';
import { supabase } from '../lib/supabase';
import BookingStepper from '../components/BookingStepper';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const PaymentPage = () => {
  const navigate = useNavigate();
  const { bookingDetails, setAmount } = useBookingFlowStore();
  const { user } = useAuthStore();
  const [loading, setLoading] = useState(false);

  // Get base price and calculate GST
  const basePrice = 13100;  // Get from the package price div
  const gstAmount = Math.round(basePrice * 0.18);  // 18% GST
  const totalAmount = basePrice + gstAmount;

  // Convert to paise for Razorpay
  const amountInPaise = totalAmount * 100;

  useEffect(() => {
    // Update the store with the total amount
    setAmount(totalAmount);
  }, []);

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    try {
      setLoading(true);

      // Load Razorpay script
      const res = await loadRazorpay();
      if (!res) {
        throw new Error('Razorpay SDK failed to load');
      }

      // Create booking in database
      const { data: booking, error: bookingError } = await supabase
        .from('bookings')
        .insert([
          {
            user_id: user?.id,
            puja_id: bookingDetails.puja_id,
            booking_date: bookingDetails.booking_date,
            booking_time: bookingDetails.booking_time,
            language: bookingDetails.language,
            special_requirements: bookingDetails.special_requirements,
            address: bookingDetails.address,
            city: bookingDetails.city,
            state: bookingDetails.state,
            pincode: bookingDetails.pincode,
            status: 'pending',
            amount: totalAmount,
            payment_type: 'partial' // Add payment type
          }
        ])
        .select()
        .single();

      if (bookingError) throw bookingError;

      // Create Razorpay order with the new payload structure
      const { data: orderData, error: orderError } = await supabase
        .functions.invoke('create-razorpay-order', {
          body: {
            address: booking.id, // Using booking ID as address reference
            amount: amountInPaise,
            cartId: booking.id,  // Using booking ID as cart reference
            extraDetailsByUser: bookingDetails.special_requirements || "",
            paymentType: "partial"
          }
        });

      if (orderError) throw orderError;

      if (!orderData?.id) {
        throw new Error('No order ID received');
      }

      // Initialize Razorpay payment
      const options = {
        key: 'rzp_test_GmbrlVMpSy5A47r',
        amount: amountInPaise,
        currency: "INR",
        name: "Book My Pooja",
        description: "Puja Booking Payment",
        order_id: orderData.id,
        handler: async function (response: any) {
          try {
            // Verify payment
            const { error: verificationError } = await supabase
              .functions.invoke('verify-payment', {
                body: {
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature,
                  booking_id: booking.id
                }
              });

            if (verificationError) throw verificationError;

            // Update booking status instead of payment
            await supabase
              .from('bookings')
              .update({ 
                status: 'confirmed',
                payment_id: response.razorpay_payment_id,
                payment_status: 'completed'
              })
              .eq('id', booking.id);

            navigate('/booking/success');
          } catch (error) {
            console.error('Payment verification failed:', error);
            alert('Payment verification failed. Please contact support.');
          }
        },
        prefill: {
          name: user?.user_metadata?.name || '',
          email: user?.email || '',
          contact: user?.user_metadata?.phone || ''
        },
        theme: {
          color: "#EA580C"
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
          }
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to initiate payment. Please try again.';
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <BookingStepper 
          steps={[
            { label: 'Package selection', completed: true },
            { label: 'Slot selection', completed: true },
            { label: 'Cart Detail', completed: true },
            { label: 'Make Payment', active: true }
          ]} 
        />

        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Payment Details</h2>
            <p className="text-sm text-gray-500">
              Choose your payment method
            </p>
          </div>

          <div className="space-y-4">
            {/* Payment Summary */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Package Price</span>
                <span className="font-semibold">₹{basePrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">GST (18%)</span>
                <span className="font-semibold">₹{gstAmount.toLocaleString()}</span>
              </div>
              <div className="border-t border-gray-200 my-2" />
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total Amount</span>
                <span className="font-semibold text-lg">₹{totalAmount.toLocaleString()}</span>
              </div>
            </div>

            {/* Payment Options */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="razorpay"
                    name="payment"
                    className="h-4 w-4 text-orange-600"
                    checked
                    readOnly
                  />
                  <label htmlFor="razorpay" className="ml-2">
                    Pay using Razorpay
                  </label>
                </div>
                <img 
                  src="/razorpay-logo.png" 
                  alt="Razorpay" 
                  className="h-8"
                />
              </div>
            </div>

            <button
              onClick={handlePayment}
              disabled={loading}
              className="w-full bg-orange-600 text-white py-3 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : `Pay ₹${totalAmount.toLocaleString()}`}
            </button>

            <p className="text-xs text-gray-500 text-center">
              By clicking Pay, you agree to our terms and conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage; 