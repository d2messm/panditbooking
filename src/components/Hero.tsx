import React from 'react';
import { Calendar, Users, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Book Your Puja Services</span>
            <span className="block text-orange-600">With Expert Pandits</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Connect with experienced pandits for all your religious ceremonies. Book online for a seamless spiritual experience.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10"
              >
                Book Now
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="flex justify-center">
              <Calendar className="h-12 w-12 text-orange-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Easy Booking</h3>
            <p className="mt-2 text-base text-gray-500">
              Book your preferred puja service online with just a few clicks
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <Users className="h-12 w-12 text-orange-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Expert Pandits</h3>
            <p className="mt-2 text-base text-gray-500">
              Connect with experienced and knowledgeable pandits
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <Clock className="h-12 w-12 text-orange-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Flexible Timing</h3>
            <p className="mt-2 text-base text-gray-500">
              Choose from multiple time slots that suit your schedule
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;