import React from 'react'
// import { data } from '../constants';
import pipux from '../assets/pipux.jpg';

const Works = () => {
  return (
    <div className='w-full bg-[#232931] text-white px-[6rem]'>
      <h1 className='text-center text-4xl py-[2rem] uppercase font-bold text-[#00df9a]'>Latest UX case study</h1>
       <img src={pipux} alt="PIP-UX" />
    </div>
  )
}

export default Works
