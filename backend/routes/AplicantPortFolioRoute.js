const express = require("express");

const ApplicantPortFolioUpdate = require("../controllers/ApplicantPortFolioUpdate");
const ApplicantPortFolio = require("../controllers/ApplicantPortFolio");

const ApplicantPortFolioRoute = express.Router();

ApplicantPortFolioRoute.get("/get", ApplicantPortFolio);

ApplicantPortFolioRoute.put("/update", ApplicantPortFolioUpdate);

module.exports = ApplicantPortFolioRoute;
