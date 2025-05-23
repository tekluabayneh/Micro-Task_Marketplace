import React, { useEffect, useState } from "react";
import { Briefcase } from "lucide-react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const FR_MyJobs = () => {
  const [fetchJobs, setFetchJobs] = useState([]);
  // Fetch bidding jobs
  const fetchBiddingJobs = async () => {
    const email = localStorage.getItem("userEmail");
    if (!email) throw new Error("No email found in localStorage");
    const response = await axios.get(
      "https://micro-task-marketplace.onrender.com/api/freelancer/bidding-jobs",
      { params: { email } }
    );
    setFetchJobs(response.data.response || []);
    return response.data.response || [];
  };

  const { data: biddingJobs = [] } = useQuery({
    queryKey: ["biddingJobs", localStorage.getItem("userEmail")],
    queryFn: fetchBiddingJobs,
    enabled: !!localStorage.getItem("userEmail"),
  });

  return (
    <div className="min-h-screen  p-6 md:p-10 mt-12`">
      {/* Header with job count */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 flex items-center gap-4">
          <div className="bg-white/30 p-3 rounded-lg">
            <Briefcase className="w-8 h-8 " />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold  mb-1 ">My Jobs</h1>
            <p className="">You have {fetchJobs.length} Active Projects</p>
          </div>
        </div>
      </div>

      {/* Jobs grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fetchJobs.map((job) => (
          <div
            key={job.id}
            className="group  bg-white/60 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:translate-y-[-4px] hover:bg-white/20 border border-black/10"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-black group-hover:text-gray-400/90">
                  {job.jobTitle}
                </h2>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    job.status === "Completed"
                      ? "bg-green-400/20 text-green-500"
                      : job.status === "In Progress"
                      ? "bg-blue-400/20 text-blue-500"
                      : "bg-yellow-400/20 text-yellow-500"
                  }`}
                >
                  {job.status}
                </span>
              </div>

              <p className="mb-4 font-medium">{job.client}</p>

              <div className="flex justify-between items-center text-sm">
                <span>
                  Due: {new Date(job.created_at).toLocaleDateString()}
                </span>
                <span className="font-bold ">{job.budget}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FR_MyJobs;
