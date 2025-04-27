import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import DynamicPortal from "../Modal/Modal";
import { update } from "../Slices/FreelancerProfileSettingSlice";

const WorkHistorySection = ({ data }) => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const dispatch = useDispatch();
  let { work_history } = data

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
    <div className="bg-white rounded-lg custom-shadow p-6 mb-8 relative">
      <span
        onClick={() => setIsPortalOpen(true)}
        className="material-symbols-outlined absolute top-6 left-37
           border-1 cursor-pointer  border-green-600  bg-white shadow-2xl rounded-full text-green-600 text-sm"
        style={{ fontSize: "18px" }}
      >
        edit
      </span>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Work History</h2>
      <div className="space-y-4">{work_history}</div>
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
            <label htmlFor="work_history" className="block">
              WorkHistory:
            </label>
            <textarea
              {...register("work_history", {
                required: "WorkHistory is required",
              })}
              type="text"
              className="glass w-full max-w-md px-5 py-3 rounded-md border border-white/20 custom-shadow bg-white/20 backdrop-blur-md text-lg text-gray-800  placeholder-gray-400 focus:outline-none
               focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Enter New OwnerName"
            />
            {errors.work_history && (
              <p className="text-red-500">{errors.work_history.message}</p>
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

export default WorkHistorySection;
