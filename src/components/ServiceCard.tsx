import { getImagePath } from '../utils/imageUtils';
import { Star } from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    description: string;
    price: number;
    duration: string;
    rating: number;
    reviews: number;
    image: string;
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const fallbackImage = '/images/puja-default.jpg';

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = fallbackImage;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={getImagePath(service.image)}
        onError={handleImageError}
        alt={service.name}
        loading="lazy"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{service.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">
              {service.rating} ({service.reviews}+)
            </span>
          </div>
          <div className="text-orange-600 font-semibold">₹{service.price}</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 