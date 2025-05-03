// src/routers/Routers.jsx
import React, { Suspense, useState, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loading from "../../components/Loading/Loading";
import ClientHeader from "../Header/ClientHeader";
import FreelancerHeader from "../Header/FreelacerHeader";
import FreelancerSearch from "../Search/FreelancerSearch";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChatBot from "../ChatBot/Chatbot";

const FreelancerEarnings = lazy(() =>
  import("../../components/Freelancer/Earnings.JSX")
);
const FR_MyJobs = lazy(() => import("../../components/Freelancer/MyJobs"));

const UserTypeSelector = lazy(() => import("../Auth/UserTypeSelector"));
const ApplicationForm = lazy(() =>
  import("../../components/Freelancer/applicationSteps/ApplicationForm")
);
const ContractsPage = lazy(() => import("../ContractsPage/ContractsPage"));
const ClientSetting = lazy(() => import("../SettingsPage/ClientSettingsPage "));
const FreelancerSetting = lazy(() =>
  import("../SettingsPage/FreelancerSettingsPage ")
);
const Dashborad = lazy(() => import("../Dashboard/Dashborad"));
const JobPostForm = lazy(() => import("../PostJob/JobPostForm"));

// Lazy load components
const Header = lazy(() => import("../Header/Header"));
const FreelancerDashboardPage = lazy(() =>
  import("../Dashboard/FreelancerDashboardPage")
);
const ClientProfile = lazy(() => import("../Profiles/ClientProfile"));
const ResetPassword = lazy(() => import("../Auth/ForgotPassword"));
const LandingPage = React.lazy(() => import("../Landing/Landing"));
const ResetConfirm = lazy(() => import("../Auth/ResetConfirm"));
const MyJobs = lazy(() => import("../Jobs/MYPostedProjects"));
const Search = lazy(() => import("../Search/Search"));
const Privacy = lazy(() => import("../Privacy/Privacy"));
const Terms = lazy(() => import("../Terms/Terms"));
const Login = lazy(() => import("../Auth/login"));
const Register = lazy(() => import("../Auth/signUp"));
const Footer = lazy(() =>
  import("../../components/LandingPageComponents/Footer")
);
const FreelancerProfile = React.lazy(() =>
  import("../Profiles/FreelancerProfile")
);
const Contact = React.lazy(() => import("../Contact/Contact"));
const NotFound = React.lazy(() => import("../NotFound/NotFound"));

const Routers = () => {
  let location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const userType = localStorage.getItem("userType");
  const publicRoutes = ["/", "/login", "/register", "/UserTypeSelector"];
  const isPublic = publicRoutes.includes(location.pathname);

  return (
    <Suspense fallback={<Loading />}>
      {isPublic ? (
        <Header />
      ) : userType === "Freelancer" ? (
        <FreelancerHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : userType === "Client" ? (
        <ClientHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        ""
      )}

      <ChatBot isOpen={isOpen} setIsOpen={setIsOpen} />
      <Toaster />
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        {/* FREELANCER ROUTE */}
        <Route path="/" element={<LandingPage />} />
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <Route
          path="/Freelancer/Dashboard"
          element={<FreelancerDashboardPage />}
        />
        <Route path="/Freelancer/Setting" element={<FreelancerSetting />} />
        <Route
          path="/Freelancer/FreelancerProfile"
          element={<FreelancerProfile />}
        />
        <Route path="/Freelancer/JobBidding" element={<ApplicationForm />} />
        <Route path="/Freelancer/Search" element={<FreelancerSearch />} />
        <Route path="/Freelancer/Earnings" element={<FreelancerEarnings />} />
        <Route path="/Freelancer/MyJobs" element={<FR_MyJobs />} />

        {/* CLIENT ROUTE */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <Route path="/Client/Dashboard" element={<Dashborad />} />
        <Route path="/Client/ClientProfile" element={<ClientProfile />} />
        {/* this one is the cline job posted page */}
        <Route path="/Client/Contracts" element={<ContractsPage />} />
        <Route path="/Client/JobPost" element={<JobPostForm />} />
        <Route path="Client/MyPostJobs" element={<MyJobs />} />
        <Route path="/Client/Setting" element={<ClientSetting />} />
        <Route path="/Client/Search" element={<Search />} />
        {/* ths is common route */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/ResetConfirm" element={<ResetConfirm />} />
        <Route path="/contact" element={<Contact />} />
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
export default Routers;
