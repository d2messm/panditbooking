import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="https://divinepurohit.in/wp-content/uploads/2024/12/cropped-legend.webp"
                alt="Divine Purohit"
                className="h-8 w-auto"
              />
              <span className="ml-2 text-lg font-semibold">Divine Purohit</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-500">Home</Link>
              <Link to="/book" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-500">Book Puja</Link>
              <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-500">About</Link>
              <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-500">Contact</Link>
              <Link to="/profile" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-500">Profile</Link>
              <Link to="/services" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-500">Services</Link>
              <Link to="/payment" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-500">Payment</Link>
              {user ? (
                <button 
                  onClick={() => signOut()}
                  className="bg-white text-orange-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-100"
                >
                  Sign Out
                </button>
              ) : (
                <button 
                  onClick={() => navigate('/login')}
                  className="bg-white text-orange-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-100"
                >
                  Login
                </button>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-orange-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-500">Home</Link>
            <Link to="/book" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-500">Book Puja</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-500">About</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-500">Contact</Link>
            <Link to="/profile" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-500">Profile</Link>
            <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-500">Services</Link>
            <Link to="/payment" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-500">Payment</Link>
            {user ? (
              <button 
                onClick={() => signOut()}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-orange-500"
              >
                Sign Out
              </button>
            ) : (
              <button 
                onClick={() => navigate('/login')}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-orange-500"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;