import React from "react";
import Breadcrums from "../component/reusable/Breadcrums";
import HeroNav from "../component/reusable/Heronav";
import { productDetails } from "../data/productData";
import FilterBar from "../component/reusable/FilterBar";
import ProductCard from "../component/ProductCard";


const Shopping = () => {
  const itemList = [
    { id: "1", title: "Wood Chair" },
    { id: "2", title: "Plastic Chair" },
    { id: "3", title: "Sofa collection" },
  ];
  return (
    <>
      <div>
        <Breadcrums />
        <HeroNav />{" "}
      </div>
      <FilterBar />

      <div className="w-full flex justify-center gap-[30px] mx-auto mt-8">
        {productDetails.map((item, index) => {
          return <ProductCard product={item} key={index} />;


        })}
      </div>
    </>
  );
};

export default Shopping;
