const db = require("../config/db");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const configureGoogleAuth = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/api/oauth/google/callback",
      },
      (accessToken, refreshToken, profile, done) => {
        try {
          const user = {
            id: profile.id, // Google's unique ID
            displayName: profile.displayName,
            email: profile.emails[0].value,
            photo: profile.photos[0].value,
          };
          console.log("this is the profile thing in here", profile);
          // one main thing to do is we have to store the user data to database

          done(null, user);
        } catch (error) {
          console.error("Error during Google OAuth:", error);
          return done(error, null);
        }
      }
    )
  );
};

module.exports = configureGoogleAuth;
