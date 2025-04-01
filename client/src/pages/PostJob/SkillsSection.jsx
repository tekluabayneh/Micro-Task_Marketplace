import React, { useState } from "react";

const SkillsSection = ({ skills }) => {
  return (
    <div className="mb-6 custom-shadow p-5">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Skills Required
      </h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <>
            <li
              key={index}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
            >
              <input
                type="text"
                value={skill}
                onChange={(e) => handleSkillChange(index, e.target.value)}
                className="w-full bg-transparent border-none outline-none text-blue-700"
              />
            </li>
            <button
              type="button"
              className="text-red-500 hover:text-red-700 cursor-pointer"
            >
              Remove
            </button>
          </>
        ))}
      </ul>
      <button
        type="button"
        className="px-4 m-4 py-2 bg-[var(--primary-color)] text-white rounded-md hover:bg-green-600 cursor-pointer"
      >
        Add Skill
      </button>
    </div>
  );
};

export default SkillsSection;
