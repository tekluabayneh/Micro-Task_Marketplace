const db = require("../config/db");
const GitHubStrategy = require("passport-github2").Strategy;
require("dotenv").config();
const configureGitHubStrategy = (passport) => {
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GithubAuthSecret,
        clientSecret: process.env.GithubAuthClientSecret,
        callbackURL: "http://localhost:3001/auth/google/callback",
      },
      (accessToken, refreshToken, profile, done) => {
        console.log(accessToken, refreshToken, profile);

        done(null, true)
      }
    )
  );
};
module.exports = configureGitHubStrategy;
