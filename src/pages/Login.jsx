import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  setUser,
} from "../user/authSlice";
const Login = () => {
  const dispatch = useDispatch();

  const { isLoading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    dispatch(loginStart());
    console.log("started");

    try {
      const response = await fetch('https://e-commerce-backend-1-o9mf.onrender.com/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();


      // store token in local storage
      console.log(data)



      dispatch(loginSuccess(formData));
      
      // dispatch(setUser(userData))

      // localStorage.setItem("user", JSON.stringify(userData));
      navigate("/");
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center bg-[#FFFFFF] shadow-[0_0_60px_10px_rgba(0,0,0,0.03)]  w-[533px] h-[474px]">
          <p className="text-[32px] font-bold">Login</p>
          <p className="text-[17px] text-[#9096B2]">
            Please log in using account details below.
          </p>

          {/* form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center  gap-4 w-full mt-[37px]"
          >
            <div className="flex flex-col">
              <input
                className="border-[1px] border-[#C2C5E1] h-[52px] w-[432px]  rounded-[2px] placeholder:text-[16px] placeholder-[#9096B2] px-[13px]"
                type="text"
                {...register("email", {
                  required: true,
                  minLength: { value: 3, message: "min length is 3" },
                })}
                placeholder="Email Address"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <input
                className="border-[1px] border-[#C2C5E1] h-[52px] w-[432px] rounded-[2px] placeholder:text-[16px] placeholder-[#9096B2] px-[13px]"
                type="password"
                {...register("password", {
                  required: true,
                  minLength: { value: 8, message: "min length is 8" },
                })}
                placeholder="Password"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            <p className="text-sm text-left w-full px-[56px] text-[#9096B2] ">
              Forgot your password?
            </p>
          <button   className="border border-[#C2C5E1] bg-[#FB2E86] h-[47px] w-[432px] rounded-[3px] text-white hover:bg-pink-600"
              type="submit"
              >
                Log In

          </button>
            
            
          </form>
          <p className="text-sm mt-4 text-[#9096B2]">
            {" "}
            Don't have an Account?{" "}
            <span className="text-[#FB2E86]">
              {" "}
              <a href="/signup">Create account</a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;