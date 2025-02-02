import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, Filter, Star, ArrowRight } from 'lucide-react';
import { categories, filters } from '../data/services';
import CategorySlider from '../components/CategorySlider';

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [appliedFilters, setAppliedFilters] = useState<Record<string, string[]>>({});

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleFilterChange = (filterName: string, value: string) => {
    setSelectedFilters(prev => {
      const currentFilters = prev[filterName] || [];
      if (currentFilters.includes(value)) {
        return { ...prev, [filterName]: currentFilters.filter(item => item !== value) };
      }
      return { ...prev, [filterName]: [...currentFilters, value] };
    });
  };

  const applyFilters = () => {
    setAppliedFilters(selectedFilters);
    setShowFilters(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Compact Hero Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 py-8 md:py-12">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Sacred Services</h1>
          <p className="mt-2 text-xs md:text-base text-orange-100">Discover traditional rituals with modern convenience</p>
        </div>
      </div>

      {/* Dense Category Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 py-6 md:py-8">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">Divine Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-40 md:h-48">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <h3 className="text-lg md:text-xl font-semibold text-white">{category.name}</h3>
                  <p className="text-orange-100 text-xs mt-1">{category.services.length}+ Sacred Rituals</p>
                </div>
              </div>
              <div className="p-3 md:p-4 bg-gray-50 group-hover:bg-orange-50 transition-colors flex items-center justify-between">
                <span className="font-medium text-orange-600 group-hover:text-orange-700 text-xs md:text-sm">Explore Category</span>
                <ArrowRight className="h-4 w-4 text-orange-600 group-hover:text-orange-700 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Compact Search and Filters */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-2 md:gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search sacred rituals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-xs md:text-sm placeholder-gray-400"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-xs md:text-sm font-medium"
            >
              <Filter className="h-4 w-4 mr-2 text-orange-600" />
              Filters
              <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 mt-4 p-3 bg-gray-50 rounded-lg shadow-inner">
              {Object.entries(filters).map(([filterName, filterItems]) => (
                <div key={filterName} className="space-y-2">
                  <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">{filterName}</h3>
                  <div className="space-y-1.5">
                    {filterItems?.map((item: any) => (
                      <label key={item.id || item} className="flex items-center space-x-2 hover:bg-gray-100 p-1.5 rounded-md">
                        <input 
                          type="checkbox"
                          checked={selectedFilters[filterName]?.includes(item.label || item) || false}
                          onChange={() => handleFilterChange(filterName, item.label || item)}
                          className="h-3.5 w-3.5 text-orange-600 border border-gray-300 rounded-sm focus:ring-orange-500" 
                        />
                        <span className="text-xs text-gray-600">{item.label || item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              <div className="col-span-full flex justify-end">
                <button
                  onClick={applyFilters}
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Compact Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 py-5 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {categories
            .filter((category) => selectedCategory === 'all' || category.id === selectedCategory)
            .flatMap((category) => category.services || [])
            .filter((service) =>
              searchQuery
                ? service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  service.description.toLowerCase().includes(searchQuery.toLowerCase())
                : true
            )
            .filter(service => 
              Object.entries(appliedFilters).every(([filterName, values]) => 
                values.length === 0 || 
                values.some(value => {
                  if (filterName === 'Price Range') {
                    const [min, max] = value.replace('₹', '').split('-').map(Number);
                    return service.price >= min && service.price <= max;
                  }
                  if (filterName === 'Rating') {
                    return service.rating >= parseInt(value);
                  }
                  return service[filterName.toLowerCase() as keyof typeof service] === value;
                })
              )
            )
            .map((service) => (
              <Link
                key={service.id}
                to={`/puja/${service.id}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-40 md:h-48">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 p-3 md:p-4">
                    <h3 className="text-base md:text-lg font-semibold text-white">{service.name}</h3>
                  </div>
                </div>
                <div className="p-3 md:p-4">
                  <p className="text-gray-600 text-xs mb-3 line-clamp-2 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-amber-400 fill-current" />
                      <span className="text-xs text-gray-500">{service.rating} ({service.reviews}+)</span>
                    </div>
                    <div className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full text-xs font-semibold">
                      ₹{service.price}
                    </div>
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
