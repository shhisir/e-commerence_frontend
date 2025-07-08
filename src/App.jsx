import React from "react";
import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductCard from "./component/ProductCard";
import Home from "./pages/Home";
import Layout from "./Layout";
import Shopping from "./pages/Shopping";
import Product from "./component/landing/Product";
import ProductDetails from "./pages/[productsDetails]/ProductDetails";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <RouterProvider router={router}/>
   
  );
};

export default App;
 