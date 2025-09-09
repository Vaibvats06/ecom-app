import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border items-center border-gray-400'>
      <div className=' flex flex-col w-full sm:w-1/2 items-center justify-center py-15 sm:p-0'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='bg-[#414141] w-8  md:w-11 h-[2px]'></p>
            <p className='font-semibold text-sm md:text-base'>OUR BESTSELLERS</p></div>
          <h1 className='text-3xl leading-relaxed sm:py-3 lg:text-5xl'>Latest Arrivals</h1>
          <div className='flex items-center gap-2'>
          <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
          <p className='bg-[#414141] w-8  md:w-11 h-[2px]'></p>
          </div>
        </div>
      </div>
      <div className='w-full  sm:w-1/2'>
        <img src={assets.hero_img} alt="" />
      </div>
    </div>
  )
}

export default Hero