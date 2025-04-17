// ClientDashboard.jsx
import React, { useState } from "react";
import FilterBar from "../../components/Client/FilterBar";
import { Link } from "react-router-dom";
import LoadMore from "../../components/LoadMoreButton/LoadMore";

const freelancers = [
  {
    id: 1,
    name: "Sara Daniel",
    location: "Ethiopia",

    paragraph:
      "I am a qualified,talented co-operative and self-motivated Graphic designer. I have over 13 years of experience in Advertising & Direct Marketing. I am very familiar with Graphic Design, as I have done many creative projects for clients in",
    role: "Frontend Developer",
    skills: ["React", "JavaScript", "Tailwind"],
    earned: "12$",
    rate: "$25/hr",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },

  {
    id: 2,
    name: "Samuel Bekele",
    role: "UI/UX Designer",
    location: "USA",
    earned: "12$",
    paragraph:
      "I am a qualified,talented co-operative and self-motivated Graphic designer. I have over 13 years of experience in Advertising & Direct Marketing. I am very familiar with Graphic Design, as I have done many creative projects for clients in",
    skills: ["Figma", "UX Research", "Design Systems"],
    rate: "$20/hr",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 3,
    earned: "12$",
    name: "Hanna Getachew",
    role: "Backend Developer",
    skills: ["Node.js", "MongoDB", "API"],
    rate: "$30/hr",
    location: "Canada",
    paragraph:
      "I am a qualified,talented co-operative and self-motivated Graphic designer. I have over 13 years of experience in Advertising & Direct Marketing. I am very familiar with Graphic Design, as I have done many creative projects for clients in",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
];

const ClientDashboard = () => {
  const [page, setPage] = useState(1);
  const handlePrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <div className="bg-gray-100 min-h-screen  py-10 mt-12">
      <FilterBar />

      <ul className="space-y-1">
        {freelancers.map((freelancer) => (
          <li key={freelancer.id}>
            <Link className="bg-white h-auto md:h-52 custom-shadow p-4 rounded-sm hover:bg-gray-50 cursor-pointer flex flex-col md:flex-row items-start gap-4">
              <div className="flex gap-3 flex-col md:flex-row">
                <div className="w-16 h-16 rounded-full  ">
                  <img
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    className="w-16 h-16 rounded-full object-cover mt-1 border"
                  />
                </div>

                <div className="flex-1 flex flex-col gap-1">
                  <h2 className="text-lg font-medium text-gray-600 leading-5">
                    {freelancer.name}
                  </h2>
                  <p className="text-lg text-gray-800 leading-3 font-bold">
                    {freelancer.role}
                  </p>
                  <p className="text-sm text-gray-500 leading-3 text-xs">
                    {freelancer.location}
                  </p>

                  <div className="flex gap-5 items-center ">
                    <p className="text-xs mt-1 text-gray-600 font-medium ">
                      Earned:{freelancer.earned}
                    </p>
                    <p className="text-xs mt-1 text-gray-600 font-medium">
                      Rate: {freelancer.rate}
                    </p>
                  </div>

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

                  <p className="text-xs md:mt-1 text-gray-600 font-medium">
                    {freelancer.paragraph}...
                  </p>
                </div>
              </div>

              {/*  */}
              <button className="md:mt-2 w-full md:w-auto text-nowrap self-start bg-[var(--primary-color)] text-white md:px-4 py-1.5 text-sm rounded-lg hover:bg-black cursor-pointer transition">
                Invite to Job
              </button>

              {/*  */}
            </Link>
          </li>
        ))}
      </ul>
      <div className="p-6">
        <LoadMore count={page} onPrev={handlePrev} onNext={handleNext} />
      </div>
    </div>
  );
};

export default ClientDashboard;
