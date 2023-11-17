import React from 'react'
// import { data } from '../constants';
import uxpip from '../assets/uxpip.jpg';
import pipcover from '../assets/pipcover.jpg';

const Works = () => {
  return (
    <div className='w-full bg-[#232931] text-white lg:p-[4rem] md:p-[2rem] sm:p-[1rem]' id='works'>
      <h1 className='text-center text-4xl py-[2rem] uppercase font-bold text-[#00df9a]'>Latest UX case study</h1>
      <img src={pipcover} alt="PIP-UX" className='lg:px-[10rem] md:px-[4rem] sm:px-[1rem]'/>
       <img src={uxpip} alt="PIP-UX" className='lg:px-[10rem] h-100 md:px-[4rem] sm:px-[1rem]'/>
    </div>
  )
}

export default Works
