import React from "react";
import GoogleImg from "../../assets/Google.png";
import GithubImg from "../../assets/github-2.webp";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen mt-10">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <div className="flex flex-col gap-2 justify-center mb-3">
          <button
            type="button"
            className="bg-blue-500 border-none p-2 cursor-pointer rounded-md text-white capitalize  flex items-center gap-7"
          >
            <img
              className="w-8 h-8 bg-cover rounded-md"
              src={GoogleImg}
              alt=""
            />
            Continue With Google
          </button>

          <button
            type="button"
            className="p-2 border cursor-pointer border-black rounded-md flex items-center gap-7 capitalize"
          >
            <img
              className="w-8 h-8 bg-cover rounded-md"
              src={GithubImg}
              alt=""
            />{" "}
            Continue With GitHub
          </button>
        </div>

        <form className="space-y-4">
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
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
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
              id="password"
              name="password"
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
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
          ------- Don't have an Upwork account? ------
        </h1>
        <div className="text-center mt-4">
          <Link
            to="/Register"
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
