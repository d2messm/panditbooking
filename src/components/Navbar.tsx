import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Menu, X, MapPin, Globe, Search } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div
        className={`bg-gradient-to-b from-orange-50 to-white border-b border-orange-100 transition-all duration-300 ${
          isSticky ? 'opacity-0 h-0' : 'opacity-100 h-auto'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center py-3 space-y-2 sm:space-y-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center text-gray-700 group relative">
              <MapPin className="h-5 w-5 mr-2 text-orange-600 transition-all group-hover:text-orange-700" />
              <select className="bg-white px-2 py-1 rounded-lg border border-orange-100 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all shadow-sm hover:shadow-md">
                <option>Select Location</option>
                <option>Bangalore</option>
                <option>Mumbai</option>
                <option>Delhi</option>
              </select>
            </div>
            <div className="flex items-center text-gray-700 group">
              <Globe className="h-5 w-5 mr-2 text-orange-600 transition-all group-hover:text-orange-700" />
              <select className="bg-white px-2 py-1 rounded-lg border border-orange-100 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all shadow-sm hover:shadow-md">
                <option>English</option>
                <option>Hindi</option>
                <option>Sanskrit</option>
              </select>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center bg-orange-600/10 px-3 py-1 rounded-full">
              <span className="text-orange-700 text-sm font-medium">
                📞 Call us: +91 96506 87457
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 bg-white shadow-lg transition-all duration-300 ${isSticky ? 'shadow-xl' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center group">
                <img
                  src="https://poojaimages.s3.ap-south-1.amazonaws.com/logo.png"
                  alt="Divine Purohit"
                  className="h-14 w-auto transform transition-all group-hover:scale-105"
                />
                <span className="ml-3 text-3xl font-extrabold font-cursive bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent drop-shadow-lg hover:scale-105 transition-transform duration-300 tracking-tighter">
                  DivinePurohit
                </span>
              </Link>
            </div>

            {/* Search Bar for desktop */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full group">
                <input
                  type="text"
                  placeholder="Search for Puja Services..."
                  className="w-full px-6 py-3 border-2 border-orange-100 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-300/30 focus:border-orange-500 transition-all placeholder:text-orange-400/60"
                />
                <Search className="absolute right-4 top-3.5 h-6 w-6 text-orange-500/80 group-focus-within:text-orange-600" />
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/book"
                className="text-gray-700 hover:text-orange-600 font-medium px-4 py-2.5 rounded-lg hover:bg-orange-50 transition-all duration-300"
              >
                Book Puja
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-orange-600 font-medium px-4 py-2.5 rounded-lg hover:bg-orange-50 transition-all duration-300"
              >
                Services
              </Link>
              {user ? (
                <button
                  onClick={() => signOut()}
                  className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-6 py-2.5 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center"
                >
                  Sign Out
                </button>
              ) : (
                <button
                  onClick={() => navigate('/login')}
                  className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-6 py-2.5 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center"
                >
                  Login
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl bg-orange-50 hover:bg-orange-100 text-orange-600 transition-all"
              >
                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-orange-100 bg-orange-50/50">
            <div className="px-4 pt-3 pb-4 space-y-4">
              {/* Mobile Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for Puja Services..."
                  className="w-full px-4 py-2 border border-orange-100 rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-300/30 focus:border-orange-500 transition-all placeholder:text-orange-400/60"
                />
                <Search className="absolute right-4 top-2.5 h-6 w-6 text-orange-500/80" />
              </div>

              <Link
                to="/book"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-orange-100 rounded-lg font-medium transition-colors"
              >
                Book Puja
              </Link>
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-orange-100 rounded-lg font-medium transition-colors"
              >
                Services
              </Link>
              {user ? (
                <button
                  onClick={() => {
                    signOut();
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
                >
                  Sign Out
                </button>
              ) : (
                <button
                  onClick={() => {
                    navigate('/login');
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;