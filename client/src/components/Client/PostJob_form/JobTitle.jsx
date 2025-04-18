import React from "react";
const JobTitle = ({ jobTitle, updateFields }) => {
  return (
    <div className="space-y-6 animate-slide-in">
      <h2 className="text-2xl font-bold text-gray-800">
        Job Posting Information
      </h2>
      <p className="text-gray-600 text-sm p-3">
        To create your job listing, please provide the job title below. This
        will be displayed on the job board and is an essential part of
        attracting the right candidates.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="jobTitle" className="font-semibold text-gray-700">
            Job Title
          </label>
          <input
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => updateFields({ jobTitle: e.target.value })}
            placeholder="e.g., Front-End Developer"
            className="w-full border-none rounded-sm outline-none py-2 bg-gray-100 pl-3 custom-shadow"
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            The job title is one of the first things potential candidates will
            see, so make sure it clearly describes the role you're hiring for.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobTitle;
