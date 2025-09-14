import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import Product from "../component/landing/Product";
import Shopping from "../pages/Shopping";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProductDetails from "../pages/[slug]/ProductDetailes";
import Payment from "../pages/Payment";
import ThankYou from "../pages/ThankYou"; // ✅ import ThankYou
import { Protected } from "../component/Protected";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Layout />
      </Protected>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Product />,
      },
      {
        path: "dashboard",
        element: <Shopping />,
      },
      {
        path: "shop",
        element: <Shopping />,
      },
      {
        path: "shop-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "thank-you", // ✅ Add this route
        element: <ThankYou />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);
