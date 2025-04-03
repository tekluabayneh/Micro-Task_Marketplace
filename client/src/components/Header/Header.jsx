import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const MobileNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let scrollY = window.scrollY;
      setIsScrolled(scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["home", "about", "client", "price", "footer"];

  return (
    <header
      style={{ background: `${isScrolled ? "white" : "transparent"}` }}
      className="w-full h-12 px-4 flex items-center justify-between 
      fixed top-0 left-0 z-50 transition-colors duration-300 custom-shadow"
    >
      {/* Logo */}
      <Link to={"/"} className="font-bold cursor-pointer text-xl ">
        MicroWorks
      </Link>

      {/* Hamburger Button */}
      <button
        className="md:hidden z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <div
          className={`w-6 h-0.5 bg-black mb-1 transition-transform ${
            isMenuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></div>

        <div
          className={`w-6 h-0.5 bg-black mb-1 ${isMenuOpen ? "opacity-0" : ""}`}
        ></div>

        <div
          className={`w-6 h-0.5 bg-black transition-transform ${
            isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></div>
      </button>

      {/* Mobile Menu */}
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

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center justify-between w-full ml-8">
        <ul className="flex items-center gap-5">
          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer capitalize text-sm text-gray-500 hover:text-[var(--primary-color)]"
            >
              {item}
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-3">
          <button className="text-sm cursor-pointer text-nowrap">Log in</button>
          <button className="text-sm cursor-pointer rounded-lg bg-[var(--secondary-dark-green)] hover:bg-[var(--Dark-color)] px-5 py-1 text-white">
            Signup
          </button>
        </ul>
      </div>
    </header>
  );
};

export default MobileNav;
