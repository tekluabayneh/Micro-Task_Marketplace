import { useEffect, useState } from "react";
import DynamicPortal from "../Modal/Modal";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../Slices/clientProfileSettingSlice";

const AccountSection = ({ username, companyname }) => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEdit = () => {
    setIsPortalOpen(true);
  };

  let onSubmit = (data) => {
    dispatch(update(data));

    reset();
    setTimeout(() => {
      setIsPortalOpen(false);
    }, 2000);
  };

  return (
    <div className="mb-4 shadow-md p-4 h-70 custom-shadow relative">
      <span
        onClick={handleEdit}
        className="material-symbols-outlined absolute top-2 right-6
           border-1 cursor-pointer  border-green-600  bg-white shadow-2xl rounded-full text-green-600 text-sm"
        style={{ fontSize: "18px" }}
      >
        edit
      </span>

      <h3 className="text-xl font-medium text-gray-700 pb-4">Account</h3>
      <p className="text-lg text-gray-600 pb-6">ownerName: {username}</p>
      <p className="text-lg text-gray-600 pb-7">CompanyName: {companyname}</p>
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
            <label htmlFor="owner_name" className="block">
              OwnerName:
            </label>

            <input
              {...register("owner_name", {
                required: "OwnerName is required",
              })}
              type="text"
              className="glass w-full max-w-md px-5 py-3 rounded-md border border-white/20 custom-shadow bg-white/20 backdrop-blur-md text-lg text-gray-800  placeholder-gray-400 focus:outline-none
               focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Enter New OwnerName"
            />
            {errors.owner_name && (
              <p className="text-red-500">{errors.owner_name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="company_name" className="block">
              CompanyName:
            </label>
            <input
              {...register("company_name", {
                required: "CompanyName is required",
              })}
              type="text"
              className="glass w-full max-w-md px-5 py-3 rounded-md border border-white/20 custom-shadow bg-white/20 backdrop-blur-md text-lg text-gray-800  placeholder-gray-400 focus:outline-none
               focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Enter New CompanyName"
            />
            {errors.company_name && (
              <p className="text-red-500">{errors.company_name.message}</p>
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
export default AccountSection;
