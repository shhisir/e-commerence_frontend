import React from 'react'

const HeroNav = () => {
  return (
    <div className='w-full h-[255px] bg-[#F6F5FF] '>
        <div className='w-full h-full  flex flex-col justify-center ml-[274px]'>
            <p className='text-[36px] font-[700] text-[#101750]'>Shop Grid Default</p>
            <div className='flex gap-1'>

            <p>
                Home 
            </p>

            <p>
                Pages
            </p>

            <p className='text-[#FB2E86]'>
                Shop
            </p>
            </div>
        </div>
    </div>
  )
}

export default HeroNav