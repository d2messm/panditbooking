import PujaCard from './PujaCard';
import { categories } from '../data/services';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';


const PujaList = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const containerWidth = scrollContainer.current.offsetWidth;
      const newPosition = direction === 'right' 
        ? scrollPosition + containerWidth * 0.8
        : scrollPosition - containerWidth * 0.8;
      
      scrollContainer.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="bg-gradient-to-br from-orange-50 to-white py-16 relative">
      <div className="absolute top-0 left-0 right-0 h-8 -translate-y-7 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDEyODAgMTQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0xMjgwIDE0MHYtMjUuN0MxMTc1LjcgMTE4LjMgMTA3OS41IDExMSA5NjAgOTZjLTE2MC0xNS4zLTE2MC0xNS4zLTI0MC01LjVDNTQwIDk2IDUyMCA5NiA0MDAgOTZjLTEyMCAwLTE0MC0xOS4yLTI0MC0xOS4yUzAgOTYgMCA5NnY0NGgxMjgweiIvPjwvZz48L3N2Zz4=')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2">
          <h2 className="inline-block bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            Sacred Puja Services
          </h2>
          <p className="mx-auto max-w-md text-base text-orange-500/90">
            Experience divine rituals performed by verified pandits
          </p>
        </div>

        <div className="relative mt-8">
          <div 
            ref={scrollContainer}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory space-x-6 pb-4 pl-4"
            onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
          >
            {categories
              .flatMap(category => category.services)
              .map((service) => (
                <Link
                  key={service.id}
                  to={`/puja/${service.id}`}
                  className="flex-shrink-0 w-[calc(100%-2rem)] md:w-[350px] transform transition-all duration-200 hover:scale-103 group"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all h-full">
                    <PujaCard puja={service} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              ))}
          </div>

          <div className="absolute inset-y-0 -left-3 flex items-center">
            <button 
              onClick={() => handleScroll('left')}
              className="p-1.5 rounded-full bg-white shadow-md hover:bg-orange-50 transition-transform -translate-y-1/2 hover:scale-105"
            >
              <ChevronLeft className="h-6 w-6 text-orange-600" />
            </button>
          </div>
          <div className="absolute inset-y-0 -right-3 flex items-center">
            <button 
              onClick={() => handleScroll('right')}
              className="p-1.5 rounded-full bg-white shadow-md hover:bg-orange-50 transition-transform -translate-y-1/2 hover:scale-105"
            >
              <ChevronRight className="h-6 w-6 text-orange-600" />
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link 
            to="/services" 
            className="inline-block bg-gradient-to-r from-orange-500 to-amber-600 px-6 py-3 text-base font-semibold text-white rounded-xl shadow-md hover:scale-105 transition-all"
          >
            Explore 100+ Sacred Rituals →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PujaList;