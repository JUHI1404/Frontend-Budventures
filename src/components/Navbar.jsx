import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ openModal }) {
  return (
    <nav className="bg-inherit p-4 flex justify-between items-center">
      <div className="text-white text-xl font-semibold">TravelBooking</div>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-black hover:text-gray-200 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-black hover:text-gray-200 transition-colors">
            About Us
          </Link>
        </li>
        <li>
          <button
            onClick={openModal}
            className="text-black hover:text-gray-200 transition-colors focus:outline-none">
              Create Your Own Package
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;