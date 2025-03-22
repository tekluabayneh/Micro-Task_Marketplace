import React, { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        let scrollY = window.scrollY;
        if (scrollY > 12) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      },
      [isScrolled]
    );
  });

  return (
    <div
      style={{ background: `${isScrolled ? "white" : ""}` }}
      className="w-full h-12  p-3 flex items-center justify-between fixed top-0 left-0"
    >
      <ul>
        <h1 className="font-bold cursor-pointer text-2xl">MicroWorks</h1>
      </ul>

      <ul className="w-full flex items-center gap-5 place-content-center">
        <li className="cursor-pointer capitalize text-sm text-gray-500 hover:text-[var(--primary-color)]">
          Home
        </li>
        <li className="cursor-pointer capitalize text-sm text-gray-500 hover:text-[var(--primary-color)]">
          about
        </li>
        <li className="cursor-pointer capitalize text-sm text-gray-500 hover:text-[var(--primary-color)]">
          client
        </li>
        <li className="cursor-pointer capitalize text-sm text-gray-500 hover:text-[var(--primary-color)]">
          price
        </li>
        <li className="cursor-pointer capitalize text-sm text-gray-500 hover:text-[var(--primary-color)]">
          footer
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <button className="text-sm cursor-pointer text-nowrap">Log in</button>
        <button className="text-sm cursor-pointer rounded-lg bg-[var(--secondary-dark-green))] hover:bg-[var(--Dark-color)] px-5 py-1 text-white ">
          Signup
        </button>
      </ul>
    </div>
  );
};

export default Header;
