const getClientJobs = require("../controllers/Myjobs");

const MyJobsRouter = require("express").Router();

MyJobsRouter.get("/myJobs", getClientJobs);

module.exports = MyJobsRouter;
