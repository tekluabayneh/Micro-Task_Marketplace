import React from "react";

const Sidebar = () => {
  return (
    <aside className="md:w-44 bg-gray-50 h-full p- flex flex-col gap-2 m-1">
      <h1 className="p-2 capitalize">Welcome back, Teklu</h1>

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
              <span>Profile Visibility</span>
              <span className="text-xs">public</span>
            </div>

            <span
              className="material-symbols-outlined absolute top-0 left-32
            cursor-pointer  shadow-2xl rounded-full text-sm"
              style={{ fontSize: "15px" }}
            >
              edit
            </span>
          </div>

          <div className="text-xs capitalize flex gap-21 cursor-pointer relative">
            <div className="flex flex-col">
              <span>Earnings</span>
            </div>

            <div className="text-xs">12</div>
          </div>
        </div>

        <div className="text-xs capitalize cursor-pointer relative">
          <div className="flex flex-col">
            <span>Boost your profile</span>
            <span className="text-xs">off</span>
          </div>

          <span
            className="material-symbols-outlined absolute top-0 left-32
            cursor-pointer  shadow-2xl rounded-full text-sm"
            style={{ fontSize: "15px" }}
          >
            edit
          </span>
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
              <span>Settings</span>
            </div>

            <span
              className="material-symbols-outlined absolute top-0 left-32
            cursor-pointer  shadow-2xl rounded-full text-sm"
              style={{ fontSize: "15px" }}
            >
              edit
            </span>
          </div>

          <div className="text-xs capitalize flex gap-12 cursor-pointer relative">
            <div className="flex flex-col">
              <span>Contract offers</span>
            </div>

            <div className="text-xs">12</div>
          </div>
        </div>
        <div className="text-xs capitalize flex gap-21 cursor-pointer relative">
          <div className="flex flex-col">
            <span>Proposal</span>
          </div>

          <div className="text-xs">12</div>
        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;
