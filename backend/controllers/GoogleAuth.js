const db = require("../config/db");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const configureGoogleAuth = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:5173/auth/google/FreelancerDashboard",
      },
      (accessToken, refreshToken, profile, done) => {
        try {
          console.log("profile", profile);
          console.log("refreshToken", refreshToken);
          console.log("accessToken", accessToken);
          done(null, true);
        } catch (error) {
          console.error("Error during Google OAuth:", error);
          return done(error, null);
        }
      }
    )
  );
};

module.exports = configureGoogleAuth;
