require("dotenv").config();
const updateFreelancerProfileRoute = require("./routes/updateFreelancerProfileRoute");
const GetFreelancerBiddingJobRoute = require("./routes/GetFreeancerBiddingJobRoute");
const freelancer_client_data = require("./AiRecommandation/RecommandationResponse");
const fetchFreelancerProfileRoute = require("./routes/fetchFreelancerProfileRoute");
const updateClientProfileRoute = require("./routes/updateclientProfileRoute");
const fetchClientProfileRoute = require("./routes/fetchClientProfileRoute");
const ApplicantPortFolioRoute = require("./routes/AplicantPortFolioRoute");
const SearchFreelancerRoute = require("./routes/SearchFreelancerRouter");
const configureGitHubStrategy = require("./controllers/GithubAuth");
const configureGoogleAuth = require("./controllers/GoogleAuth");
const GetAllJobsRoute = require("./routes/GetAllJobsRoute");
const FetchJobsRoute = require("./routes/FetchJobsRoute");
const SearchJobRoute = require("./routes/SearchJobRoute");
const ApplicantRoute = require("./routes/ApplicantRoute");
const JobPostRouter = require("./routes/JobPostRouter");
const userInput = require("./ChatBot/userChatMessge");
const MyJobsRouter = require("./routes/MyJobsRoute");
const OauthRoute = require("./routes/OAuthRouter");
const AuthRoute = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// session
app.use(
  session({
    secret: "my-secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// // Github auth
configureGitHubStrategy(passport);

// // Google auth
configureGoogleAuth(passport);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (user, done) => {
  try {
    // let CheckQuery = "SELECT * FROM users WHERE email = ? ";
    // let [result] = await db.execute(CheckQuery, [user.email]);
    let result = 1;
    if (result.length > 0) {
      // If user already exists, handle it appropriately
      return done(null, result[0]);
    } else {
      return done(null, false);
    }
  } catch (err) {
    return done(err);
  }
});

// fetch jobs route
app.use("/api", FetchJobsRoute);

// passport auth
app.use("/api/oauth", OauthRoute);

// posting route
app.use("/api", JobPostRouter);

//// this is for use login and register route
app.use("/auth", AuthRoute);

// client job
app.use("/myJobs", MyJobsRouter);

/// filter or search job route
app.use("/api/search", SearchFreelancerRoute);

app.use("/api/searchJob", SearchJobRoute);

// update the client profile
app.use("/api/update", updateClientProfileRoute);

// update
app.use("/api/update", updateFreelancerProfileRoute);

// fetchClientProfileRoute
app.use("/api", fetchClientProfileRoute);

// fetch freelancer profile
app.use("/api", fetchFreelancerProfileRoute);

// applicant route
app.use("/api/applicant", ApplicantPortFolioRoute);

// get all posted jobs
app.use("/api/jobs", GetAllJobsRoute);

// apply for job route
app.use("/api/jobs", ApplicantRoute);

//get freelancer applayd job from the applicant table
app.use("/api/freelancer", GetFreelancerBiddingJobRoute);

//this is the chatbot ai route the tell about micro work
app.use("/api/chatbot", userInput);

//this is the reout for client to freelancer match ai route
app.use("/api/recommendation", freelancer_client_data);

app.get("/", (req, res) => {
  res.send("Job Platform API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
//https://micro-task-marketplace.onrender.com/api/oauth/google/callback


//https://micro-task-marketplace.onrender.com/api/oauth/github/callback