// src/routers/Routers.jsx
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy-loaded page components
const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const Profile = React.lazy(() => import("../pages/Profile"));
const Contact = React.lazy(() => import("../pages/Contact"));
const NotFound = React.lazy(() => import("../pages/NotFound"));

const Routers = () => {
  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
      </Routes>
    </Suspense>
  );
};

export default Routers;
