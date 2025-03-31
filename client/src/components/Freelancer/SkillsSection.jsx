const SkillsSection = () => {
  const skills = ["FullStack Devloper |","React", "Node.js", "JavaScript", "Tailwind CSS", "MongoDB"];

  return (
    <div className="bg-white rounded-lg custom-shadow p-6 mb-8 relative flex flex-col gap-12 text-gray-600">
      <div className="flex flex-col relative">
        <span
          className="material-symbols-outlined absolute top-0 left-12 
           border-1 cursor-pointer  border-green-600  bg-white shadow-2xl rounded-full text-green-600 text-sm"
          style={{ fontSize: "18px" }}
        >
          edit
        </span>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Skills</h2>
        <div className="flex flex-wrap gap-1">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-full  font-medium text-xl text-gray-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="relative ">
        <span
          className="material-symbols-outlined absolute -top-4 right-0
           border-1 cursor-pointer  border-green-600  bg-white shadow-2xl rounded-full text-green-600 text-sm"
          style={{ fontSize: "18px" }}
        >
          edit
        </span>
        <p className="text-xs text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus vitae architecto dolore voluptatum magni laboriosam
          voluptate, in, similique voluptates, vel nisi! Neque quae odit alias
          debitis aperiam dignissimos a suscipit.
        </p>

        <button className="underline text-green-500 text-sm cursor-pointer">
          More..
        </button>
      </div>
    </div>
  );
};

export default SkillsSection;
