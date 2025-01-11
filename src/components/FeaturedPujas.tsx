import React from 'react';
import { pujas } from '../data/pujas';

const FeaturedPujas = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {pujas.map((puja) => (
        <div key={puja.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img src={puja.image} alt={puja.name} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">{puja.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{puja.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-accent font-semibold">₹{puja.price}</span>
              <a href={`/book/${puja.id}`} className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-light transition-colors">
                Book Now
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedPujas; 