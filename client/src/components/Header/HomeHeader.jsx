import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import AiImage from "../../assets/ai.png";
import profile from "../../assets/profile.jpg";
import ProfilePop from "../ProfilePop/ProfilePop";
import { Link } from "react-router-dom";
const HomeHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenu, setProfileMenu] = useState(false);

  const navItems = ["home", "about", "client", "price", "footer"];
  return (
    <div className="w-full fixed top-0 left-0 h-12 z-50 p-5 flex justify-between items-center bg-white ">
      <button
        className="block md:hidden z-50 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <div
          className={`w-6 h-0.5 bg-black transition-transform mb-1 ${
            isMenuOpen ? "rotate-45 translate-y-1.5" : "translate-x-0"
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-black transition-transform mb-1 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-black transition-transform mb-1 ${
            isMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-x-0"
          }`}
        ></div>
      </button>

      {/* Desktop Nav */}
      <div className="flex gap-5 items-center">
        <Link
          to={"/"}
          className="font-bold cursor-pointer text-xl hidden md:block"
        >
          MicroWorks
        </Link>

        <div className="hidden md:block pt-1">
          <ul className="flex gap-3 flex-col md:flex-row">
            <li className="text-xs cursor-pointer">
              <Link to="/FreelancerDashboard">Dashboard</Link>
            </li>
            <li className="text-xs cursor-pointer">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="text-xs cursor-pointer">
              <Link to="/setting">Setting</Link>
            </li>
            <li className="text-xs cursor-pointer">
              <Link to="/contract">Contract</Link>
            </li>
            <li className="text-xs cursor-pointer">
              <Link to="/earnings">Earnings</Link>
            </li>
          </ul>
        </div>
      </div>
      {/*  */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white custom-shadow transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="pt-16 p-4 flex flex-col gap-6">
          <img
            onClick={() => setProfileMenu(!isProfileMenu)}
            className="w-7 h-7 rounded-full bg-contain bg-center"
            src={profile}
            alt=""
          />
          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer capitalize text-sm text-gray-500 hover:text-[var(--primary-color)]"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </li>
          ))}
          <li>
            <button className="text-sm cursor-pointer text-nowrap w-full text-left py-2">
              Log in
            </button>
          </li>
          <li>
            <button className="text-sm cursor-pointer rounded-lg bg-[var(--secondary-dark-green)] hover:bg-[var(--Dark-color)] px-5 py-2 text-white w-full">
              Signup
            </button>
          </li>
        </ul>
      </div>

      {/*  */}
      <div className="flex relative items-center w-96 pt-2 ml-23 hidden md:block">
        <div className="relative w-full max-w-md hidden md:block relative">
          <MdSearch
            onClick={() => alert("asa")}
            size={24}
            className="absolute cursor-pointer left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search jobs, clients..."
            className="pl-10 pr-4 py-2 w-full bg-gray-50 border-gray-200 focus:bg-white custom-shadow rounded-sm"
          />
        </div>
      </div>
      {/*  */}
      <div className="flex gap-4 items-center cursor-pointer">
        <div className="shadow-sm rounded-full cursor-pointer">
          <img className="w-7 h-7 rounded-full" src={AiImage} alt="" />
        </div>
        <div className="relative hidden md:block">
          <img
            onClick={() => setProfileMenu(!isProfileMenu)}
            className="w-7 h-7 rounded-full bg-contain bg-center"
            src={profile}
            alt=""
          />
        </div>
        <div className="absolute top-0 right-1 ">
          {isProfileMenu ? <ProfilePop /> : ""}
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
