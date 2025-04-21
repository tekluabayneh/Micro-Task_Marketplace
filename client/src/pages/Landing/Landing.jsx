import React from "react";
import Home from "../../components/LandingPageComponents/Home";
import ExplorOffer from "./ExplorOffer";
import Section from "./Section";
import Section2 from "./Section2";
import Footer from "../../components/LandingPageComponents/Footer";
import MicroWork from "./MicroSection";

const Landing = () => {
  return (
    <div className="mt-16" id="home">
      <Home />

      <MicroWork />
      <ExplorOffer />
      <Section />
      <Section2 />
    </div>
  );
};

export default Landing;
