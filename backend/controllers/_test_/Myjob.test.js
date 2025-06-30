const getClientJobs = require("../Myjobs.js")
const db = require("../../config/db.js")

jest.mock("../../config/db.js", () => ({
    execute: jest.fn()
}))

const req = {
    query: {
        tiele: "titile",
        name: "name",
        email: "ex@gmail.com"
    }
}

const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
}

describe(" MyJiob test", () => {
    it('should return 404 if cline is not found', async () => {
        const userRows = []
        db.execute.mockReturnValueOnce(Promise.resolve(userRows, []))

        await getClientJobs(req, res)

        expect(db.execute).toHaveBeenCalledWith(expect.stringContaining("SELECT id FROM users WHERE email = ?"), expect.any(Array))

        if (!userRows) {
            expect(res.status).toHaveBeenCalledWith(404)
            expect(res.json).toHaveBeenCalledWith({ message: "Client not found" })
        }
    })

    it('should reutn 200 success message ', async () => {
        const userRows = [{ id: 1 }]
        const jobRows = [{ id: 1, title: "Job 1", clientId: 1 }, { id: 2, title: "Job 2", clientId: 1 }]
        db.execute.mockReturnValueOnce(Promise.resolve([userRows, []]))
            .mockReturnValueOnce(Promise.resolve([jobRows, []]))
        await getClientJobs(req, res)

        expect(db.execute).toHaveBeenCalledWith(expect.stringContaining("SELECT id FROM users WHERE email = ?"), expect.any(Array))
        expect(db.execute).toHaveBeenCalledWith(expect.stringContaining("SELECT * FROM jobs WHERE clientId = ?"), [userRows[0].id])


        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith(jobRows)
    })
    it('description', async () => {
        db.execute.mockReturnValueOnce(Promise.resolve(new Error("Database error")))
        await getClientJobs(req, res)

        expect(db.execute).toHaveBeenCalledWith(expect.stringContaining("SELECT id FROM users WHERE email = ?"), expect.any(Array))

        expect(res.status).toHaveBeenCalledWith(500)
        expect(res.json).toHaveBeenCalledWith({ message: "Something went wrong", error: expect.any(Error) })
    })


})

