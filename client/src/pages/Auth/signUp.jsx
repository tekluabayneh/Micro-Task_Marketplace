import { Link } from "react-router-dom";
import GoogleImg from "../../assets/Google.png";
import GithubImg from "../../assets/github-2.webp";
import { useForm } from "react-hook-form";
import axios from "axios";
function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  const onSubmitRegister = (data) => {
    let useType = localStorage.getItem("userType");
    console.log(data);
    console.log(useType);
    reset();
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen mt-10">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <div className="flex flex-row gap-2 justify-center mb-3">
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
          </Link>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmitRegister)}>
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              firstName:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              {...register("firstName", {
                required: "firstName must be provided",
              })}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />{" "}
            {errors.firstName && (
              <span style={{ color: "red" }}>{errors.firstName.message}</span>
            )}
          </div>
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              lastName:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              {...register("lastName", {
                required: "lastName must be provided",
              })}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />{" "}
            {errors.lastName && (
              <span style={{ color: "red" }}>{errors.lastName.message}</span>
            )}
          </div>
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
            />{" "}
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
            className="w-full py-2 bg-[var(--primary-color)] text-white rounded-md cursor-pointer focus:ring focus:border-blue-300"
          >
            Register
          </button>

          <div className="text-center mt-4">
            <Link
              to={"/login"}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
