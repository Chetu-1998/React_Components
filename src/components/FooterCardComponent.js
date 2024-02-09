import React from 'react'

const FooterCardComponent = () => {
  return (
    <div className='pt-10 bg-black shadow h-72 w-6/12 mx-auto my-10 flex items-start justify-evenly'>
        <div>
        <h6 className='text-amber-400 font-bold mt-5'>SERVICES</h6>
        <div className='mt-5'><a href="#" className='text-white hover:underline'>Branding</a></div>
        <div className='mt-1'><a href="#" className='text-white hover:underline'>Design</a></div>
        <div className='mt-1'><a href="#" className='text-white hover:underline'>Marketing</a></div>
        <div className='mt-1'><a href="#" className='text-white hover:underline'>Advertisement</a></div>
        </div>
        <div>
        <h6 className='text-amber-400 font-bold mt-5'>COMPANY</h6>
        <div className='mt-5'><a href="#" className='text-white hover:underline'>About us</a></div>
        <div className='mt-1'><a href="#" className='text-white hover:underline'>Contact</a></div>
        <div className='mt-1'><a href="#" className='text-white hover:underline'>Jobs</a></div>
        <div className='mt-1'><a href="#" className='text-white hover:underline'>Press kit</a></div>
        </div>
        <div>
        <h6 className='text-amber-400 font-bold mt-5'>LEGAL</h6>
        <div className='mt-5'><a href="#" className='text-white hover:underline'>Terms of use</a></div>
        <div className='mt-1'><a href="#" className='text-white hover:underline'>Privacy policy</a></div>
        <div className='mt-1'><a href="#" className='text-white hover:underline'>Cookie policy</a></div>
        </div>
    </div>
  )
}

export default FooterCardComponent
