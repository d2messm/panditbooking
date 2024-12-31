import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Menu, X, MapPin, Globe, Search } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-orange-100 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-1" />
              <select className="bg-transparent border-none text-sm">
                <option>Select Location</option>
                <option>Bangalore</option>
                <option>Mumbai</option>
                <option>Delhi</option>
              </select>
            </div>
            <div className="flex items-center text-gray-600">
              <Globe className="h-4 w-4 mr-1" />
              <select className="bg-transparent border-none text-sm">
                <option>English</option>
                <option>Hindi</option>
                <option>Sanskrit</option>
              </select>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 text-sm">Call us: 8150 87 87 17</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src="https://divinepurohit.in/wp-content/uploads/2024/12/cropped-legend.webp"
                  alt="Divine Purohit"
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for Puja Services..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/book" className="text-gray-700 hover:text-orange-600">Book Puja</Link>
              <Link to="/services" className="text-gray-700 hover:text-orange-600">Services</Link>
              {user ? (
                <button 
                  onClick={() => signOut()}
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
                >
                  Sign Out
                </button>
              ) : (
                <button 
                  onClick={() => navigate('/login')}
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
                >
                  Login
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-orange-600"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/book" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 rounded-md">Book Puja</Link>
              <Link to="/services" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 rounded-md">Services</Link>
              {user ? (
                <button 
                  onClick={() => signOut()}
                  className="w-full text-left px-3 py-2 text-gray-700 hover:bg-orange-50 rounded-md"
                >
                  Sign Out
                </button>
              ) : (
                <button 
                  onClick={() => navigate('/login')}
                  className="w-full text-left px-3 py-2 text-gray-700 hover:bg-orange-50 rounded-md"
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