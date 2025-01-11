import { useState } from 'react';
import PaymentButton from '../../components/PaymentButton';

const SatyanarayanPuja = () => {
  const [selectedTab] = useState('description');

  const pujaDetails = {
    name: "Satyanarayan Puja",
    price: 2499,
    duration: "2-3 hours",
    rating: 4.9,
    reviews: 75,
    description: "Satyanarayan Puja is performed to seek blessings of Lord Vishnu. It brings prosperity, happiness and success in all endeavors.",
    benefits: [
      "Brings prosperity and wealth",
      "Removes obstacles",
      "Fulfills wishes",
      "Brings harmony in family",
      "Ensures success in ventures"
    ],
    items: [
      "Panchamrit",
      "Fresh Fruits",
      "Ghee",
      "White Flowers",
      "Banana Leaves",
      "Betel Nuts",
      "Yellow Thread",
      "Incense Sticks"
    ],
    process: [
      "Sankalp",
      "Ganesh Puja",
      "Kalash Sthapana",
      "Vishnu Puja",
      "Katha Shravan",
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

export default SatyanarayanPuja; 