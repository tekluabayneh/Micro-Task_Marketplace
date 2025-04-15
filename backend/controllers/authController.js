const bcrypt = require("bcryptjs");
const db = require("../config/db");
const Register = async (req, res) => {
  const { password, lastName, email, role, firstName } = req.body;
  console.log(req.body);
  try {
    let Gensalt = await bcrypt.genSalt(10);
    let HashedPassword = await bcrypt.hash(password, Gensalt);

    let data = [firstName, lastName, email, HashedPassword, role];
    let insertUser =
      "INSERT INTO users (firstName, lastName, email, Password, role)VALUES(?,?,?,?,?)";
    let [result] = await db.execute(insertUser, data);

    if (result.affectedRows > 0) {
      return res.status(200).json({ message: "Registration successful!" });
    } else {
      return res
        .status(500)
        .json({ message: "Something went wrong, please try again." });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Server error, please try again later." });
  }
};
const Login = (req, res) => {
  const userInfoFromDB = req.userInfoFromDB;
  console.log(req.body);
  // heck the user type and navigate them to the dashboard
  if (userInfoFromDB[0].role === "freelancer") {
    return res.status(200).json({ role: "FreelancerDashboard" });
  } else {
    return res.status(200).json({ role: "ClientDashboard" });
  }
};

module.exports = { Login, Register };
