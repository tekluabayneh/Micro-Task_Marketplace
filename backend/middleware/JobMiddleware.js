const db = require("../config/db");

const JobMiddle = async (req, res, next) => {
  let { jobTitle, description, jobSize, budget, experience, skills, email } =
    req.body;
  try {
    if (
      !description ||
      !jobTitle ||
      !jobSize ||
      !experience ||
      !skills ||
      !budget ||
      !email
    ) {
      return res.status(400).json("All fields are required");
    }

    // check is the usr exit in the user table
    let CheckQuery = "SELECT * FROM users WHERE email = ?";
    let [result] = await db.execute(CheckQuery, [email]);

    // if the user don't have account we have redirect the usr to the login page
    if (result.length === 0) {
      return res.status(400).json("You must have an account to post a job");
    }
    // Check if the user is not a client, return a message
    if (result[0].role === "freelancer") {
      res.status(400).json({
        message:
          "Access denied. Please log in with a client account or create one to continue.",
      });
      return;
    }

    req.userid = result[0].id;
    next();
  } catch (error) {
    console.error("Middleware error:", err.message);
    return res.status(500).json("Internal server error");
  }
};

module.exports = JobMiddle;
