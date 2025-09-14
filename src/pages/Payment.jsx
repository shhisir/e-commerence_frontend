// src/pages/Payment.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { quantity, selectedColor } = location.state || {};

  // Example product price (you can fetch this dynamically)
  const price = 32;
  const total = price * (quantity || 1);

  // Function to simulate payment completion
  const handlePaymentComplete = () => {
    navigate("/thank-you"); // Redirect to ThankYou page
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-[#151875] mb-6">Payment Page</h1>

      {/* Order summary */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mb-6">
        <h2 className="text-xl font-semibold text-[#151875] mb-4">Order Summary</h2>
        <p className="text-gray-700">
          <span className="font-semibold">Quantity:</span> {quantity}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Selected Color:</span> {selectedColor}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Price per item:</span> ${price.toFixed(2)}
        </p>
        <p className="text-lg font-bold text-[#151875] mt-2">
          Total: ${total.toFixed(2)}
        </p>
      </div>

      {/* FonePay QR */}
      <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-full max-w-md mb-6">
        <h2 className="text-xl font-semibold text-[#151875] mb-4">
          Pay with FonePay
        </h2>
        <img
          src="/images/qr.png" 
          alt="FonePay QR Code"
          className="w-64 h-64 object-contain border p-2 rounded-lg"
        />
        <p className="text-gray-600 mt-4 text-center">
          Scan this QR code using your <strong>FonePay</strong> app to complete the payment.
        </p>
      </div>

      {/* Payment Complete button */}
      <button
        onClick={handlePaymentComplete}
        className="mt-4 px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-all"
      >
        Payment Completed
      </button>

      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="mt-2 px-6 py-3 bg-[#151875] text-white rounded-lg shadow-md hover:bg-[#2a2154] transition-all"
      >
        Back to Product
      </button>
    </div>
  );
};

export default Payment;
