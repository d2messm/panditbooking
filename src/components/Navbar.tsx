import React from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  return (
    <nav className="bg-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo section remains the same */}
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-500">Home</Link>
              <Link to="/book" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-500">Book Puja</Link>
              <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-500">About</Link>
              <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-500">Contact</Link>
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

          {/* Mobile menu button remains the same */}
        </div>
      </div>

      {/* Mobile menu remains the same but with updated auth buttons */}
    </nav>
  );
};

export default Navbar;