import React from "react";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaSearchPlus } from "react-icons/fa";
import { LiaSearchPlusSolid } from "react-icons/lia";

function TrendingCards({ itemName, code, price, img }) {
  return (
    <div>
      <div className="group w-[220px]  bg-white p-2  overflow-hidden transition-transform duration-300 shadow-sm  relative">
        <div className="bg-[#F6F7FB] flex justify-center  items-center h-[180px] w-full ">
          <img
            className=" w-[100px] h-[100px] transition-transform duration-300 group-hover:scale-90   "
            src={img}
          />
        </div>
        <div className="flex flex-col items-center p-5">
          <p className="font-[400] text-[18px] ">{itemName}</p>

          <p className="font-[500] text-[14px] text-[#151875]  ">{price}</p>
        </div>
      </div>
    </div>
  );
}

export default TrendingCards;
