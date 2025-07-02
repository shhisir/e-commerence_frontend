import React from "react";

const TopCard = ({ img, price, title }) => {
  return (
    <div>
      <div className="flex flex-col gap-4 items-center justify-center  ">
        <div className="group w-[200px] h-[200px] flex flex-col items-center justify-center rounded-full bg-[#F6F7FB] relative transition-shadow duration-300 hover:shadow-[-5px_5px_0_rgba(132,90,223,01)]">
          <img
            className="w-[150px] h-[150px] transition-transform duration-300 group-hover:scale-80"
            src={img}
          />
          <span className="hidden absolute bottom-4 bg-[#08D15F] w-[70px] h-[25px]   items-center justify-center rounded-[2px] text-white text-[12px] group-hover:flex ">
            View Details
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-0">
          <p className="text-[18px] text-[#151875]">{title}</p>
          <p className="text-[14px] text-[#151875]">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
