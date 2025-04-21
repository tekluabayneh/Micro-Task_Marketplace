import { useMutation } from "@tanstack/react-query";
import DynamicPortal from "../Modal/Modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useFetch from "../hooks/Fetch";

const CompanyDetails = ({
  companyName,
  owner,
  phone,
  website,
  industry,
  address,
}) => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutate = useMutation({
    mutationFn: useFetch(), // Your custom fetch hook
    onSuccess: () => {},
    onError: () => {},
  });

  const onSubmit = (formData) => {
    mutate.mutate(formData);
    setIsPortalOpen(false); // close modal after submit
  };

  const handleDelete = () => {
    console.log("Delete clicked");
    // You can implement deletion logic here
  };

  return (
    <div className="mb-4 custom-shadow p-4 h-70 rounded-sm relative">
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
          className="space-y-4 w-[40rem] h-[45rem] overflow-y-auto flex flex-col justify-center pl-24 p-7"
        >
          {/* Company Name */}
          <div>
            <label htmlFor="CompanyName" className="block">
              Company Name:
            </label>
            <input
              {...register("CompanyName", {
                required: "Company Name is required",
              })}
              type="text"
              className="glass w-full max-w-md px-5 py-3 rounded-xl border border-white/20 shadow-lg bg-white/20 backdrop-blur-md text-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Enter New Company Name"
            />
            {errors.CompanyName && (
              <p className="text-red-500">{errors.CompanyName.message}</p>
            )}
          </div>

          {/* Owner Name */}
          <div>
            <label htmlFor="OwnerName" className="block">
              Owner Name:
            </label>
            <input
              {...register("OwnerName", {
                required: "Owner Name is required",
              })}
              type="text"
              className="glass w-full max-w-md px-5 py-3 rounded-xl border border-white/20 shadow-lg bg-white/20 backdrop-blur-md text-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Enter New Owner Name"
            />
            {errors.OwnerName && (
              <p className="text-red-500">{errors.OwnerName.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="Phone" className="block">
              Phone:
            </label>
            <input
              {...register("Phone")}
              type="text"
              className="glass w-full max-w-md px-5 py-3 rounded-xl border border-white/20 shadow-lg bg-white/20 backdrop-blur-md text-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Enter Phone Number"
            />
          </div>

          {/* Time Zone */}
          <div>
            <label htmlFor="TimeZone" className="block">
              Time Zone:
            </label>
            <input
              {...register("TimeZone")}
              type="text"
              className="glass w-full max-w-md px-5 py-3 rounded-xl border border-white/20 shadow-lg bg-white/20 backdrop-blur-md text-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Enter Time Zone"
            />
          </div>

          {/* Website */}
          <div>
            <label htmlFor="Website" className="block">
              Website:
            </label>
            <input
              {...register("Website")}
              type="text"
              className="glass w-full max-w-md px-5 py-3 rounded-xl border border-white/20 shadow-lg bg-white/20 backdrop-blur-md text-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Enter Website"
            />
          </div>

          {/* Address */}
          <div>
            <label htmlFor="Address" className="block">
              Address:
            </label>
            <input
              {...register("Address")}
              type="text"
              className="glass w-full max-w-md px-5 py-3 rounded-xl border border-white/20 shadow-lg bg-white/20 backdrop-blur-md text-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Enter Address"
            />
          </div>

          {/* Buttons */}
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

export default CompanyDetails;
