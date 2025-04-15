const db = require("../config/db");
const GitHubStrategy = require("passport-github2").Strategy;

const configureGitHubStrategy = (passport) => {
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/api/oauth/github/callback",
        scope: ["user:email"],
        passReqToCallback: true,
      },
      (accessToken, refreshToken, profile, done) => {
        try {
          // console.log("profile", profile);
          // console.log("refreshToken", refreshToken);
          // console.log("accessToken", accessToken);

          const user = {
            id: profile.id,
            username: profile.username,
            photo: profile.photos?.[0]?.value || "",
            email: profile.emails?.[0]?.value ?? null,
          };

          done(null, user);
        } catch (error) {
          console.error("Error during Github OAuth:", error);
          return done(error, null);
        }
      }
    )
  );
};

module.exports = configureGitHubStrategy;
