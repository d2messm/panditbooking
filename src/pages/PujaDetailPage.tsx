import { useState, useEffect } from 'react';
import { Star, Clock, MapPin, Calendar, Check, Info } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useBookingFlowStore } from '../stores/bookingFlowStore';
import { categories } from '../data/services';
import BookingFormModal from '../components/BookingFormModal';
import { useAuth } from '../hooks/useAuth';

const PujaDetailPage = () => {
  const [selectedTab, setSelectedTab] = useState('description');
  const navigate = useNavigate();
  const { id } = useParams();
  const { setPuja, setAmount } = useBookingFlowStore();
  const [pujaDetails, setPujaDetails] = useState<any>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    // Find the puja in all categories
    for (const category of categories) {
      const puja = category.services.find(service => service.id === id);
      if (puja) {
        setPujaDetails({
          ...puja,
          benefits: [
            "Brings peace and harmony",
            "Removes obstacles",
            "Improves overall well-being",
            "Brings prosperity",
            "Ensures success in endeavors"
          ],
          items: [
            "Special Herbs",
            "Flowers",
            "Fruits",
            "Ghee",
            "Incense Sticks",
            "Coconut",
            "Rice",
            "Sacred Thread"
          ],
          process: [
            "Sankalp (Resolution)",
            "Kalash Sthapana",
            "Main Puja",
            "Havan",
            "Aarti",
            "Prasad Distribution"
          ]
        });
        break;
      }
    }
  }, [id]);

  const handleBookNow = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    setShowBookingModal(true);
  };

  if (!pujaDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column */}
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">{pujaDetails.name}</h1>
              <p className="text-lg opacity-90 mb-6">{pujaDetails.description}</p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{pujaDetails.duration}</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 mr-2" />
                  <span>{pujaDetails.rating} ({pujaDetails.reviews}+ reviews)</span>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div>
              <img
                src={pujaDetails.image}
                alt={pujaDetails.name}
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="md:col-span-2">
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
                      {pujaDetails.benefits.map((benefit: string, index: number) => (
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
                      {pujaDetails.items.map((item: string, index: number) => (
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
                      {pujaDetails.process.map((step: string, index: number) => (
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

      {/* Booking Form Modal */}
      <BookingFormModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        pujaDetails={{
          id: pujaDetails.id,
          name: pujaDetails.name,
          price: pujaDetails.price
        }}
      />
    </div>
  );
};

export default PujaDetailPage; 