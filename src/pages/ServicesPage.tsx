import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, Filter, Star, ArrowRight } from 'lucide-react';
import { categories, filters } from '../data/services';
import CategorySlider from '../components/CategorySlider';

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold">Our Services</h1>
          <p className="mt-2">Choose from our wide range of puja services</p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold mb-8">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                  <p className="text-white/80 text-sm mt-1">{category.services.length} Services</p>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between text-orange-600 group-hover:text-orange-700">
                <span className="font-medium">View All Services</span>
                <ArrowRight className="h-5 w-5" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search for pujas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              <Filter className="h-5 w-5 mr-2" />
              Filters
              <ChevronDown className="h-5 w-5 ml-2" />
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4 p-4 border-t">
              {/* Deities */}
              <div>
                <h3 className="font-medium mb-2">Deities</h3>
                <div className="space-y-2">
                  {filters.deities?.map((deity) => (
                    <label key={deity} className="flex items-center">
                      <input type="checkbox" className="rounded text-orange-600" />
                      <span className="ml-2 text-sm">{deity}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-medium mb-2">Price Range</h3>
                <div className="space-y-2">
                  {filters.priceRanges?.map((range) => (
                    <label key={range.id} className="flex items-center">
                      <input type="checkbox" className="rounded text-orange-600" />
                      <span className="ml-2 text-sm">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Language */}
              <div>
                <h3 className="font-medium mb-2">Language</h3>
                <div className="space-y-2">
                  {filters.languages?.map((language) => (
                    <label key={language} className="flex items-center">
                      <input type="checkbox" className="rounded text-orange-600" />
                      <span className="ml-2 text-sm">{language}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <h3 className="font-medium mb-2">Location</h3>
                <div className="space-y-2">
                  {filters.locations?.map((location) => (
                    <label key={location} className="flex items-center">
                      <input type="checkbox" className="rounded text-orange-600" />
                      <span className="ml-2 text-sm">{location}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories
            .filter((category) => selectedCategory === 'all' || category.id === selectedCategory)
            .flatMap((category) => category.services || [])
            .filter((service) =>
              searchQuery
                ? service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  service.description.toLowerCase().includes(searchQuery.toLowerCase())
                : true
            )
            .map((service) => (
              <Link
                key={service.id}
                to={`/puja/${service.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{service.rating} ({service.reviews}+)</span>
                    </div>
                    <div className="text-orange-600 font-semibold">₹{service.price}</div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
