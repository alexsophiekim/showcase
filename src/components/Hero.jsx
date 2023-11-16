import React from 'react';
import Typed from 'react-typed';
import { FiSmile } from "react-icons/fi";

const Hero = () => {

    const onButtonClick = () => {
        const pdfUrl = "https://dl.dropboxusercontent.com/s/mh7bdo996o7he0r/Copy%20of%20Sophie%20kim.pdf?dl=0";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "sophiekim.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
      <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
       
          <p className='text-[#00df9a] font-bold p-4'>
            Craft meaningful interactions in the digital space
          </p>
          <span className='center font-bold text-[#00df9a] text-3xl'>-</span>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:pt-6 pb-2'>
            Sophie Kim
          </h1>
          <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-1'>
              is
            </p>
            <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
              strings={['Digital Designer', 'UI/UX Designer', 'FE Developer']}
              typeSpeed={120}
              backSpeed={80}
              loop
            />
          </div>
          <p className='md:text-2xl text-xl text-gray-400 py-6'>
            

          Versatile UI/UX designer and FE developer building intuitive digital solutions for optimal user experiences. </p>
         
          <button className='bg-[#76d7b8] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[#00df9a]' onClick={onButtonClick} >Download CV</button>
          
        </div>
      </div>
    );
  };
  
  export default Hero;