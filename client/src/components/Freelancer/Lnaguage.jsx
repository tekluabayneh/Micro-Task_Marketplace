import React, { useState } from "react";
import DynamicPortal from "../Modal/Modal";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { update } from "../Slices/FreelancerProfileSettingSlice";

const Language = ({ data }) => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const dispatch = useDispatch();
  let { language } = data

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let onSubmit = (data) => {
    dispatch(update(data));
    console.log("lang", data);
    reset();
    setTimeout(() => {
      setIsPortalOpen(false);
    }, 2000);
  };

  return (
    <div>
      {/* Languages */}
      <div className="mb-6 relative">
        <span
          onClick={() => setIsPortalOpen(true)}
          className="material-symbols-outlined absolute top-3 left-27
           border-1 cursor-pointer  border-green-600  bg-white shadow-2xl rounded-full text-green-600 text-sm"
          style={{ fontSize: "18px" }}
        >
          edit
        </span>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Languages</h2>
        {language ?? "not provided"}
      </div>

      <DynamicPortal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      >
        {" "}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-9 w-[26rem] h-[25rem] p-4"
        >
          <div>
            <label htmlFor="Language" className="block">
              Language:
            </label>
            <input
              {...register("language", {
                required: "Language is required",
              })}
              type="text"
              className="glass w-full max-w-md px-5 py-3 rounded-md border border-white/20 custom-shadow bg-white/20 backdrop-blur-md text-lg text-gray-800  placeholder-gray-400 focus:outline-none
               focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Enter New language"
            />
            {errors.language && (
              <p className="text-red-500">{errors.language.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="Education" className="block">
              Education:
            </label>
            <input
              {...register("Education", {
                required: "Education is required",
              })}
              type="text"
              className="glass w-full max-w-md px-5 py-3 rounded-md border border-white/20 custom-shadow bg-white/20 backdrop-blur-md text-lg text-gray-800  placeholder-gray-400 focus:outline-none
               focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Enter New Education"
            />
            {errors.Education && (
              <p className="text-red-500">{errors.Education.message}</p>
            )}
          </div>
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

export default Language;
