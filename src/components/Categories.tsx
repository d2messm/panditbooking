import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = {
  ritualType: [
    { id: 'shanti-pujas', name: 'Shanti Pujas' },
    { id: 'pitru-puja', name: 'Pitru Puja' },
    { id: 'havans', name: 'Havans' },
    { id: 'jaaps', name: 'Jaaps' }
  ],
  activity: [
    { id: 'paths', name: 'Paths' },
    { id: 'bhajans-chowki', name: 'Bhajans & Chowki' },
    { id: 'festival-pooja', name: 'Festival Pooja' }
  ],
  deities: [
    { id: 'vishnu', name: 'Vishnu' },
    { id: 'shiva', name: 'Shiva' },
    { id: 'ganesha', name: 'Ganesha' },
    { id: 'lakshmi', name: 'Lakshmi' },
    { id: 'durga', name: 'Durga' }
  ]
};

const Categories = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Navigation */}
        <div className="space-y-12">
          {/* Ritual Types */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Ritual Type</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.ritualType.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="group bg-orange-50 rounded-lg p-4 hover:bg-orange-100 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800 group-hover:text-orange-700">{category.name}</span>
                    <ChevronRight className="h-4 w-4 text-orange-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Activity</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {categories.activity.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="group bg-orange-50 rounded-lg p-4 hover:bg-orange-100 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800 group-hover:text-orange-700">{category.name}</span>
                    <ChevronRight className="h-4 w-4 text-orange-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Deities */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Deity</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categories.deities.map((deity, index) => (
                <Link
                  key={deity.id}
                  to={`/category/${deity.id}`}
                  className={`group bg-orange-50 rounded-lg p-4 hover:bg-orange-100 transition-all ${
                    index >= 3 ? 'hidden md:block' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800 group-hover:text-orange-700">{deity.name}</span>
                    <ChevronRight className="h-4 w-4 text-orange-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
              <button className="md:hidden bg-orange-50 rounded-lg p-4 text-center text-gray-600">
                ...
              </button>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-12 space-y-4 text-center">
          <Link
            to="/services"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Browse All Poojas
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories; 