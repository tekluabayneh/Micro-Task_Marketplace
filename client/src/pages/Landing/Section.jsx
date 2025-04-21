import React from "react";
import Hero3img from "../../assets/3.jpg";
const Section = () => {
  return (
    <section
      className="w-full h-[30rem] flex flex-col md:flex-row gap-0 m-1 rounded-lg overflow-hidden p-1 my-10"
      id="BusinessProPackage"
    >
      <div className="w-full md:w-3/6   flex  gap-0 flex-col bg-[#5d7e7b] rounded-l-lg text-white p-5">
        <h1 className="text-2xl">Business Pro Package</h1>
        <h1 className="text-4xl font-semibold p-1">
          This is how{" "}
          <span className="text-[#14b88d]">
            great businesses connect with excellent partners
          </span>
        </h1>
        <p className="p-2 font-semibold">
          Tap into the top 1% of talent on Upwork, along with a comprehensive
          set of tools to manage a hybrid workforce. This is the modern way
          innovation thrives
        </p>
        <div className="flex flex-col gap-2 p-1">
          <span className="text-sm text-[#91e6b3]">
            Connect with skilled professionals to bridge your expertise needs.
          </span>
          <span className="text-sm text-[#91e6b3]">
            Manage your process seamlessly: recruit, categorize, and compensate
            your team.
          </span>
          <span className="text-sm text-[#91e6b3]">
            Collaborate with Upwork for comprehensive, start-to-finish
            assistance.
          </span>
        </div>
      </div>

      <div className="w-auto md:w-3/6  rounded-r-lg overflow-hidden">
        <img
          className="w-full h-screen object-cover hidden md:block  rounded-r-lg"
          src={Hero3img}
          alt=""
        />
      </div>
    </section>
  );
};

export default Section;
