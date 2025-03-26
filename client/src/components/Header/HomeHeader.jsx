import React, { useState } from "react";

const HomeHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["home", "about", "client", "price", "footer"];
  return (
    <div className="w-full fixed top-0 left-0 h-12 z-50 p-5 flex justify-between items-center bg-white shadow-sm">
      <button
        className="block md:hidden z-50"
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
        <h1 className="font-bold cursor-pointer text-xl hidden md:block">
          MicroWorks
        </h1>

        <div className="hidden md:block pt-1">
          <ul className="flex gap-5  flex-col md:flex-row">
            <li className="text-xs cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className="text-xs cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className="text-xs cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className="text-xs cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className="text-xs cursor-pointer">
              <a href="">Home</a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="pt-16 p-4 flex flex-col gap-6">
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

      <div className="flex gap-2">
        <div>
          <h1>Ai</h1>
        </div>
        <div>
          <h1>Profile</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
