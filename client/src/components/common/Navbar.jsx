import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-50 px-6 py-4 h-40">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">
          Freelancer Dashboard
        </h1>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-blue-600">
            Messages
          </button>
          <button className="text-gray-600 hover:text-blue-600">
            Settings
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
