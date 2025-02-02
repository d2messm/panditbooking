import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Delhi',
    quote: 'The puja was conducted with utmost devotion and authenticity. Very satisfied with the service.',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Mumbai',
    quote: 'Excellent service! The pandit was very knowledgeable and explained everything clearly.',
    rating: 5
  },
  {
    id: 3,
    name: 'Amit Patel',
    location: 'Bangalore',
    quote: 'Booking was hassle-free and the puja was conducted perfectly. Highly recommended!',
    rating: 5
  }
];

const Testimonials = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const containerWidth = scrollContainer.current.offsetWidth;
      const scrollAmount = containerWidth * 0.8;
      const newPosition = direction === 'right' 
        ? scrollPosition + scrollAmount
        : scrollPosition - scrollAmount;

      // Ensure we don't scroll past boundaries
      const maxScroll = scrollContainer.current.scrollWidth - containerWidth;
      const clampedPosition = Math.max(0, Math.min(newPosition, maxScroll));
      
      scrollContainer.current.scrollTo({
        left: clampedPosition,
        behavior: 'smooth'
      });
      setScrollPosition(clampedPosition);
    }
  };

  return (
    <div className="bg-orange-50 py-16 overflow-hidden relative group">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            Testimonials
          </h2>
          <p className="text-lg text-gray-600">Speaking from their hearts</p>
        </div>

        <div className="relative">
          <div 
            ref={scrollContainer}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory space-x-8 pb-4"
            onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-[calc(100%-2rem)] md:w-[600px] bg-white rounded-2xl shadow-lg p-8 snap-center">
                <div className="flex flex-col items-center text-center">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-gray-900 font-semibold">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 -left-4 flex items-center">
            <button 
              onClick={() => handleScroll('left')}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-orange-50 transition-all transform -translate-y-1/2 hover:scale-110"
              disabled={scrollPosition === 0}
            >
              <ChevronLeft className="h-8 w-8 text-orange-600" />
            </button>
          </div>
          
          <div className="absolute inset-y-0 -right-4 flex items-center">
            <button 
              onClick={() => handleScroll('right')}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-orange-50 transition-all transform -translate-y-1/2 hover:scale-110"
              disabled={scrollPosition >= (scrollContainer.current?.scrollWidth || 0) - (scrollContainer.current?.offsetWidth || 0)}
            >
              <ChevronRight className="h-8 w-8 text-orange-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;