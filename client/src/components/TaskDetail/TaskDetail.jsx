import React, { useState } from "react";
import { Link } from "react-router-dom";

const TaskDetailsPage = ({ isApplied, setIsApplied }) => {
  const handleApply = () => {
    setIsApplied(!isApplied);
  };

  return (
    <main
      className={`fixed top-0 right-0 h-full  md:max-w-[80%] bg-white transform transition-transform duration-300 overflow-auto  z-10 mt-12 ${
        isApplied ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <span
        onClick={handleApply}
        className="material-symbols-outlined m-2 border-1 cursor-pointer  border-green-600  bg-white shadow-2xl rounded-full text-green-600 text-xl"
        style={{ fontSize: "18px" }}
      >
        close
      </span>
      <div className="flex flex-col md:flex-row items-start w-full hyphens-auto p-1 gap-1   ">
        {/* Main Container */}
        <div className="text-xs p-8 h-auto w-full border-r-1 border-gray-200">
          {/* Task Details Section */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Build a Modern E-Commerce Website
            </h1>
            <p className="text-gray-600 mb-2">
              **Description:** We are looking for an experienced web developer
              to build a fully responsive e-commerce website for our business,
              using React and other modern web technologies. The website should
              have a user-friendly interface, cart functionality, and payment
              gateway integration.
            </p>
            <p className="text-gray-600 mb-2">
              **Description:** We are looking for an experienced web developer
              to build a fully responsive e-commerce website for our business,
              using React and other modern web technologies. The website should
              have a user-friendly interface, cart functionality, and payment
              gateway integration.
            </p>
            <p className="text-gray-600 mb-2">
              **Description:** We are looking for an experienced web developer
              to build a fully responsive e-commerce website for our business,
              using React and other modern web technologies. The website should
              have a user-friendly interface, cart functionality, and payment
              gateway integration.
            </p>
            <p className="text-gray-600 mb-2">
              **Skills Required:** HTML, CSS, JavaScript, React, Node.js,
              MongoDB
            </p>
            <p className="text-gray-600 mb-2">
              **Budget:** $1500 - $3000 | **Timeline:** 3-4 weeks
            </p>
            <p className="text-gray-600 mb-4">
              **Project Type:** One-time project | Remote | Full-time
              availability
            </p>
          </div>

          {/* Task Requirements Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Task Requirements
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-600">
                Develop the frontend using React.js
              </li>
              <li className="text-gray-600">
                Implement a secure payment gateway
              </li>
              <li className="text-gray-600">
                Integrate the back-end with MongoDB
              </li>
              <li className="text-gray-600">
                Optimize the website for mobile users
              </li>
              <li className="text-gray-600">
                Provide regular updates during development
              </li>
            </ul>
          </div>
        </div>

        {/* Apply Button Section */}
        <div className="w-full md:w-60 mt-6 p-6 custom-shadow mb-5 md:mb-0">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Apply for this Job
          </h2>
          <button
            onClick={handleApply}
            className="w-full bg-[var(--primary-color)] cursor-pointer text-white px-4 py-2 rounded-md"
          >
            <Link to={"./JobApply"}>Apply Now</Link>
          </button>
        </div>
      </div>
    </main>
  );
};

export default TaskDetailsPage;
