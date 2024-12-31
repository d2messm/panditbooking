import { Users, Star, Clock, Shield } from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Pandits",
      description: "Our team consists of highly qualified and experienced pandits"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Quality Service",
      description: "We ensure authentic and traditional puja services"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Timely Service",
      description: "Punctual and efficient service delivery"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trust & Safety",
      description: "100% genuine and reliable puja services"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">About Divine Purohit</h1>
          <p className="text-lg">Your Trusted Partner for All Puja Services</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">Who We Are</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Divine Purohit is a leading online platform for booking puja services. We connect devotees with experienced and qualified pandits to perform various religious ceremonies and rituals.
              </p>
              <p className="text-gray-600 mb-4">
                Our mission is to preserve and promote our rich cultural heritage while making it easily accessible to everyone through technology.
              </p>
              <p className="text-gray-600">
                We take pride in offering authentic, traditional puja services that adhere to all religious customs and practices.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://source.unsplash.com/800x600/?hindu,temple,ritual"
                alt="Puja Ceremony"
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-orange-600 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Divine Purohit</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold">1</div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Experienced Pandits</h3>
                  <p className="text-gray-600">All our pandits are well-versed in vedic traditions and have years of experience.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold">2</div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Convenient Booking</h3>
                  <p className="text-gray-600">Easy online booking process with flexible scheduling options.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold">3</div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Transparent Pricing</h3>
                  <p className="text-gray-600">Clear pricing with no hidden charges.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold">4</div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Customer Support</h3>
                  <p className="text-gray-600">Dedicated support team to assist you throughout the process.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;