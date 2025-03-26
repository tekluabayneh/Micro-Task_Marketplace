import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Card Container */}
      <div className="text-center">
        {/* Error Code */}
        <h1 className="text-9xl font-bold text-[var(--primary-color)]">404</h1>

        {/* Error Message */}
        <h2 className="text-3xl font-semibold text-gray-800 mt-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mt-2">
          The page you are looking for does not exist or has been moved.
        </p>

        {/* Quick Access Links */}
        <div className="mt-8 space-y-4">
          <Link
            to="/"
            className="block w-full md:w-auto px-6 py-3 text-center text-white bg-[var(--primary-color)] hover:bg-[#1a1a1a] rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Go to Home
          </Link>
          <Link
            to="/dashboard"
            className="block w-full md:w-auto px-6 py-3 text-center text-[var(--primary-color)] bg-indigo-100 hover:bg-indigo-200 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Go to Dashboard
          </Link>
          <Link
            to="/contact"
            className="block w-full md:w-auto px-6 py-3 text-center text-[var(--primary-color)] bg-indigo-100 hover:bg-indigo-200 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
