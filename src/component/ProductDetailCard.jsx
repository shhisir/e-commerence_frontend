import React, { useState } from "react";
import { AiFillTwitterCircle, AiFillStar } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { FaFacebook, FaShoppingCart, FaCreditCard } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const ProductDetailCard = () => {
  const [selectedImage, setSelectedImage] = useState("/images/bag1.png");
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("blue");

  const thumbnails = ["/images/bag2.png", "/images/bag3.png", "/images/bag4.png"];
  const colors = ["blue", "red", "green", "black"];

  const navigate = useNavigate();

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) to cart!`);
  };

  const handleBuyNow = () => {
    navigate("/payment", { state: { quantity, selectedColor } });
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="w-full flex justify-center py-8">
      <div className="w-[80%] shadow-2xl shadow-gray-600 flex flex-col lg:flex-row justify-between p-6 rounded-lg items-start gap-8">

        {/* Images Section */}
        <div className="flex gap-4 flex-col sm:flex-row">
          {/* Thumbnails */}
          <div className="flex sm:flex-col gap-3 order-2 sm:order-1">
            {thumbnails.map((img, index) => (
              <div
                key={index}
                className="w-[140px] h-[145px] cursor-pointer border-2 rounded-md overflow-hidden transition-all duration-200 hover:border-blue-400"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="w-[360px] h-[460px] order-1 sm:order-2">
            <img
              src={selectedImage}
              alt="Main product"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="flex-1 max-w-md space-y-4">
          <h1 className="text-2xl font-bold text-[#151875]">Premium Designer Bag</h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <AiFillStar key={index} className="text-yellow-400 text-lg" />
              ))}
            </div>
            <span className="text-sm text-gray-500">(22 reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-[#151875]">$32.00</span>
            <span className="text-lg text-gray-400 line-through">$35.00</span>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-semibold">
              9% OFF
            </span>
          </div>

          {/* Color Selection */}
          <div>
            <p className="font-semibold text-[#151875] mb-2">Color:</p>
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                    selectedColor === color ? "border-[#151875] scale-110" : "border-gray-300"
                  }`}
                  style={{
                    backgroundColor:
                      color === "blue"
                        ? "#3B82F6"
                        : color === "red"
                        ? "#EF4444"
                        : color === "green"
                        ? "#10B981"
                        : "#1F2937",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[#151875]">Quantity:</span>
            <div className="flex items-center border rounded-md">
              <button
                onClick={decreaseQuantity}
                className="px-3 py-2 text-[#151875] hover:bg-gray-100 transition-colors"
              >
                -
              </button>
              <span className="px-4 py-2 border-x text-[#151875] font-semibold">
                {quantity}
              </span>
              <button
                onClick={increaseQuantity}
                className="px-3 py-2 text-[#151875] hover:bg-gray-100 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#A9ACC6] text-base font-medium leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tellus porttitor purus, et volutpat sit. High-quality materials and
            exceptional craftsmanship make this bag perfect for everyday use.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-[#151875] text-[#151875] rounded-md hover:bg-[#151875] hover:text-white transition-all duration-300 font-semibold flex-1"
            >
              <FaShoppingCart className="text-lg" />
              Add to Cart
            </button>

            <button
              onClick={handleBuyNow}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#151875] text-white rounded-md hover:bg-[#2a2154] transition-all duration-300 font-semibold shadow-md flex-1"
            >
              <FaCreditCard className="text-lg" />
              Buy Now
            </button>
          </div>

          {/* Categories, Tags, Share */}
          <div className="pt-4 space-y-2">
            <p>Categories: Bags, Fashion</p>
            <p>Tags: Designer, Premium, Leather</p>
            <div className="flex items-center gap-2">
              <span>Share:</span>
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
