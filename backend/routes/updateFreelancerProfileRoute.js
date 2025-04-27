const express = require("express");
const isFreelancer_or_client = require("../controllers/isFreelncer");
const UpdateFreelancerProfile = require("../controllers/UpdateFreelancerProfile");
const filterFreelancerUpdateFields = require("../middleware/filterFreelancerUpdateFields");

const updateFreelancerProfileRoute = express.Router();

updateFreelancerProfileRoute.put(
  "/freelancer",
  isFreelancer_or_client,
  filterFreelancerUpdateFields,
  UpdateFreelancerProfile
);

module.exports = updateFreelancerProfileRoute;
