import { CgMail } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Header = () => {
  const {user}= useSelector((state)=>state.auth)
  return (
    <div className="w-full flex justify-center  md:h-[44px] bg-[#7E33E0]">
    <div className="lg:w-[80%] w-full  flex flex-wrap lg:flex-nowrap justify-between">

      <div className="left-side w-full flex justify-center flex-wrap sm:flex-nowrap mx-auto gap-3 sm:gap-8  lg:w-fit px-3 text-[#F1F1F1]  ">
        <p className="  flex items-center gap-[10px] ">
          <CgMail className="text-base" />
          <span className="">randomgmail123@gmail.com</span>
        </p>
        <p className="flex items-center gap-[10px] ">
          <FaPhoneVolume className="text-base" />

          <span>randomgmail123@gmail.com</span>
        </p>
      </div>
      <div className="right-side flex items-center justify-center w-full  text-[#F1F1F1]  bg-inherit">
        <ul className=" headerUl flex items-center gap-2">
          <li>
            English <IoIosArrowDown />
          </li>
          <li >
            USD <IoIosArrowDown />
          </li>
          <li >
          
            Login <IoPersonOutline />
          </li>

          <li >
            WishList <CiHeart />
          </li>
        </ul>
        <GrCart />

      </div>
      </div>
    </div>
  );
};

export default Header;