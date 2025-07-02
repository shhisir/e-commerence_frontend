import React from "react";
import Breadcrums from "../component/reusable/Breadcrums";
import HeroNav from "../component/reusable/Heronav";
import { productDetails } from "../data/productData";

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
        <HeroNav />
      </div>
      <div>
        {productDetails.map()}
      </div>
    </>
  );
};

export default Shopping;
