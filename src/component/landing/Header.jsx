import React from "react";
import { CgMail } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/signup"); // Redirect to signup
  };

  return (
    <div className="w-full bg-[#7E33E0] text-[#F1F1F1]">
      <div className="lg:w-[80%] w-full mx-auto flex flex-col md:flex-row justify-between items-center py-2 px-3">

        {/* Left Side: Contact Info */}
        <div className="flex flex-wrap items-center gap-4 md:gap-8 text-sm">
          <p className="flex items-center gap-2 hover:text-[#FFD1F0] transition-colors">
            <CgMail className="text-base" />
            <span>randomgmail123@gmail.com</span>
          </p>
          <p className="flex items-center gap-2 hover:text-[#FFD1F0] transition-colors">
            <FaPhoneVolume className="text-base" />
            <span>+123 456 7890</span>
          </p>
        </div>

        {/* Right Side: User Options */}
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <ul className="flex items-center gap-4 text-sm">
            <li className="flex items-center gap-1 cursor-pointer hover:text-[#FFD1F0] transition-colors">
              English <IoIosArrowDown />
            </li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-[#FFD1F0] transition-colors">
              USD <IoIosArrowDown />
            </li>
            <li
              className="flex items-center gap-1 cursor-pointer hover:text-[#FFD1F0] transition-colors"
              onClick={handleLoginClick}
            >
              {user ? `Hi, ${user.name}` : "Login"} <IoPersonOutline />
            </li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-[#FFD1F0] transition-colors">
              WishList <CiHeart />
            </li>
          </ul>

          {/* Cart Icon */}
          <div className="relative cursor-pointer hover:text-[#FFD1F0] transition-colors">
            <GrCart className="text-xl" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;
