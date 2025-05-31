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

describe("userexistCheck middleware tst", () => {
  it("should return 400 if the email and password are not grater than 6 length", async () => {
    let req = {
      body: {
        password: "12345",
        email: "example@gmail.com",
      },
    };
    let res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    let next = jest.fn();

    await CheckUserExistLogin(req, res, next);
    expect(req.body.password.length).not.toBe(6);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "Password must be at least 6 characters",
    });
    expect(next).not.toHaveBeenCalled();
  });

  it("it should return 401 if the user does not exist in the db", async () => {
    db.execute.mockResolvedValueOnce([[]]);
    let req = {
      body: {
        password: "123456",
        email: "example@gmail.com",
      },
    };
    let res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    let next = jest.fn();
    await CheckUserExistLogin(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      message: "Invalid email or password",
    });
    expect(next).not.toHaveBeenCalled();
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
    let res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    let next = jest.fn();

    await CheckUserExistLogin(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      message: "password is Invalid",
    });
    expect(next).not.toHaveBeenCalled();
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

    let res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    let next = jest.fn();

    //  Mock DB to return user
    db.execute.mockResolvedValueOnce([[mockUser]]);

    // Mock bcrypt to say passwords match
    bcrypt.compare.mockResolvedValueOnce(true);

    await CheckUserExistLogin(req, res, next);

    //check that user info was set on req
    expect(req.userInfoFromDB).toEqual([mockUser]);

    expect(next).toHaveBeenCalled();

    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });
});

// describe("CheckUserExistRegister middleware tst", () => {
//   it("", () => {});
//   it("", () => {});
//   it("", () => {});
// });
