import React, { useState } from 'react'
import logo from '../assets/slogo.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);
  
    const handleNav = () => {
      setNav(!nav);
    };
  
  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240] mx-auto px-4'>
        <img src={logo} alt="logo" className='w-10 h-10 m-5'/>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Sophie.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Skills</li>
            <li className='p-4'>Works</li>
            <li className='p-4'>Contact</li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#0e1013] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <li className='p-4 border-b border-gray-400'>Home</li>
                <li className='p-4 border-b border-gray-400'>Skills</li>
                <li className='p-4 border-b border-gray-400'>Works</li>
                <li className='p-4 border-b border-gray-400'>Contact</li>
             </ul>
    </div>
  );
};

export default Navbar;