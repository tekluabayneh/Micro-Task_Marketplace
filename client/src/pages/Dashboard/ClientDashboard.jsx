// ClientDashboard.jsx
import React from "react";
import FilterBar from "../../components/Client/FilterBar";

const freelancers = [
  {
    id: 1,
    name: "Sara Daniel",
    role: "Frontend Developer",
    skills: ["React", "JavaScript", "Tailwind"],
    rate: "$25/hr",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },

  {
    id: 2,
    name: "Samuel Bekele",
    role: "UI/UX Designer",
    skills: ["Figma", "UX Research", "Design Systems"],
    rate: "$20/hr",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 3,
    name: "Hanna Getachew",
    role: "Backend Developer",
    skills: ["Node.js", "MongoDB", "API"],
    rate: "$30/hr",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
];

const ClientDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-6 py-10 mt-12">
      <FilterBar />

      <ul className="space-y-4">
        {freelancers.map((freelancer) => (
          <li
            key={freelancer.id}
            className="bg-white custom-shadow p-4 rounded-xl hover:bg-gray-50 cursor-pointer flex items-start gap-4"
          >
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt={freelancer.name}
              className="w-16 h-16 rounded-full object-cover mt-1 border"
            />

            <div className="flex-1 flex flex-col gap-1">
              <h2 className="text-lg font-medium text-gray-800">
                {freelancer.name}
              </h2>
              <p className="text-sm text-gray-500">{freelancer.role}</p>

              <div className="flex gap-2 flex-wrap mt-1">
                {freelancer.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <p className="text-sm mt-1 text-gray-600 font-medium">
                Rate: {freelancer.rate}
              </p>

              <button className="mt-2 self-start bg-blue-600 text-white px-4 py-1.5 text-sm rounded-lg hover:bg-blue-700 transition">
                Invite to Job
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className="w-full cursor-pointer hover:underline text-green-500 my-4 flex justify-center">
        Load More
      </button>
    </div>
  );
};

export default ClientDashboard;
