// src/routers/Routers.jsx
import React, { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../components/Header/Header";
// import Login from "../Auth/login";
// import Register from "../Auth/Register";
import HomeHeader from "../../components/Header/HomeHeader";
import Login from "../Auth/login";
import Register from "../Auth/signUp";

// Lazy-loaded page components
const LandingPage = React.lazy(() => import("../Landing/Landing"));
const Profile = React.lazy(() => import("../Client/Profile"));
const Contact = React.lazy(() => import("../Contact/Contact"));
const NotFound = React.lazy(() => import("../NotFound/NotFound"));
const Home = React.lazy(() => import("../Home/Home"));

const Routers = () => {
  const [islogedin, setislogedin] = useState(true);

  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      {/* {islogedin ? <HomeHeader /> : <Header />} */}
      <HomeHeader />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/protected/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
