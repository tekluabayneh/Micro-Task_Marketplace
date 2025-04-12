// src/routers/Routers.jsx
import React, { Suspense, useState, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import UserTypeSelector from "../Auth/UserTypeSelector";

// Lazy load components
const Header = lazy(() => import("../../components/Header/Header"));
const HomeHeader = lazy(() => import("../../components/Header/HomeHeader"));
const JobBiddingPage = lazy(() => import("../Freelancer/JobBid"));
const JobApply = lazy(() => import("../ApplayJob/ApplayJob"));
const FreelancerDashboardPage = lazy(() =>
  import("../Freelancer/FreelancerDashboardPage")
);
const ResetPassword = lazy(() => import("../Auth/ForgotPassword"));
const ResetConfirm = lazy(() => import("../Auth/ResetConfirm"));
const MyJobs = lazy(() => import("../PostJob/MYPostedProjects"));
const ClientDashboard = lazy(() => import("../Dashboard/ClientDashboard"));
const Privacy = lazy(() => import("../Privacy/Privacy"));
const Terms = lazy(() => import("../Terms/Terms"));

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

const Routers = () => {
  const [islogedin, setislogedin] = useState(false);

  return (
    <Suspense fallback={<Loading />}>
      {islogedin ? <HomeHeader /> : <Header />}
      {/* <HomeHeader /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/profile" element={<FreelancerProfile />} />
        <Route path="/ClientProfile" element={<ClientProfile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/JobPost" element={<JobPostPage />} />
        <Route path="/JobBidding" element={<JobBiddingPage />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/ResetConfirm" element={<ResetConfirm />} />
        <Route path="/MyPostJobs" element={<MyJobs />} />
        <Route path="/ClientDashboard" element={<ClientDashboard />} />
        <Route path="/FreelancerDashboard/JobApply" element={<JobApply />} />
        <Route
          path="/FreelancerDashboard"
          element={<FreelancerDashboardPage />}
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/UserTypeSelector" element={<UserTypeSelector />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/term" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Suspense>
  );
};
ClientProfile;
export default Routers;
