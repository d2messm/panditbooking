import { useState } from 'react';
import PaymentButton from '../../components/PaymentButton';

const SatyanarayanPuja = () => {
  const [selectedTab, setSelectedTab] = useState('description');

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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="tabs">
        <button onClick={() => setSelectedTab('description')}>Description</button>
        <button onClick={() => setSelectedTab('benefits')}>Benefits</button>
        <button onClick={() => setSelectedTab('items')}>Items</button>
        <button onClick={() => setSelectedTab('process')}>Process</button>
      </div>
      <div>
        {selectedTab === 'description' && <p>{pujaDetails.description}</p>}
        {selectedTab === 'benefits' && <ul>{pujaDetails.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>}
        {selectedTab === 'items' && <ul>{pujaDetails.items.map((item) => <li key={item}>{item}</li>)}</ul>}
        {selectedTab === 'process' && <ul>{pujaDetails.process.map((step) => <li key={step}>{step}</li>)}</ul>}
      </div>
      <PaymentButton amount={pujaDetails.price} />
    </div>
  );
};

export default SatyanarayanPuja; 