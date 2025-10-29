import React from 'react';
import logoImage from '../../public/logo.png'
import featureHeroImage from "../../public/feature.png";
import  { useState } from "react";
import { NavLink } from 'react-router-dom';
import Container from '../components/Container';
import Flex from '../components/Flex';
import cardImage1 from '../../public/Group1.png'
import cardImage2 from '../../public/Group2.png'
import cardImage3 from '../../public/Group3.png'
import FeatureImage from '../../public/FeatureImage.png'
import FeatureImage2 from '../../public/photoImage2.png'
import FeatureImage3 from '../../public/photoImage3.png'
import FeatureImage4 from '../../public/photoImage4.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse } from 'bootstrap';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Feature = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  let [ AccordionOne,setAccordionOne] = useState(false)
  let [ AccordionTwo,setAccordionTwo] = useState(false)
  let [ AccordionThree,setAccordionThree] = useState(false)
  let [ AccordionFour,setAccordionFour] = useState(false)
  let [ AccordionFive,setAccordionFive] = useState(false)
  
  let handleAccordionOne = (e)=>{
    setAccordionOne(!AccordionOne)
  }
  let handleAccordionTwo = (e)=>{
    setAccordionTwo(!AccordionTwo)
  }
  let handleAccordionThree= (e)=>{
    setAccordionThree(!AccordionThree)
  }
  let handleAccordionFour = (e)=>{
    setAccordionFour(!AccordionFour)
  }
  let handleAccordionFive = (e)=>{
    setAccordionFive(!AccordionFive)
  }
    const finsweet = "Finsweet";
  return (
    <>
{/* Here is here0 section */}
<div className="min-h-screen bg-[#0b0b2b] text-white">
  <Container>
    {/* Navbar */}
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-4 border-b border-[#6c4bf4] bg-[#0b0b2b] z-50">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <img src={logoImage} alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-16 ml-[100px] text-gray-300">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : "hover:text-white"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : "hover:text-white"
            }
          >
            About us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/feature"
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : "hover:text-white"
            }
          >
            Features
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : "hover:text-white"
            }
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : "hover:text-white"
            }
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : "hover:text-white"
            }
          >
           FAQ
          </NavLink>
        </li>
      </ul>

      {/* ✅ Contact Button (Desktop, Pill Shape) */}
      <button
        style={{
          borderRadius: "9999px", // Forces oval shape
        }}
        className="hidden md:inline-block border border-white text-white px-12 py-3 font-medium hover:bg-[#6c4bf4] hover:border-[#6c4bf4] hover:text-white transition-all duration-300"
      >
        Contact us
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-200 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <span className="text-2xl">&times;</span>
        ) : (
          <span className="text-2xl">&#9776;</span>
        )}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-[#1a1a4a] flex flex-col items-center space-y-4 py-6 text-gray-300 z-50 md:hidden">
          <li>
            <NavLink to="/" className="hover:text-white">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-white">
              About us
            </NavLink>
          </li>
          <li>
            <NavLink to="/feature" className="hover:text-white">
              Features
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing" className="hover:text-white">
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" className="hover:text-white">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="hover:text-white">
           FAQ
            </NavLink>
          </li>

          {/* ✅ Contact Button (Mobile, Pill Shape) */}
          <button
            style={{
              borderRadius: "9999px",
            }}
            className="border border-white text-white px-12 py-3 font-medium hover:bg-[#6c4bf4] hover:border-[#6c4bf4] hover:text-white transition-all duration-300"
          >
            Contact us
          </button>
        </ul>
      )}
    </nav>

    {/* Hero Section */}
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-32 gap-10 mt-20">
      {/* Text Section */}
      <div className="max-w-lg space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          All the features <br /> you need
        </h1>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-[#ffcc66] text-black font-semibold px-12 py-3 rounded-full hover:bg-[#ffb800] transition-all duration-300">
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
      {/* Here is the card section */}
   <h1 className="text-5xl text-center font-bold! width-[100px] hover:text-blue-500 hover:text-6xl">The benefits of working <br /> with our team</h1>
      <Container>
 <Flex> 
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-24">
   {/* feature cart--1 */}
        <div className="w-full max-w-[700px] bg-[#F4F6FC] shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl p-10 items-start text-center md:text-left">
          <img src={cardImage1} alt="Feature" className="w-16 h-16 mb-6 mx-auto md:mx-0" />
          <h3 className="text-2xl font-bold mb-4 text-[#0b0b2b]">
            Customize with ease
          </h3>
          <p className="font-semibold text-gray-700 font-poppins text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
        </div>




{/* feature card--2*/}
        <div className="w-full max-w-[700px] bg-[#F4F6FC] shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl p-10 flex flex-col items-start text-center md:text-left">
          <img src={cardImage2} alt="Feature" className="w-16 h-16 mb-6 mx-auto md:mx-0" />
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
          <img src={cardImage3} alt="Feature" className="w-16 h-16 mb-6 mx-auto md:mx-0" />
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

{/* Here is the OUR FEATURE AND FACILITIES WE HAVE section part-1 */}
    <section className='mt-54'>
<Container>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-24 justify-items-center">
      <div className='w-5/6'>
<h1 className='font-semibold text-xl mb-2'>Use Client-first</h1>
<h1 className='font-bold text-4xl'>Top agencies and freelancers around the world use 
Client-first </h1>
<p className='mt-4 text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
      
      </div>
    <div className='w-5/6'>
    <img src={FeatureImage} alt="" />
    </div>
</div>
</Container>
    </section>

{/*  Here is the OUR FEATURE AND FACILITIES WE HAVE section part-2  */}
    <section className='mt-54'>
<Container>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-24 justify-items-center">
 <div className='w-5/6'>
    <img src={FeatureImage2} alt="" />
    </div>

    
      <div className='w-5/6'>
<h1 className='font-semibold text-xl mb-2'>Free Revision Rounds</h1>
<h1 className='font-bold text-4xl'>Get free Revisions and one week of free maintenance</h1>
<p className='mt-4 text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      
      </div>
   
</div>
</Container>
    </section>
    
    {/*  Here is the OUR FEATURE AND FACILITIES WE HAVE section part-3 */}
    <section className='mt-54 '>
<Container>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-24 justify-items-center">

      <div className='w-5/6'>
<h1 className='font-semibold text-xl mb-2'>24/7 Support</h1>
<h1 className='font-bold text-4xl'>Working with us, you will be getting 24/7 priority support</h1>
<p className='mt-4 text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
    <div className='w-5/6'>
    <img src={FeatureImage3} alt="" />
    </div>
</div>
</Container>
    </section>
      {/* Here is the OUR FEATURE AND FACILITIES WE HAVE section part-4 */}
    <section className='mt-54'>
<Container>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-24 justify-items-center">
<div className='w-5/6'>
    <img src={FeatureImage4} alt="" />
    </div>
      <div className='w-5/6'>
<h1 className='font-semibold text-xl mb-2'>Quick Delivery</h1>
<h1 className='font-bold text-4xl'>Guranteed 1 week delivery for standard five pager website</h1>
<p clasName='mt-4 text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
    
</div>
</Container>
    </section>

 <section className='mt-30'>
  <Container>
    <div className='gap-16 flex'>
<div className="w-5/6">
  <h1 className="text-4xl font-extrabold w-[400px]">
    Frequently Asked Questions
  </h1>
  <a
    href="#"
    className="text-2xl text-blue-600 hover:text-blue-800"
    style={{ textDecoration: "none" }}
  >
    Contact us for more info
  </a>
</div>

  
  <div className='w-5/6'>
{/* Accordian one */}
<div className="accordion accordion-flush" id="accordionSingle">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingSingle">
          <button
            className={`accordion-button py-2 px-3 ${
             AccordionOne? "" : "collapsed"
            }`}
            type="button"
            onClick={handleAccordionOne}
            aria-expanded={AccordionOne}
            aria-controls="collapseSingle"
          >
            <span className='text-blue-500 text-2xl mr-4'>01</span>
         How much time does it take ?
          </button>
        </h2>

        {AccordionOne && (
          <div
            id="collapseSingle"
            className="accordion-collapse show"
            aria-labelledby="headingSingle"
          >
            <div className="accordion-body py-2 px-3">
                 Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
            </div>
          </div>
        )}
      </div>
    </div>

{/* Accordian two */}

<div className="accordion accordion-flush" id="accordionSingle">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingSingle">
          <button
            className={`accordion-button py-2 px-3 ${
             AccordionTwo? "" : "collapsed"
            }`}
            type="button"
            onClick={handleAccordionTwo}
            aria-expanded={AccordionTwo}
            aria-controls="collapseSingle"
          >
            <span className='text-blue-500 text-2xl mr-4'>02</span>
        What is your class naming convention ?
          </button>
        </h2>

        { AccordionTwo && (
          <div
            id="collapseSingle"
            className="accordion-collapse show"
            aria-labelledby="headingSingle"
          >
            <div className="accordion-body py-2 px-3">
                 Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
            </div>
          </div>
        )}
      </div>
    </div>

{/* Accordian three */}

<div className="accordion accordion-flush" id="accordionSingle">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingSingle">
          <button
            className={`accordion-button py-2 px-3 ${
             AccordionThree? "" : "collapsed"
            }`}
            type="button"
            onClick={handleAccordionThree}
            aria-expanded={AccordionThree}
            aria-controls="collapseSingle"
          >
            <span className='text-blue-500 text-2xl mr-4'>03</span>
        How do we communicate ?e ?
          </button>
        </h2>

        { AccordionThree && (
          <div
            id="collapseSingle"
            className="accordion-collapse show"
            aria-labelledby="headingSingle"
          >
            <div className="accordion-body py-2 px-3">
                 Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
            </div>
          </div>
        )}
      </div>
    </div>


{/* Accordian four */}

<div className="accordion accordion-flush" id="accordionSingle">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingSingle">
          <button
            className={`accordion-button py-2 px-3 ${
             AccordionFour? "" : "collapsed"
            }`}
            type="button"
            onClick={handleAccordionFour}
            aria-expanded={AccordionFour}
            aria-controls="collapseSingle"
          >
      <span className='text-blue-500 text-2xl mr-4'>04</span>
         I have a bigger project. Can you handel it ?
          </button>
        </h2>

        { AccordionFour && (
          <div
            id="collapseSingle"
            className="accordion-collapse show"
            aria-labelledby="headingSingle"
          >
            <div className="accordion-body py-2 px-3">
                 Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
            </div>
          </div>
        )}
      </div>
    </div>



{/* Accordian five */}

<div className="accordion accordion-flush" id="accordionSingle">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingSingle">
          <button
            className={`accordion-button py-2 px-3 ${
             AccordionFive? "" : "collapsed"
            }`}
            type="button"
            onClick={handleAccordionFive}
            aria-expanded={AccordionFive}
            aria-controls="collapseSingle"
          >
            <span className='text-blue-500 text-2xl mr-4'>05</span>
         How much time does it take ?
          </button>
        </h2>

        { AccordionFive && (
          <div
            id="collapseSingle"
            className="accordion-collapse show"
            aria-labelledby="headingSingle"
          >
            <div className="accordion-body py-2 px-3">
                 Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
            </div>
          </div>
        )}
      </div>
    </div>














  </div>
    </div>
  </Container>
 </section>
 
 {/* <footer className='mt-300'>

 </footer> */}
 <footer className="bg-[#1E1D5E] text-white mt-32">
      <div className="grid md:grid-cols-2 gap-8 px-10 py-16">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">{finsweet}</h2>
          <p className="text-sm mb-6">
            We are always open to discuss your project and improve your online presence.
          </p>

          <div className="bg-[#FAD776] text-[#1E1D5E] p-4 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-fit">
            <div>
              <h3 className="font-semibold">Email me at</h3>
              <p className="text-sm">contact@website.com</p>
            </div>
            <div>
              <h3 className="font-semibold">Call us</h3>
              <p className="text-sm">0927 6277 28525</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Let's Talk!</h2>
          <p className="text-sm mb-6">
            We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.
          </p>
          <div className="flex gap-4 text-2xl">
            <FaFacebook className="cursor-pointer hover:text-[#FAD776]"/>
       <FaXTwitter className="cursor-pointer hover:text-[#FAD776]" />
       <FaSquareInstagram className="cursor-pointer hover:text-[#FAD776]" />
       <FaLinkedin className="cursor-pointer hover:text-[#FAD776]"/>
           
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-white text-[#1E1D5E] flex flex-col md:flex-row justify-between items-center px-10 py-4 text-sm">
        <p>Copyright 2025, Finsweet.com</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="hover:text-[#FAD776] no-underline text-xl font-extrabold">Home</a>
          <a href="#" className="hover:text-[#FAD776] no-underlinetext-xl font-extrabold">About us</a>
          <a href="#" className="hover:text-[#FAD776] no-underlinetext-xl font-extrabold">Features</a>
          <a href="#" className="hover:text-[#FAD776] no-underlinetext-xl font-extrabold">Pricing</a>
          <a href="#" className="hover:text-[#FAD776] no-underlinetext-xl font-extrabold">FAQ</a>
          <a href="#" className="hover:text-[#FAD776] no-underlinetext-xl font-extrabold">Blog</a>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Feature;
