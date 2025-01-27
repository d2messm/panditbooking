import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../data/services';
import { Clock, Star, IndianRupee } from 'lucide-react';

const CategoryPage = () => {
  const { id } = useParams();
  const [category, setCategory] = useState<any>(null);

  useEffect(() => {
    const foundCategory = categories.find(cat => cat.id === id);
    if (foundCategory) {
      setCategory(foundCategory);
    }
  }, [id]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">{category.name}</h1>
            <p className="text-xl text-white opacity-90">
              Choose from our wide range of {category.name.toLowerCase()}
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.services.map((service: any) => (
            <Link 
              key={service.id} 
              to={`/puja/${service.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Star className="h-5 w-5 mr-2 text-yellow-400 fill-current" />
                    <span>{service.rating} ({service.reviews}+ reviews)</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <IndianRupee className="h-5 w-5 mr-2" />
                    <span>₹{service.price.toLocaleString()}</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage; 