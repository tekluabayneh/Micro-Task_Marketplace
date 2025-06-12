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


    it('should  return 404 cline is not found ', async () => {
        db.execute.mockReturnValueOnce(Promise.resolve([[], []]))

        const req = {
            query: {
                userEmail: "ex@email.com"
            }
        }

        await ApplicantPortFolio(req, res)
        expect(db.execute).toHaveBeenCalledWith(expect.stringContaining("SELECT users.id AS freelancer_id"), expect.any(Array))
        expect(res.status).toHaveBeenCalledWith(404)
        expect(res.json).toHaveBeenCalledWith({ message: "Freelancer not found with the provided email." })
    })


    it('should return 404 if the portfolio is not found', async () => {
        db.execute
            .mockReturnValueOnce(Promise.resolve([[{ freelancer_id: 1 }], []]))
            .mockReturnValueOnce(Promise.resolve([[], []]));


        const req = {
            query: {
                userEmail: "ex@email.com"
            }
        }


        await ApplicantPortFolio(req, res)

        expect(db.execute).toHaveBeenCalledWith(expect.stringContaining("SELECT * FROM portfolio WHERE freelancer_id = ?"), expect.any(Array));

        expect(res.status).toHaveBeenCalledWith(404)
        expect(res.json).toHaveBeenCalledWith({ message: "No portfolio found for the given email." })
    })

    it('should respond with 200 message ', async () => {
        db.execute
            .mockReturnValueOnce(Promise.resolve([[{ freelancer_id: 1 }], []]))
            .mockReturnValueOnce(Promise.resolve([
                [
                    { id: 101, title: "My Portfolio", description: "React, Node.js" },
                    { id: 102, title: "My Second Portfolio", description: "Vue, Laravel" }
                ],
                []
            ]))

        const req = {
            query: {
                userEmail: "ex@email.com"
            }
        }

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        }

        await ApplicantPortFolio(req, res)

        expect(db.execute).toHaveBeenCalledWith(expect.stringContaining("SELECT * FROM portfolio WHERE freelancer_id = ?"), expect.any(Array));
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith({
            message: "Portfolio fetched successfully.",
            portfolio: [
                { id: 101, title: "My Portfolio", description: "React, Node.js" },
                { id: 102, title: "My Second Portfolio", description: "Vue, Laravel" }
            ]
        })
    })



})
