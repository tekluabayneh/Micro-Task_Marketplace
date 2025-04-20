import React from "react";

const Description_and_budget = ({ description, updateFields, budget }) => {
  return (
    <div className="space-y-6 animate-slide-in">
      <h2 className="text-2xl font-bold text-gray-800">Description</h2>
      <div className="space-y-2 md:col-span-2">
        <label htmlFor="jobDescription">Job Description</label>
        <textarea
          id="jobDescription"
          value={description}
          onChange={(e) => updateFields({ description: e.target.value })}
          placeholder="Describe the job responsibilities and qualifications..."
          className="w-full border-none rounded-sm outline-none py-1 bg-gray-100 pl-2 custom-shadow min-h-48"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="budget">Budget</label>
        <input
          id="budget"
          type="number"
          value={budget}
          max={5000}
          onChange={(e) => updateFields({ budget: e.target.value })}
          placeholder="e.g., 5000"
          className="w-full border-none rounded-sm outline-none py-1 bg-gray-100 pl-2 custom-shadow"
          required
        />
        <small className="text-gray-500">
          Specify the budget for the job (in USD)
        </small>
      </div>
    </div>
  );
};

export default Description_and_budget;
