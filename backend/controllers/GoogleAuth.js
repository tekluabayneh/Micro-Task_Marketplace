const e = require("express");
const db = require("../config/db");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const configureGoogleAuth = async (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/api/oauth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const user = {
            id: profile.id,
            firstName: profile.name.familyName,
            lastName: profile.name.givenName,
            email: profile.emails[0].value,
            photo: profile.photos[0].value,
          };
          console.log("this is the profile thing in here", profile);

          const userRole = profile._json.state
            ? JSON.parse(profile._json.state).role
            : null;
          console.log("this is the profile thing in here", userRole);

          // // check if th user exist in the database
          // const checkQuery = "SELECT * FROM users WHERE email = ?";
          // let [result] = await db.execute(checkQuery, [user.email]);

          // // if the user exist just login them
          // if (result.length > 0) {
          //   done(null, user);
          //   return;
          // }

          // // otherwise store the data in the database
          // const userRole = req.cookies.user_type || req.query.type;
          // let data = [user.firstName, user.lastName, user.email, userRole];
          // const StoreData =
          //   "INSERT INTO users (firstName, lastName, email, role) VALUES (?, ?, ?, ?)";
          // let [storeResult] = await db.execute(StoreData, data);

          // // is the string process is success done it
          // if (storeResult.affectedRows) {
          //   done(null, user);
          //   return;
          // }
          done(null, user);
          console.log(user);
        } catch (error) {
          console.error("Error during Google OAuth:", error);
          done(error, null);
          return;
        }
      }
    )
  );
};

module.exports = configureGoogleAuth;
