import React, { useEffect } from "react";
import GoogleImg from "../../assets/Google.png";
import GithubImg from "../../assets/github-2.webp";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmitLogin = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen mt-10">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <div className="flex flex-col gap-2 justify-center mb-3">
          <Link
            to={`http://localhost:5000/api/oauth/google?type=${localStorage.getItem(
              "userType"
            )}`}
            className="bg-blue-500 border-none p-2 cursor-pointer rounded-md text-white capitalize  flex items-center gap-7"
          >
            <img
              className="w-8 h-8 bg-cover rounded-md"
              src={GoogleImg}
              alt=""
            />
            Continue With Google
          </Link>

          <Link
            to={`http://localhost:5000/api/oauth/github?type=${localStorage.getItem(
              "userType"
            )}`}
            className="p-2 border cursor-pointer border-black rounded-md flex items-center gap-7 capitalize"
          >
            <img
              className="w-8 h-8 bg-cover rounded-md"
              src={GithubImg}
              alt=""
            />{" "}
            Continue With GitHub
          </Link>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmitLogin)}>
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email", { required: "email must be provided" })}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email.message}</span>
            )}
          </div>
          <div className="space-y-1">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: "password must be provided",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.password && (
              <span style={{ color: "red" }}>{errors.password.message}</span>
            )}
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer py-2 bg-[var(--primary-color)] text-white rounded-md  focus:outline-none focus:ring focus:border-blue-300"
          >
            Login
          </button>
        </form>
        <h1 className="text-center py-8 text-sm">
          {" "}
          ------- Don't have an MicroWork account? ------
        </h1>
        <div className="text-center mt-4">
          <Link
            to="/UserTypeSelector"
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Signup
          </Link>
          <Link
            to="/ResetPassword"
            className="text-blue-500 cursor-pointer hover:underline pl-4"
          >
            Reset Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
