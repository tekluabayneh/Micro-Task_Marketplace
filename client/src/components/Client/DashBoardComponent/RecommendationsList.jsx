import RecommendationCard from "./RecommendationCard";
import MyJobs from "../../../pages/Jobs/MYPostedProjects";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Toaster } from "sonner";
import axios from "axios";
import Loading from "../../Loading/Loading";
const RecommendationsList = () => {
  const [invitedFreelancers, setInvitedFreelancers] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const aiResponse = [
    {
      freelancer: "Backend Developer",
      score: 9,
      reason:
        "A strong candidate for Jobs 1, 5, and 6. Possesses essential skills such as Node, C, and C++. Expert level experience aligns well with the technical requirements, and the hourly rate is reasonable, availability is good.",
    },
    {
      freelancer: "Full Stack Web Developer",
      score: 8,
      reason:
        "Fits Job 2 well. Has React, Node.js. Mid-level experience matches the job requirements, with the reasonable hourly rate of $35.00 and good availability.",
    },
    {
      freelancer: "Node, React, Java, Go, Ai, CharGpt, C, C++",
      score: 7,
      reason:
        "Fits Jobs 1, 3, 4, 5 and 6 well, as they include Node, React, Java, and C. No hourly rate provided but has the right experience. Availability is a problem since it's zero",
    },
    {
      freelancer: "Node, Go, Java, React, Ruby, Flutter",
      score: 6,
      reason:
        "Fits Jobs 1, 3, 4, 5 and 6 well, as they include Node, React, Java, and C. The hourly rate of $30 is fair. Availability is a problem since it's zero",
    },
    {
      freelancer: "Frontend Developer",
      score: 6,
      reason:
        "Fits Job 1 well. Has React, Tailwindcss, Go, Ruby, and Node. No hourly rate provided and availability is zero",
    },
  ];

  // Function to get color based on score
  const getScoreColor = (score) => {
    if (score >= 9) return "bg-gradient-to-r from-purple-600 to-purple-400";
    if (score >= 8) return "bg-gradient-to-r from-purple-500 to-purple-300";
    if (score >= 7) return "bg-gradient-to-r from-purple-400 to-indigo-300";
    if (score >= 6) return "bg-gradient-to-r from-indigo-400 to-blue-300";
    return "bg-gradient-to-r from-blue-400 to-blue-300";
  };

  // Function to handle invite button click
  const handleInvite = (freelancer) => {
    if (invitedFreelancers.includes(freelancer)) {
      toast.error(`${freelancer} has already been invited`);
      return;
    }

    setInvitedFreelancers([...invitedFreelancers, freelancer]);
    toast.success(`Invitation sent to ${freelancer}`);
  };
  useEffect(() => {
    const handleFetchAiRecomendation = async () => {
      let email = localStorage.getItem("userEmail");
      try {
        const response = await axios.get(
          "http://localhost:5000/api/recommendation",
          {
            params: {
              email,
            },
          }
        );

        const raw = response.data.Ai_response;
        const cleaned =
          typeof raw === "string"
            ? JSON.parse(raw.replace(/```json|```/g, ""))
            : raw;

        setData(cleaned);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recommendation:", error);
        setLoading(false);
      }
    };
    handleFetchAiRecomendation();
  }, []);
  if (loading) return <Loading />;
  if (!data)
    return (
      <p className="text-center">
        No recommendation found. because you don't have any job posted
      </p>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Toaster richColors />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-light to-purple-dark">
              Talent Match
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            Top matched freelancers based on your job requirements
          </p>
        </div>

        <div className="grid gap-8 mb-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row">
                {/* Score section */}
                <div className="w-full md:w-24 flex flex-row md:flex-col items-center justify-center p-4 md:p-6 border-b md:border-b-0 md:border-r border-gray-100">
                  <div
                    className={`${getScoreColor(
                      item.score
                    )} text-white font-bold rounded-full w-16 h-16 flex items-center justify-center text-2xl animate-pulse-slow shadow-md`}
                  >
                    {item.score}
                  </div>
                  <span className="ml-2 md:ml-0 md:mt-2 text-sm font-medium text-gray-500">
                    Match Score
                  </span>
                </div>

                {/* Content section */}
                <div className="flex-1 p-6 md:pl-8">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-bold text-gray-900">
                      {item.freelancer}
                    </h2>
                    <button
                      onClick={() => handleInvite(item.freelancer)}
                      className={`ml-4 px-4 py-2 rounded-lg text-sm font-medium transition duration-200 transform hover:scale-105 cursor-pointer shadow-md ${
                        invitedFreelancers.includes(item.freelancer)
                          ? "bg-green-100 text-green-800 border border-green-300"
                          : "bg-purple-600 text-white hover:bg-purple-700"
                      }`}
                    >
                      {invitedFreelancers.includes(item.freelancer)
                        ? "Invited"
                        : "Invite for Job"}
                    </button>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mt-4 text-gray-700 shadow-sm">
                    <h3 className="font-medium text-gray-900 mb-1">
                      Match Reason:
                    </h3>
                    <p>{item.reason}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendationsList;
