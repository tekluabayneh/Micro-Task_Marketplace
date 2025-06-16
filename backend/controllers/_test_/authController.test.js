const { execute } = require("../../config/db")
const Resgister = require("../authController.js")
const bcrypt = require("bcryptjs")
jest.mock("../../config/db.js", () => ({
    execute: jest.fn()
}))

jest.mock("bcryptjs")

const req = {
    body: {
        password: "1234",
        lastName: "lastName",
        firstName: "firstName",
        email: "email@gmail.com",
        role: "role"
    }
}
const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
}

describe("authController test ", () => {

    it('should return 200 when the db return the data', async () => {
        const hashedPassword = bcrypt.hash()
        const req = {
            body: {
                password: hashedPassword,
                lastName: "lastName",
                firstName: "firstName",
                email: "email@gmail.com",
                role: "role"
            }
        }


        await Resgister(req, res)


    })


})
