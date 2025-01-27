import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { useBookingFlowStore } from '../stores/bookingFlowStore';
import BookingStepper from '../components/BookingStepper';

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
  "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Delhi",
  "Puducherry", "Ladakh", "Jammu and Kashmir"
];

const BookingFlowPage = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { 
    bookingDetails, 
    setDate, 
    setTime, 
    setAddress,
    setCity,
    setState,
    setPincode,
    setLanguage 
  } = useBookingFlowStore();

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    setAddress(formData.get('address') as string);
    setCity(formData.get('city') as string);
    setState(formData.get('state') as string);
    setPincode(formData.get('pincode') as string);
    
    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <BookingStepper 
          steps={[
            { label: 'Package selection', completed: true },
            { label: 'Slot selection', completed: true },
            { label: 'Cart Detail', active: true },
            { label: 'Make Payment', upcoming: true }
          ]} 
        />

        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Cart Details</h2>
            <p className="text-sm text-gray-500">
              BookMypooja Team will contact you soon to confirm the auspicious date.
            </p>
          </div>

          {/* Service Summary */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-4">
              <img 
                src="/images/hindu.webp" 
                alt="Service" 
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-semibold">Ark Vivah For Male Rated</h3>
                <p className="text-sm text-gray-600">Package: BASIC</p>
                <p className="text-sm text-gray-600">2 Pandit + 1 Day</p>
                <div className="mt-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>02-01-2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Morning (6 AM to 8 AM)</span>
                  </div>
                </div>
                <div className="mt-2 text-lg font-semibold">₹13,100</div>
              </div>
            </div>
          </div>

          {/* Address Form */}
          <form onSubmit={handleAddressSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Complete Address
              </label>
              <textarea
                name="address"
                rows={3}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Enter your complete address"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <select
                  name="state"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                >
                  {indianStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Pincode
              </label>
              <input
                type="text"
                name="pincode"
                required
                pattern="[0-9]{6}"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                Continue to Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingFlowPage; 