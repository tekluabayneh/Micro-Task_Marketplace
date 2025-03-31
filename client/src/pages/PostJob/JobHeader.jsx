const JobHeader = ({ title, description }) => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default JobHeader;
