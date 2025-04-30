const db = require("../config/db");

const ApplicantPortFolio = async (req, res) => {
  let { userEmail } = req.query;

  if (!userEmail) {
    return res.status(400).json({ message: "email is required." });
  }

  try {
    // First, find the freelancer ID using the email
    const findFreelancerQuery = `
      SELECT users.id AS freelancer_id
            FROM users
           INNER JOIN freelancer_profiles ON freelancer_profiles.user_id = users.id
           WHERE users.email = ?
    `;
    const [freelancerResult] = await db.execute(findFreelancerQuery, [
      userEmail,
    ]);

    if (freelancerResult.length === 0) {
      return res
        .status(404)
        .json({ message: "Freelancer not found with the provided email." });
    }
    const freelancer_id = freelancerResult[0].freelancer_id;

    const FetchQuery = "SELECT * FROM portfolio WHERE freelancer_id = ?";
    const [result] = await db.execute(FetchQuery, [freelancer_id]);

    // If no portfolio is found for the provided email
    if (result.length === 0) {
      return res
        .status(404)
        .json({ message: "No portfolio found for the given email." });
    }

    // Return the portfolio if found
    return res
      .status(200)
      .json({ message: "Portfolio fetched successfully.", data: result });
  } catch (error) {
    // Handle unexpected errors (database issues, etc.)
    console.error("Database error:", error);
    return res.status(500).json({
      message:
        "An error occurred while fetching the portfolio. Please try again later.",
    });
  }
};

module.exports = ApplicantPortFolio;
