import { Calendar, Users, Clock, Shield, Star, Gift } from 'lucide-react';

const features = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Expert Pandits",
    description: "Experienced and verified pandits with deep knowledge of traditional rituals"
  },
  {
    icon: <Calendar className="h-8 w-8" />,
    title: "Flexible Scheduling",
    description: "Book pujas at your convenient time and location"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "100% Authentic",
    description: "Traditional rituals performed with genuine samagri and mantras"
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "Satisfaction Guaranteed",
    description: "Rated 4.9/5 by over 1000+ satisfied devotees"
  },
  {
    icon: <Gift className="h-8 w-8" />,
    title: "Complete Package",
    description: "All puja items and materials included in the service"
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your queries"
  }
];

const Features = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of traditional values and modern convenience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-orange-50 rounded-xl p-6 hover:bg-orange-100 transition-colors duration-300"
            >
              <div className="text-orange-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features; 