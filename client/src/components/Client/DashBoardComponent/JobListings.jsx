import React from "react";
import JobCard from "./JobCard";


const JobListings = ({ jobs, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-[220px] rounded-md bg-gray-100 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-medium text-gray-900 mb-1">
          No jobs found
        </h3>
        <p className="text-gray-600">Start by posting your first job</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
};

export default JobListings;
