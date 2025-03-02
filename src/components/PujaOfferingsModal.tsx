import { useState, useEffect } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface PujaOfferingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  pujaDetails: {
    id: string;
    name: string;
    price: number;
    date: string;
    tithi: string;
  };
  onDateTimeChange: (newDateTime: string) => void;
}

interface OfferingItem {
  id: string;
  name: string;
  description: string;
  price: number;
  location: string;
}

const offerings: OfferingItem[] = [
  {
    id: '1',
    name: '108 Maha Mrityunjay Mantra Path',
    description: 'Panditji will be chanting the Maha Mrityunjay Mantra 108 times by chanting your Name & Gotra for your good health & long life.',
    price: 901,
    location: 'Trimbakeshwar Tirtha Kshetra'
  },
  {
    id: '2',
    name: 'Ganga Jal, Pushpa, Bilwapatra and Nariyal Arpan',
    description: 'Panditji will be offering Ganga Jal, Pushpa, Bilwapatra & Nariyal to Trimbakeshwar Jyotirlinga by chanting your name & gotra for prosperity in your life.',
    price: 751,
    location: 'Trimbakeshwar Tirtha Kshetra'
  },
  {
    id: '3',
    name: 'Vastra Daan',
    description: 'Panditji will be offering Vastra to Trimbakeshwar Jyotirlinga by chanting your Name & Gotra for your good health.',
    price: 451,
    location: 'Trimbakeshwar Tirtha Kshetra'
  },
  // Add more offerings here...
];

