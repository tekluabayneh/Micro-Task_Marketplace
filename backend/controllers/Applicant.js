const db = require("../config/db");
const { reqest, response } = require("supertest")

const Applicant = async (req, res) => {
    const { email, attachment_url, client_id, job_id, cover_letter } = req.body;

    try {
        // Validate required fields
        if (!email || !attachment_url || !client_id || !job_id || !cover_letter) {
            return res.status(400).json({ error: "All fields are required." });
        }

        // Find freelancer ID based on email
        const findFreelancerQuery = `
      SELECT freelancer_profiles.user_id, freelancer_profiles.proposal_count
      FROM users 
      INNER JOIN freelancer_profiles 
      ON freelancer_profiles.user_id = users.id 
      WHERE users.email = ?
    `;

        const [freelancerResult] = await db.execute(findFreelancerQuery, [email]);

        if (freelancerResult.length === 0) {
            return res.status(404).json({
                message:
                    "Freelancer profile not found. Please create your profile before applying.",
            });
        }

        const freelancerId = freelancerResult[0].user_id;

        // Insert application
        const insertApplicationQuery = `
      INSERT INTO applications (job_id, freelancer_id, client_id, cover_letter, attachment_url)
      VALUES (?, ?, ?, ?, ?)
    `;
        const applicationData = [
            job_id,
            freelancerId,
            client_id,
            cover_letter,
            attachment_url,
        ];
        const [insertResult] = await db.execute(
            insertApplicationQuery,
            applicationData
        );

        if (insertResult.affectedRows === 0) {
            return res.status(500).json({
                message: "Failed to submit application. Please try again later.",
            });
        }
        // ✅ Now update proposal_count for the job
        const updateJobProposalQuery = `UPDATE jobs SET proposal = proposal + 1 WHERE id = ?`;
        await db.execute(updateJobProposalQuery, [job_id]);

        // ✅ Now update proposal_count for the job
        const updateJobProposalCountQuery = `UPDATE freelancer_profiles SET  proposal_count = proposal_count + 1 WHERE  user_id = ?`;
        await db.execute(updateJobProposalCountQuery, [freelancerId]);

        return res.status(201).json({
            message: "Application submitted successfully!",
        });


    } catch (error) {
        res.status(500).json({
            message: "Server error. Please try again later.",
        });
    }
};

module.exports = Applicant;
