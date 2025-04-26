const express = require("express");

const fetchFreelancerProfile = require("../controllers/fetchFreelancerProfile");

const fetchFreelancerProfileRoute = express.Router();

fetchFreelancerProfileRoute.get(
  "/FreelancerProfileData",
  fetchFreelancerProfile
);

module.exports = fetchFreelancerProfileRoute;
