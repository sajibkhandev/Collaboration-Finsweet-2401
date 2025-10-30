
import React from "react";
import Image from "../components/Image";
import About1 from '../assets/about1.png'
import About2 from '../assets/about2.png'
import About3 from '../assets/about3.png'
import About4 from '../assets/about4.png'
import About5 from '../assets/about5.png'

const About = () => {
  return (
    <div className="about-page font-sans text-gray-800">
      {/* ✅ Section 1: Intro - Two Columns */}
      <section className="bg-white py-16 px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text Side */}
        {/* Who we are */}
       
        <div>
           <h5 className="text-2xl font-semibold">About us</h5>
          <h1 className="text-5xl font-bold mb-4">Our designs solve <br /> problems</h1>
          <p className="text-lg mb-6">
            We create thoughtful, user-focused designs that combine creativity and
            technology to deliver better results for businesses and users.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
           </div>
        <div>
          <Image className='w-full'src={About1}/>
        </div>
      </section>
      {/* ✅ Section 2: Two Paragraphs + Image Below */}
<section className="bg-gray-50 py-18 px-10 max-w-6xl mx-auto text-center">
  {/* Paragraph 1 */}
    <h6 className="text-xl text-left"> Who we are </h6>
  <flex className='flex gap-10'>
    

     <div className="mb-10">
    <h3 className="text-2xl font-semibold mb-3">Goal focussed</h3>
    <p className="text-gray-700">
      We bring innovation to life through clear design strategies that help
      brands stand out. Our creative approach ensures that each project
      communicates your message effectively and beautifully.
    </p>
  </div>

  {/* Paragraph 2 */}
  <div className="mb-10">
    <h3 className="text-2xl font-semibold mb-3">Continuous improvement</h3>
    <p className="text-gray-700">
      Every project begins with careful planning to ensure success from the
      very first step. We analyze goals, study users, and create a solid
      roadmap that leads to excellent results.
    </p>
  </div>

  </flex>
  {/* Image Under Both Paragraphs */}
  <div>
    <Image className='w-full'src={About2}/>
  </div>
</section>

{/* ✅ Section 3: Inspire, Innovate, Share (4 Paragraphs) */}
<section className="bg-white py-18 px-10 max-w-6xl mx-auto text-center ">
<div className="mb-15 text-3xl font-bold ">
    <h2>The process we follow</h2>
</div>

  <div className="grid md:grid-cols-4 gap-8 text-gray-700 ">
    {/* Paragraph 1 */}
    <div>
      <h3 className="font-semibold text-xl mb-3">Planning</h3>
      <p>
        We turn challenges into opportunities by bringing fresh ideas and creative solutions to life.
      </p>
    </div>

    {/* Paragraph 2 */}
    <div>
      <h3 className="font-semibold text-xl mb-3">Conception</h3>
      <p>
        Collaboration drives our success. We believe every idea becomes stronger through teamwork.
      </p>
    </div>

    {/* Paragraph 3 */}
    <div>
      <h3 className="font-semibold text-xl mb-3">Design</h3>
      <p>
        We seek inspiration in every detail, using imagination to craft meaningful and lasting designs.
      </p>
    </div>

    {/* Paragraph 4 */}
    <div>
      <h3 className="font-semibold text-xl mb-3">Development</h3>
      <p>
        Our goal is constant improvement — learning, adapting, and evolving with every project.
      </p>
    </div>
  </div>
</section>

{/* ✅ Section: Our Mission & Vision */}
<section className="bg-gray-50 py-16 px-8 max-w-6xl mx-auto">
  {/* Row 1: Our Mission */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
    {/* Text */}
    <div>
      <p className="text-sm uppercase text-gray-500 mb-2">Our Mission</p>
      <h2 className="text-3xl font-bold mb-4">Inspire, Innovate, Share</h2>
      <p className="text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>

    {/* Image */}
    <div>
       <Image className='w-full'src={About3}/>
    </div>
  </div>

  {/* Row 2: Our Vision */}
  <div className="grid md:grid-cols-2 gap-10 items-center">
    {/* Image */}
    <div>
      <Image className='w-full'src={About4}/>
    </div>

    {/* Text */}
    <div>
      <p className="text-sm uppercase text-gray-500 mb-2">Our Vision</p>
      <h2 className="text-3xl font-bold mb-4">Laser Focus</h2>
      <p className="text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  </div>
</section>
{/* ✅ Section: The Benefits of Working With Us */}
<section className="bg-white py-20 px-8 max-w-6xl mx-auto text-center">
  {/* Heading */}
  <h2 className="text-3xl font-bold mb-12">
    The benefits of working <br /> with us
  </h2>

  {/* 3 Benefit Cards */}
  <div className="grid md:grid-cols-3 gap-8 mb-12">
    {/* Card 1 */}
    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
      <div className="text-indigo-600 text-4xl mb-4">🧩</div>
      <h3 className="font-semibold text-xl mb-2">Customize with ease</h3>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
      <div className="text-indigo-600 text-4xl mb-4">⚙️</div>
      <h3 className="font-semibold text-xl mb-2">Perfectly Responsive</h3>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
      <div className="text-indigo-600 text-4xl mb-4">💬</div>
      <h3 className="font-semibold text-xl mb-2">Friendly Support</h3>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>

  {/* Brand Logos + User Count */}
  <div className="flex flex-col md:flex-row justify-between items-center border-t pt-8 text-gray-600">
    <div className="mb-6 md:mb-0">
      <h3 className="text-2xl font-bold text-black">100,000+</h3>
      <p>FinSweet Users</p>
    </div>

    {/* Logos */}
    <div className="flex flex-wrap justify-center gap-6">
      <Image src={About5}/>

       <Image src={About5}/>
    
      <Image src={About5}/>
     
      <Image src={About5}/>
     
      <Image src={About5}/>
   
    </div>
  </div>
</section>
      {/* ✅ Section 5: Meet Our Team */}
      <section className="bg-white py-16 px-8 text-center">
        <h2 className="text-2xl font-bold mb-10">Meet our team</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "John Doe",
              role: "CEO",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Sarah Lee",
              role: "Designer",
              img: "https://randomuser.me/api/portraits/women/45.jpg",
            },
            {
              name: "Michael Kim",
              role: "Developer",
              img: "https://randomuser.me/api/portraits/men/65.jpg",
            },
            {
              name: "Emily White",
              role: "Project Manager",
              img: "https://randomuser.me/api/portraits/women/12.jpg",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;





