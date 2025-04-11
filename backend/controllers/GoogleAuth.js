const db = require("../config/db");
const GoogleStrategy = require("passport-google-oauth20").Strategy;


const configureGoogleAuth = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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
