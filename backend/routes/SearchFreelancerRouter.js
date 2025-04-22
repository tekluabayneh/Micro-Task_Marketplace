const express = require("express");
const SearchFreelancer = require("../controllers/SearchFreelancer");
const Filterfreelancer = require("../middleware/filterFreelancer");

const SearchFreelancerRoute = express.Router();



SearchFreelancerRoute.get("/filter", Filterfreelancer, SearchFreelancer);


module.exports =SearchFreelancerRoute