import React, { useState } from "react";
import ProfileHeader from "../../components/Freelancer/ProfileHeader";
import DynamicPortal from "../../components/Modal/Modal";
import { useMutation } from "@tanstack/react-query";
import useFetch from "../../components/hooks/Fetch";
import { useForm } from "react-hook-form";

// Main Component: SettingsPage
const SettingsPage = () => {
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
    <div className="max-w-4xl mt-12 mx-auto p-6 bg-white custom-shadow rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">image</h1>
      <div className="bg-white ">
        <div className="flex items-center gap-4">
          {/* Profile Picture */}
          <div className="relative">
            <span
              onClick={handleEdit}
              className="material-symbols-outlined absolute bottom-0  border-1 cursor-pointer  border-green-600  bg-white shadow-2xl rounded-full text-green-600 text-xl"
              style={{ fontSize: "18px" }}
            >
              edit
            </span>
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border-2 border-green-600"
            />
          </div>

          {/* Name, Title, Location */}
          <div className="relative flex flex-col gap-6">
            <div>
              <h1 className="text-xl font-bold text-gray-800">John Doe</h1>
              <div className="flex gap-2 mt-1">
                <div className="flex gap-2 ">
                  <span
                    className="material-symbols-outlined w-4 h-4 text-center  border-1 cursor-pointer  border-green-600  bg-white shadow-2xl rounded-full text-green-600 text-xs"
                    style={{ fontSize: "12px" }}
                  >
                    location_on
                  </span>
                  <p className="text-sm text-gray-600 text-xs">Ethiopia</p>
                </div>

                <p className="text-xs text-gray-500">7:00 pm local Time</p>
              </div>
            </div>
          </div>
        </div>
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
            <label htmlFor="OwnerName" className="block">
              OwnerName:
            </label>

            <input
              {...register("OwnerName", {
                required: "OwnerName is required",
              })}
              type="text"
              className="glass w-full max-w-md px-5 py-3 rounded-md border border-white/20 custom-shadow bg-white/20 backdrop-blur-md text-lg text-gray-800  placeholder-gray-400 focus:outline-none
               focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Enter New OwnerName"
            />
            {errors.OwnerName && (
              <p className="text-red-500">{errors.OwnerName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="imageUrl" className="block">
              Image url:
            </label>
            <input
              {...register("imageUrl", {
                required: "image url is required",
              })}
              type="text"
              className="glass w-full max-w-md px-5 py-3 rounded-md border border-white/20 custom-shadow bg-white/20 backdrop-blur-md text-lg text-gray-800  placeholder-gray-400 focus:outline-none
               focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Enter New image url"
            />
            {errors.imageUrl && (
              <p className="text-red-500">{errors.imageUrl.message}</p>
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
              onClick={() => {
                setIsPortalOpen(false), handleDelete;
              }}
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

export default SettingsPage;
