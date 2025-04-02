// src/routers/Routers.jsx
import React, { Suspense, useState, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../components/Header/Header";
import HomeHeader from "../../components/Header/HomeHeader";
import JobBiddingPage from "../Freelancer/JobBid";
import TaskDetailsPage from "../../components/TaskDetail/TaskDetail";
const Login = lazy(() => import("../Auth/login"));
const Register = lazy(() => import("../Auth/signUp"));
const ClientProfile = lazy(() => import("../Client/ClientProfile"));
const Footer = lazy(() =>
  import("../../components/LandingPageComponents/Footer")
);
const JobPostPage = lazy(() => import("../PostJob/JobPostPage"));

const LandingPage = React.lazy(() => import("../Landing/Landing"));
const FreelancerProfile = React.lazy(() =>
  import("../Freelancer/FreelancerProfile")
);
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
        <Route path="/profile" element={<FreelancerProfile />} />
        <Route path="/ClientProfile" element={<ClientProfile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/JobPost" element={<JobPostPage />} />
        <Route path="/JobBidding" element={<JobBiddingPage />} />
        <Route path="/TaskDetails" element={<TaskDetailsPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Suspense>
  );
};
ClientProfile;
export default Routers;
