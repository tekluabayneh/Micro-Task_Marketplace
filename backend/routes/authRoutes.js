const { Register, Login } = require("../controllers/authController");
const {
  RegisterMiddleware,
  LoginMiddleware,
} = require("../middleware/authMiddleware");

const {
  CheckUserExistLogin,
  CheckUserExistRegister,
} = require("../middleware/userexistCheck");
const AuthRoute = require("express").Router();

AuthRoute.post(
  "/register",
  [RegisterMiddleware, CheckUserExistRegister],
  Register
);

AuthRoute.post("/login", [LoginMiddleware, CheckUserExistLogin], Login);

module.exports = AuthRoute;
