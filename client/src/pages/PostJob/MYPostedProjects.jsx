const jobs = [
  {
    id: 1,
    title: "Build a React Admin Dashboard",
    budget: "$400",
    status: "Open",
    applicants: 12,
  },
  {
    id: 2,
    title: "WordPress SEO Optimization",
    budget: "$200",
    status: "In Progress",
    applicants: 8,
  },
  {
    id: 3,
    title: "Mobile App UI Design",
    budget: "$500",
    status: "Completed",
    applicants: 5,
  },
];

const MyJobs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          My Posted Jobs
        </h2>

        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-200 p-5"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {job.title}
                </h3>
                <span
                  className={`text-sm px-3 py-1 rounded-full font-medium ${
                    job.status === "Open"
                      ? "bg-green-100 text-green-700"
                      : job.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {job.status}
                </span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>💰 Budget: {job.budget}</span>
                <span>👥 Applicants: {job.applicants}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyJobs;
