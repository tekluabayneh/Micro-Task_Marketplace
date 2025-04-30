const express = require("express");
const GetFreelancerBiddingJob = require("../controllers/GetFreelancerBidJob");

const GetFreelancerBiddingJobRoute = express.Router();

GetFreelancerBiddingJobRoute.get("/bidding-jobs", GetFreelancerBiddingJob);

module.exports = GetFreelancerBiddingJobRoute;
