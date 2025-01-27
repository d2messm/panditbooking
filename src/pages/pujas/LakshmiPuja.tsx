const LakshmiPuja = () => {
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{pujaDetails.name}</h1>
        <p className="text-lg mb-4">{pujaDetails.description}</p>
        <div className="text-xl font-semibold">₹{pujaDetails.price}</div>
      </div>
    </div>
  );
};

export default LakshmiPuja; 