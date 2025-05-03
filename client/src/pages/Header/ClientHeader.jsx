import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import AiImage from "../../assets/ai.png";
import profile from "../../assets/profile.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clientSearch } from "../../components/Slices/clientSearchSlice";
import CL_ProfilePop from "../../components/ProfilePop/ClientProfilePop";
import { MessageCircle } from "lucide-react";

const ClientHeader = ({ image, username, isOpen, setIsOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenu, setProfileMenu] = useState(false);
  const [Search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSerach = () => {
    dispatch(clientSearch({ Search: Search }));
    navigate("/Client/search");
    setSearch("");
  };
  const userimg = localStorage.getItem("userImg");
  return (
    <div className="w-full fixed shadow-md top-0 left-0 h-12 z-50 p-5 py-6 flex justify-between items-center bg-white">
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
              <Link to="/Client/Dashboard">Dashboard</Link>
            </li>
            <li className="text-xs cursor-pointer">
              <Link to="Client/ClientProfile">Profile</Link>
            </li>

            <li className="text-xs cursor-pointer">
              <Link to="Client/MyPostJobs">MYJob</Link>
            </li>
            <li className="text-xs cursor-pointer">
              <Link to="Client/JobPost">PostJob</Link>
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
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="cursor-pointer capitalize text-sm text-gray-500 hover:text-[var(--primary-color)]"
            to="/Client/Dashboard"
          >
            Dashboard
          </Link>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="cursor-pointer capitalize text-sm text-gray-500 hover:text-[var(--primary-color)]"
            to="/Client/ClientProfile"
          >
            Profile
          </Link>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="cursor-pointer capitalize text-sm text-gray-500 hover:text-[var(--primary-color)]"
            to="/Client/MyPostJobs"
          >
            MYJob
          </Link>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="cursor-pointer capitalize text-sm text-gray-500 hover:text-[var(--primary-color)]"
            to="/Client/JobPost"
          >
            PostJob
          </Link>
          <li>
            <Link
              to={"/login"}
              className="text-sm cursor-pointer rounded-lg bg-[var(--secondary-dark-green)] hover:bg-[var(--Dark-color)] px-5 py-2 text-white w-full"
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>

      {/*  */}
      <div className="flex items-center w-80 md:w-96  ml-2 hidden md:block ">
        <div className="w-full max-w-md hidden md:block relative">
          <Link to={"/Client/Search"}>
            <MdSearch
              size={24}
              onClick={handleSerach}
              className="absolute cursor-pointer left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </Link>
          <input
            type="text"
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search jobs, Freelancer..."
            className="pl-10 pr-4 py-1.5 w-full bg-gray-50 border-gray-200 focus:bg-white custom-shadow rounded-sm"
          />
        </div>
      </div>
      {/*  */}
      <div className="flex gap-4 items-center cursor-pointer">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="shadow-sm rounded-full cursor-pointer"
        >
          <button className="bg-emerald-600 cursor-pointer  hover:bg-emerald-700 w-8 h-8 rounded-full flex justify-center items-center text-white shadow-xl transition-all duration-300 ease-in-out hover:scale-110">
            <MessageCircle size={28} />
          </button>
        </div>
        <div className="relative hidden md:block">
          <img
            onClick={() => setProfileMenu(!isProfileMenu)}
            className="w-7 h-7 rounded-full bg-contain bg-center border border-green-400"
            src={userimg}
            alt=""
          />
        </div>
        <div className="absolute top-0 right-1 ">
          {isProfileMenu ? (
            <CL_ProfilePop
              isProfileMenu={isProfileMenu}
              setProfileMenu={setProfileMenu}
              username={username}
              image={image}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientHeader;
