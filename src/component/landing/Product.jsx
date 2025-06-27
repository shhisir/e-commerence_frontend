import React from 'react'
import ProductCard from '../ProductCard'
import { productDetails } from '../../data/productData'

const Product = () => {
  return (
    <div className='w-full flex justify-center] mt-[200px]'>
      <div className='w-full flex justify-center gap-[30px] '>
      {productDetails.map((product,index)=>(
        <ProductCard key={index} product={product}/>
      ))}
      </div>

      
    </div>
  )
}

export default Product
