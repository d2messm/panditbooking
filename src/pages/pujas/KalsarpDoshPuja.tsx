import { useState } from 'react';
import { Star, Clock, MapPin, Calendar, Check, Info } from 'lucide-react';
import PaymentButton from '../../components/PaymentButton';

const KalsarpDoshPuja = () => {
  const [selectedTab, setSelectedTab] = useState('description');

  const pujaDetails = {
    name: "Kalsarp Dosh Nivaran Puja",
    price: 4999,
    duration: "2-3 hours",
    rating: 4.9,
    reviews: 60,
    description: "Kalsarp Dosha occurs when all planets are positioned between Rahu and Ketu. This puja helps in neutralizing its negative effects.",
    benefits: [
      "Removes Kalsarp dosha effects",
      "Improves decision-making ability",
      "Removes obstacles in marriage",
      "Enhances career prospects",
      "Brings mental peace"
    ],
    items: [
      "Nagraj Yantra",
      "Black Sesame",
      "Special Herbs",
      "Ghee",
      "White Flowers",
      "Milk",
      "Honey",
      "Specific Mantras"
    ],
    process: [
      "Sankalp",
      "Nag Devta Puja",
      "Kalsarp Yantra Sthapana",
      "Rudrabhishek",
      "Havan",
      "Nag Stotra Path",
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

export default KalsarpDoshPuja; 