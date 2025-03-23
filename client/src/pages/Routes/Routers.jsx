// src/routers/Routers.jsx
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../components/Header/Header";

// Lazy-loaded page components
const LandingPage = React.lazy(() => import("../Landing/Landing"));
const Profile = React.lazy(() => import("../Profile/Profile"));
const Contact = React.lazy(() => import("../Contact/Contact"));
const NotFound = React.lazy(() => import("../NotFound/NotFound"));
// const About = React.lazy(() => import("../About/About"));
const Home = React.lazy(() => import("../Home/Home"));

const Routers = () => {
  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/protected/home" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
