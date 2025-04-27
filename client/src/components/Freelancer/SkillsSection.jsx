import { useDispatch } from "react-redux";
import DynamicPortal from "../Modal/Modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { update } from "../Slices/FreelancerProfileSettingSlice";
const SkillsSection = ({ data }) => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const dispatch = useDispatch();
  let { skills, bio } = data

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let onSubmit = (data) => {
    dispatch(update(data));
    console.log(data);
    reset();
    setTimeout(() => {
      setIsPortalOpen(false);
    }, 2000);
  };
  return (
    <div className="bg-white rounded-lg custom-shadow p-6 mb-8 relative flex flex-col gap-12 text-gray-600">
      <div className="flex flex-col relative">
        <span
          onClick={() => setIsPortalOpen(true)}
          className="material-symbols-outlined absolute top-0 left-12 
           border-1 cursor-pointer  border-green-600  bg-white shadow-2xl rounded-full text-green-600 text-sm"
          style={{ fontSize: "18px" }}
        >
          edit
        </span>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Skills</h2>
        <div className="flex flex-wrap gap-1">
          {skills?.split(",").map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-full  font-medium text-xl text-gray-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="">
        <p className="text-xs text-gray-600">{bio}</p>

        <button className="underline text-green-500 text-sm cursor-pointer">
          More..
        </button>
      </div>
      <DynamicPortal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      >
        {" "}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-9 w-[26rem] h-[28rem] p-7"
        >
          <div>
            <label htmlFor="skills" className="block">
              Skills:
            </label>

            <textarea
              {...register("skills", {
                required: "Skills  is required",
              })}
              type="text"
              className="glass w-full max-w-md px-5 py-3 rounded-md border border-white/20 custom-shadow bg-white/20 backdrop-blur-md text-lg text-gray-800  placeholder-gray-400 focus:outline-none
               focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Enter New OwnerName"
            />
            {errors.skills && (
              <p className="text-red-500">{errors.skills.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="overview" className="block">
              Overview:
            </label>
            <textarea
              {...register("overview", {
                required: "Overview is required",
              })}
              type="text"
              className="glass w-full max-w-md px-5 py-3 rounded-md border border-white/20 custom-shadow bg-white/20 backdrop-blur-md text-lg text-gray-800  placeholder-gray-400 focus:outline-none
               focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Enter New OwnerName"
            />
            {errors.overview && (
              <p className="text-red-500">{errors.overview.message}</p>
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

export default SkillsSection;
