const db = require("../config/db");
const GitHubStrategy = require("passport-github2").Strategy;

const configureGitHubStrategy = (passport) => {
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: "http://localhost:3001/auth/github/callback",
      },
      (accessToken, refreshToken, profile, done) => {
        try {
          console.log(accessToken, refreshToken, profile);
          done(null, true);
        } catch (error) {
          console.error("Error during Google OAuth:", error);
          return done(error, null);
        }
      }
    )
  );
};

module.exports = configureGitHubStrategy;
