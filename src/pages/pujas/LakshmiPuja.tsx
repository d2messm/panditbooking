import { useState } from 'react';
import { Star, Clock, MapPin, Check, Info } from 'lucide-react';
import PaymentButton from '../../components/PaymentButton';
import BookingForm from '../../components/BookingForm';

const LakshmiPuja = () => {
  const [selectedTab, setSelectedTab] = useState('description');
  const pujaDetails = {
    name: "Lakshmi Puja",
    price: 2199,
    duration: "1-2 hours",
    rating: 4.9,
    reviews: 70,
    description: "Lakshmi Puja is performed to seek blessings of Goddess Lakshmi for wealth, prosperity and abundance in life.",
    benefits: [
      "Attracts wealth and prosperity",
      "Improves financial status",
      "Brings business success",
      "Removes poverty",
      "Brings material comforts"
    ],
    items: [
      "Red Lotus",
      "Gold/Silver coins",
      "Rice",
      "Yellow Flowers",
      "Ghee lamp",
      "Vermillion",
      "Sweets",
      "New cloth"
    ],
    process: [
      "Sankalp",
      "Kalash Sthapana",
      "Lakshmi Avahan",
      "Shodashopchar Puja",
      "Lakshmi Ashtottara",
      "Aarti",
      "Prasad Distribution"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 py-6 md:py-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="text-white space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🕉️</span>
                <h1 className="text-xl md:text-3xl font-bold font-mukta">{pujaDetails.name}</h1>
              </div>
              <p className="text-xs md:text-sm opacity-90">माँ लक्ष्मी की कृपा से समृद्धि और सफलता प्राप्त करें</p>
              
              <div className="flex flex-wrap items-center gap-4 text-xs">
                <div className="flex items-center bg-orange-600/20 px-3 py-1 rounded-full">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span>{pujaDetails.rating} ({pujaDetails.reviews}+ जनसमीक्षा)</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{pujaDetails.duration}</span>
                </div>
              </div>

              <div className="mt-4 bg-white/10 p-3 rounded-lg">
                <p className="text-[11px] md:text-xs">🌟 शुभ मुहूर्त में बुक करें - 100% वैदिक विधि</p>
                <p className="text-[11px] md:text-xs mt-1">🎁 Includes Special Prasad & Photo</p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-orange-200">
              <img
                src="/images/lakshmi-puja.jpg"
                alt={pujaDetails.name}
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 p-4">
                <p className="text-white text-xs">"धन-धान्य की देवी माँ लक्ष्मी का आशीर्वाद"</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-4 py-6 md:py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Content */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-sm">
              {/* Tabs */}
              <div className="border-b">
                <div className="flex overflow-x-auto">
                  {[
                    {id: 'description', label: 'पूजा विवरण'},
                    {id: 'benefits', label: 'लाभ'},
                    {id: 'items', label: 'सामग्री'},
                    {id: 'process', label: 'विधि प्रक्रिया'}
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedTab(tab.id)}
                      className={`px-4 py-2 text-xs font-medium whitespace-nowrap ${
                        selectedTab === tab.id
                          ? 'border-b-2 border-orange-600 text-orange-600'
                          : 'text-gray-500 hover:text-orange-500'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-4 md:p-6 space-y-4">
                {selectedTab === 'description' && (
                  <div>
                    <h3 className="text-md font-semibold mb-3 flex items-center gap-2">
                      <span className="text-xl text-orange-600">🕉️</span>
                      {pujaDetails.name} की महिमा
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {pujaDetails.description}
                      <span className="block mt-2 text-orange-600 text-xs">✨ धन-समृद्धि का आशीर्वाद</span>
                    </p>
                  </div>
                )}

                {selectedTab === 'benefits' && (
                  <div>
                    <h3 className="text-md font-semibold mb-3">विशेष लाभ</h3>
                    <ul className="space-y-2">
                      {pujaDetails.benefits?.map((benefit, index) => (
                        <li key={index} className="flex items-start text-xs">
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedTab === 'items' && (
                  <div>
                    <h3 className="text-md font-semibold mb-3">पूजन सामग्री</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {pujaDetails.items?.map((item, index) => (
                        <li key={index} className="flex items-center text-xs p-2 bg-orange-50 rounded">
                          <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedTab === 'process' && (
                  <div>
                    <h3 className="text-md font-semibold mb-3">वैदिक विधि</h3>
                    <div className="space-y-3">
                      {pujaDetails.process?.map((step, index) => (
                        <div key={index} className="flex items-start text-xs bg-orange-50 p-3 rounded-lg">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-semibold text-xs">
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

          {/* Right Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 sticky top-4">
              <div className="mb-4 border-b pb-4">
                <p className="text-xs text-gray-500">शुरुआती कीमत</p>
                <div className="text-2xl font-bold text-orange-600">₹{pujaDetails.price}</div>
                <p className="text-[10px] text-gray-400 mt-1">*वास्तु अनुसार कीमत भिन्न हो सकती है</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600 text-sm">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{pujaDetails.duration} वैदिक अनुष्ठान</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Info className="h-4 w-4 mr-2" />
                  <span>5+ वर्षों के अनुभवी पंडितजी</span>
                </div>
              </div>

              <PaymentButton amount={pujaDetails.price} />
              
              <div className="mt-4 text-center">
                <p className="text-[10px] text-gray-500">
                  🪔 100% गारंटीड संतुष्टि<br/>
                  🔒 सुरक्षित भुगतान
                </p>
                <div className="mt-2 flex justify-center items-center gap-2">
                  <img src="/images/upi-logo.png" className="h-4" alt="UPI" />
                  <img src="/images/visa-logo.png" className="h-4" alt="Visa" />
                  <img src="/images/paytm-logo.png" className="h-4" alt="Paytm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-4 py-6">
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="text-xl text-orange-600">🕉️</span>
            शुभ मुहूर्त बुक करें
          </h3>
          <BookingForm pujaDetails={pujaDetails} />
          <p className="text-xs text-gray-500 mt-4 text-center">"ॐ महालक्ष्म्यै नमः 🙏"</p>
        </div>
      </div>
    </div>
  );
};

export default LakshmiPuja; 