import React from "react";
import Hero from "../component/landing/Hero";
import Navbar from "../component/landing/Navbar";
import Header from "../component/landing/Header";
import Product from "../component/landing/Product";
import LatestProductCard from "../component/landing/LatestProductCard";



const Home = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <Hero/>
    <Product/>     
    <LatestProductCard/>
    </>
  );
};

export default Home;
