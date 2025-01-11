import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <div className="bg-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Divine Blessings?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your puja today and take the first step towards spiritual well-being
          </p>
          <a
            href="#services"
            className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:bg-orange-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Book a Puja Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTASection; 