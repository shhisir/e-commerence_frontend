import { useState } from "react";
import { TiTick } from "react-icons/ti";

const Discount = () => {
  const itemList = [
    { id: "1", title: "Wood Chair" },
    { id: "2", title: "Plastic Chair" },
    { id: "3", title: "Sofa collection" },
  ];
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="flex flex-col items-center justify-center px-12 mt-20">
      <p className="text-[42px] text-[#151875] font-[700] mb-[20px] ">
        Discount Item
      </p>
      <div className="w-full flex flex-col items-center ">
        <ul className="flex  gap-[26px] text-[18px] text-[#151875]">
          {itemList.map((el, index) => {
            return (
              <li
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`${
                  activeIndex === index
                    ? "text-[#FB4997] underline underline-offset-4"
                    : ""
                } cursor-pointer relative flex items-center`}
              >
                {el.title}
                <span
                  className={`${
                    activeIndex === index
                      ? "absolute right-[-12px]  bottom-[0.2px]"
                      : "hidden"
                  } text-[#FB4997] text-[32px]`}
                >
                  .
                </span>
              </li>
            );
          })}
        </ul>
        <div className="w-fit flex justify-between items-center">
          <div className="flex flex-col gap-4">
            <p className="text-[#151875] text-[35px] font-[700] leading-[132%] tracking-[1.5%]">
              20% Discount Of All Products
            </p>
            <p className="text-[21px] text-[#FB4997] leading-[132%] tracking-[1.5%] mt-4">
              Eams Sofa Compact
            </p>
            <p className="text-[17px] leading-[32px] tracking-[2%] text-[#B7BACB]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>

            <div className="grid grid-cols-2 w-[90%] gap-[10px] text-base leading-[30px] pr-44">
              <p className="flex items-center">
                <TiTick className="text-[24px] text-[#7569B2]" />
                <span>Material expose like metals</span>
              </p>
              <p className="flex items-center">
                <TiTick className="text-[24px] text-[#7569B2]" />
                <span>Clear lines and geomatric figures</span>
              </p>
              <p className="flex items-center">
                <TiTick className="text-[24px] text-[#7569B2]" />
                <span>Simple neutral colours.</span>
              </p>
              <p className="flex items-center">
                <TiTick className="text-[24px] text-[#7569B2]" />
                <span>Material expose like metals</span>
              </p>
            </div>
            <button className="primary-btn mt-4">Shop Now</button>
          </div>
          <div className="w-[470px] relative">
            <div className="absolute top-1/2 left-1/2  transition-transform  -translate-x-1/2 -translate-y-1/2  w-[300px] h-[310px] rounded-full bg-[#fbeaf3] z-[-10]"/>

            <img
              src="/images/discount.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;