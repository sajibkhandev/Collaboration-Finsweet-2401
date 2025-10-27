import React from 'react';
import logoImage from '../../public/logo.png'
import featureHeroImage from "../../public/feature.png";
import  { useState } from "react";
import { NavLink } from 'react-router-dom';
import Container from '../components/Container';
import cardImage from '../../public/Group1.png'
import Flex from '../components/Flex';
const Feature = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
{/* Here is here section */}
<div className="min-h-screen bg-[#0b0b2b] text-white">
<Container>
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
         <NavLink to="/feature"> <li className="hover:text-white cursor-pointer">Features</li></NavLink>
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
</Container>
    </div>

    <section className='mt-24'>
   <h1 className="text-5xl text-center font-bold! width-[100px]">The benefits of working <br /> with our team</h1>
      <Container>
 <Flex> 
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-24">
   {/* feature cart--1 */}
        <div className="w-full max-w-[500px] bg-[#F4F6FC] shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl p-10 items-start text-center md:text-left">
          <img src={cardImage} alt="Feature" className="w-16 h-16 mb-6 mx-auto md:mx-0" />
          <h3 className="text-2xl font-bold mb-4 text-[#0b0b2b]">
            Customize with ease
          </h3>
          <p className="font-semibold text-gray-700 font-poppins text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
        </div>




{/* feature card--2*/}
        <div className="w-full max-w-[500px] bg-[#F4F6FC] shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl p-10 flex flex-col items-start text-center md:text-left">
          <img src={cardImage} alt="Feature" className="w-16 h-16 mb-6 mx-auto md:mx-0" />
          <h3 className="text-2xl font-bold mb-4 text-[#0b0b2b]">
            Customize with ease
          </h3>
          <p className="font-semibold text-gray-700 font-poppins text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
        </div>






{/* feature card--1 */}
        <div className="md:w-full max-w-[600px] bg-[#F4F6FC] shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl p-10 flex flex-col items-start text-center md:text-left">
          <img src={cardImage} alt="Feature" className="w-16 h-16 mb-6 mx-auto md:mx-0" />
          <h3 className="text-2xl font-bold mb-4 text-[#0b0b2b]">
            Customize with ease
          </h3>
          <p className="font-semibold text-gray-700 font-poppins text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
        </div>

   </div>
  
  
  </Flex>
      </Container>
    </section>
    </>
  );
};

export default Feature;
