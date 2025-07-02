import React from "react";
import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductCard from "./component/ProductCard";
import Home from "./pages/Home";
import Heronav from "./component/reusable/Heronav";
import Layout from "./Layout";
import Shopping from "./pages/Shopping";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={< Layout/>}> 
      <Route index element={<Home/>} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<div><Signup/></div>} />
      <Route path="shop" element={<div><Shopping/></div>} />
      
       
       </Route>
    </Routes>
  );
};

export default App;
