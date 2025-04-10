const passport = require("passport");
const OauthRoute = require("express").Router();
/// Google Oauth
OauthRoute.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// redirect the user if the user successfully registered
OauthRoute.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }, (req, res) => {
    res.redirect("/dashboard");
  })
);

// redirect the user if the user successfully registered
OauthRoute.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }, (req, res) => {
    res.redirect("/dashboard");
  })
);

/// github Oauth
OauthRoute.get(
  "github",
  passport.authenticate("github", { scope: ["profile", "email"] })
);
module.exports = OauthRoute;