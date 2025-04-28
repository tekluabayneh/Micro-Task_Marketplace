const express = require("express");
const Applicant = require("../controllers/Applicant");

const ApplicantRoute = express.Router();

ApplicantRoute.post("/apply", Applicant);

module.exports = ApplicantRoute;
