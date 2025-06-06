const passport = require("passport");
const OauthRoute = require("express").Router();
/// Google Oauth
OauthRoute.get("/google", (req, res, next) => {
  const { type } = req.query;

  // add this user type to the cookies and we can grab and check where to redirect the user
  res.cookie("user_type", type, { httpOnly: true, secure: true });

  passport.authenticate("google", {
    scope: ["profile", "email"],
    state: JSON.stringify({ role: type }),
  })(req, res, next);
});

// redirect the user if the user successfully registered
OauthRoute.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "https://micro-task-marketplace-1.onrender.com",
  }),
  async (req, res) => {
    try {
      // now ths is how we access the user type since we store it in cookies
      let userType = req.cookies.user_type;
      if (!req.user || !userType) {
        return res.redirect("https://micro-task-marketplace-1.onrender.com");
      }

      if (userType === "freelancer") {
        return res.redirect(
          "https://micro-task-marketplace-1.onrender.com/Freelancer/Dashboard"
        );
      } else {
        return res.redirect(
          "https://micro-task-marketplace-1.onrender.com/Client/Dashboard"
        );
      }
    } catch (error) {
      return res.redirect("https://micro-task-marketplace-1.onrender.com");
    }
  }
);

/// github Oauth
OauthRoute.get("/github", (req, res, next) => {
  const { type } = req.query;

  res.cookie("user_type", type, { httpOnly: true, secure: true });

  passport.authenticate("github", {
    scope: ["user:email"],
    state: JSON.stringify({ role: type }),
  })(req, res, next);
});

// redirect the user if the user successfully registered
OauthRoute.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "https://micro-task-marketplace-1.onrender.com",
  }),
  (req, res) => {
    try {
      // now ths is how we access the user type since we store it in cookies
      let userType = req.cookies.user_type;

      // check if there is no user or user type return the user to landing page
      if (!req.user || !userType) {
        return res.redirect("https://micro-task-marketplace-1.onrender.com");
      }

      // redirect the user based on the type

      if (userType === "freelancer") {
        return res.redirect(
          "https://micro-task-marketplace-1.onrender.com/Freelancer/Dashboard"
        );
      } else {
        return res.redirect(
          "https://micro-task-marketplace-1.onrender.com/Client/Dashboard"
        );
      }
    } catch (error) {
      return res.redirect("https://micro-task-marketplace-1.onrender.com");
    }
  }
);

module.exports = OauthRoute;
