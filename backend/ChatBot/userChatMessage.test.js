const AiResponse = require("./ChatbotAi.js")
const userInput = require("./userChatMessge.js");

jest.mock("./ChatbotAi.js")

const req = {
    body: {
        message: "what is http"
    }
}
const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
}
describe(" userInput test", () => {

    it('should return  a', async () => {
        const req = {
            body: {
                message: ""
            }
        }

        await userInput(req, res)

        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json).toHaveBeenCalledWith({ error: "Message is required" });
    })

    it('should ', async () => {
        await userInput(req, res)
        expect(res.status).toHaveBeenCalledWith(200)
        const GetAIresponse = await AiResponse(req.body.message)
        expect(res.json).toHaveBeenCalledWith({ Ai_response: GetAIresponse });
    })

    it('should  should reutn 500 srever error  ', async () => {
        AiResponse.mockImplementation(() => {
            throw new Error("AI failure");
        });

        await userInput(req, res)
        expect(res.status).toHaveBeenCalledWith(500)
        expect(res.json).toHaveBeenCalledWith({ error: "Internal Server Error" });

    })

})
