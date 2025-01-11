import { useState } from 'react';
import { Star, Clock, MapPin, Calendar, Check, Info } from 'lucide-react';
import PaymentButton from '../../components/PaymentButton';

const LakshmiPuja = () => {
  const [selectedTab] = useState('description');

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

  // Copy the same JSX structure from GaneshPuja
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Copy the entire JSX structure from GaneshPuja */}
    </div>
  );
};

export default LakshmiPuja; 