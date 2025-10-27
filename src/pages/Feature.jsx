import React from 'react';
import logoImage from '../../public/logo.png'
import featureHeroImage from "../../public/feature.png";
import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

const Feature = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0b2b] text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-4 border-b border-[#6c4bf4] relative">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-[#6c4bf4]">
            </span><img src={logoImage} alt="" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-16  ml-100 text-gray-300">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">About us</li>
         <NavLink to="/"> <li className="hover:text-white cursor-pointer">Features</li></NavLink>
          <li className="hover:text-white cursor-pointer">Pricing</li>
          <li className="hover:text-white cursor-pointer">FAQ</li>
          <li className="hover:text-white cursor-pointer">Blog</li>
        </ul>

        {/* Contact Button */}
        <button className="hidden md:block border border-gray-100 rounded-full px-6 py-2 hover:bg-[#6c4bf4] hover:border-[#6c4bf4] transition">
          Contact us
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <span className="text-2xl">&times;</span> // Close icon
          ) : (
            <span className="text-2xl">&#9776;</span> // Hamburger icon
          )}
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-[#1a1a4a] flex flex-col items-center space-y-4 py-6 text-gray-300 z-50 md:hidden">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About us</li>
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <button className="border border-gray-100 rounded-full px-6 py-2 hover:bg-[#6c4bf4] hover:border-[#6c4bf4] transition">
              Contact us
            </button>
          </ul>
        )}
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 gap-10">
        {/* Text Section */}
        <div className="max-w-lg space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            All the features <br /> you need
          </h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-[#ffcc66] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#ffb800] transition">
            View Pricing
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[450px] flex justify-center">
          <img
            src={featureHeroImage}
            alt="Feature Hero"
            className="w-[80%] md:w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
