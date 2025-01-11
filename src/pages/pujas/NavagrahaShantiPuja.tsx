import { useState } from 'react';
import { Star, Clock, MapPin, Calendar, Check, Info } from 'lucide-react';
import PaymentButton from '../../components/PaymentButton';

const NavagrahaShantiPuja = () => {
  const [selectedTab, setSelectedTab] = useState('description');

  const pujaDetails = {
    name: "Navagraha Shanti Puja",
    price: 3999,
    duration: "3-4 hours",
    rating: 4.8,
    reviews: 45,
    description: "Complete nine planets peace puja to harmonize the effects of all planets. This comprehensive puja addresses the influences of all nine celestial bodies.",
    benefits: [
      "Balances effects of all nine planets",
      "Removes obstacles in life",
      "Improves overall fortune",
      "Brings peace and prosperity",
      "Helps in career growth"
    ],
    items: [
      "Nine types of grains",
      "Nine colored clothes",
      "Navgraha yantra",
      "Special herbs",
      "Ghee",
      "Flowers",
      "Fruits",
      "Incense"
    ],
    process: [
      "Sankalp",
      "Navgraha Avahan",
      "Planet-wise Puja",
      "Havan",
      "Navgraha Shanti Path",
      "Aarti",
      "Prasad Distribution"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Copy the exact same JSX structure from GaneshPuja.tsx */}
      {/* Hero Section */}
      <div className="bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Copy the rest of the JSX from GaneshPuja.tsx */}
        </div>
      </div>
    </div>
  );
};

export default NavagrahaShantiPuja; 