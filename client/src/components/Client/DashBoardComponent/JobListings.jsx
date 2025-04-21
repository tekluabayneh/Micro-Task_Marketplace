import React from "react";
import JobCard from "./JobCard";
import MyJobs from "../../../pages/Jobs/MYPostedProjects";

const JobListings = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <MyJobs />
    </div>
  );
};

export default JobListings;
