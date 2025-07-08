import React, { useState } from "react";
import Breadcrums from "../component/reusable/Breadcrums";
import HeroNav from "../component/reusable/Heronav";
import { productDetails } from "../data/productData";
import FilterBar from "../component/reusable/FilterBar";
import ProductCard from "../component/ProductCard";


const Shopping = () => {
  const [currentPage,setCurrentPage] = useState(1)
  const [itemsPerPage,setItemsPerPage] = useState(3)
   const totalpages = Math.ceil (productDetails.length / itemsPerPage)

   const  indexOfLastItems = currentPage * itemsPerPage
   const indexOFirstItems = indexOfLastItems - itemsPerPage
   const currentItems = productDetails.slice(indexOFirstItems,indexOfLastItems)
     return (
    <>
      <div>
        <Breadcrums />
        <HeroNav />{" "}
      </div>
      <FilterBar setItemsPerPage ={setCurrentPage}  />

      <div className="w-full flex justify-center gap-[30px] mx-auto mt-8">
        {productDetails.map((item, index) => {
          return <ProductCard product={item} key={index} />;


        })}
      </div>
    </>
  );
};

export default Shopping;
