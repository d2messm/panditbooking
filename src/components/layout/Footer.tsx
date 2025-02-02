import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-orange-900 text-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Divine Bookings</h3>
            <p className="text-orange-200 text-sm mb-4">
              Connecting devotees with experienced pandits for authentic puja ceremonies and spiritual guidance.
            </p>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-orange-200 hover:text-white text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-orange-200 hover:text-white text-sm">Terms & Conditions</Link></li>
              <li><Link to="/refund" className="text-orange-200 hover:text-white text-sm">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-orange-200 hover:text-white">Home</Link></li>
              <li><Link to="/book" className="text-orange-200 hover:text-white">Book Puja</Link></li>
              <li><Link to="/about" className="text-orange-200 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-orange-200 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@divinebookings.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>123 Temple Street, Spiritual City</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white"><Facebook /></a>
              <a href="#" className="hover:text-white"><Instagram /></a>
              <a href="#" className="hover:text-white"><Twitter /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-800 mt-8 pt-8 text-center text-sm text-orange-300">
          <p>&copy; {new Date().getFullYear()} Divine Bookings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;