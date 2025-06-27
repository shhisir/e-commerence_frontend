import React from 'react'
import { GoDotFill } from 'react-icons/go'

const Unique = () => {
  return (
    <div className='flex items-center justify-center w-full  bg-[#F1F0FF]'>
        <div className='flex items-center justify-center '>
            <img src="images/unique.png" alt="unique sofa" className='w-[420px] h-[420px] object-cover' />
            <div className='flex flex-col items-start justify-center gap-5 w-[450px]  p-5'>
                <p className='text-[28px] font-[700] text-[#151875] py-1'>Unique Features Of leatest & Trending Poducts</p>
                <p className=' flex flex-col text-[14px] font-[500] text-[#ACABC3]'>
                    <span className='flex  gap-3'><GoDotFill className='mt-1 text-[15px] text-[#F52B70]' />All frames constructed with hardwood solids and laminates</span>
                    <span className='flex  gap-3'><GoDotFill className=' text-[25px] text-[#2B2BF5]'/>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</span>
                    <span className='flex  gap-3'><GoDotFill className='mt-1 text-[15px] text-[#2BF5CC]'/> Arms, backs and seats are structurally reinforced</span>
                </p>
    
            <div className='flex gap-5'>
                <button className='w-[150px] bg-[#FB2E86] text-white text-[14px] font-[700] rounded-[2px]'>Add to cart</button>
                <p className='flex flex-col'>
                    <span className='text-[#151875] text-[14px] font-[700]'>B&B Italian Sofa </span>
                    <span className='text-[#151875] text-[14px] font-[500]'>$32.00</span>
                </p>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Unique