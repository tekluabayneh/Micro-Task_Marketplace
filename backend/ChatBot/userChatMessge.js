const AiResponse = require("./ChatbotAi");

const userInput = async (req, res) => {
    try {
        const { message } = req.body;
        if (!message) {
            return res.status(400).json({ error: "Message is required" });
        }
        const GetAIresponse = await AiResponse(message);
        res.status(200).json({ Ai_response: GetAIresponse });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = userInput;
