const db = require("../config/db");

// Validate email format (basic check)

const GetFreelancerBiddingJobs = async (req, res) => {
    const { email } = req.query;

    // Validate email
    if (!email) {
        return res.status(400).json({ message: "A valid email is required" });
    }

    try {
        // Query to fetch jobs the freelancer has bid on
        const biddingJobsQuery = `
      SELECT j.id, j.jobTitle, j.budget, j.status, j.created_at
      FROM users u
      INNER JOIN applications a ON a.freelancer_id = u.id
      INNER JOIN jobs j ON a.job_id = j.id
      WHERE u.email = ?`;

        const [results] = await db.execute(biddingJobsQuery, [email]);

        if (results.length === 0) {
            return res.status(200).json({
                message:
                    "No bidding jobs found. Explore available jobs to place a bid.",
                response: [],
            });
        }

        return res.status(200).json({
            message: `Found ${results.length} bidding job${results.length > 1 ? "s" : ""
                }`,
            response: results,
        });
    } catch (error) {
        console.error("Error fetching bidding jobs:", error);
        return res.status(500).json({
            message: "Failed to fetch bidding jobs. Please try again later.",
        });
    }
};

module.exports = GetFreelancerBiddingJobs;
