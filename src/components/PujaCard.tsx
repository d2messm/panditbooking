import React from 'react';
import { Clock, IndianRupee } from 'lucide-react';
import type { Puja } from '../types';

interface PujaCardProps {
  puja: Puja;
}

const PujaCard: React.FC<PujaCardProps> = ({ puja }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={puja.image}
        alt={puja.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{puja.name}</h3>
        <p className="mt-2 text-gray-600">{puja.description}</p>
        <div className="mt-4 flex items-center text-gray-500">
          <Clock className="h-5 w-5 mr-2" />
          <span>{puja.duration}</span>
        </div>
        <div className="mt-2 flex items-center text-gray-500">
          <IndianRupee className="h-5 w-5 mr-2" />
          <span>₹{puja.price.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default PujaCard;