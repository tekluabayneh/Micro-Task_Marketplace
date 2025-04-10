const db = require("../config/db");
const GitHubStrategy = require("passport-github2").Strategy;
require("dotenv").config();

const configureGitHubStrategy = (passport) => {
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: "http://localhost:3001/auth/github/callback",
      },
      (accessToken, refreshToken, profile, done) => {
        console.log(accessToken, refreshToken, profile);
        done(null, true);
      }
    )
  );
};

module.exports = configureGitHubStrategy;
