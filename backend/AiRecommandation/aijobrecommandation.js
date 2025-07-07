const dotenv = require("dotenv");
dotenv.config();

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.HF_API_TOKEN);

// This is your structured prompt logic
const buildPrompt = (jobQueryResult, freelanceProfileQueryResultInput) => {
    const freelancerList = freelanceProfileQueryResultInput
        .map(
            (freelancer, i) => `
${i + 1}.
- Title: ${freelancer.title}
- Skills: ${freelancer.skills}
- Experience Level: ${freelancer.experience_level}
- Hourly Rate: $${freelancer.hourly_rate}
- Availability: ${freelancer.availability}
`
        )
        .join("\n");

    const jobsList = jobQueryResult
        .map(
            (job, i) => `
${i + 1}.
- Title: ${job.jobTitle}
- Description: ${job.description}
- Skills: ${JSON.parse(job.skills).join(", ")}
- Experience Level: ${job.experience}
- Job Size: ${job.jobSize}
- Budget: ${job.budget}
`
        )
        .join("\n");

    return `
You are an intelligent matching assistant. Match the following job(s) with the most relevant freelancers based on skills, experience level, hourly rate, and availability.

For each match, return a JSON object with:
- freelancer (name or title),
- score (1–10),
- reason (3–4 lines explaining why they are a good or bad fit — include skill match, experience alignment, availability, and budget fit).

Return the response as a JSON array of the top 5 freelancers, sorted by highest score.


Return your response in the following JSON format:
[
  {
    "freelancer": "Frontend Developer",
    "score": 8,
    "reason": "Strong match with React and Tailwind skills for Job 3"
  },
  ...
]
Only include the top 5 matches, sorted by highest score.


## Job Details:
${jobsList}

## Freelancer Profiles (20–50 entries):
${freelancerList}

For each freelancer, respond with a score (1–10) and a short reason why they are a good or bad fit. Only include the top 5 matches in your final response, sorted by highest score.
`;
};

const AiJobRecommandationResponse = async (jobData, freelancerData) => {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = buildPrompt(jobData, freelancerData);

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return text;
    } catch (err) {
        console.error("Error:", err.message);
        return "An error occurred while generating AI recommendations.";
    }
};

module.exports = AiJobRecommandationResponse;
