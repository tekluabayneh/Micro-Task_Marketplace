import React from "react";
import Language from "./Lnaguage";
import Education from "./Education";

const FreelancerSidebar = () => {
  const profileData = {
    verifications: ["Military veteran"],
    licenses: [],
  };

  return (
    <div className="md:w-96 max-w-full p-4 bg-white custom-shadow rounded-lg">
      {/* language */}
      <Language />

      {/* Verifications */}
      <div className="mb-6 relative">
        <span
          className="material-symbols-outlined absolute top-3 left-27
           border-1 cursor-pointer  border-green-600  bg-white shadow-2xl rounded-full text-green-600 text-sm"
          style={{ fontSize: "18px" }}
        >
          edit
        </span>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Verifications
        </h2>
        {profileData.verifications.length > 0 ? (
          <ul className="space-y-1 text-gray-700">
            {profileData.verifications.map((verification, index) => (
              <li key={index}>{verification}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No verifications available.</p>
        )}
      </div>

      {/* Licenses */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Licenses</h2>
        {profileData.licenses.length > 0 ? (
          <ul className="space-y-1 text-gray-700">
            {profileData.licenses.map((license, index) => (
              <li key={index}>{license}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No licenses available.</p>
        )}
      </div>

      {/* Education */}
      <Education />
    </div>
  );
};

export default FreelancerSidebar;
