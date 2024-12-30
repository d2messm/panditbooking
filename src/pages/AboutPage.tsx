import React from 'react';
import { Flame, Heart, Users } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-orange-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Divine Bookings</h1>
          
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-gray-600">
              Divine Bookings is dedicated to preserving and promoting our rich spiritual heritage by connecting devotees with experienced pandits for authentic puja ceremonies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <Flame className="h-12 w-12 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">To make sacred rituals accessible while maintaining their authenticity and spiritual significance.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <Heart className="h-12 w-12 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600">To create a global community where spiritual practices are preserved and celebrated.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-gray-600">Authenticity, respect for tradition, and commitment to spiritual growth.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Our History</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, Divine Bookings emerged from a vision to bridge the gap between traditional spiritual practices and modern convenience. Our platform has since helped thousands of devotees connect with experienced pandits for their spiritual needs.
            </p>
            <p className="text-gray-600">
              We continue to grow and evolve while staying true to our core mission of preserving and promoting our sacred traditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;