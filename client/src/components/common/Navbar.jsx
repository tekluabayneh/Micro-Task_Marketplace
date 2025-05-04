import React from "react";
import DashBoardImg from "../../assets/Map.svg";
const Navbar = () => {
  return (
    <nav
      className="bg-gray-50 px-6 py-4 h-40 custom-shadow  bg-center bg-cover bg-no-repeat  relative rounded-sm"
      style={{
        backgroundImage: `url(${DashBoardImg})`,
      }}
    ></nav>
  );
};

export default Navbar;
