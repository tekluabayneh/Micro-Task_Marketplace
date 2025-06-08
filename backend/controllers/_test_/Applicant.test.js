const execute = require("../../config/db.js")
const Applicant = require("../Applicant.js")
const db = require("../../config/db.js")
const request = require("supertest")



jest.mock("../../config/db.js", () => ({
    execute: jest.fn()
}))

const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
}
const req = {
    body: {
        email: "ex@gmail.com",
        attachment_url: "one.com",
        client_id: "1", job_id: "1",
        cover_letter: "this is mcok cover letter"
    }
}

const next = jest.fn()

beforeEach(() => {
    jest.clearAllMocks()
})

describe("Applicant test", () => {

    it("should return 400 if the user didn't provide all field", async () => {

        const req = {
            body: {
                attachment_url: "one.com",
                client_id: "1", job_id: "1",
                cover_letter: "this is mcok cover letter"
            }
        }

        await Applicant(req, res, next)

        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json).toHaveBeenCalledWith({ error: "All fields are required." })
        expect(next).not.toHaveBeenCalled()

    })

    it('should return 400 if the user is not found ', async () => {

        db.execute.mockResolvedValue([])

        await Applicant(req, res, next)

        expect(db.execute).toHaveBeenCalled()

        expect(next).not.toHaveBeenCalled()
    })



    it('should send and call the next if it pass ', async () => {

        await Applicant(req, res, next)

        expect(next).toHaveBeenCalled()
    })

})
