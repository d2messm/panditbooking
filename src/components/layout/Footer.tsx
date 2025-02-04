import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-orange-900 text-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2 md:mb-4">About Divine Bookings</h3>
            <p className="text-orange-200 text-sm mb-2 md:mb-4">
              Connecting devotees with experienced pandits for authentic puja ceremonies and spiritual guidance.
            </p>
            <ul className="space-y-1">
              <li>
                <Link to="/privacy" className="text-orange-200 hover:text-white text-xs md:text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-orange-200 hover:text-white text-xs md:text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-orange-200 hover:text-white text-xs md:text-sm">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2 md:mb-4">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="text-orange-200 hover:text-white text-xs md:text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-orange-200 hover:text-white text-xs md:text-sm">
                  Book Puja
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-orange-200 hover:text-white text-xs md:text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-orange-200 hover:text-white text-xs md:text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2 md:mb-4">Contact Us</h3>
            <ul className="space-y-1">
              <li className="flex justify-center md:justify-start items-center gap-1">
                <Phone size={14} />
                <span className="text-xs md:text-sm">+91 98765 43210</span>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-1">
                <Mail size={14} />
                <span className="text-xs md:text-sm">info@divinebookings.com</span>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-1">
                <MapPin size={14} />
                <span className="text-xs md:text-sm">123 Temple Street, Spiritual City</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2 md:mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-2">
              <a href="#" className="hover:text-white">
                <Facebook size={16} />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram size={16} />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-800 mt-4 pt-4 text-center text-xs text-orange-300">
          <p>&copy; {new Date().getFullYear()} Divine Bookings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;