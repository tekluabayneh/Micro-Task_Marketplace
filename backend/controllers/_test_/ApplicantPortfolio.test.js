const db = require("../../config/db.js")
const ApplicantPortFolio = require("../ApplicantPortFolio")

jest.mock("../../config/db.js", () => ({
    execute: jest.fn()
}))

const req = {
    query: {
        userEmail: ""
    }
}
const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
}


describe("ApplicantPortFolio test", () => {

    it('should return if the user email is not provided', async () => {
        await ApplicantPortFolio(req, res)

        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json).toHaveBeenCalledWith({ message: "email is required." })
    })


    it('should return 404 if the freelaner not fould ', async () => {

        const req = {
            query: {
                userEmail: "ex@email.com"
            }
        }

        db.execute.mockReturnValueOnce([])

        await ApplicantPortFolio(req, res)
        expect(db.execute).toHaveBeenCalledWith(expect.stringContaining("SELECT users.id AS freelancer_id"), expect.any(Array))

    })

})
