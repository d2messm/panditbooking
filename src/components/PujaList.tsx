import React from 'react';
import PujaCard from './PujaCard';
import { pujas } from '../data/pujas';

const PujaList = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Popular Puja Services
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Choose from our wide range of traditional puja services
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pujas.map((puja) => (
            <PujaCard key={puja.id} puja={puja} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PujaList;