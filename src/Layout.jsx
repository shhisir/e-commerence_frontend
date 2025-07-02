import React from "react";
import Header from "./component/landing/Header";
import Home from "./pages/Home";
import Navbar from "./component/landing/Navbar";
import { Outlet } from "react-router";
import Footer from "./component/landing/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
