import React, { useState } from "react";
import Language from "./Lnaguage";
import Education from "./Education";
import DynamicPortal from "../Modal/Modal";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { update } from "../Slices/FreelancerProfileSettingSlice";

const FreelancerSidebar = ({ data }) => {
  let { education, Licenses, isVerified } = data
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  return (
    <div className="md:w-96 max-w-full p-4 bg-white custom-shadow rounded-lg">
      {/* language */}
      <Language data={data} />

      {/* Verifications */}
      <div className="mb-6 relative">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Verifications
        </h2>
        <p className="text-green-400"> {isVerified}</p>
      </div>

      {/* Licenses */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Licenses</h2>
        {Licenses > 0 ? (
          <p>{Licenses}</p>
        ) : (
          <p className="text-gray-600">No licenses available.</p>
        )}
      </div>

      {/* Education */}
      <p className="text-gray-600">No licenses available.</p>
      <Education Education={education} />
    </div>
  );
};

export default FreelancerSidebar;
