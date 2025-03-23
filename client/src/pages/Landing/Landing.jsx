import React from "react";
import Home from "../../components/LandingPageComponents/Home";
import ExplorOffer from "./ExplorOffer";
import Hero2img from "../../assets/2.jpg";

const Landing = () => {
  return (
    <div className="mt-16">
      <Home />
      <section className="w-full h-96 mb-5">
        <div className="mx-auto">
          <h1 className="text-center font-black p-6 text-2xl">
            Our Service Cater to the diverse <br /> need of freelancer and
            client
          </h1>

          <div className="w-96  m-auto relative">
            <img
              style={{ borderRadius: "6rem" }}
              className="w-full h-52 object-cover"
              src={Hero2img}
              alt=""
            />
            <h1 className="absolute top-15 -right-9 w-28 h-16 flex justify-center  bg-green-600 rounded-2xl text-white font-bold items-center">
              Quality
            </h1>
          </div>
        </div>
      </section>
      <ExplorOffer />
    </div>
  );
};

export default Landing;
