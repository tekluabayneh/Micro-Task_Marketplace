const db = require("../config/db");

const isFreelancer_or_client = async (req, res, next) => {
  const { email } = req.body;
  console.log(email);
  try {
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const checkUserQuery = "SELECT * FROM users WHERE email = ?";
    const [result] = await db.execute(checkUserQuery, [email]);
    console.log(checkUserQuery);
    if (result.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    // If user exists, call next middleware
    req.user_id = result[0].id;

    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = isFreelancer_or_client;
