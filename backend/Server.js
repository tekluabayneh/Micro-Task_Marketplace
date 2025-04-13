require("dotenv").config();
const configureGitHubStrategy = require("./controllers/GithubAuth");
const configureGoogleAuth = require("./controllers/GoogleAuth");
const OauthRoute = require("./routes/OAuthRouter");
const AuthRoute = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const express = require("express");
const session = require("express-session");
const db = require("./config/db");
const passport = require("passport");
const cors = require("cors");

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
    let CheckQuery = "SELECT * FROM users WHERE email = ? ";
    let [result] = await db.execute(CheckQuery, [user.email]);

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

//// this is for use login and register route
app.use("/auth", AuthRoute);

app.get("/", (req, res) => {
  res.send("Job Platform API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
