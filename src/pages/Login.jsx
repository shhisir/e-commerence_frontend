import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginFailure, loginStart, loginSuccess, setUser } from "../user/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    console.log("Sending login details...");
    dispatch(loginStart());

    try {
      const response = await fetch(
        "https://e-commerce-backend-1sld.onrender.com/api/v1/user/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorMsg = await response.json();
        throw new Error(errorMsg.message || "Login failed");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      dispatch(loginSuccess(data.token));
      dispatch(setUser(data.user));
      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
      dispatch(loginFailure(error.message));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-2">Login</h2>
        <p className="text-center text-gray-500 mb-6">
          Please log in using your account details below.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-400"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-400"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 8, message: "Minimum length is 8" },
              })}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
            )}

            <label className="mt-2 flex items-center gap-2 text-sm text-gray-500">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword((prev) => !prev)}
              />
              Show Password
            </label>
          </div>

          <div className="text-right">
            <Link to="/forgot-password" className="text-sm text-pink-500 hover:underline">
              Forgot your password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-md font-semibold transition"
          >
            {isLoading ? "Logging In..." : "Log In"}
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-pink-500 hover:underline">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

