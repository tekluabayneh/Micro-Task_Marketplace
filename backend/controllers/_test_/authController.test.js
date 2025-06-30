const db = require("../../config/db.js")
const { Register, Login } = require("../authController.js")

const bcrypt = require("bcryptjs")
jest.mock("../../config/db.js", () => ({
    execute: jest.fn()
}))
jest.mock("../../config/db.js", () => ({
    execute: jest.fn()
}))
jest.mock("bcryptjs")
const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
}

describe("authController test ", () => {

    it('should return 200 when the db return the data', async () => {
        db.execute.mockResolvedValueOnce(Promise.resolve([{ affectedRows: 1 }], []))

        let hashedPassword

        const req = {
            body: {
                password: hashedPassword,
                lastName: "lastName",
                firstName: "firstName",
                email: "email@gmail.com",
                role: "role"
            }
        }

        hashedPassword = bcrypt.hash(req.body.password, bcrypt.getSalt(10))
        await Register(req, res)
        expect(db.execute).toHaveBeenCalledWith(expect.stringContaining(`INSERT INTO users (firstName, lastName, email, Password, role)VALUES(?,?,?,?,?)`), expect.any(Array))
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith({ message: "Registration successful!" })

    })

    it('should reutrn 500 if the database return 0 for the affectedRows', async () => {
        db.execute.mockResolvedValueOnce(Promise.resolve([{ affectedRows: 0 }], []))
        let hashedPassword
        const req = {
            body: {
                password: hashedPassword,
                lastName: "lastName",
                firstName: "firstName",
                email: "email@gmail.com",
                role: "role"
            }
        }

        hashedPassword = bcrypt.hash(req.body.password, bcrypt.getSalt(10))
        await Register(req, res)
        expect(db.execute).toHaveBeenCalledWith(expect.stringContaining(`INSERT INTO users (firstName, lastName, email, Password, role)VALUES(?,?,?,?,?)`), expect.any(Array))
        expect(res.status).toHaveBeenCalledWith(500)

        expect(res.json).toHaveBeenCalledWith({ message: "Something went wrong, please try again." })
    })

    it('should return 500 server error messge ', async () => {
        db.execute.mockRejectedValueOnce(Promise.resolve([], new Error("Server error")))
        const req = {
            body: {
                password: " hashedPassword",
                lastName: "lastName",
                firstName: "firstName",
                email: "email@gmail.com",
                role: "role"
            }
        }

        await Register(req, res)
        expect(res.status).toHaveBeenCalledWith(500)
        expect(res.json).toHaveBeenCalledWith({ message: "Server error, please try again later." })
    })


    // Login tests


    it('should return 200 successful messge and json with freelancer/Dashboard', async () => {
        const userInfoFromDB = [{ role: "freelancer" }]
        const req = {
            userInfoFromDB: userInfoFromDB
        }
        await Login(req, res)
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith({ role: "Freelancer/Dashboard" })
    })

    it('should return 200 successful messge and json with the clinet/Dashboard url  ', async () => {
        const userInfoFromDB = [{ role: "client" }]
        const req = {
            userInfoFromDB: userInfoFromDB
        }
        await Login(req, res)
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith({ role: "Client/Dashboard" })

    })

})
