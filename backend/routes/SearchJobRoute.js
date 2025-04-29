const express = require("express");
const FilterJob = require("../middleware/FilterJob");
const SearchJobs = require("../controllers/SearchJob");

const SearchJobRoute = express.Router();

SearchJobRoute.get("/filter", FilterJob, SearchJobs);

module.exports = SearchJobRoute;
