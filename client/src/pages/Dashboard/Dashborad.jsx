// src/pages/Index.tsx
import React from "react";
import DashboardSection from "../../components/Client/DashBoardComponent/DashboardSection";
import StatsCard from "../../components/Client/DashBoardComponent/StatsCard";
import DashboardTabs from "../../components/Client/DashBoardComponent/DashboardTabs";
import JobListings from "../../components/Client/DashBoardComponent/JobListings";
import RecommendationsList from "../../components/Client/DashBoardComponent/RecommendationsList";
import { PlusCircle } from "lucide-react";
// import { statsData } from "../../components/Client/DashBoardComponent/sampleData";
import { Link } from "react-router-dom";
import useFetch from "../../components/hooks/Fetch";
const statsData = [
  {
    title: "Total Jobs",
    value: "12",
    icon: "briefcase",
    change: "+5%",
    trend: "up",
    color: "blue",
  },
  {
    title: "Applications",
    value: "156",
    icon: "users",
    change: "+12%",
    color: "green",
    trend: "up",
  },
  {
    title: "Interviews",
    value: "38",
    icon: "calendar",
    color: "green",
    change: "+2%",
    trend: "up",
  },
  {
    title: "Avg. Response",
    value: "4h",
    icon: "clock",
    change: "-10%",
    color: "red",
    trend: "down",
  },
];
const Dashborad = () => {
  const userEmail = localStorage.getItem("userEmail");

  const { data } = useFetch(
    `http://localhost:5000/myJobs/myJobs?email=${userEmail}`
  );

  let count = 0;
  let TotalJob = data.length;
  if (data) {
    data.map((data, index) => {
      count += data.proposal;
    });
  }

  statsData.map((stat, index) => {
    if (stat.title === "Total Jobs") {
      stat.value = TotalJob;
    }
    if (stat.title === "Applications") {
      stat.value = count;
    }
    if (stat.title === "Interviews") {
      stat.value = count;
    }
  });

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
          <Link to={"/Client/JobPost"}>New Job</Link>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <DashboardSection
        title="Job Management"
        rightContent={
          <button
            size="sm"
            variant="outline"
            className="gap-1 text-green-500 flex items-center border p-1 border-green-400 hover:bg-green-500 hover:text-white cursor-pointer rounded-sm text-nowrap"
          >
            <PlusCircle size={16} />
            <Link to={"/Client/JobPost"}>New Job</Link>
          </button>
        }
      >
        <DashboardTabs tab1={<JobListings />} tab2={<RecommendationsList />} />
      </DashboardSection>
    </div>
  );
};

export default Dashborad;
