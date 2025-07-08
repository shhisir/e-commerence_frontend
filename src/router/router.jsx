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



export const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          
            <Home />
          
        ),
      },{
        path:"products",
        element:(

            <Product />
        )
            // <Protected>


            // </Protected>

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
      },
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