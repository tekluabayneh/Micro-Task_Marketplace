const db = require("../config/db");

const fetchFreelancerProfile = async (req, res) => {
  try {
    const { email } = req.query;

    // Get the client ID based on their email
    const getUserByEmailQuery = "SELECT * FROM users WHERE email = ?";
    const [userRows] = await db.execute(getUserByEmailQuery, [email]);

    if (userRows.length === 0) {
      return res.status(404).json({ message: "Client not found" });
    }

    const user_id = userRows[0].id;

    // Get jobs posted by this client
    const fetchClientProfileQuery =
      "SELECT * FROM freelancer_profiles WHERE user_id = ?";
    const [jobRows] = await db.execute(fetchClientProfileQuery, [user_id]);

    return res.status(200).json(jobRows);
  } catch (error) {
    console.error("Error fetching client jobs:", error);
    return res.status(500).json({ message: "Something went wrong", error });
  }
};

module.exports = fetchFreelancerProfile;
