import React from "react";
import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductCard from "./component/ProductCard";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home/>} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<div><Signup/></div>} />
       <Route path="card" element={<div><ProductCard/></div>} />
       
    </Routes>
  );
};

export default App;
