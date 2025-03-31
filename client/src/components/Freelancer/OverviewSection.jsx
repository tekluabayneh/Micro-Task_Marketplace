const OverviewSection = () => {
  return (
    <div className="bg-white rounded-lg custom-shadow p-6 mb-8 relative">
      <span
        className="material-symbols-outlined absolute top-6 left-27
           border-1 cursor-pointer  border-green-600  bg-white shadow-2xl rounded-full text-green-600 text-sm"
        style={{ fontSize: "18px" }}
      >
        edit
      </span>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Overview</h2>
      <p className="text-gray-700 text-xs">
        I am a full-stack developer with over 5 years of experience in building
        scalable web applications. My expertise lies in React, Node.js, and
        MongoDB. I enjoy solving complex problems and delivering high-quality
        solutions to clients.
      </p>
    </div>
  );
};

export default OverviewSection;