const PujaOfferingsModal = ({ isOpen, onClose, pujaDetails, onDateTimeChange }: PujaOfferingsModalProps) => {
  const [selectedOfferings, setSelectedOfferings] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState(pujaDetails.date);

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleAddOffering = (offeringId: string) => {
    setSelectedOfferings(prev => {
      const newSet = new Set(prev);
      if (newSet.has(offeringId)) {
        newSet.delete(offeringId);
      } else {
        newSet.add(offeringId);
      }
      return newSet;
    });
  };

  const calculateTotal = () => {
    let total = pujaDetails.price; // Base puja price
    selectedOfferings.forEach(id => {
      const offering = offerings.find(o => o.id === id);
      if (offering) {
        total += offering.price;
      }
    });
    return total;
  };

  const handlePayment = async () => {
    try {
      setLoading(true);
      
      // Create order on your backend
      const { data: orderData, error: orderError } = await supabase.functions.invoke('create-razorpay-order', {
        body: {
          amount: calculateTotal() * 100, // Convert to paise
          currency: 'INR',
          receipt: `puja_${pujaDetails.id}_${Date.now()}`,
          notes: {
            puja_name: pujaDetails.name,
            puja_date: selectedDateTime,
            puja_tithi: pujaDetails.tithi,
            selected_offerings: Array.from(selectedOfferings).join(',')
          }
        }
      });

      if (orderError) throw new Error(orderError.message);

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Divine Purohit',
        description: `Booking for ${pujaDetails.name}`,
        order_id: orderData.id,
        handler: async function (response: any) {
          try {
            // Verify payment
            const { error: verificationError } = await supabase.functions.invoke('verify-payment', {
              body: {
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature
              }
            });

            if (verificationError) throw verificationError;

            // Send confirmation email
            const { error: emailError } = await supabase.functions.invoke('send-booking-email', {
              body: {
                puja_details: {
                  ...pujaDetails,
                  date: selectedDateTime,
                  total_amount: calculateTotal()
                },
                selected_offerings: Array.from(selectedOfferings).map(id => 
                  offerings.find(o => o.id === id)
                ),
                payment_details: {
                  payment_id: response.razorpay_payment_id,
                  order_id: response.razorpay_order_id
                }
              }
            });

            if (emailError) console.error('Email sending failed:', emailError);

            setPaymentSuccess(true);
            setTimeout(() => {
              onClose();
            }, 2000);
          } catch (err) {
            console.error('Payment verification failed:', err);
            alert('Payment verification failed. Please contact support.');
          }
        },
        prefill: {
          name: '', // Will be filled from previous form
          email: '', // Will be filled from previous form
          contact: '' // Will be filled from previous form
        },
        theme: {
          color: '#ea580c'
        }
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment initialization failed:', error);
      alert('Failed to initialize payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    const newDateTime = `${newDate}T${selectedDateTime.split('T')[1]}`;
    setSelectedDateTime(newDateTime);
    onDateTimeChange(newDateTime);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = e.target.value;
    const newDateTime = `${selectedDateTime.split('T')[0]}T${newTime}`;
    setSelectedDateTime(newDateTime);
    onDateTimeChange(newDateTime);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Offer Bhet at {pujaDetails.name}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Offerings List */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold mb-4">Select Additional Offerings</h3>
              {offerings.map(offering => (
                <div key={offering.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-lg">{offering.name}</h4>
                  <p className="text-gray-600 text-sm mt-2">{offering.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-semibold">₹ {offering.price}/-</span>
                    <button
                      onClick={() => handleAddOffering(offering.id)}
                      className={`px-4 py-2 rounded-lg ${
                        selectedOfferings.has(offering.id)
                          ? 'bg-orange-100 text-orange-600 border border-orange-600'
                          : 'bg-orange-500 text-white'
                      }`}
                    >
                      {selectedOfferings.has(offering.id) ? '- Remove' : '+ Add'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary and Payment */}
            <div className="bg-gray-50 p-6 rounded-lg sticky top-6">
              <h3 className="text-xl font-semibold mb-4">{pujaDetails.name}</h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <p className="text-gray-600">Puja Tithi</p>
                  <div className="flex gap-4 mt-2">
                    <input
                      type="date"
                      value={selectedDateTime.split('T')[0]}
                      onChange={handleDateChange}
                      className="flex-1 p-2 border rounded"
                    />
                    <input
                      type="time"
                      value={selectedDateTime.split('T')[1].slice(0,5)}
                      onChange={handleTimeChange}
                      className="flex-1 p-2 border rounded"
                    />
                  </div>
                </div>
                <div className="border-b pb-4">
                  <p className="text-gray-600">Puja Dakshina</p>
                  <p className="font-semibold">₹ {pujaDetails.price}/-</p>
                </div>
                {selectedOfferings.size > 0 && (
                  <div className="border-b pb-4">
                    <p className="text-gray-600">Additional Offerings</p>
                    {Array.from(selectedOfferings).map(id => {
                      const offering = offerings.find(o => o.id === id);
                      return offering ? (
                        <div key={id} className="flex justify-between mt-2">
                          <span className="text-sm">{offering.name}</span>
                          <span className="font-semibold">₹ {offering.price}/-</span>
                        </div>
                      ) : null;
                    })}
                  </div>
                )}
                <div className="pt-4">
                  <p className="text-gray-600">Total Dakshina</p>
                  <p className="text-2xl font-bold">₹ {calculateTotal()}/-</p>
                </div>

                <p className="text-sm text-gray-500">
                  Name, gotra & prasad delivery address will be asked after payment completion.
                </p>

                <button
                  onClick={handlePayment}
                  disabled={loading}
                  className={`w-full py-4 text-white font-semibold rounded-lg ${
                    loading ? 'bg-gray-400' : 'bg-orange-500 hover:bg-orange-600'
                  }`}
                >
                  {loading ? 'Processing...' : 'Pay Dakshina'}
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">100% Secure Payment</p>
                </div>
              </div>
            </div>
          </div>

          {paymentSuccess && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Payment Successful!</h3>
                <p className="text-gray-600">Your puja booking is confirmed</p>
              </div>
            </div>
          )}

          {loading && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg text-center">
                <Loader2 className="h-16 w-16 text-orange-500 animate-spin mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Processing Payment</h3>
                <p className="text-gray-600">Please do not close this window</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PujaOfferingsModal; 