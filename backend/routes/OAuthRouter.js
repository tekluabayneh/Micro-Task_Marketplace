const passport = require("passport");
const OauthRoute = require("express").Router();
/// Google Oauth
OauthRoute.get("/google", (req, res, next) => {
  const { type } = req.query;

  // add this user type to the cookies and we can grab and check where to redirect the user
  res.cookie("user_type", type, { httpOnly: true });

  // and now continue login with google
  passport.authenticate("google", { scope: ["profile", "email"] })(
    req,
    res,
    next
  );
});

// redirect the user if the user successfully registered
OauthRoute.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:5173",
  }),
  (req, res) => {
    try {
      // now ths is how we access the user type since we store it in cookies
      let userType = req.cookies.user_type;

      if (!req.user || !userType) {
        return res.redirect("http://localhost:5173");
      }

      if (userType === "freelancer") {
        return res.redirect("http://localhost:5173/FreelancerDashboard");
      } else {
        return res.redirect("http://localhost:5173/ClientDashboard");
      }
    } catch (error) {
      return res.redirect("http://localhost:5173");
    }
  }
);

/// github Oauth
OauthRoute.get(
  "/github",
  (req, res, next) => {
    let { type } = req.query;

    res.cookie("user_type", type, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
    });
    next();
  },
  passport.authenticate("github", { scope: ["user:email"] })
);

// redirect the user if the user successfully registered
OauthRoute.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "http://localhost:5173",
  }),
  (req, res) => {
    try {
      // now ths is how we access the user type since we store it in cookies
      let userType = req.cookies.user_type;

      // check if there is no user or user type return the user to landing page
      if (!req.user || !userType) {
        return res.redirect("http://localhost:5173");
      }

      // redirect the user based on the type

      if (userType === "freelancer") {
        return res.redirect("http://localhost:5173/FreelancerDashboard");
      } else {
        return res.redirect("http://localhost:5173/ClientDashboard");
      }
    } catch (error) {
      return res.redirect("http://localhost:5173");
    }
  }
);

module.exports = OauthRoute;
