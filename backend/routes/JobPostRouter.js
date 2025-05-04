const JobPost = require("../controllers/JobPost");
const JobMiddle = require("../middleware/JobMiddleware");
const PostJobMiddleWare = require("../middleware/PostJobmiddleware");

const JobPostRouter = require("express").Router();

JobPostRouter.post("/postJob", JobMiddle, PostJobMiddleWare, JobPost);

module.exports = JobPostRouter;
