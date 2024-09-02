"use client";

import { useEffect, useRef, useState } from "react";
import { FaHeart, FaBars, FaTimes } from 'react-icons/fa';

// Debounce function to limit the rate at which the scroll handler is executed
const debounce = (func, wait) => {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

const Header = () => {
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Debounced scroll handler
  const handleScroll = debounce(() => {
    if (headerRef.current) {
      console.log('Scroll Position:', window.scrollY); // Debugging scroll position
      if (window.scrollY > 80) {
        headerRef.current.classList.add("bg-white", "text-black", "shadow-lg", "fixed", "top-0", "left-0", "w-full", "z-50");
        headerRef.current.classList.remove("bg-transparent", "text-light-blue-200");
      } else {
        headerRef.current.classList.remove("bg-white", "text-black", "shadow-lg", "fixed", "top-0", "left-0", "w-full", "z-50");
        headerRef.current.classList.add("bg-transparent", "text-light-blue-200");
      }
    }
  }, 50);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <>
      <header
        ref={headerRef}
        className="relative flex items-center p-4 pl-20 bg-transparent text-light-blue-200" // Default classes for initial state
      >
        {/* Background Image */}
        <img
          src="/header.png"
          alt="Header Background"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
        {/* Background Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        <div className="container flex items-center justify-between w-full">
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold text-white">Putko</h1>
          </div>

          {/* Nav Right */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-[#58CAAA] text-white px-6 py-2 rounded-lg hover:bg-[#3abd98] transition">
              Log in
            </button>
            <div className='pl-5'>
              <FaHeart className="text-white text-xl hover:text-gray-300 cursor-pointer" />
            </div>
            <FaBars className="text-white text-2xl hover:text-gray-300 cursor-pointer" onClick={toggleMenu} />
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            {isMenuOpen ? (
              <FaTimes 
                className="text-white text-2xl cursor-pointer" 
                onClick={toggleMenu} 
                aria-expanded={isMenuOpen}
              />
            ) : (
              <FaBars 
                className="text-white text-2xl cursor-pointer" 
                onClick={toggleMenu} 
                aria-expanded={isMenuOpen}
              />
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 p-4 md:hidden">
          <ul className="flex flex-col items-center space-y-4">
            <li><a href="#home" className="text-lg">Home</a></li>
            <li><a href="#doctors" className="text-lg">Find a Doctor</a></li>
            <li><a href="#services" className="text-lg">Services</a></li>
            <li><a href="#contact" className="text-lg">Contact</a></li>
            <li>
              <button className="bg-[#58CAAA] text-white px-6 py-2 rounded-lg hover:bg-[#3abd98] transition">
                Log in
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;
