import { AiFillTwitterCircle } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { MdOutlineStar } from "react-icons/md";

const ProductDetailCard = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[80%]  shadow-2xl shadow-gray-600 flex justify-between p-3 rounded-[3px] items-center">
        <div className="imagesSection flex gap-4">
          <div className="flex flex-col gap-3">
            <div className="w-[140px] h-[145px]">
              <img
                src="/images/bag2.png"
                alt="bagimage"
                className="w-full h-full object-cover rounded-[4px]"
              />
            </div>
            <div className="w-[140px] h-[145px]">
              <img
                src="/images/bag3.png"
                alt="bagimage"
                className="w-full h-full object-cover rounded-[4px]"
              />
            </div>
            <div className="w-[140px] h-[145px]">
              <img
                src="/images/bag4.png"
                alt="bagimage"
                className="w-full h-full object-cover rounded-[4px]"
              />
            </div>
          </div>
          <div className="w-[360px] h-[460px]">
            <img
              src="/images/bag1.png"
              alt=""
              className="w-full h-full object-cover rounded-[4px]"
            />
          </div>
        </div>

        {/* info section */}
        <div className="w-1/2 pr-1 ">
          <div className="w">
            <p className="flex gap-[1px]">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <MdOutlineStar key={index} className="text-yellow-400" />
              ))}
            </p>
            <div className="flex">
              <p>$32.00</p>
              <p>$35.00</p>
            </div>
            <p>Color</p>
            <p className="text-[#A9ACC6] text-base font-[700] leading-[29px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tellus porttitor purus, et volutpat sit.
            </p>
            <div className="pl-12 ">
              <button className="flex items-center gap-4 ">
                <span>Add To Cart</span>
                <BiHeart className="mt-[2px]" />
              </button>
            </div>
            <p>Categories:</p>
            <p>Tags:</p>
            <div className="flex items-center gap-4">
              <p>share</p>
                <div className="flex gap-2">
                  <FaFacebook />

                  <GrInstagram />
                  <AiFillTwitterCircle />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;