import React from 'react'
import { CiHeart, CiShoppingCart } from 'react-icons/ci'
import { LiaSearchPlusSolid } from 'react-icons/lia'

function LatestProductCard({img,name,price}) {
  return (
   
      <div className='flex flex-col gap-[10px] p-2  w-[313px]  h-[225px]  hover:shadow-xl group relative  '>
        <div className="hidden  absolute bottom-[40px] left-[14px]  flex-col gap-[1px]  group-hover:flex">
                  <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full  text-[16px] text-[#1389FF] hover:text-[#2F1AC4]  hover:bg-[#EEEFFB90]">
                    <CiShoppingCart  />
                  </div>
                  <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full text-[16px] text-[#1389FF] hover:text-[#2F1AC4]  hover:bg-[#EEEFFB90]">
                    <CiHeart />
                  </div>
                  <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full text-[16px] text-[#1389FF] hover:text-[#2F1AC4]  hover:bg-[#EEEFFB90]">
                    <LiaSearchPlusSolid />
                  </div>
            </div>
        <div className='flex justify-center  items-center  w-full h-[180px]'>
          <img className='p-[50px] w-[220px] h-[220px] object-cover transition-transform dursation-3000 group-hover:scale-90' src={img} alt='Product' />

        </div>
          <div className='flex justify-between items-center'>
            <p className='font-[500] text-[14px] text-[#151875] underline decoration-[#EEEFFB] decoration-2 underline-offset-4 '>{name} </p>
            <p className='font-[500] text-[14px] text-[#151875]'>{price}</p>
          </div>
        </div>
    
      

  )
}

export default LatestProductCard