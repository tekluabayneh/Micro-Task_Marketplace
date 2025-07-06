const db = require("../config/db");
const AiJobRecommandationResponse = require("./aijobrecommandation");

const freelancer_client_data = async (req, res) => {
    try {
        const { email } = req.query;
        if (!email) {
            return res.status(400).json({ message: "email is required" });
        }

        // Get all jobs
        let jobQuery =
            "SELECT jobs.jobTitle, jobs.description, jobs.jobSize, jobs.budget, jobs.experience, jobs.skills FROM jobs INNER JOIN client_profiles ON client_profiles.user_id = jobs.clientId INNER JOIN users  ON users.id = client_profiles.user_id  WHERE users.email = ?";

        const [jobQueryResult] = await db.execute(jobQuery, [email]);
        if (jobQueryResult.length === 0) {
            return res.status(404).json({
                message: "No job listings available for AI recommendation.",
            });
        }

        // Get all freelancer profiles
        const freelanceProfileQuery =
            "SELECT title ,skills ,experience_level ,hourly_rate ,availability FROM freelancer_profiles";
        const [freelanceProfileQueryResult] = await db.execute(
            freelanceProfileQuery
        );

        if (freelanceProfileQueryResult.length === 0) {
            return res.status(404).json({
                message: "No freelancer profiles available for AI recommendation.",
            });
        }

        const GetAIresponse = await AiJobRecommandationResponse(
            jobQueryResult,
            freelanceProfileQueryResult
        );
        // const cleanResponse = JSON.parse(GetAIresponse);
        res.status(200).json({ Ai_response: GetAIresponse });
    } catch (error) {
        console.error("Error processing user input:", error);
        res.status(500).json({ error: "Internal server error." });
    }
};

module.exports = freelancer_client_data;
