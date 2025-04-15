const db = require("../config/db");
const bcrypt = require("bcryptjs");
const CheckUserExistLogin = async (req, res, next) => {
  try {
    let { email, password } = req.body;
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    let CheckQuery = "SELECT * FROM users  WHERE email = ?";
    let [result] = await db.execute(CheckQuery, [email]);

    if (result.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // check if password mach
    let isMatch = await bcrypt.compare(password, result[0].password);
    if (!isMatch) {
      return res.status(401).json({ message: "password is Invalid" });
    }

    // this let's me to use it in the route page using this name
    req.userInfoFromDB = result;
    next();
  } catch (error) {
    console.error("Error in CheckUserExist middleware:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const CheckUserExistRegister = async (req, res, next) => {
  try {
    let { email, password } = req.body;

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    let CheckQuery = "SELECT * FROM users  WHERE email = ? ";
    let [result] = await db.execute(CheckQuery, [email]);

    if (result.length > 0) {
      return res.status(401).json({ message: "user already exist" });
    }

    // this let's me to use it in the route page using this name
    req.userInfoFromDB = result;
    next();
  } catch (error) {
    console.error("Error in CheckUserExist middleware:", error);
    res.status(500).json({ message: "Server error" });
  }
};
module.exports = { CheckUserExistLogin, CheckUserExistRegister };
