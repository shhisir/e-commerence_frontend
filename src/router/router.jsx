// router/index.js
import { createBrowserRouter } from "react-router-dom";
// import { PublicRoute } from '../components/PublicRoute';

import { Protected } from "../components/Protected";
import { Layout } from "../Layout";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Shopping from "../pages/Shopping";

export const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Protected>
            <Home />
          </Protected>
        ),
      },

      {
        path: "dashboard",
        element: (
          <Protected>
            <Shopping />
          </Protected>
        ),
      },
      {
        path: "shop",
        element: (
          <Protected>
            <Shopping />
          </Protected>
        ),
      },
    ],
  },

    {
    path: "login",
    element: <Login />,
  },


]);