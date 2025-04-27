const db = require("../config/db");

const ApplicantPortFolioUpdate = async (req, res) => {
  try {
    const { image_url, title, subtitle, email } = req.body;

    if (!image_url || !title || !subtitle || !email) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // First, find the freelancer ID using the email
    const findFreelancerQuery = `
      SELECT users.id AS freelancer_id
      FROM users
      INNER JOIN freelancer_profiles ON freelancer_profiles.user_id = users.id
      WHERE users.email = ?
    `;
    const [freelancerResult] = await db.execute(findFreelancerQuery, [email]);

    if (freelancerResult.length === 0) {
      return res
        .status(404)
        .json({ message: "Freelancer not found with the provided email." });
    }

    const freelancer_id = freelancerResult[0].freelancer_id;

    // Always insert a new portfolio entry
    const insertQuery = `
      INSERT INTO portfolio (freelancer_id, image_url, title, subtitle) 
      VALUES (?, ?, ?, ?)
    `;
    const insertData = [freelancer_id, image_url, title, subtitle];
    const [insertResult] = await db.execute(insertQuery, insertData);

    if (insertResult.affectedRows > 0) {
      return res.status(201).json({
        message: "Freelancer portfolio created successfully.",
        freelancer_id: freelancer_id,
      });
    } else {
      return res
        .status(500)
        .json({ message: "Failed to create freelancer portfolio." });
    }
  } catch (error) {
    console.error("Error updating freelancer portfolio:", error);
    res
      .status(500)
      .json({ message: "Internal server error.", error: error.message });
  }
};

module.exports = ApplicantPortFolioUpdate;
