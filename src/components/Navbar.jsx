import React, { useState } from 'react'
import logo from '../assets/slogo.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const navigation = [
  {
    name: 'Home',
    link: '#'
  },
  {
    name: 'Experience',
    link: '#company'
  },
  {
    name: 'Work',
    link: '#works'
  },
  {
    name: 'Contact',
    link: '#contact'
  }
]

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
      setNav(!nav);
    };
  
  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240] mx-auto px-4'>
        <img src={logo} alt="logo" className='w-10 h-10 m-2'/>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] invisible md:visible'>Sophie.</h1>
        <ul className='md:flex md:flex-row hidden' >  
             {navigation.map((nav, index) => (
            <li key={index} className='p-4'>
              <a href={nav.link}>{nav.name}</a>
            </li>
          )
           )}
         </ul>
        <nav onClick={handleNav} className='block cursor-pointer' data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <AiOutlineMenu size={20} onClick={()=> setNav(true)} className='md:hidden' />
        {nav && (
         <ul className='fixed pt-6 top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#0e1013] ease-in-out duration-300' >
             <AiOutlineClose size={20} onClick={()=> setNav(false)} className='inline-flex float-right mr-2'/>
             {navigation.map((nav, index) => (
            <li key={index} className='p-4 border-b border-gray-400'>
              <a href={nav.link}>{nav.name}</a>
            </li>
          )
           )}
         </ul>

        )}
          
        </nav>
    </div>
  );
};

export default Navbar;