import React, { useState } from "react";

const TaskRequirements = () => {
  const [requirements, setRequirements] = useState([""]);

  const handleRequirementChange = (index, value) => {
    const updatedRequirements = [...requirements];
    updatedRequirements[index] = value;
    setRequirements(updatedRequirements);
  };

  const handleAddRequirement = () => {
    setRequirements([...requirements, ""]);
  };

  const handleRemoveRequirement = (index) => {
    const updatedRequirements = requirements.filter((_, i) => i !== index);
    setRequirements(updatedRequirements);
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Task Requirements
      </h2>

      {requirements.map((requirement, index) => (
        <div key={index} className="flex items-center space-x-4 mb-3">
          <input
            type="text"
            value={requirement}
            onChange={(e) => handleRequirementChange(index, e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter a task requirement..."
          />
          <button
            type="button"
            onClick={() => handleRemoveRequirement(index)}
            className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
          >
            X
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={handleAddRequirement}
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Add Another Requirement
      </button>
    </div>
  );
};

export default TaskRequirements;
