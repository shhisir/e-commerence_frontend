import React from "react";
import Hero from "../component/landing/Hero";
import Navbar from "../component/landing/Navbar";
import Header from "../component/landing/Header";
import Product from "../component/landing/Product";
import LatestProduct from "../component/landing/LatestProduct";
import Offer from "../component/landing/Offer";
import Unique from "../component/landing/unique";
import Footer from "../component/landing/Footer";
import Discount from "../component/landing/Discount";
import TopCategory from "../component/landing/TopCategory";
import Newsletter from "../component/landing/Newesletter";

const Home = () => {
  return (
    <>
    
      <Hero />
      <Product />
      <LatestProduct />
      <Offer />
      <Unique />
      <Discount />
      <TopCategory />
      <Newsletter />
   
    </>
  );
};

export default Home;
