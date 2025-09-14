import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="flex justify-center py-4">
        <div className="flex w-[80%] justify-between items-center">

          {/* Logo and Menu */}
          <div className="flex gap-12 items-center">
            {/* Logo */}
            <Link to="/">
              <p className="font-bold text-3xl text-[#0D0E43]">Hekto</p>
            </Link>

            {/* Menu */}
            <ul className="flex gap-8 items-center text-[#0D0E43] text-base font-medium">
              <li className="flex items-center gap-1 cursor-pointer text-[#FB2E86] hover:text-[#FF69A3] transition-all">
                <Link to="/">Home</Link>
                <IoIosArrowDown className="text-sm mt-1" />
              </li>
              <li className="hover:text-[#FB2E86] transition-all cursor-pointer">Pages</li>
              <li className="hover:text-[#FB2E86] transition-all cursor-pointer">
                <Link to="/products">Products</Link>
              </li>
              <li className="hover:text-[#FB2E86] transition-all cursor-pointer">Blog</li>
              <li className="hover:text-[#FB2E86] transition-all cursor-pointer">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="hover:text-[#FB2E86] transition-all cursor-pointer">Contacts</li>
            </ul>
          </div>

          {/* Search Box */}
          <div className="flex items-center border-2 border-[#E7E6EF] rounded-md overflow-hidden w-[320px]">
            <input
              type="search"
              placeholder="Search products..."
              className="flex-1 h-10 px-3 outline-none"
            />
            <button className="w-12 flex items-center justify-center bg-[#FB2E86] hover:bg-[#FF4B9D] transition-all">
              <CiSearch className="text-white text-xl" />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
