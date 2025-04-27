import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import DynamicPortal from "../Modal/Modal";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
const FR_PortFolio = () => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [ProfileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef();

  const dispatch = useDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const updateFreelancer = (data) => {
    return axios.put("http://localhost:5000/api/applicant/update", data);
  };

  const mutate = useMutation({
    mutationFn: updateFreelancer,
    onSuccess: (response) => {
      toast.success("Success!");
    },

    onError: (err) => {
      console.log(err);
      toast.error("Something went wrong!");
    },
  });

  let onSubmit = (data) => {
    let email = localStorage.getItem("userEmail");
    mutate.mutate({ email, ...data });

    reset();
    setTimeout(() => {
      setIsPortalOpen(false);
    }, 2000);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let userEmail = localStorage.getItem("userEmail");
        let response = await axios.get(
          "http://localhost:5000/api/applicant/get",
          {
            params: { userEmail },
          }
        );
        setProfileData(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <div className="mt-20 text-center text-red-500">Loading...</div>;
  }

  const userData = ProfileData?.data ?? {};

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };
  return (
    <div className="min-h-96 bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 custom-shadow my-5 relative">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          My Portfolio
        </h1>
        <span
          onClick={() => setIsPortalOpen(true)}
          className="material-symbols-outlined absolute top-6 right-12 
           border-1 cursor-pointer  border-green-600  bg-white shadow-2xl rounded-full text-green-600 text-sm"
          style={{ fontSize: "18px" }}
        >
          add
        </span>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-scroll overflow-y-hidden  custom-ScrollTum_1"
        >
          {userData.length > 0 ? (
            userData.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-xl  shrink-0  shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ScrollTum_1"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300" /> */}
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                <div className="p-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {item.subtitle}
                  </h3>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-blue-600 font-medium">
                    Click to view project →
                  </span>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-2xl text-center w-full pt-4 capitalize">
              you don't have portfolio yet
            </h1>
          )}

          <span
            onClick={scrollLeft}
            className="material-symbols-outlined absolute bottom-2 left-8 
           border-1 cursor-pointer  border-green-600  bg-white shadow-2xl rounded-full text-green-600 text-sm"
            style={{ fontSize: "30px" }}
          >
            chevron_left
          </span>
          <span
            onClick={scrollRight}
            className="material-symbols-outlined absolute bottom-2 right-12 
           border-1 cursor-pointer  border-green-600  bg-white shadow-2xl rounded-full text-green-600 text-sm"
            style={{ fontSize: "30px" }}
          >
            chevron_right
          </span>
        </div>
      </div>
      <DynamicPortal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      >
        {" "}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-9 w-[26rem] h-[30rem] p-4"
        >
          <div>
            <label htmlFor="title" className="block">
              Title:
            </label>
            <input
              {...register("title", {
                required: "Title is required",
              })}
              type="text"
              className="glass w-full max-w-md px-5 py-3 rounded-md border border-white/20 custom-shadow bg-white/20 backdrop-blur-md text-lg text-gray-800  placeholder-gray-400 focus:outline-none
               focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Enter New title"
            />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="subtitle" className="block">
              SubTitle:
            </label>
            <input
              {...register("subtitle", {
                required: "subtitle is required",
              })}
              type="text"
              className="glass w-full max-w-md px-5 py-3 rounded-md border border-white/20 custom-shadow bg-white/20 backdrop-blur-md text-lg text-gray-800  placeholder-gray-400 focus:outline-none
               focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Enter New subtitle"
            />
            {errors.subtitle && (
              <p className="text-red-500">{errors.subtitle.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="image_url" className="block">
              img_url:
            </label>
            <input
              {...register("image_url", {
                required: "img is required",
              })}
              type="text"
              className="glass w-full max-w-md px-5 py-3 rounded-md border border-white/20 custom-shadow bg-white/20 backdrop-blur-md text-lg text-gray-800  placeholder-gray-400 focus:outline-none
               focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Enter New img"
            />
            {errors.image_url && (
              <p className="text-red-500">{errors.image_url.message}</p>
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

export default FR_PortFolio;
