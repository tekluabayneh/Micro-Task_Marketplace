import useFetch from "../../components/hooks/Fetch";

const MyJobs = () => {
  const userEmail = localStorage.getItem("userEmail");

  const { data, loading, error } = useFetch(
    `https://micro-task-marketplace.onrender.com/myJobs/myJobs?email=${userEmail}`
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 mt-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          My Posted Jobs
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading jobs...</p>
        ) : error ? (
          <p className="text-center text-red-500">Something went wrong.</p>
        ) : data.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.map((job) => (
              <div
                key={job.id}
                className="bg-white custom-ScrollTum rounded-2xl shadow-lg hover:shadow-xl overflow-scroll transition duration-200 p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {job.jobTitle}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-3 w-80">
                      {job.description}
                    </p>
                  </div>
                  <span
                    className={`text-sm px-3 py-1 rounded-full font-medium ${
                      job.status === "open"
                        ? "bg-green-100 text-green-700"
                        : job.status === "in progress"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {job.status}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 text-sm text-gray-700 mb-4">
                  <span>💰 Budget: ${job.budget}</span>
                  <span>📏 Size: {job.jobSize}</span>
                  <span>⚙️ Experience: {job.experience}</span>
                </div>

                {/* ✅ Properly display skills */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {JSON.parse(job.skills).map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-10">
            <h1>You don't have any jobs posted yet!</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyJobs;
