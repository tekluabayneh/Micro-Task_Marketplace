// FilterBar.jsx
import React from "react";

const FilterBar = () => {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-6">
      <select name="country" className="px-4 py-2 text-sm border rounded-md">
        <option value="">All Countries</option>
        <option value="Ethiopia">Ethiopia</option>
        <option value="USA">USA</option>
        <option value="India">India</option>
      </select>

      <select name="role" className="px-4 py-2 text-sm border rounded-md">
        <option value="">All Roles</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="UI/UX Designer">UI/UX Designer</option>
      </select>
    </div>
  );
};

export default FilterBar;
