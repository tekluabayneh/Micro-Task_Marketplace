const WorkHistorySection = () => {
  const workHistory = [
    {
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      duration: "Jan 2020 - Present",
      description:
        "Developed and maintained web applications using React and Node.js.",
    },
    {
      title: "Frontend Developer",
      company: "Web Design Co.",
      duration: "Jun 2018 - Dec 2019",
      description:
        "Designed and implemented responsive UI components using HTML, CSS, and JavaScript.",
    },
  ];

  return (
    <div className="bg-white rounded-lg custom-shadow p-6 mb-8 relative">
      <span
        className="material-symbols-outlined absolute top-6 left-37
           border-1 cursor-pointer  border-green-600  bg-white shadow-2xl rounded-full text-green-600 text-sm"
        style={{ fontSize: "18px" }}
      >
        edit
      </span>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Work History</h2>
      <div className="space-y-4">
        {workHistory.map((job, index) => (
          <div key={index}>
            <h3 className="text-gray-800 font-medium">{job.title}</h3>
            <p className="text-sm text-gray-600">{job.company}</p>
            <p className="text-sm text-gray-500">{job.duration}</p>
            <p className="text-gray-700 mt-1 text-xs">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkHistorySection;
