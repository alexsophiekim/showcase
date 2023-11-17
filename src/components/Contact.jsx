import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#232931] flex justify-center items-center p-4' id='contact'>
        <form action="https://formsubmit.co/alexsophiekim@gmail.com" method="POST" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <h1 className='text-center text-4xl py-[2rem] uppercase font-bold text-[#00df9a]'>Contact</h1>
                <p className='text-gray-300 text-center py-4'>Tell me more about your ideas. Drop an email to alexsophiekim@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='bg-[#76d7b8] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[#00df9a]' >Work Together</button>
        </form>
    </div>
  )
}

export default Contact
