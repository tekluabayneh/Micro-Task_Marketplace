// src/routers/Routers.jsx
import React, { Suspense, useState, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import UserTypeSelector from "../Auth/UserTypeSelector";
import ApplicationForm from "../../components/Freelancer/applicationSteps/ApplicationForm";
import ContractsPage from "../ContractsPage/ContractsPage";
import ClientSetting from "../SettingsPage/ClientSettingsPage ";
import FreelancerSetting from "../SettingsPage/FreelancerSettingsPage ";
import Dashborad from "../../components/Client/DashBoardComponent/Dashborad";

// Lazy load components
const Header = lazy(() => import("../../components/Header/Header"));
const HomeHeader = lazy(() => import("../../components/Header/HomeHeader"));
const FreelancerDashboardPage = lazy(() =>
  import("../Dashboard/FreelancerDashboardPage")
);
const ResetPassword = lazy(() => import("../Auth/ForgotPassword"));
const ResetConfirm = lazy(() => import("../Auth/ResetConfirm"));
const MyJobs = lazy(() => import("../PostJob/MYPostedProjects"));
const Search = lazy(() => import("../Search/Search"));
const Privacy = lazy(() => import("../Privacy/Privacy"));
const Terms = lazy(() => import("../Terms/Terms"));

const Login = lazy(() => import("../Auth/login"));
const Register = lazy(() => import("../Auth/signUp"));
const ClientProfile = lazy(() => import("../Profiles/ClientProfile"));
const Footer = lazy(() =>
  import("../../components/LandingPageComponents/Footer")
);
const JobPostPage = lazy(() => import("../PostJob/JobPostPage"));
const LandingPage = React.lazy(() => import("../Landing/Landing"));
const FreelancerProfile = React.lazy(() =>
  import("../Profiles/FreelancerProfile")
);
const Contact = React.lazy(() => import("../Contact/Contact"));
const NotFound = React.lazy(() => import("../NotFound/NotFound"));

const Routers = () => {
  const [islogedin, setislogedin] = useState(false);
  let location = useLocation();

  const userType = localStorage.getItem("userType");
  const publicRoutes = ["/", "/login", "/register", "/UserTypeSelector"];
  const isPublic = publicRoutes.includes(location.pathname);

  return (
    <Suspense fallback={<Loading />}>
      {isPublic ? (
        <Header />
      ) : userType === "freelancer" ? (
        <HomeHeader />
      ) : userType === "client" ? (
        <HomeHeader />
      ) : (
        <HomeHeader />
      )}

      <Routes>
        {/* FREELANCER ROUTE */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/Freelancer/JobBidding" element={<ApplicationForm />} />
        <Route
          path="/Freelancer/Dashboard"
          element={<FreelancerDashboardPage />}
        />
        <Route path="/Freelancer/Setting" element={<FreelancerSetting />} />
        <Route path="/Freelancer/profile" element={<FreelancerProfile />} />

        {/* CLIENT ROUTE */}
        <Route path="/Client/Dashboard" element={<Dashborad />} />
        <Route path="/Client/ClientProfile" element={<ClientProfile />} />
        {/* this one is the cline job posted page */}
        <Route path="/Client/Contracts" element={<ContractsPage />} />
        <Route path="/Client/JobPost" element={<JobPostPage />} />
        <Route path="Client//MyPostJobs" element={<MyJobs />} />
        <Route path="/Client/Setting" element={<ClientSetting />} />
        <Route path="/Client/Search" element={<Search />} />

        {/* ths is common route */}
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
