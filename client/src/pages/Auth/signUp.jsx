import { Link } from "react-router-dom";
import GoogleImg from "../../assets/Google.png";
import GithubImg from "../../assets/github-2.webp";
function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Login:", email, password);
      // Implement login logic here
    } else {
      console.log("Signup:", email, password);
      // Implement signup logic here
    }
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen mt-10">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <div className="flex flex-row gap-2 justify-center mb-3">
          <button
            type="button"
            className="bg-blue-500 border-none p-2 cursor-pointer rounded-md text-white capitalize  flex items-center gap-7"
          >
            <img
              className="w-8 h-8 bg-cover rounded-md"
              src={GoogleImg}
              alt=""
            />
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
          </button>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              firstName:
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
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              lastName:
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
