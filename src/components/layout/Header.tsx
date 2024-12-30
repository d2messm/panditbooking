import React from 'react';
import Navbar from '../Navbar';

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className="bg-orange-100 py-2 text-center text-orange-800">
        <p className="text-sm">🕉️ Special Offer: 10% off on all Puja bookings this month! 🪔</p>
      </div>
    </header>
  );
};

export default Header;