import React from "react";

const Experience = ({ jobSize, experience, updateFields }) => {
  return (
    <div className="space-y-6 animate-slide-in">
      <h2 className="text-2xl font-bold text-gray-800">
        Add Experience & Level
      </h2>
      <div className="w-full grid grid-cols-1  gap-6">
        <div className="m-4 w-full  space-y-4">
          <label
            htmlFor="jobSize"
            className="block text-lg font-semibold text-gray-800"
          >
            Job Size
          </label>
          <div className="flex flex-wrap gap-5 md:justify-center">
            <div className="flex items-center space-x-2 custom-shadow p-12 rounded-sm cursor-pointer">
              <input
                id="small"
                type="radio"
                name="jobSize"
                value="small"
                checked={jobSize === "small"}
                onChange={(e) => updateFields({ jobSize: e.target.value })}
                className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="small" className="text-gray-600">
                Small
              </label>
            </div>
            <div className="flex items-center space-x-2 custom-shadow p-12 rounded-sm cursor-pointer">
              <input
                id="medium"
                type="radio"
                name="jobSize"
                value="medium"
                checked={jobSize === "medium"}
                onChange={(e) => updateFields({ jobSize: e.target.value })}
                className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="medium" className="text-gray-600">
                Medium
              </label>
            </div>

            <div className="flex items-center space-x-2 custom-shadow p-12 rounded-sm cursor-pointer">
              <input
                id="large"
                type="radio"
                name="jobSize"
                value="large"
                checked={jobSize === "large"}
                onChange={(e) => updateFields({ jobSize: e.target.value })}
                className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="large" className="text-gray-600">
                Large
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="experienceLevel">Experience Level</label>
          <select
            id="experienceLevel"
            value={experience}
            onChange={(e) => updateFields({ experience: e.target.value })}
            className="w-full border-none rounded-sm outline-none py-1 bg-gray-100 pl-2 custom-shadow"
          >
            <option value="">Select Experience Level</option>
            <option value="junior">junior Level</option>
            <option value="mid">Mid Level</option>
            <option value="expert">expert Level</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Experience;
