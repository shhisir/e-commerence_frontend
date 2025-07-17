// router/index.js
import { createBrowserRouter } from "react-router-dom";
// import { PublicRoute } from '../components/PublicRoute';

// import { Protected } from "../components/Protected";
import  Layout  from "../Layout";
import Home from "../pages/Home";
import Product from "../component/landing/Product";
import Shopping from "../pages/Shopping";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProductDetails from "../pages/[slug]/ProductDetailes";
import { Protected } from "../component/Protected";



export const router = createBrowserRouter([

  {
    path: "/",
    element: <Protected><Layout /></Protected>,
    children: [
      {
        index: true,
        element: (
          
            <Home /> 
          
        ),
      },
      {
        path:"products",
        element:(

            <Product />
        )
          

      },

      {
        path: "dashboard",
        element: (
          
            <Shopping />
          
        ),
      },
      {
        path: "shop",
        element: (
          
            <Shopping />
          
        ),
      },{
        path:"shop-details/:id",
        element :(
          <ProductDetails/>
        )

      }
    ],
  },

    {
    path: "login",
    element: <Login />,
  },
    {
    path: "signup",
    element: <Signup/>,

  },


]);