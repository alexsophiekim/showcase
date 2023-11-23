import React from 'react';
import Typed from 'react-typed';

const Hero = () => {

    const onButtonClick = () => {
        const pdfUrl = "https://dl.dropboxusercontent.com/s/mh7bdo996o7he0r/Copy%20of%20Sophie%20kim.pdf?dl=0";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "sophiekim.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
      <div className='text-white'>
        <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
       
          <p className='text-[#00df9a] px-10 py-4'>
            Craft meaningful interactions in the digital space
          </p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:pt-6 pb-2'>
            Sophie Kim
          </h1>
          <div className='flex justify-center items-center'>
           
            <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
              strings={['Digital Designer', 'UI/UX Designer', 'FE Developer']}
              typeSpeed={120}
              backSpeed={80}
              loop
            />
          </div>
          <p className='md:text-2xl text-md text-gray-400 py-6 mx-2'>
            
          Versatile UI/UX designer and Front-End developer building intuitive digital solutions for optimal user experiences. </p>
         
          <button className='bg-[#76d7b8] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[#00df9a]' onClick={onButtonClick} >Download CV</button>
          
        </div>
      </div>
    );
  };
  
  export default Hero;