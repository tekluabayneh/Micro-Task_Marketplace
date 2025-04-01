import React, { useState } from "react";

const BudgetSection = ({
  initialBudget,
  initialPostedDate,
  initialProposals,
}) => {
  const [isHourlyRate, setIsHourlyRate] = useState(true);
  // State to manage the input values
  const [budget, setBudget] = useState(initialBudget);
  const [postedDate, setPostedDate] = useState(initialPostedDate);
  const [proposals, setProposals] = useState(initialProposals);

  return (
    <main className=" custom-shadow  p-6">
      <h1 className="text-4xl">Tell us about your budget.</h1>
      <div className="flex justify-between gap-5 flex-col md:flex-row  items-center m-6 ">
        {/* Budget Input */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Budget</h3>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700"
          />
        </div>

        {/* Proposals Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            Billing Type
          </h3>
          <div className="flex gap-2">
            {/* Hourly Rate Button */}
            <button
              className={`px-4 py-2 rounded-md cursor-pointer ${
                isHourlyRate
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Hourly Rate
            </button>

            {/* Monthly Button */}
            <button
              className={`px-4 py-2 rounded-md cursor-pointer ${
                !isHourlyRate
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BudgetSection;
