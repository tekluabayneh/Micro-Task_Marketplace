const JobPost = require("../controllers/JobPost");
const JobMiddle = require("../middleware/JobMiddleware");
const PostJobmiddleware = require("../middleware/PostJobmiddleware");
const JobPostRouter = require("express").Router();

JobPostRouter.post("/postJob", JobMiddle, PostJobmiddleware, JobPost);

module.exports = JobPostRouter;
