import { useEffect, useState } from "react";
import { DollarSign, FileText, Clock } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import axios from "axios";
import Loading from "../Loading/Loading";
import { useQuery } from "@tanstack/react-query";

const FreelancerEarnings = () => {
  const [freelancerProfileData, setFreelancerProfileData] = useState(null);
  const [customLoading, setCustomLoading] = useState(true);
  const [customError, setCustomError] = useState(null);
  const [fetchJobs, setFetchJobs] = useState([]);

  // Fetch freelancer profile data (includes earned)
  useEffect(() => {
    const fetchFreelancerProfile = async () => {
      try {
        const email = localStorage.getItem("userEmail");
        if (!email) throw new Error("No email found in localStorage");
        const response = await axios.get(
          "https://micro-task-marketplace.onrender.com/api/FreelancerProfileData",
          { params: { email } }
        );
        if (response.data && response.data.length > 0) {
          setFreelancerProfileData(response.data);
        } else {
          setFreelancerProfileData(null);
        }
      } catch (error) {
        console.error("❌ Error fetching client profile:", error);
        setCustomError("Failed to fetch profile. Please try again.");
      } finally {
        setCustomLoading(false);
      }
    };
    fetchFreelancerProfile();
  }, []);

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

  // Derive monthly earnings from total earned
  const userData = freelancerProfileData?.[0] ?? {};
  const totalEarnings = parseFloat(userData.earned || "0").toFixed(2);
  const proposalCount = userData.proposal_count || 0;
  const hourlyRate = parseFloat(userData.hourly_rate || "0").toFixed(2);

  // Simulate monthly earnings by dividing total earned over 6 months
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const weights = [0.1, 0.15, 0.2, 0.25, 0.2, 0.1];
  const earningsData = months.map((month, index) => {
    const amount = parseFloat(totalEarnings) * weights[index];
    return {
      month,
      amount: parseFloat(amount.toFixed(2)),
    };
  });

  // Store user data in localStorage
  localStorage.setItem("f_userImg", userData.image ?? "not provided");
  localStorage.setItem("F_username", userData.name ?? "not provided");

  if (customLoading) {
    return (
      <div className="mt-20 text-center">
        <Loading />
      </div>
    );
  }

  if (customError) {
    return <div className="mt-20 text-center text-red-500">{customError}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 mt-12">
      {/* Header */}
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-gray-800">Earnings Dashboard</h1>
        <p className="text-sm text-gray-500 mt-2">
          Overview of your earnings and proposals
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Earnings</p>
              <h3 className="text-2xl font-bold text-gray-800">
                ${totalEarnings}
              </h3>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <FileText className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Proposals Submitted</p>
              <h3 className="text-2xl font-bold text-gray-800">
                {proposalCount}
              </h3>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Hourly Rate</p>
              <h3 className="text-2xl font-bold text-gray-800">
                ${hourlyRate}/hr
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8 animate-fade-in">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Earnings Overview
        </h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={earningsData}>
              <defs>
                <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="amount"
                stroke="#8B5CF6"
                fillOpacity={1}
                fill="url(#colorAmount)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in">
        <h2 className="text-xl font-semibold p-6 border-b border-gray-100 text-gray-800">
          Bidding Jobs
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                  Project
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                  Budget
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {fetchJobs.map((project, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {project.jobTitle}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    ${project.budget}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        project.status === "bidding"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FreelancerEarnings;
