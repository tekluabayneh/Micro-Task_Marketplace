const express = require("express");
const fetchClientProfile = require("../controllers/fetchClientProfile");

const fetchClientProfileRoute = express.Router();

fetchClientProfileRoute.get("/ClientProfileData", fetchClientProfile);

module.exports = fetchClientProfileRoute;
