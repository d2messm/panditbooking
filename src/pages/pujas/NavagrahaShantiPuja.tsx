import { useState } from 'react';
import { Star, Clock, MapPin, Calendar, Check, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useBookingFlowStore } from '../../stores/bookingFlowStore';

const NavagrahaShantiPuja = () => {
  const [selectedTab, setSelectedTab] = useState('description');
  const navigate = useNavigate();
  const { setPuja, setAmount } = useBookingFlowStore();

  const pujaDetails = {
    id: "navagraha-shanti",
    name: "Navagraha Shanti Puja",
    price: 3999,
    duration: "3-4 hours",
    rating: 4.8,
    reviews: 45,
    description: "Complete nine planets peace puja to harmonize the effects of all planets. This comprehensive puja addresses the influences of all nine celestial bodies.",
    benefits: [
      "Balances effects of all nine planets",
      "Removes obstacles in life",
      "Improves overall fortune",
      "Brings peace and prosperity",
      "Helps in career growth"
    ],
    items: [
      "Nine types of grains",
      "Nine colored clothes",
      "Navgraha yantra",
      "Special herbs",
      "Ghee",
      "Flowers",
      "Fruits",
      "Incense"
    ],
    process: [
      "Sankalp",
      "Navgraha Avahan",
      "Planet-wise Puja",
      "Havan",
      "Navgraha Shanti Path",
      "Aarti",
      "Prasad Distribution"
    ]
  };

  const handleBookNow = () => {
    setPuja(pujaDetails.id);
    setAmount(pujaDetails.price);
    navigate(`/booking-puja/${pujaDetails.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{pujaDetails.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1">{pujaDetails.rating}</span>
                </div>
                <span>({pujaDetails.reviews}+ reviews)</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Duration: {pujaDetails.duration}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Available in all locations</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>Available on all days</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/navagraha-shanti.jpg"
                alt={pujaDetails.name}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="border-b">
                <div className="flex">
                  {['description', 'benefits', 'items', 'process'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setSelectedTab(tab)}
                      className={`px-6 py-3 text-sm font-medium ${
                        selectedTab === tab
                          ? 'border-b-2 border-orange-600 text-orange-600'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6">
                {selectedTab === 'description' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">About {pujaDetails.name}</h3>
                    <p className="text-gray-600">{pujaDetails.description}</p>
                  </div>
                )}

                {selectedTab === 'benefits' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Benefits</h3>
                    <ul className="space-y-2">
                      {pujaDetails.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedTab === 'items' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Puja Items Included</h3>
                    <ul className="grid grid-cols-2 gap-4">
                      {pujaDetails.items.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedTab === 'process' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Puja Process</h3>
                    <div className="space-y-4">
                      {pujaDetails.process.map((step, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-semibold text-sm">
                            {index + 1}
                          </div>
                          <span className="ml-3 text-gray-600">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Booking Card */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <div className="mb-4">
                <span className="text-gray-500">Starting from</span>
                <div className="text-3xl font-bold text-orange-600">₹{pujaDetails.price}</div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Duration: {pujaDetails.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Info className="h-5 w-5 mr-2" />
                  <span>Experienced Pandits</span>
                </div>
              </div>

              <button 
                onClick={handleBookNow} 
                className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition"
              >
                Book Now
              </button>

              <p className="mt-4 text-sm text-gray-500 text-center">
                100% Satisfaction Guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavagrahaShantiPuja; 