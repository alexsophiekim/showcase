import React from 'react'
import Works from "./Works";
import { data } from '../constants';
import subpro from '../assets/subpro.png'
import caucus from '../assets/caucus.jpg'
import beat from '../assets/beat.gif'
import taco from '../assets/taco.png'
import tacom from '../assets/tacoM.png'
import stamp from '../assets/stamp.png'
import sticker from '../assets/sticker.png'
import stander from '../assets/stander.png'
import cora from '../assets/cora.gif'
import pitapitReceipt from '../assets/pitapitReceipt.png'
import oportoReceipt from '../assets/oportoReceipt.png'
import mobistader from '../assets/mobistander.jpg'
import ux from '../assets/UX.png'
import magr from '../assets/MaGr.png'
import digital from '../assets/digital.png'
import storefront from '../assets/Storefronts.png'
import etc from '../assets/ETC.png'


// const ProjectCard = ({ works: {imgUrl, title, subtitle } }) => (
//     <a href='#works' target="_self">  
//       <div className='w-full shadow-xl bg-[#38424f] flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
//         <img className='w-20 h-[80px] mx-auto mt-[-3rem] bg-slate-600 border b-slate-100' src={imgUrl} alt="/" />
//         <h2 className='text-2xl font-semibold text-center py-4'>{title}</h2>
//         <div className='text-center'>
//             <p className='pb-2 pt-5 mx-2 border-t '>{subtitle}</p>
//         </div>
//       </div>
//     </a>
//   )


const Projects = () => {
  return (

    <main id='projects' className='bg-[#232931] p-10'>
          <div className='flex justify-evenly flex-col w-full py-[6rem] px-4 bg-[#232931] text-white'>
                <h1 className='text-center text-4xl uppercase font-bold text-[#00df9a]'>Projects</h1>
        </div>
        <section className='grid grid-cols-3 gap-x-2 gap-y-2 lg:gap-x-5 lg:gap-y-5 grid-flow-row-dense w-[90%] lg:w-[70%] mx-auto'>
            <div className='bg-white rounded-xl shadow-xl col-span-2 row-span-2' >
                <a href='#sub' target="blank"> 
                    <img className='w-100 h-100 cover' src={ux} alt="" />
                </a>
            </div>
            <div className='bg-white rounded-xl shadow-xl row-span-2' >
                <img className='w-100 h-100 bg-cover' src={magr} alt="" />
            </div> 
            <div className='bg-white rounded-xl shadow-xl row-span-2' >
                <img className='w-100 h-100 bg-cover' src={digital} alt="" />
            </div>
            <div className='bg-white rounded-xl shadow-xl col-span-2' >
                <img className='w-100 h-100 cover' src={storefront} alt="" />
            </div>
            <div className='bg-white rounded-xl shadow-xl col-span-2' >
                <img className='w-100 h-100 cover' src={etc} alt="" />
            </div>
            
        </section>
    </main>
  )
}

export default Projects