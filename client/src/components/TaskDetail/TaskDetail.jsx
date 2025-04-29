import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Briefcase,
  Clock,
  DollarSign,
  User,
  Tag,
  BarChart,
  Calendar,
} from "lucide-react";
import { Badge } from "../Badge/Badge";
import { Button } from "../Buttons/button";
import { Card } from "../Card/Card";

const TaskDetailsPage = ({ isApplied, setIsApplied, SingleJobDescription }) => {
  let {
    id,
    clientId,
    jobTitle,
    description,
    jobSize,
    budget,
    experience,
    payment,
    proposal,
    skills,
    status,
    created_at,
  } = SingleJobDescription;

  const parsedSkills = skills ? JSON.parse(skills) : [];
  localStorage.setItem("job_id", id);
  localStorage.setItem("client_id", clientId);
  // Format date to be more readable
  const formattedDate = new Date(created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleApply = () => {
    setIsApplied(!isApplied);
  };

  const handleClose = () => {
    setIsApplied(false);
  };

  // Map job size to more descriptive text
  const jobSizeMap = {
    small: "Small Project (< 1 month)",
    medium: "Medium Project (1-3 months)",
    large: "Large Project (> 3 months)",
  };

  // Map experience levels to more descriptive text
  const experienceMap = {
    junior: "Junior (1-2 years)",
    mid: "Mid-Level (3-5 years)",
    senior: "Senior (5+ years)",
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 
        ${isApplied ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <main
        className={`fixed top-12 right-0 h-full w-full md:w-4/5 lg:w-3/4 xl:w-2/3 bg-white transform transition-transform duration-300 overflow-auto z-40 ${
          isApplied ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 p-4 flex justify-between items-center shadow-sm">
          <button
            onClick={handleClose}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span className="font-medium cursor-pointer">Back to Jobs</span>
          </button>

          <div className="space-x-2">
            <Badge
              variant={status === "open" ? "success" : "secondary"}
              className="capitalize"
            >
              {status}
            </Badge>
            <Badge
              variant="outline"
              className="bg-blue-50 text-blue-700 border-blue-200"
            >
              ID: {id}
            </Badge>
          </div>
        </div>

        <div className="flex flex-col md:flex-row p-6 md:space-x-6">
          {/* Main Content */}
          <div className="flex-1 space-y-8 ">
            {/* Job Header */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {jobTitle}
              </h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Posted: {formattedDate}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <BarChart className="h-4 w-4 mr-1" />
                  <span>
                    {experienceMap[(experience, experienceMap)] || experience}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Briefcase className="h-4 w-4 mr-1" />
                  <span>{jobSizeMap[(jobSize, jobSizeMap)] || jobSize}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <User className="h-4 w-4 mr-1" />
                  <span>Proposals: {proposal}</span>
                </div>
              </div>
            </div>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Job Description</h2>
              <p className="text-gray-700 whitespace-pre-line mb-6">
                {description}
              </p>

              <div className="my-6" />

              <div>
                <h3 className="text-lg font-medium mb-3">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {parsedSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-gray-50 font-medium py-1"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="p-6 mb-12">
              <h2 className="text-xl font-semibold mb-4">Project Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm text-gray-500 uppercase tracking-wider">
                    Project Size
                  </h3>
                  <p className="font-medium text-gray-800 mt-1">
                    {jobSizeMap[(jobSize, jobSizeMap)] || jobSize}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm text-gray-500 uppercase tracking-wider">
                    Experience Level
                  </h3>
                  <p className="font-medium text-gray-800 mt-1">
                    {experienceMap[(experience, experienceMap)] || experience}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm text-gray-500 uppercase tracking-wider">
                    Budget
                  </h3>
                  <p className="font-medium text-gray-800 mt-1 flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" /> {budget}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm text-gray-500 uppercase tracking-wider">
                    Payment Status
                  </h3>
                  <div className="flex items-center mt-1">
                    <Badge
                      variant={payment === "verified" ? "success" : "secondary"}
                      className="capitalize"
                    >
                      {payment}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-64 mt-6 md:mt-0 mb-12 m:mb-0">
            <div className="sticky top-20">
              <Card className="p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Apply for this Job
                </h2>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  size="lg"
                  onClick={handleApply}
                  asChild
                >
                  <Link to={"/Freelancer/JobBidding"}>Apply Now</Link>
                </Button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  <Clock className="h-3 w-3 inline-block mr-1" />
                  Quick application
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-medium mb-3">About the Client</h3>
                <div className="space-y-2 text-sm">
                  <p className="flex justify-between">
                    <span className="text-gray-500">Client ID:</span>
                    <span className="font-medium">{clientId}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-500">Job Posts:</span>
                    <span className="font-medium">1</span>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TaskDetailsPage;
