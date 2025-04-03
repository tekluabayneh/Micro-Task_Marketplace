import React from "react";

const JobListings = () => {
  const jobs = [
    { title: "Build a React App", budget: "$500", posted: "2 days ago" },
    { title: "Design a Logo", budget: "$100", posted: "1 day ago" },
    { title: "Write Blog Articles", budget: "$200", posted: "3 days ago" },
    { title: "Write Blog Articles", budget: "$200", posted: "3 days ago" },
    { title: "Write Blog Articles", budget: "$200", posted: "3 days ago" },
    { title: "Write Blog Articles", budget: "$200", posted: "3 days ago" },
    { title: "Write Blog Articles", budget: "$200", posted: "3 days ago" },
    { title: "Write Blog Articles", budget: "$200", posted: "3 days ago" },
    { title: "Write Blog Articles", budget: "$200", posted: "3 days ago" },
    { title: "Write Blog Articles", budget: "$200", posted: "3 days ago" },
    { title: "Write Blog Articles", budget: "$200", posted: "3 days ago" },
    { title: "Write Blog Articles", budget: "$200", posted: "3 days ago" },
    { title: "Write Blog Articles", budget: "$200", posted: "3 days ago" },
    { title: "Write Blog Articles", budget: "$200", posted: "3 days ago" },
    { title: "Write Blog Articles", budget: "$200", posted: "3 days ago" },
    { title: "Write Blog Articles", budget: "$200", posted: "3 days ago" },
    { title: "Write Blog Articles", budget: "$200", posted: "3 days ago" },
    { title: "Write Blog Articles", budget: "$200", posted: "3 days ago" },
    { title: "Write Blog Articles", budget: "$200", posted: "3 days ago" },
    { title: "Write Blog Articles", budget: "$200", posted: "3 days ago" },
    { title: "Write Blog Articles", budget: "$200", posted: "3 days ago" },
    { title: "Write Blog Articles", budget: "$200", posted: "3 days ago" },
  ];

  return (
    <div className="p-1">
      <h2 className="text-lg font-semibold mb-4">Search for Jobs</h2>
      <input type="text" name="" id="" />
      <ul className="space-y-1">
        {jobs.map((job, index) => (
          <li
            key={index}
            className="p-4 bg-gray-50 custom-shadow cursor-pointer h-64"
          >
            <h3 className="font-medium">{job.title}</h3>
            <p className="text-gray-600">
              Budget: <strong>{job.budget}</strong>
            </p>
            <p className="text-gray-500 text-sm">Posted: {job.posted}</p>
          </li>
        ))}
      </ul>
      <button className="w-full  underline cursor-pointer text-[var(--primary-color)]">
        Load Mre
      </button>
    </div>
  );
};

export default JobListings;
