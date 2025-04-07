import React from "react";

const JobApply =() => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 mt-12">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          React Developer Needed for Long-Term Project
        </h1>

        <div className="text-sm text-gray-600 mb-6 space-y-4">
          <p>
            We are looking for a skilled React developer to join our team for a
            long-term project. You’ll be working on creating modern web
            applications using React, Tailwind CSS, and possibly other
            technologies like Redux and TypeScript.
          </p>
          <div>
            <h2 className="font-semibold text-gray-700">Requirements:</h2>
            <ul className="list-disc list-inside pl-4">
              <li>Strong experience with React and Tailwind CSS</li>
              <li>Familiarity with REST APIs</li>
              <li>Understanding of modern JavaScript (ES6+)</li>
              <li>Ability to write clean and maintainable code</li>
            </ul>
          </div>
          <p>
            This is a remote position and requires good communication skills. We
            prefer someone available at least 20 hours/week.
          </p>
        </div>

        <div className="border-t pt-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Submit a Proposal
          </h2>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Cover Letter
            </label>
            <textarea
              rows="6"
              className="border rounded-xl p-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Write a brief cover letter explaining why you're a great fit for this project."
            ></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Hourly Rate
            </label>
            <input
              type="number"
              className="border rounded-xl p-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="e.g. 25"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Attachments
            </label>
            <input type="file" className="text-sm" />
            <span className="text-xs text-gray-500">
              Upload your resume or portfolio (optional)
            </span>
          </div>

          <div className="pt-4">
            <button className="w-full md:w-auto cursor-pointer bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-xl">
              Submit Proposal
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mt-8">
          <span className="text-gray-500 text-sm">
            Posted 2 hours ago • Worldwide
          </span>
        </div>
      </div>
    </div>
  );
}
export default JobApply;