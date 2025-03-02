import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import PujaOfferingsModal from './PujaOfferingsModal';

interface BookingFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  pujaDetails: {
    id: string;
    name: string;
    price: number;
    date: string;
    tithi: string;
  };
}

interface BookingFormData {
  name: string;
  phone: string;
}

const BookingFormModal = ({ isOpen, onClose, pujaDetails }: BookingFormModalProps) => {
  const [loading, setLoading] = useState(false);
  const [showOfferings, setShowOfferings] = useState(false);
  const { user } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>();
  const [error, setError] = useState<string | null>(null);
  
  // Initialize with current date and time if pujaDetails.date is not provided
  const [selectedDateTime, setSelectedDateTime] = useState(() => {
    if (pujaDetails.date) return pujaDetails.date;
    const now = new Date();
    return now.toISOString().slice(0, 16); // Format: YYYY-MM-DDTHH:mm
  });

  const handleNext = async (formData: BookingFormData) => {
    try {
      setLoading(true);
      // Store the form data for later use
      console.log('Form data submitted:', formData);
      // Show the offerings modal
      setShowOfferings(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  if (showOfferings) {
    return (
      <PujaOfferingsModal
        isOpen={true}
        onClose={() => {
          setShowOfferings(false);
          onClose();
        }}
        pujaDetails={{
          ...pujaDetails,
          date: selectedDateTime
        }}
        onDateTimeChange={setSelectedDateTime}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Enter your Name & Contact</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(handleNext)} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Enter Your Name *</label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter Your Name *"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Enter Phone Number *</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 py-2 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                    +91
                  </span>
                  <input
                    type="tel"
                    {...register('phone', { 
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Please enter a valid 10-digit phone number'
                      }
                    })}
                    className="flex-1 px-3 py-2 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Phone Number"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                <p className="text-xs text-gray-500 mt-1">
                  All puja updates - video & prasad details will be shared on your WhatsApp
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                className={`w-full px-6 py-3 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${loading ? 'bg-gray-400' : 'bg-orange-500'}`}
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Next'}
              </button>
              
              <p className="text-xs text-center text-gray-600">
                By Signing in you agree to DivinePurohit's{' '}
                <a href="/terms" className="text-orange-600 hover:underline">T&C</a>
                {' '}and{' '}
                <a href="/privacy" className="text-orange-600 hover:underline">Privacy Policy</a>
              </p>
              
              <p className="text-xs text-center text-gray-600">
                Check out our{' '}
                <a href="/refund-policy" className="text-orange-600 hover:underline">Refund Policy</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingFormModal;