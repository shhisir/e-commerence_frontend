import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white border border-blue-500 rounded-lg p-10 w-[544px]">
        <h2 className="text-3xl font-bold text-center mb-2">Login</h2>
        <p className="text-center text-gray-500 mb-6">
          Please login using account detail <span>bellow</span>.
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="text-right">
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 rounded-md font-semibold hover:bg-pink-600 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Don’t have an Account?
          <a href="#" className="ml-1 text-gray-500 hover:underline">
            Create account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
