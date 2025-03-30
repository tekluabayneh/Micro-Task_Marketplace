import React from "react";
import ProfileImg from "../../assets/profile.jpg";
const ProfilePop = ({}) => {
  return (
    <div
      className="w-52 p-2 h-72 rounded-lg shadow-2xl
     bg-white flex flex-col gap-2 fixed top-12 right-5 "
    >
      <div className="flex items-center flex-row gap-2">
        <img
          className="w-8 h-8 rounded-full"
          src={ProfileImg}
          alt="profile image"
        />

        <div className="flex flex-col gap-0">
          <h4 className="text-sm capitalize">Teklu Abayneh</h4>
          <span className="text-xs capitalize pl-1 text-gray-500 leading-1">
            freelancer
          </span>
        </div>
      </div>

      <div className="p-1">
        <ul className="flex flex-col gap-3 p-1 pl-6">
          <li className="text-sm flex gap-4">
            <span className="w-5 h-5 rounded-full shadow-2xl bg-black"></span>
            <span>Profile</span>
          </li>
          <li className="text-sm flex gap-4">
            <span className="w-5 h-5 rounded-full shadow-2xl bg-black"></span>
            <span>setting</span>
          </li>

          <li className="text-sm flex gap-4">
            <span className="w-5 h-5 rounded-full shadow-2xl bg-black"></span>
            <span>setting</span>
          </li>
          <li className="text-sm flex gap-4">
            <span className="w-5 h-5 rounded-full shadow-2xl bg-black"></span>
            <span>setting</span>
          </li>
        </ul>
        <hr className="py-3" />
        <button className="bg-[var(--primary-color)] text-white rounded-sm p-0.5 text-sm mx-auto w-full">
          Log out
        </button>
      </div>
    </div>
  );
};

export default ProfilePop;
