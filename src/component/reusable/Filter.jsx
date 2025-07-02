import React from 'react'
import { FcViewDetails } from 'react-icons/fc'
import { MdGridView } from 'react-icons/md'
import { TfiViewListAlt } from 'react-icons/tfi'

const FilterBar = () => {
  return (
    <div className='w-full flex justify-center'>

    <div className='flex justify-between w-[75%]'>
        <div>
            <p className='text-[22px] font-[700] text-[#151875] '>Ecommerce Acceories & Fashion item</p>
            <p className='text-sm text-[#8A8FB9]'>About 9,620 results (0.62 seconds)</p>
        </div>
        <div className='flex gap-5'>

        <div className='flex items-center gap-[1px]'>
            <p className='text-[#0f1b50] text-base '>Per Page :</p>
            <input type="text" className=' border-[1px] border-[#E7E6EF] outline-[#221f49] outline-offset-1 w-[55px]'/>
        </div>
        <div className='flex items-center'>
            <p className='text-[#0f1b50] text-base '>Per Page :</p>
            <input type="text" className=' border-[1px] border-[#E7E6EF] outline-[#221f49] outline-offset-1 w-[96px]'/>
        </div>
        <div className='flex items-center'>
            

            <p className='text-[#0f1b50] text-base flex items-center'><span>View : </span> <MdGridView className='text-[#151875] text-[14px] align-bottom' /> <TfiViewListAlt className='text-[#151875] text-[12px] align-bottom'/> </p>
            
            
            



            <input type="text" className=' border-[1px] border-[#E7E6EF] outline-[#221f49] outline-offset-1 w-[110px] ml-3'/>
        </div>
        </div>
    </div>
    </div>
  )
}

export default FilterBar