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
      <nav className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 fixed top-0 left-0 w-full z-50">
        <div className="flex flex-wrap items-center justify-between mx-4 md:mx-20 p-4">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/putko.png" className="h-8" alt="Logo" />
          </a>

          {/* Search Bar - Visible on medium and larger screens */}
          <div className="relative w-full max-w-md mx-4 hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#58CAAA] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m2.69-6.89a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"></path>
              </svg>
            </div>
          </div>

          {/* Right Side Icons and Menu Button */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-[#58CAAA] text-white px-6 py-2 rounded-lg hover:bg-[#3abd98] transition">
              Log in
            </button>
            <FaHeart className="text-gray-900 dark:text-gray-100 text-xl hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer" />
            <button
              onClick={toggleMenu}
              className="p-2 w-10 h-10 text-sm text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
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
              <ul className="flex flex-col font-medium mt-8 rounded-lg">
                <h1 className='font-bold px-4 py-2'>For Customers</h1>
                <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Blog For Customers</a></li>
                <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">FAQ</a></li>
                <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">How Booking Works</a></li>
                <hr />
                <h1 className='font-bold px-4 py-2'>For Accommodation Providers</h1>
                <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Blog For Providers</a></li>
                <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">FAQ</a></li>
                <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Rent with Putko</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
