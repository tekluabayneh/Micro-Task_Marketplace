import { useMutation } from "@tanstack/react-query";
import DynamicPortal from "../Modal/Modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useFetch from "../hooks/Fetch";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../Slices/clientProfileSettingSlice";

const CompanyDetails = ({
  companyName,
  owner,
  phone,
  website,
  industry,
  address,
}) => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let onSubmit = (data) => {
    dispatch(update(data));

    reset();
    setTimeout(() => {
      setIsPortalOpen(false);
    }, 2000);
  };

  return (
    <div className="p-2 mb-4 custom-shadow  h-70 rounded-sm relative ">
      <span
        className="material-symbols-outlined absolute top-2 right-6 border-1 cursor-pointer border-green-600 bg-white shadow-2xl rounded-full text-green-600 text-sm"
        style={{ fontSize: "18px" }}
        onClick={() => setIsPortalOpen(true)}
      >
        edit
      </span>

      <h3 className="text-xl font-medium text-gray-700 pb-6">
        Company Details
      </h3>
      <ul className="space-y-1 text-sm text-gray-600">
        <li>
          <strong>Company Name:</strong> {companyName}
        </li>
        <li>
          <strong>Owner:</strong> {owner}
        </li>
        <li>
          <strong>Phone:</strong> {phone || "Not provided"}
        </li>
        <li>
          <strong>Website:</strong> {website || "Not provided"}
        </li>
        <li>
          <strong>Industry:</strong> {industry || "Not provided"}
        </li>
        <li>
          <strong>Location:</strong> {address || "Not provided"}
        </li>
      </ul>

      <DynamicPortal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[25rem] md:w-[30rem] h-[30rem] overflow-y-auto flex flex-col justify-center p-5 gap-5 custom-ScrollTum_2"
        >
          {/* Phone */}
          <div className="w-full mt-50">
            <label htmlFor="Phone" className="block">
              Phone:
            </label>
            <input
              {...register("Phone")}
              type="text"
              className="glass w-full max-w-md px-5 py-3 rounded-md border border-white/20 custom-shadow bg-white/20 backdrop-blur-md text-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Enter Phone Number"
            />
          </div>

          {/* Address */}
          <div className="w-full">
            <label htmlFor="location" className="block">
              location:
            </label>
            <input
              {...register("location")}
              type="text"
              className="glass w-full max-w-md px-5 py-3 rounded-md border border-white/20 custom-shadow bg-white/20 backdrop-blur-md text-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Enter location"
            />
          </div>
          <div className="w-full">
            <label htmlFor="industry" className="block">
              industry:
            </label>
            <input
              {...register("industry")}
              type="text"
              className="glass w-full max-w-md px-5 py-3 rounded-md border border-white/20 custom-shadow bg-white/20 backdrop-blur-md text-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Enter industry"
            />
          </div>
          <div className="w-full">
            <label htmlFor="Social" className="block">
              Social:
            </label>
            <input
              {...register("Social")}
              type="text"
              className="glass w-full max-w-md px-5 py-3 rounded-md border border-white/20 custom-shadow bg-white/20 backdrop-blur-md text-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Enter Social"
            />
          </div>
          <div className="w-full">
            <label htmlFor="description" className="block">
              description:
            </label>
            <textarea
              {...register("description")}
              type="text"
              className="glass w-full max-w-md px-5 py-3 rounded-md border border-white/20 custom-shadow bg-white/20 backdrop-blur-md text-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Enter industry"
            />
          </div>

          {/* Buttons */}
          <div className="w-full flex gap-1 flex-col md:flex-row">
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer w-full"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsPortalOpen(false)}
              className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer w-full mt-4"
            >
              Delete
            </button>
          </div>
        </form>
      </DynamicPortal>
    </div>
  );
};

export default CompanyDetails;
