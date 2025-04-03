import React from "react";
import Navbar from "../../components/common/Navbar";
import Sidebar from "../../components/common/Sidebar";
import JobListings from "../../components/Freelancer/dashboard/JobListings";

const FreelancerDashboardPage = () => {
  return (
    <div className="flex w-full  flex-col  min-h-screen bg-gray-100 text-gray-800 mt-18 bg-gray-50">
      <div className="flex flex-1 flex-col-reverse md:flex-row ">
        <div className="h-screen w-full flex-1space-y-1 overflow-y-scroll custom-ScrollTum">
          {/* Navbar */}
          <Navbar />

          {/* Job Listings */}
          <JobListings />
        </div>

        {/* Sidebar */}
        <div className="">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default FreelancerDashboardPage;
