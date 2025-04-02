import React, { useState } from "react";

const JobBiddingPage = () => {
  const [formData, setFormData] = useState({
    coverLetter: "",
    budget: "",
    timeline: "",
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, attachment: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Proposal submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 mt-12">
      {/* Main Container */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        {/* Job Details Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Job Title: Build a Modern Website
          </h1>
          <p className="text-gray-600 mb-2">
            Description: We are looking for a skilled web developer to create a
            modern, responsive website for our business.
          </p>
          <p className="text-gray-600 mb-2">
            Skills Required: HTML, CSS, JavaScript, React
          </p>
          <p className="text-gray-600 mb-2">
            Budget: $500 - $1000 | Timeline: 2 weeks
          </p>
        </div>

        {/* Proposal Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Cover Letter */}
          <div>
            <label
              htmlFor="coverLetter"
              className="block text-sm font-medium text-gray-700"
            >
              Cover Letter
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Explain why you're a good fit for this project..."
              value={formData.coverLetter}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Budget */}
          <div>
            <label
              htmlFor="budget"
              className="block text-sm font-medium text-gray-700"
            >
              Estimated Budget ($)
            </label>
            <input
              type="number"
              id="budget"
              name="budget"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your estimated budget"
              value={formData.budget}
              onChange={handleChange}
              required
            />
          </div>

          {/* Timeline */}
          <div>
            <label
              htmlFor="timeline"
              className="block text-sm font-medium text-gray-700"
            >
              Estimated Timeline (days)
            </label>
            <input
              type="number"
              id="timeline"
              name="timeline"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your estimated timeline"
              value={formData.timeline}
              onChange={handleChange}
              required
            />
          </div>

          {/* File Attachment */}
          <div>
            <label
              htmlFor="attachment"
              className="block text-sm font-medium text-gray-700"
            >
              Attach Portfolio or Resume (Optional)
            </label>
            <input
              type="file"
              id="attachment"
              name="attachment"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              onChange={handleFileChange}
            />
          </div>

          {/* Submit Proposal Button */}
          <div className="mt-6 p-6 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Submit Proposal for</h2>
            <label className="block mt-4 text-sm font-medium">
              Bid Amount ($)
            </label>
            <input
              type="number"
              className="w-full p-2 border rounded-md mt-1"
              placeholder="Enter your bid amount"
            />

            <label className="block mt-4 text-sm font-medium">
              Cover Letter
            </label>
            <textarea
              className="w-full p-2 border rounded-md mt-1"
              placeholder="Write your cover letter here..."
              rows="4"
            ></textarea>

            <button className="mt-4 cursor-pointer bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md w-full">
              Submit Proposal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobBiddingPage;
