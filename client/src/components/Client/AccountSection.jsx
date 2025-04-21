import { useState } from "react";
import DynamicPortal from "../Modal/Modal";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import useFetch from "../hooks/Fetch";

const AccountSection = ({ username }) => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutate = useMutation({
    mutationFn: useFetch(),

    onSuccess: () => {},
    onError: () => {},
  });

  const handleEdit = (formData) => {
    setActiveItem(formData);
    setIsPortalOpen(true);
    mutate.mutate(formData);
  };
  let onSubmit = () => {};
  let handleDelete = () => {};
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
      <p className="text-lg text-gray-600 pb-7">CompanyName: {username}</p>
      <DynamicPortal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      >
        {" "}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 w-[32rem] h-[23rem] p-7"
        >
          <div>
            <label htmlFor="OwnerName" className="block">
              OwnerName:
            </label>

            <input
              {...register("OwnerName", {
                required: "OwnerName is required",
              })}
              type="text"
              className="glass w-full max-w-md px-5 py-3 rounded-xl border border-white/20 shadow-lg bg-white/20 backdrop-blur-md text-lg text-gray-800  placeholder-gray-400 focus:outline-none
               focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Enter New OwnerName"
            />
            {errors.OwnerName && (
              <p className="text-red-500">{errors.OwnerName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="CompanyName" className="block">
              CompanyName:
            </label>
            <input
              {...register("CompanyName", {
                required: "CompanyName is required",
              })}
              type="text"
              className="glass w-full max-w-md px-5 py-3 rounded-xl border border-white/20 shadow-lg bg-white/20 backdrop-blur-md text-lg text-gray-800  placeholder-gray-400 focus:outline-none
                focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Enter New CompanyName"
            />
            {errors.CompanyName && (
              <p className="text-red-500">{errors.CompanyName.message}</p>
            )}
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
            >
              Delete
            </button>
          </div>
        </form>
        <button
          onClick={() => setIsPortalOpen(false)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Save
        </button>
      </DynamicPortal>
    </div>
  );
};
export default AccountSection;
