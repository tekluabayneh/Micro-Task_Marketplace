const express = require("express");
const fetchJobController = require("../controllers/FetchJobs");

const FetchJobsRoute = express.Router();

FetchJobsRoute.get("/jobs", fetchJobController);

module.exports = FetchJobsRoute;
