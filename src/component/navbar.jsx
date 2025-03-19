import React, { useState } from "react";
import { FaSearch, FaUserCircle, FaEllipsisH, FaBars, FaTimes } from "react-icons/fa";
import myImage from "../assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-6 py-4 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-10">
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes className="text-2xl text-gray-600" />
          ) : (
            <FaBars className="text-2xl text-gray-600" />
          )}
        </button>

        {/* Logo */}
        <div className="flex items-center mx-auto md:mx-0">
          <img src={myImage} alt="Neswara Logo" className="h-14 md:h-20" />
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <FaUserCircle className="text-gray-600 text-2xl cursor-pointer hover:text-yellow-500" />
          <FaSearch className="text-gray-600 text-lg cursor-pointer hover:text-yellow-500" />
        </div>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:justify-center md:items-center bg-white font-semibold text-black 
        md:static absolute top-full left-0 w-full shadow-md p-4 md:shadow-none md:p-0 text-left md:text-center`}
      >
        <li className="px-2 hover:text-yellow-500 cursor-pointer font-bold">LIFESTYLE</li>
        <li className="px-2 hover:text-yellow-500 cursor-pointer font-bold">EDUCATION</li>
        <li className="px-2 hover:text-yellow-500 cursor-pointer font-bold">REGION</li>
        <li className="px-2 hover:text-yellow-500 cursor-pointer font-bold">SPORT</li>
        <li className="px-2 hover:text-yellow-500 cursor-pointer font-bold">TOUR & TRAVEL</li>
        <li className="px-2 hover:text-yellow-500 cursor-pointer font-bold">NATIONAL</li>
        <li className="px-2 hover:text-yellow-500 cursor-pointer font-bold">BUSINESS</li>
        <li className="px-2">
          <FaEllipsisH className="text-gray-600 text-lg cursor-pointer hover:text-yellow-500" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
