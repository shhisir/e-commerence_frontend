import React from "react";
import TopCard from "./TopCard";

const TopCategory = () => {
  const imageLink = [
    { img: "images/top1.png", title: "Mini LCW Chair", price: "$56.00" },
    { img: "images/top2.png", title: "Mini LCW Chair", price: "$56.00" },
    { img: "images/top3.png", title: "Mini LCW Chair", price: "$56.00" },
    { img: "images/top4.png", title: "Mini LCW Chair", price: "$56.00" },
  ];
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-10 mt-20">
        <p className="text-[32px] text-[#151875] font-[700]">Top Categories</p>
        <div className="flex items-center justify-center gap-10 w-full ">
          {imageLink.map((item, index) => (
            <TopCard
              key={index}
              img={item.img}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
        <div className="flex items-center justify-center gap-3 w-full">
          <div className="rounded-full w-[8px] h-[8px] bg-[#FB2E86] border-[1px] border-[#FB2E86]"></div>
          <div className="rounded-full w-[8px] h-[8px] border-[1px] border-[#FB2E86]"></div>
          <div className="rounded-full w-[8px] h-[8px] border-[1px] border-[#FB2E86]"></div>
        </div>
      </div>
    </div>
  );
};

export default TopCategory;
