const db = require("../config/db");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();
const configureGoogleAuth = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GoogleAuthSecret,
        clientSecret: process.env.GoogleAuthClientSecret,
        callbackURL: "http://localhost:3001/auth/google/callback",
      },
      (accessToken, refreshToken, profile, done) => {
        console.log(profile, refreshToken, accessToken);

        done(null, true);
      }
    )
  );
};
module.exports = configureGoogleAuth;
