const JobPost = require("../controllers/JobPost");
const JobMiddle = require("../middleware/JobMiddleware");
const postJobmiddleware = require("../middleware/PostjobMiddleware");
const JobPostRouter = require("express").Router();

JobPostRouter.post("/postJob", JobMiddle, postJobmiddleware, JobPost);

module.exports = JobPostRouter;
