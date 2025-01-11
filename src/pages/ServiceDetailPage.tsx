import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Star, Clock, MapPin, Calendar, Info } from 'lucide-react';
import { categories } from '../data/services';
import PaymentButton from '../components/PaymentButton';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const [selectedTab, setSelectedTab] = useState('description');

  // Find the service from categories data
  const service = categories
    .flatMap(category => category.services)
    .find(service => service?.id === id);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{service.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1">{service.rating}</span>
                </div>
                <span>({service.reviews}+ reviews)</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Duration: {service.duration}</span>
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
                src={service.image}
                alt={service.name}
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
                    <h3 className="text-lg font-semibold mb-4">About {service.name}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                )}

                {/* Add other tab contents similarly */}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Booking Card */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <div className="mb-4">
                <span className="text-gray-500">Starting from</span>
                <div className="text-3xl font-bold text-orange-600">₹{service.price}</div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Duration: {service.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Info className="h-5 w-5 mr-2" />
                  <span>Experienced Pandits</span>
                </div>
              </div>

              <PaymentButton amount={service.price} />

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

export default ServiceDetailPage; 