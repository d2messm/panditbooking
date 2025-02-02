import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-orange-50 to-orange-100">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            India's Most Trusted Puja Services Platform
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Your One-Stop Hassle-Free Pooja Booking Destination
          </p>
          <div className="inline-flex items-center justify-center space-x-2 bg-white px-6 py-3 rounded-lg shadow-md">
            <Phone className="h-6 w-6 text-orange-600" />
            <span className="text-2xl font-bold text-gray-800">+91 96506 87457</span>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-12 grid grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 text-center relative">
            <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
              New
            </div>
            <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
            <div className="text-gray-600">Home Pooja Services</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center relative">
            <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
              New
            </div>
            <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
            <div className="text-gray-600">Temple Services</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;