const {
    CheckUserExistLogin,
    CheckUserExistRegister,
} = require("../userexistCheck");
const bcrypt = require("bcryptjs");
const db = require("../../config/db");
jest.mock("bcryptjs");
jest.mock("../../config/db", () => ({
    execute: jest.fn(),
}));


const MockReponse = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
}
const MockRequest = {
    body: {
        email: 'example@gmail.com',
        password: '12345'
    }

}
const MockNext = jest.fn()

describe("userexistCheck middleware tst", () => {
    it("should return 400 if the email and password are not grater than 6 length", async () => {


        let req = {
            body: {
                password: "12345",
                email: "example@gmail.com",
            },
        };


        await CheckUserExistLogin(req, MockReponse, MockNext);


        expect(req.body.password.length).not.toBe(6);
        expect(MockReponse.status).toHaveBeenCalledWith(400);
        expect(MockReponse.json).toHaveBeenCalledWith({
            message: "Password must be at least 6 characters",
        });
        expect(MockNext).not.toHaveBeenCalled();
    });

    it("it should return 401 if the user does not exist in the db", async () => {
        db.execute.mockResolvedValueOnce([[]]);

        await CheckUserExistLogin(MockRequest, MockReponse, MockNext);

        expect(MockReponse.status).toHaveBeenCalledWith(401);
        expect(MockReponse.json).toHaveBeenCalledWith({
            message: "Invalid email or password",
        });
        expect(MockNext).not.toHaveBeenCalled();
    });

    it("should return 401 if the password are not the same", async () => {
        db.execute.mockResolvedValueOnce([
            [{ email: "example@gmail.com", password: "hashedpassword" }],
        ]);
        let req = {
            body: {
                password: "wrongPassword",
                email: "example@gmail.com",
            },
        };

        await CheckUserExistLogin(req, MockReponse, MockNext);

        expect(MockReponse.status).toHaveBeenCalledWith(401);
        expect(MockReponse.json).toHaveBeenCalledWith({
            message: "password is Invalid",
        });
        expect(MockNext).not.toHaveBeenCalled();
    });
    it("should call the next middleware when login is successful", async () => {
        const mockUser = {
            email: "example@gmail.com",
            password: "hashedpassword",
        };

        let req = {
            body: {
                email: "example@gmail.com",
                password: "123456",
            },
        };

        //  Mock DB to return user
        db.execute.mockResolvedValueOnce([[mockUser]]);

        // Mock bcrypt to say passwords match
        bcrypt.compare.mockResolvedValueOnce(true);

        await CheckUserExistLogin(MockRequest, MockReponse, MockNext);

        //check that user info was set on req
        expect(req.userInfoFromDB).toEqual([mockUser]);

        expect(MockNext).toHaveBeenCalled();

        expect(MockReponse.status).not.toHaveBeenCalled();
        expect(MockReponse.json).not.toHaveBeenCalled();
    });



    // this CheckUserExistRegister test 


    it('should reuurn 400 if the password length is less than 6', async () => {

        const req = {
            body: {
                email: 'example@gmail.com',
                password: '12345'
            }
        }

        await CheckUserExistRegister(req, MockReponse, MockNext)

        expect(req.body.password.length).not.toBe(6)
        expect(MockReponse.status).toHaveBeenCalledWith(400)
        expect(MockReponse.json).toHaveBeenCalledWith({ message: "Password must be at least 6 characters" })
        expect(MockNext).not.toHaveBeenCalled()

    })


    it('should  return 400 if the user alredy exist ', async () => {

        // const res = {
        //     status: jest.fn().mockReturnThis(),
        //     json: jest.fn(),
        // }
        //



    })

});

