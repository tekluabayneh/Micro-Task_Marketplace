// src/pages/Index.tsx
import React, { useState } from "react";

import DashboardSection from "./DashboardSection";
import StatsCard from "./StatsCard";
import DashboardTabs from "./DashboardTabs";
import JobListings from "./JobListings";
import RecommendationsList from "./RecommendationsList";
import { useIsMobile } from "../../hooks/use-mobile";
import { Filter, PlusCircle } from "lucide-react";
import { sampleJobs, sampleRecommendations, statsData } from "./sampleData";
const Dashborad = () => {
  const isMobile = useIsMobile();

  const jobsContent = (
    <div>
      <JobListings jobs={sampleJobs} />
    </div>
  );

  const recommendationsContent = (
    <div>
      <RecommendationsList recommendations={sampleRecommendations} />
    </div>
  );

  return (
    <div className="flex flex-col gap-6 mt-12">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back to your client dashboard</p>
        </div>

        <button
          size="sm"
          variant="outline"
          className="gap-1 text-green-500 flex items-center border p-1 border-green-400 hover:bg-green-500 hover:text-white cursor-pointer rounded-sm text-nowrap"
        >
          <PlusCircle size={16} />
          <span>New Job</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <DashboardSection
        title="Job Management"
        description="Manage your job postings and view applications"
        rightContent={
          <button
            size="sm"
            variant="outline"
            className="gap-1 text-green-500 flex items-center border p-1 border-green-400 hover:bg-green-500 hover:text-white cursor-pointer rounded-sm text-nowrap"
          >
            <PlusCircle size={16} />
            <span>New Job</span>
          </button>
        }
      >
        <DashboardTabs
          tab1={<JobListings jobs={sampleJobs} />}
          tab2={<RecommendationsList recommendations={sampleRecommendations} />}
        />
      </DashboardSection>
    </div>
  );
};

export default Dashborad;
