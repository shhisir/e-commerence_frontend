import React from 'react'
import { productDetails } from '../data/productData'
import ProductCard from './ProductCard'

const Product = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full grid grid-cols-4 gap-[30px] justify-items-center'>
      {productDetails.map((product,index)=>(
        <ProductCard key={index} product={product}/>
      ))}
      </div>

      
    </div>
  )
}

export default Product
