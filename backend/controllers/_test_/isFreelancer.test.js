const isFreelancer_or_client = require("../isFreelncer.js");
const db = require("../../config/db.js");

jest.mock("../../config/db.js", () => ({
    execute: jest.fn()
}))

const req = {
    body: {
        email: "ex@gmail.com"
    }
}
const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
}
const next = jest.fn()
describe(" isFreelancer test", () => {
    it('should return 400 if email is missing', async () => {
        const req = {
            body: {
            }
        }
        await isFreelancer_or_client(req, res, next)
        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json).toHaveBeenCalledWith({ message: "Email is required" })
        expect(next).not.toHaveBeenCalled()

    })


    it('should return 404 if the result is empty', async () => {
        const fakeResult = []
        db.execute.mockReturnValueOnce(Promise.resolve([fakeResult, []]))
        await isFreelancer_or_client(req, res)
        expect(db.execute).toHaveBeenCalledWith(expect.stringContaining("SELECT * FROM users WHERE email = ?"), expect.any(Array))
        if (!fakeResult) {
            expect(res.status).toHaveBeenCalledWith(404)
            expect(res.json).toHaveBeenCalledWith({ message: "User not found" })
            expect(next).not.toHaveBeenCalled()
        }
    })



    it('should return 200 message for success', async () => {
        const fakeResult = [{ id: 1, name: "teklu", role: "Freelancer" }, { id: 2, name: "jone", role: "client" }]
        db.execute.mockReturnValueOnce(Promise.resolve([fakeResult, []]))
        await isFreelancer_or_client(req, res, next)
        expect(db.execute).toHaveBeenCalledWith(expect.stringContaining("SELECT * FROM users WHERE email = ?"), expect.any(Array))
        expect(req.user_id).toBe(fakeResult[0].id)
        expect(next).toHaveBeenCalled()
    })



    it('should reutn 500 message', async () => {
        const fakeResult = []
        db.execute.mockReturnValueOnce(new Error("database error"))
        await isFreelancer_or_client(req, res, next)
        expect(db.execute).toHaveBeenCalledWith(expect.stringContaining("SELECT * FROM users WHERE email = ?"), expect.any(Array))
        expect(res.status).toHaveBeenCalledWith(500)
        expect(res.json).toHaveBeenCalledWith({ message: "Internal server error" });
        expect(next).toHaveBeenCalled()
    })




})












