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
        if (userRows.length == 0) {
            expect(res.status).toHaveBeenCalledWith(404)
            expect(res.json).toHaveBeenCalledWith({ message: "Client not found" })
        }
    })
})

