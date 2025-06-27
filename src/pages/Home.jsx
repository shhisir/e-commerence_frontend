import React from "react";
import Hero from "../component/landing/Hero";
import Navbar from "../component/landing/Navbar";
import Header from "../component/landing/Header";
import Product from "../component/landing/Product";

import LatestProduct from "../component/landing/LatestProduct";
import Offer from "../component/landing/Offer";
import Unique from "../component/landing/unique";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Product />
      <LatestProduct />
      <Offer />
      <Unique />
      <footer/>
    </>
  );
};

export default Home;
