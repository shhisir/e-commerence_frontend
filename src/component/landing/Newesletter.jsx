import React from "react";

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="flex items-center justify-center w-full h-[462px] relative">
        <img
          src="images/bgimg.jpg"
          className="w-full h-[400px] object-cover"
          alt="background"
        />
        <div className="absolute flex flex-col items-center justify-center gap-8 w-[550px]">
          <p className="text-[32px] text-[#151875] font-[700] text-center mt-20">
            Get Leatest Update By Subscribe Our Newsletter
          </p>
          <button className="bg-[#FB2E86] rounded-[2px] text-white text-[14px] py-2 w-[100px]">
            Shop Now
          </button>
        </div>
      </div>
      <img src="images/banner.png" className="w-[700px] py-10" alt="banner" />
    </div>
  );
};

export default Newsletter;
