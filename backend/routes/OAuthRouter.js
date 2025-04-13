const passport = require("passport");
const OauthRoute = require("express").Router();
/// Google Oauth
OauthRoute.get("/google", (req, res, next) => {
  const { type } = req.query;

  console.log("this is the user type", type);

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
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // now ths is how we access the user type since we store it in cookies
    let userType = req.cookies.user_type;
    console.log("this is the user type", userType);
    if (!req.user || !userType) {
      return res.redirect("http://localhost:5173");
    }

    if (userType === "freelancer") {
      return res.redirect("http://localhost:5173/FreelancerDashboard");
    } else {
      return res.redirect("http://localhost:5173/ClientDashboard");
    }
  }
);

/// github Oauth
OauthRoute.get(
  "/github",
  passport.authenticate("github", { scope: ["profile", "email"] })
);

// redirect the user if the user successfully registered
OauthRoute.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }, (req, res) => {
    res.redirect("/dashboard");
  })
);

module.exports = OauthRoute;
