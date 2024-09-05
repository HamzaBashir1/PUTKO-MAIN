"use client"
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 z-50 w-full bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-wrap items-center justify-between p-4 mx-4 md:mx-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/putko.png" className="h-8" alt="Logo" />
          </a>

          {/* Right Side Icons and Menu Button */}
          <div className="flex items-center space-x-4">
            <button className="bg-[#58CAAA] text-white px-6 py-2 rounded-lg hover:bg-[#3abd98] transition">
              Log in
            </button>
            <FaHeart className="text-xl text-gray-900 cursor-pointer dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300" />
            <button
              onClick={toggleMenu}
              className="w-10 h-10 p-2 text-sm text-gray-900 rounded-lg dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
              aria-controls="navbar-hamburger"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`fixed top-0 right-0 mt-16 mr-4 w-80 bg-white dark:bg-gray-800 dark:border-gray-700 z-40 rounded-lg shadow-lg ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-hamburger">
            <div className="relative h-full">
              <ul className="flex flex-col mt-8 font-medium rounded-lg">
                <h1 className='px-4 py-2 font-bold'>For Customers</h1>
                <li><a href="#" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Blog For Customers</a></li>
                <li><a href="#" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">FAQ</a></li>
                <li><a href="#" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">How Booking Works</a></li>
                <hr />
                <h1 className='px-4 py-2 font-bold'>For Accommodation Providers</h1>
                <li><a href="#" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Blog For Providers</a></li>
                <li><a href="#" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">FAQ</a></li>
                <li><a href="#" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Rent with Putko</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;