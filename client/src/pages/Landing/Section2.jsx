import React from "react";
import Hero3img from "../../assets/4.jpg";
const Section2 = () => {
  return (
    <section
      className="w-full h-[30rem] flex flex-col md:flex-row gap-0 m-1 rounded-lg overflow-hidden p-1 my-10"
      id="Findgreatwork"
    >
      <div className="w-auto md:w-3/6  rounded-l-lg overflow-hidden">
        <img
          className="w-full h-screen object-cover hidden md:block rounded-l-lg"
          src={Hero3img}
          alt=""
        />
      </div>
      <div className="w-full md:w-3/6   flex  gap-0 flex-col bg-[#086add] rounded-r-lg text-white p-5">
        <h1 className="text-2xl">For talent</h1>
        <h1 className="text-6xl font-semibold p-1">Find great work</h1>
        <p className="p-5 font-semibold">
          Connect with clients you’re passionate about collaborating with and
          elevate your career or business to new levels.
        </p>
        <hr />
        <div className="flex flex-row gap-2 p-1">
          <span className="text-sm text-white">
            Find opportunities for every stage of your freelance career
          </span>
          <span className="text-sm text-white">
            Control when, where, and how you work
          </span>
          <span className="text-sm text-white">
            Control when, where, and how you work
          </span>
        </div>
      </div>
    </section>
  );
};

export default Section2;
