import React from 'react'

const Hero = () => {
  return (
    <div className='w-full bg-[#F2F0FF] px-[54px] flex items-center justify-end py-[35px] relative'>
        <div className='absolute w-[387px] aspect-square top-2 left-[50px]'>
            <img src="/public/images/light.png" alt="lamp pic" className='w-full h-full'  />
        </div>

        <div className='w-[550px] flex flex-col gap-3'>
            <p className='text-[#FB2E86] text-base leading-[28px] font-[700]'>Best Furniture For Your Castle....</p>
            <p className='text-[54px] font-[700] leading-[132%] tracking-[2%]'>New Furniture Collection Trends in 2020</p>
            <p className='text-base font-[700] leading-[28px] text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
            <button className='primary-btn mt-[15px]'>Shop Now</button>

        </div>

        <div className='w-[550px] h-[566px]'>
            <img src="/public/images/sofa.png" alt="sofa pic"  className='object-contain w-full h-full'/>
        </div>
    </div>
  )
}

export default Hero