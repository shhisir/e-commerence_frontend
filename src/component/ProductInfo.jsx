import React, { useState } from 'react';
import { Check, ShoppingCart, CreditCard } from 'lucide-react';

const ProdDetailsInfo = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('Description');

  const tabs = ['Description', 'Additional Info', 'Reviews', 'Video'];

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) to cart!`);
  };

  const handleBuyNow = () => {
    alert(`Proceeding to checkout with ${quantity} item(s)!`);
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div className='flex mt-20 w-full justify-center bg-[#F9F8FE]'>
      <div className='flex flex-col items-center justify-center w-[80%] py-10'>
        {/* Tab Navigation */}
        <div className='flex items-center justify-center gap-10 text-[#151875] text-[16px] font-[700] mb-8'>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 transition-colors duration-200 ${
                activeTab === tab 
                  ? 'border-b-2 border-[#151875] text-[#151875]' 
                  : 'text-[#A9ACC6] hover:text-[#151875]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className='flex flex-col items-start justify-center w-[80%] gap-4 mx-auto text-[14px] font-[700]'>
          <h3 className='text-[20px] text-[#151875]'>Varius tempor.</h3>
          
          <p className='text-[#A9ACC6] leading-relaxed'>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
          </p>
          
          <h4 className='text-[20px] text-[#151875] mt-6'>More details:</h4>
          
          <ul className='text-[#A9ACC6] space-y-3'>
            <li className='flex gap-3 items-start'>
              <Check className='text-green-500 text-[12px] mt-1 flex-shrink-0' />
              <span>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.</span>
            </li>
            <li className='flex gap-3 items-start'>
              <Check className='text-green-500 text-[12px] mt-1 flex-shrink-0' />
              <span>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.</span>
            </li>
            <li className='flex gap-3 items-start'>
              <Check className='text-green-500 text-[12px] mt-1 flex-shrink-0' />
              <span>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.</span>
            </li>
            <li className='flex gap-3 items-start'>
              <Check className='text-green-500 text-[12px] mt-1 flex-shrink-0' />
              <span>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.</span>
            </li>
          </ul>

          {/* Purchase Section */}
          <div className='w-full mt-8 p-6 bg-white rounded-lg shadow-sm border'>
            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
              {/* Quantity Selector */}
              <div className='flex items-center gap-3'>
                <span className='text-[#151875] font-semibold'>Quantity:</span>
                <div className='flex items-center border rounded-md'>
                  <button
                    onClick={decreaseQuantity}
                    className='px-3 py-2 text-[#151875] hover:bg-gray-100 transition-colors'
                  >
                    -
                  </button>
                  <span className='px-4 py-2 border-x text-[#151875] font-semibold'>
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQuantity}
                    className='px-3 py-2 text-[#151875] hover:bg-gray-100 transition-colors'
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className='flex gap-3 flex-wrap'>
                <button
                  onClick={handleAddToCart}
                  className='flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#151875] text-[#151875] rounded-md hover:bg-[#151875] hover:text-white transition-all duration-300 font-semibold'
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
                
                <button
                  onClick={handleBuyNow}
                  className='flex items-center gap-2 px-6 py-3 bg-[#151875] text-white rounded-md hover:bg-[#2a2154] transition-all duration-300 font-semibold shadow-md'
                >
                  <CreditCard size={16} />
                  Buy Now
                </button>
              </div>
            </div>

            {/* Price Display */}
            <div className='mt-4 pt-4 border-t'>
              <div className='flex items-center gap-4'>
                <span className='text-2xl font-bold text-[#151875]'>$29.99</span>
                <span className='text-sm text-[#A9ACC6] line-through'>$39.99</span>
                <span className='text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full font-semibold'>
                  25% OFF
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdDetailsInfo;