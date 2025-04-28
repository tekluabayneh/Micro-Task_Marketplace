const express = require("express");
const GetAllJobs = require("../controllers/GetAlljob");

const GetAllJobsRoute = express.Router();


GetAllJobsRoute.get("/GetAll", GetAllJobs);

module.exports = GetAllJobsRoute;
