import React from "react";

const Education = () => {
  const profileData = {
    education: [
      {
        institution: "freeCodeCamp",
        qualification: "Fullstack Development",
      },
    ],
  };
  return (
    <div className="relative">
      <span
        className="material-symbols-outlined absolute top-2 left-27
           border-1 cursor-pointer  border-green-600  bg-white shadow-2xl rounded-full text-green-600 text-sm"
        style={{ fontSize: "18px" }}
      >
        edit
      </span>
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Education</h2>
      {profileData.education.length > 0 ? (
        <ul className="space-y-1 text-gray-700">
          {profileData.education.map((edu, index) => (
            <li key={index}>
              <strong>{edu.institution}:</strong> {edu.qualification}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No education details available.</p>
      )}
    </div>
  );
};

export default Education;
