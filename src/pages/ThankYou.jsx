// src/pages/ThankYou.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home after 5 seconds
    const timer = setTimeout(() => {
      navigate("/"); // Change "/" if your home route is different
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-[#151875] mb-4">Thank You!</h1>
        <p className="text-gray-700 mb-6">
          Your order has been placed successfully.
        </p>
        <p className="text-gray-500">
          You will be redirected to the home page shortly...
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
