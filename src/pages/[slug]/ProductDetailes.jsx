import React from 'react'
import { useParams } from 'react-router'
import ProductDetailCard from '../../component/ProductDetailCard'

const ProductDetails = () => {
    const {id} = useParams()
  return (
    <div className='w-full'>


       <ProductDetailCard/>
  
    </div>
  )
}

export default ProductDetails