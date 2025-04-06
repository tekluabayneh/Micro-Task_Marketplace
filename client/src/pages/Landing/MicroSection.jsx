import React from "react";
import Hero2img from "../../assets/2.jpg"; // replace with your actual image path

const MicroWork = () => {
  return (
    <div className="w-full my-3 bg-white text-gray-800 px-4 py-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
        {/* Left Side: Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-600">
            Up your work game with <span className="text-black">MicroWork</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            No cost to join. Register and browse talent profiles, explore
            projects, or even book a consultation.
          </p>

          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-semibold text-green-700">
                Post a job and hire top talent
              </h2>
              <p className="text-gray-600">
                Finding talent doesn’t have to be a chore. Post a job or let us
                help you search!
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-green-700">
                Work with the best—without breaking the bank
              </h2>
              <p className="text-gray-600">
                MicroWork makes it affordable to upgrade your work experience
                with low transaction rates.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Image Section */}
        <div className="flex-1 text-center">
          <h1 className="font-black text-2xl mb-6">
            Our Service Cater to the diverse <br className="hidden md:block" />{" "}
            need of freelancer and client
          </h1>

          <div className="w-80 md:w-96 mx-auto relative group">
            <img
              src={Hero2img}
              alt="Service Visual"
              className="w-full h-60 object-cover rounded-3xl shadow-xl transition duration-300 group-hover:scale-105"
            />
            <div className="absolute -top-4 -right-6 bg-green-600 text-white font-bold px-6 py-3 rounded-xl shadow-md">
              Quality
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroWork;
