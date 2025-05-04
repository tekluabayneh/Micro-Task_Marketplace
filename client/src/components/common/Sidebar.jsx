import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [FreelancerProfileData, setFreelancerProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchFreelancerProfile = async () => {
      try {
        let email = localStorage.getItem("userEmail");
        const response = await axios.get(
          "https://micro-task-marketplace.onrender.com/api/FreelancerProfileData",
          {
            params: { email },
          }
        );
        // Make sure we got valid data before setting
        if (response.data && response.data.length > 0) {
          setFreelancerProfileData(response.data);
        } else {
          setFreelancerProfileData(null);
        }
      } catch (error) {
        console.error("❌ Error fetching client profile:", error);
        setError("Failed to fetch profile. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    FetchFreelancerProfile();
  }, []);

  // Prevent error on first render
  if (loading) {
    return (
      <div className="mt-20 text-center">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div className="mt-20 text-center text-red-500">{error}</div>;
  }

  const userData = FreelancerProfileData?.[0] ?? {};
  localStorage.setItem("f_userImg", userData.image ?? "not provided");
  localStorage.setItem("F_username", userData.name ?? "not provided");

  return (
    <aside className="md:w-44 bg-gray-50 h-full p- flex flex-col gap-2 m-1">
      <h1 className="p-1 text-sm capitalize">Welcome, {userData.name}</h1>

      <ul className="p-2 flex h-40 gap-2 items-start md:flex-col custom-shadow rounded-md bg-white">
        <h1 className="text pl-7 font-bold capitalize relative">
          {" "}
          <span
            className="material-symbols-outlined absolute top-1 left-2
            cursor-pointer  shadow-2xl rounded-full text-sm"
            style={{ fontSize: "19px" }}
          >
            person
          </span>{" "}
          your Profile
        </h1>

        <div className="flex flex-col gap-3 pt-2 ">
          <div className="text-xs capitalize cursor-pointer relative">
            <div className="flex flex-col">
              <span>location</span>
            </div>
            <span className="text-xs ">
              {userData.location ?? "not provided"}
            </span>
          </div>

          <div className="text-xs capitalize flex gap-18 cursor-pointer relative">
            <div className="flex flex-col">
              <span>Earnings</span>
            </div>

            <div className="text-xs">{userData.earned ?? "not yet"}</div>
          </div>
        </div>

        <div className="text-xs capitalize cursor-pointer relative">
          <div className="flex flex-col">
            <span>Edit your profile</span>
            <span className="text-xs">off</span>
          </div>
          <Link to={"/Freelancer/FreelancerProfile"}>
            <span
              className="material-symbols-outlined absolute top-0 left-32
            cursor-pointer  shadow-2xl rounded-full text-sm"
              style={{ fontSize: "15px" }}
            >
              edit
            </span>
          </Link>
        </div>
      </ul>
      <ul className="p-2 flex h-40 gap-2 items-start md:flex-col custom-shadow rounded-md bg-white">
        <h1 className="text pl-7 font-bold capitalize relative">
          {" "}
          <span
            className="material-symbols-outlined absolute top-1 left-2
            cursor-pointer  shadow-2xl rounded-full text-sm"
            style={{ fontSize: "19px" }}
          >
            person
          </span>{" "}
          Edit Profile
        </h1>

        <div className="flex flex-col gap-3 pt-2 ">
          <div className="text-xs capitalize cursor-pointer relative">
            <div className="flex flex-col">
              <span className="cursor-pointer">Settings</span>
            </div>

            <Link to={"/Freelancer/FreelancerProfile"}>
              <span
                className="material-symbols-outlined absolute top-0 left-32
              cursor-pointer  shadow-2xl rounded-full text-sm"
                style={{ fontSize: "15px" }}
              >
                edit
              </span>
            </Link>
          </div>

          <div className="text-xs capitalize flex gap-12 cursor-pointer relative">
            <div className="flex flex-col">
              <span>Contract offers</span>
            </div>

            <div className="text-xs">
              {userData.proposal_count ?? "not provided"}
            </div>
          </div>
        </div>
        <div className="text-xs capitalize flex gap-21 cursor-pointer relative">
          <div className="flex flex-col">
            <span>Proposal</span>
          </div>

          <div className="text-xs">
            {userData.proposal_count ?? "you don't have yet"}
          </div>
        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;
