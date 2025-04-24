import React, { useState } from "react";
import DynamicPortal from "../../components/Modal/Modal";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../components/Slices/clientProfileSettingSlice";

// Main Component: SettingsPage
const SettingsPage = ({ image, username }) => {
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
  let currentDate = new Date();
  let getDate = currentDate.getDate();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  return (
    <div className="max-w-6xl mt-12 mx-auto p-6 bg-white custom-shadow rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">image</h1>
      <div className="bg-white ">
        <div className="flex items-center gap-4">
          {/* Profile Picture */}
          <div className="relative">
            <span
              onClick={() => setIsPortalOpen(true)}
              className="material-symbols-outlined absolute bottom-0  border-1 cursor-pointer  border-green-600  bg-white shadow-2xl rounded-full text-green-600 text-xl"
              style={{ fontSize: "18px" }}
            >
              edit
            </span>
            <img
              src={image}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border-2 border-green-600"
            />
          </div>

          {/* Name, Title, Location */}
          <div className="relative flex flex-col gap-6">
            <div>
              <h1 className="text-xl font-bold text-gray-800">{username}</h1>

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

                <p className="text-xs text-gray-500">
                  {getDate + ":" + month + ":" + year}
                </p>
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
          <p className="text-red-500 text-xs">
            Please note: We currently only accept image URLs. If you've uploaded
            an image elsewhere (like on Remo), you can paste the image URL here.
          </p>

          <div>
            <label htmlFor="image" className="block">
              image url:
            </label>

            <input
              {...register("image", {
                required: "image url is required",
              })}
              type="text"
              className="glass w-full max-w-md px-5 py-3 rounded-md border border-white/20 custom-shadow bg-white/20 backdrop-blur-md text-lg text-gray-800  placeholder-gray-400 focus:outline-none
               focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Enter New OwnerName"
            />
            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
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

export default SettingsPage;
