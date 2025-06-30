import React from 'react'
import service1 from '/images/service1.png'
import service2 from '/images/service2.png'
import service3 from '/images/service3.png'
import service4 from '/images/service4.png'
const Offer = () => {
    const offerData = [
        {
        title:"24/7 Support",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
        image: service1
        },
        {
        title:"24/7 Support",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
        image: service2
        },
        {
        title:"24/7 Support",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
        image: service3
        },
        {
        title:"24/7 Support",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
        image: service4
        }

    ]
  return (
    <div className='flex flex-col justify-center text-center items-center mt-20 w-full h-[500px]'>
      <p className='text-[42px] text-[#151875] font-[700]'>What Shopex Offer!</p>
      <div className='flex  justify-center items-center gap-5 w-[80%] h-[400px] '>
      { offerData.map((offer,index)=>(
 <div className='flex flex-col items-center justify-center gap-5 w-[200px] h-[280px]  shadow-sm  p-3' key={index}>
        <img src={offer.image} alt="service" className=' object-cover' />
        <p className='text-[22px] text-[#151875] font-[700]'>{offer.title}</p>
        <p className='text-[14px] text-[#1A0B5B4D] font-[400]'>{offer.description}</p>
      </div>
      ))    
    }
    </div>
      
    </div>
  )
}

export default Offer