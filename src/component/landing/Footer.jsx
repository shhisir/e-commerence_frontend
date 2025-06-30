import React from "react";
import { MdSearch } from "react-icons/md";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#EEEFFB]  mt-[50px]">

      <div className="flex bg-[#EEEFFB] w-[80%] h-[300px] mt-[30px] items-center justify-between">

        <div className="flex flex-col h-[300px] gap-6">
          <p className="text-[32px] font-[700]">Hekto</p>
          <div className="flex flex-col gap-5">

            <div className="flex items-center">
                      <input type="search" className="border-[#E7E6EF] border-[2px] h-10 w-[317px]" />
                      <button className=" flex justify-center items-center font-[800] bg-[#FB2E86] h-[40px] w-[51px] text-white"><MdSearch /></button>
                    </div>
            <p>Contact Info</p>
            <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>
        </div>

        <div className="flex flex-col h-[300px] gap-6">
            <p className="text-[28px] font-[700]">Catagories</p>
            <div className="flex flex-col gap-2">

            <p>Laptops & Computers</p>
            <p>Smart Phones & Tablets</p>
            <p>Video Games & Consoles</p>
            <p>Waterproof Headphones</p>
            </div>
        </div>

        <div className="flex flex-col h-[300px] gap-6">
            <p className="text-[28px] font-[700]">Customer Care</p>
            <div className="flex flex-col gap-2">


            <p>My Account</p>
            <p>Discount</p> 
            <p>Returns</p>
            <p>Orders History</p>
            <p>Order Tracking</p>
            </div>

        </div>

        <div className="flex flex-col h-[300px] gap-6">
            <p className="text-[28px] font-[700]" >Pages</p>
            <div className="flex flex-col gap-2">

            <p>Blog</p>
            <p>Browse the Shop</p>  
            <p>Category</p>
            <p>Pre-Built Pages</p>
            <p>Visual Composer Elements</p>
            <p>Woocommerce Pages</p>
            </div>
        </div>
      </div>


      <div className="flex justify-center w-full items-center bg-[#E7E4F8] text-[#9DA0AE] h-[40px]">
        <p>©Webecy - All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;