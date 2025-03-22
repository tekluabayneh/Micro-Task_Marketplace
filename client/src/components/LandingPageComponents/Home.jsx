import React from "react";
import HeroImage from "../../assets/1.png";
const Home = () => {
  return (
    <section className="w-full h-screen">
      <div
        style={{
          backgroundImage: `url(${HeroImage})`,
          width: "100%",
          minHeight: "500px",
          maxHeight: "80%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#f0f0f0",
          borderRadius: "1rem",
        }}
        className="flex p-5"
      >
        <h1 className="w-4/6 pt-4 text-3xl text-white md:text-6xl lg:text-7xl font-semibold">
          find the prefect freelancer <br /> or project on MicroWorks
        </h1>
      </div>
    </section>
  );
};

export default Home;
