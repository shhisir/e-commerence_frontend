import React from 'react'
import { FaCheck } from 'react-icons/fa'

const ProdDetailsInfo = () => {
  return (
    <div className='flex mt-20 w-full justify-center bg-[#F9F8FE]'>
      <div className=' flex flex-col items-center justify-center w-[80%]  py-10'>
        <p className='flex items-center justify-center gap-10 text-[#151875] text-[16px] font-[700]'>
            <span>Description</span>
            <span>Additional Info</span>
            <span>Reviews</span>
            <span>Video</span>
        </p>
        <div className='flex flex-col items-start justify-center w-[80%] gap-4 mx-auto mt-10 text-[14px] font-[700] '>
            <p className='text-[20px] text-[#151875]'>Varius tempor.</p>
            <p className='text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            <p className='text-[20px] text-[#151875]'>More details:</p>
            <ul className='text-[#A9ACC6]'>
                <li className='flex gap-3'><FaCheck className='text-[12px] mt-1' />Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
                <li className='flex gap-3'><FaCheck className='text-[12px] mt-1' />Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
                <li className='flex gap-3'><FaCheck className='text-[12px] mt-1' />Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
                <li className='flex gap-3'><FaCheck className='text-[12px] mt-1' />Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default ProdDetailsInfo