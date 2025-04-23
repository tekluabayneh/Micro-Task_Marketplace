const express = require("express");
const UpdateClientProfile = require("../controllers/UpdateClientProfile");
const isFreelancer_or_client = require("../controllers/isFreelncer");
const FilterUserField = require("../middleware/filterClientUpdateFields");

const updateClientProfileRoute = express.Router();

updateClientProfileRoute.put(
  "/client",
  isFreelancer_or_client,
  FilterUserField,
  UpdateClientProfile
);

module.exports = updateClientProfileRoute;
