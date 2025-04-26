import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import DynamicPortal from "../Modal/Modal";

const OverviewSection = ({ data }) => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const dispatch = useDispatch();
  let { overview } = data[0];
  let { skills, bio } = data[0];

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let onSubmit = (data) => {
    // dispatch(update(data));

    reset();
    setTimeout(() => {
      setIsPortalOpen(false);
    }, 2000);
  };
  return (
    <div className="bg-white rounded-lg custom-shadow p-6 mb-8 relative">
      <span
        onClick={() => setIsPortalOpen(true)}
        className="material-symbols-outlined absolute top-6 left-27
           border-1 cursor-pointer  border-green-600  bg-white shadow-2xl rounded-full text-green-600 text-sm"
        style={{ fontSize: "18px" }}
      >
        edit
      </span>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Overview</h2>
      <p className="text-gray-700 text-xs">{overview}</p>
      <DynamicPortal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      >
        {" "}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-9 w-[26rem] h-[20rem] p-7"
        >
          <div>
            <label htmlFor="Overview" className="block">
              Overview:
            </label>
            <textarea
              {...register("Overview", {
                required: "Overview is required",
              })}
              type="text"
              className="glass w-full max-w-md px-5 py-3 rounded-md border border-white/20 custom-shadow bg-white/20 backdrop-blur-md text-lg text-gray-800  placeholder-gray-400 focus:outline-none
               focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Enter New Overview"
            />
            {errors.Overview && (
              <p className="text-red-500">{errors.Overview.message}</p>
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

export default OverviewSection;
