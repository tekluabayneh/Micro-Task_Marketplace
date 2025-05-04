const db = require("../config/db");
const GitHubStrategy = require("passport-github2").Strategy;

const configureGitHubStrategy = (passport) => {
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_CALLBACK_URL,
        scope: ["user:email"],
        passReqToCallback: true,
      },
      async (req, accessToken, refreshToken, profile, done) => {
        try {
          let fullName = profile._json.name;

          let firstName = "";
          let lastName = "";

          if (fullName) {
            const parts = fullName.trim().split(" ");
            firstName = parts[0];
            lastName = parts.slice(1).join(" ") || "";
          } else {
            // fallback: use username as both first and last name
            firstName = profile.username;
            lastName = profile.username;
          }

          const user = {
            id: profile.id,
            username: profile.username,
            photo: profile.photos?.[0]?.value || "",
            email: profile.emails?.[0]?.value ?? null,
            firstName,
            lastName,
          };

          // check if the user exist
          let checkQuery = "SELECT * FROM users WHERE email = ?";
          let [result] = await db.execute(checkQuery, [user.email]);

          // if the user already exist just no need to store the data
          if (result.length > 0) {
            done(null, user);
            return;
          }
          let userRole = JSON.parse(req.query.state);

          // if user didn't exist store the data in the data base
          const insertQuery = ` INSERT INTO users (firstName, lastName, email, role)VALUES (?, ?, ?, ?)`;
          let data = [user.firstName, user.lastName, user.email, userRole.role];
          let [storeResult] = await db.execute(insertQuery, data);

          if (storeResult.affectedRows) {
            done(null, user);
            return;
          }
        } catch (error) {
          console.error("Error during Github OAuth:", error);
          return done(error, null);
        }
      }
    )
  );
};

module.exports = configureGitHubStrategy;
