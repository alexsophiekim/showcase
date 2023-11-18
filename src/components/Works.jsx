import React from 'react'
// import { data } from '../constants';
import uxpip from '../assets/uxpip.jpg';
import modalpip from '../assets/modalpip.mov';
import extendablepip from '../assets/extendablepip.mov';

import pipcover from '../assets/pipcover.jpg';

const Works = () => {
  return (
    <div className='w-full bg-[#232931] text-white lg:p-[4rem] md:p-[2rem] sm:p-[1rem]' id='works'>
      <h1 className='text-center text-4xl py-[2rem] uppercase font-bold text-[#00df9a]'>Latest UX case study</h1>
      <img src={pipcover} alt="PIP-UX" className='lg:px-[10rem] md:px-[4rem] sm:px-[1rem]'/>
       <img src={uxpip} alt="PIP-UX" className='lg:px-[10rem] h-100 md:px-[4rem] sm:px-[1rem]'/>
      <h3 className='text-center mt-5'>A/B text</h3>
       <div  className='flex flex-col justify-center items-center gap-10 py-2 lg:px-[10rem] md:px-[4rem] sm:px-[1rem] md:flex-row'>
          <video controls autoPlay loop muted width="250" height="100%">
              <source src={modalpip} type="video/mp4"></source>
            </video>
            <video controls autoPlay loop muted width="250" height="100%">
              <source src={extendablepip} type="video/mp4"></source>
            </video>
       </div>

    </div>
  )
}

export default Works
