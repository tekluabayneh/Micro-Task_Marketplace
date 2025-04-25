require("dotenv").config();
const updateFreelancerProfileRoute = require("./routes/updateFreelancerProfileRoute");
const updateClientProfileRoute = require("./routes/updateclientProfileRoute");
const SearchFreelancerRoute = require("./routes/SearchFreelancerRouter");
const configureGitHubStrategy = require("./controllers/GithubAuth");
const configureGoogleAuth = require("./controllers/GoogleAuth");
const JobPostRouter = require("./routes/JobPostRouter");
const MyJobsRouter = require("./routes/MyJobsRoute");
const OauthRoute = require("./routes/OAuthRouter");
const AuthRoute = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const express = require("express");
const db = require("./config/db");
const cors = require("cors");
const fetchClientProfileRoute = require("./routes/fetchClientProfileRoute");

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
  console.log("this is the user id", user.id);
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

// passport auth
app.use("/api/oauth", OauthRoute);

// posting route
app.use("/api", JobPostRouter);

//// this is for use login and register route
app.use("/auth", AuthRoute);

// client job
app.use("/myJobs", MyJobsRouter);

app.use("/api/search", SearchFreelancerRoute);

// update the client profile
app.use("/api/update", updateClientProfileRoute);

// update
app.use("/api/update", updateFreelancerProfileRoute);

// fetchClientProfileRoute
app.use("/api", fetchClientProfileRoute);

app.get("/", (req, res) => {
  res.send("Job Platform API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
