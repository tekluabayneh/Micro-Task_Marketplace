import React, { useState } from "react";

const TaskDetailsPage = () => {
  const [isApplied, setIsApplied] = useState(false);

  const handleApply = () => {
    setIsApplied(true);
    alert("You have successfully applied for this job!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 mt-12">
      {/* Main Container */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
        {/* Task Details Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Build a Modern E-Commerce Website
          </h1>
          <p className="text-gray-600 mb-2">
            **Description:** We are looking for an experienced web developer to
            build a fully responsive e-commerce website for our business, using
            React and other modern web technologies. The website should have a
            user-friendly interface, cart functionality, and payment gateway
            integration.
          </p>
          <p className="text-gray-600 mb-2">
            **Skills Required:** HTML, CSS, JavaScript, React, Node.js, MongoDB
          </p>
          <p className="text-gray-600 mb-2">
            **Budget:** $1500 - $3000 | **Timeline:** 3-4 weeks
          </p>
          <p className="text-gray-600 mb-4">
            **Project Type:** One-time project | Remote | Full-time availability
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

        {/* Apply Button Section */}
        <div className="mt-6 p-6 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Apply for this Job
          </h2>
          <div className="space-y-4">
            <textarea
              placeholder="Write your cover letter here..."
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
            <div className="flex space-x-4">
              <input
                type="number"
                placeholder="Enter your bid amount ($)"
                className="w-1/2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <input
                type="number"
                placeholder="Enter your estimated timeline (days)"
                className="w-1/2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mt-4">
              {!isApplied ? (
                <button
                  onClick={handleApply}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                >
                  Apply Now
                </button>
              ) : (
                <button
                  disabled
                  className="w-full bg-gray-400 text-white px-4 py-2 rounded-md"
                >
                  Applied
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsPage;
