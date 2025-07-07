const freelancer_client_data = require("./RecommandationResponse.js")
const db = require("../config/db.js")
const AiJobRecommandationResponse = require("./aijobrecommandation");
jest.mock("../config/db.js", () => ({
    execute: jest.fn()
}))

jest.mock("./aijobrecommandation.js")

const req = {
    query: {
        email: "ex@gmail.com"
    }
}
const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
}

describe(" freelancer_client_data test ", () => {
    it('should return 400 error message if the email is not found', async () => {
        const req = {
            query: {
                email: ""
            }
        }
        await freelancer_client_data(req, res)

        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json).toHaveBeenCalledWith({ message: "email is required" });

    })

    it('should return message that the database has not data for the ai to feed', async () => {
        const fakeResult = []
        db.execute.mockReturnValueOnce(Promise.resolve(fakeResult, []))
        await freelancer_client_data(req, res)

        expect(db.execute).toHaveBeenCalledWith(
            expect.stringContaining("SELECT jobs.jobTitle, jobs.description, jobs.jobSize, jobs.budget, jobs.experience, jobs.skills FROM jobs INNER JOIN client_profiles ON client_profiles.user_id = jobs.clientId INNER JOIN users  ON users.id = client_profiles.user_id  WHERE users.email = ?"), expect.any(Array))
        if (!fakeResult) {
            expect(res.status).toHaveBeenCalledWith(400)
            expect(res.json).toHaveBeenCalledWith({ message: "No job listings available for AI recommendation." })
            return
        }
    })


    it('should return message that the database has not data for the ai to feed', async () => {
        const fakeResult = []
        db.execute.mockReturnValueOnce(Promise.resolve([{ title: "frontend Dev", name: "jone", age: 12, idActive: false }], []))
            .mockReturnValueOnce(Promise.resolve(fakeResult, []))

        await freelancer_client_data(req, res)
        expect(db.execute).toHaveBeenCalledWith(
            expect.stringContaining("SELECT title ,skills ,experience_level ,hourly_rate ,availability FROM freelancer_profiles"))
        if (!fakeResult) {
            expect(res.status).toHaveBeenCalledWith(400)
            expect(res.json).toHaveBeenCalledWith({ message: "No job listings available for AI recommendation." })
        }

    })

    it('should return the 200 success message if the ai response', async () => {
        const fakeResult1 = [{ title: "frotnend", skills: { 'd': "man" }, hourly_rate: 12, availability: true, experience_level: "mid" }]
        const fakeResult2 = [{ jobTitle: "frotnend", description: "backend", experience: "mid", jobSize: "mid", budget: 100 }]


        db.execute.mockReturnValueOnce(Promise.resolve(fakeResult2, []))
            .mockReturnValueOnce(Promise.resolve(fakeResult1, []));

        const AiResponse = await AiJobRecommandationResponse.mockImplementation(() => {
            return { result: { text: "this is the txt" } }
        })

        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith({ Ai_response: AiResponse })
    })



})









