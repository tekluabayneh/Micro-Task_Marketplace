const db = require("../config/db");

const GetAllJobs = async (req, res) => {
  try {
    // Get the client ID based on their email
    const GetallJobs = "SELECT * FROM jobs";
    const [result] = await db.execute(GetallJobs);

    if (result.length === 0) {
      return res.status(404).json({ message: "Client not found" });
    }
    return res.status(200).json({ success: true, response: result });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching jobs",
      error: error.message,
    });
  }
};
module.exports = GetAllJobs;
