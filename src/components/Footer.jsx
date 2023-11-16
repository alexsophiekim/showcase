import React from 'react';
import {
  FaBehanceSquare,
  FaDribbbleSquare,
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Sophie.</h1>
        <p className='py-4'>I have had the privilege of working on diverse projects, from conceptualization to execution. My design philosophy revolves around not just meeting but exceeding user expectations, blending innovation with practicality.</p>
      </div>
      <div className='lg:col-span-2 flex justify-end mt-6 sm:justify-center'>
   
        <div className='flex justify-end items-center md:w-[75%] my-6'>
            <a href="https://www.behance.net/alexsophiekim">
                <FaBehanceSquare size={30} />
            </a>
            <a href="https://www.instagram.com/basednz/">
                <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com/in/sophie-k-902622177/">
                <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/alexsophiekim">
                <FaGithubSquare size={30} />
            </a>
            <a href="https://dribbble.com/alexsophiekim">
                <FaDribbbleSquare size={30} />
            </a>
        </div>
   
      </div>
    </div>
  );
};

export default Footer;