import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin } from 'lucide-react';
import BookingStepper from '../components/BookingStepper';
import { useBookingFlowStore } from '../stores/bookingFlowStore';

const packages = [
  {
    id: 'basic',
    name: 'Basic Package',
    price: 2999,
    description: 'Essential puja items included',
    items: ['Flowers', 'Fruits', 'Coconut', 'Incense Sticks']
  },
  {
    id: 'standard',
    name: 'Standard Package',
    price: 4999,
    description: 'Complete puja items with additional offerings',
    items: ['All Basic Items', 'Sweets', 'Dry Fruits', 'Special Prasad']
  },
  {
    id: 'premium',
    name: 'Premium Package',
    price: 7999,
    description: 'Luxury puja items with exclusive offerings',
    items: ['All Standard Items', 'Silver Items', 'Special Decorations', 'Video Recording']
  }
];

const timeSlots = [
  { id: '1', time: '06:00 AM - 07:00 AM', available: true },
  { id: '2', time: '07:00 AM - 08:00 AM', available: true },
  { id: '3', time: '08:00 AM - 09:00 AM', available: false },
  { id: '4', time: '09:00 AM - 10:00 AM', available: true },
  { id: '5', time: '05:00 PM - 06:00 PM', available: true },
  { id: '6', time: '06:00 PM - 07:00 PM', available: true },
];

const BookingFlowPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();
  const { amount } = location.state || {};
  const {
    bookingDetails,
    setPackage,
    setDate,
    setTimeSlot,
    setAddress,
    setInstructions
  } = useBookingFlowStore();

  const handlePackageSelect = (pkg: any) => {
    setPackage(pkg);
    setCurrentStep(2);
  };

  const handleDateSelect = (selectedDate: string) => {
    setDate(selectedDate);
    setCurrentStep(3);
  };

  const handleTimeSlotSelect = (slot: any) => {
    setTimeSlot(slot);
    setCurrentStep(4);
  };

  const handlePayment = () => {
    // Implement payment logic
    console.log('Processing payment for:', bookingDetails);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <BookingStepper currentStep={currentStep} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Step 1: Package Selection */}
        {currentStep === 1 && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-6">Select Your Package</h2>
            <div className="space-y-4">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => handlePackageSelect(pkg)}
                  className="border rounded-lg p-6 hover:border-orange-500 cursor-pointer transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{pkg.name}</h3>
                      <p className="text-gray-600 mt-1">{pkg.description}</p>
                      <ul className="mt-4 space-y-2">
                        {pkg.items.map((item, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-orange-600 font-semibold text-xl">₹{pkg.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Date Selection */}
        {currentStep === 2 && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-6">Select Date</h2>
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-4">
                <Calendar className="text-orange-600 h-6 w-6" />
                <input
                  type="date"
                  onChange={(e) => handleDateSelect(e.target.value)}
                  className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Time Slot Selection */}
        {currentStep === 3 && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-6">Select Time Slot</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {timeSlots.map((slot) => (
                <button
                  key={slot.id}
                  onClick={() => handleTimeSlotSelect(slot)}
                  disabled={!slot.available}
                  className={`p-4 rounded-lg border ${
                    slot.available
                      ? 'hover:border-orange-500 cursor-pointer'
                      : 'bg-gray-50 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <span className={slot.available ? 'text-gray-900' : 'text-gray-400'}>
                      {slot.time}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Cart Details & Payment */}
        {currentStep === 4 && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-6">Review & Payment</h2>
            <div className="space-y-6">
              {/* Order Summary */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-4">Order Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Package:</span>
                    <span>{bookingDetails.package?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span>{bookingDetails.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span>{bookingDetails.timeSlot?.time}</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total Amount:</span>
                      <span className="text-orange-600">₹{bookingDetails.package?.price}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="inline-block w-4 h-4 mr-2" />
                  Puja Address
                </label>
                <textarea
                  rows={3}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter the address where you want the puja to be performed"
                />
              </div>

              {/* Special Instructions */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Instructions (Optional)
                </label>
                <textarea
                  rows={3}
                  onChange={(e) => setInstructions(e.target.value)}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Any special requirements or preferences..."
                />
              </div>

              {/* Payment Button */}
              <button
                onClick={handlePayment}
                className="w-full bg-orange-600 text-white py-3 px-4 rounded-md hover:bg-orange-700 transition-colors"
              >
                Pay ₹{bookingDetails.package?.price}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingFlowPage; 