import React from 'react';
import { data } from '../constants';

const CompanyCard = ({ companies: {imgUrl, homepage, title, subtitle } }) => (
  <a href={homepage} target="_blank">  
    <div className='w-full shadow-xl bg-[#38424f] flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
      <img className='w-20 h-[80px] mx-auto mt-[-3rem] bg-slate-600 border b-slate-100' src={imgUrl} alt="/" />
      <h2 className='text-2xl font-semibold text-center py-4'>{title}</h2>
      <div className='text-center'>
          <p className='pb-2 pt-5 mx-2 border-t '>{subtitle}</p>
      </div>
    </div>
  </a>

)

const Company = () => {
  return (
    <div className='w-full py-[6rem] px-4 bg-[#232931] text-white'>
       <h1 className='text-center text-4xl mb-[8rem] uppercase font-bold text-[#00df9a]'>Worked with</h1>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
        {data.companies.map((companies) => <CompanyCard companies={companies} key={companies.title} />)}
      </div>
    </div>
  );
};

export default Company