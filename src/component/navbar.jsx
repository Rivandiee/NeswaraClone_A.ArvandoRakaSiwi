import React, { useState } from "react";
import { FaSearch, FaUserCircle, FaEllipsisH, FaBars, FaTimes } from "react-icons/fa";
import myImage from "../assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full bg-white shadow-md px-6 py-1 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-10">
        {/* Logo */}
        <div className="flex items-center">
          <img src={myImage} alt="Neswara Logo" className="h-14 md:h-20 mr-4" />
        </div>

        {/* Menu Button (Mobile) */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes className="text-2xl text-gray-600" /> : <FaBars className="text-2xl text-gray-600" />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:flex space-x-7 font-semibold text-black 
          ${isOpen ? "block" : "hidden"} md:flex md:items-center md:space-x-7 sh  adow-md md:shadow-none md:bg-transparent p-4 md:p-0 z-50`}
        >
          <li className="hover:text-yellow-500 cursor-pointer font-bold">LIFESTYLE</li>
          <li className="hover:text-yellow-500 cursor-pointer font-bold">EDUCATION</li>
          <li className="hover:text-yellow-500 cursor-pointer font-bold">REGION</li>
          <li className="hover:text-yellow-500 cursor-pointer font-bold">SPORT</li>
          <li className="hover:text-yellow-500 cursor-pointer font-bold">TOUR & TRAVEL</li>
          <li className="hover:text-yellow-500 cursor-pointer font-bold">NATIONAL</li>
          <li className="hover:text-yellow-500 cursor-pointer font-bold">BUSINESS</li>
          <li>
            <FaEllipsisH className="text-gray-600 text-lg cursor-pointer hover:text-yellow-500" />
          </li>
        </ul>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <FaUserCircle className="text-gray-600 text-2xl cursor-pointer hover:text-yellow-500" />
          <FaSearch className="text-gray-600 text-lg cursor-pointer hover:text-yellow-500" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
