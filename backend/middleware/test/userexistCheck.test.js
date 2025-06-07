// userexistCheck.test.js
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

const mockRes = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

const mockNext = jest.fn();

describe("CheckUserExistLogin", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 400 for short password", async () => {
    const req = { body: { email: "a@b.com", password: "12345" } };

    await CheckUserExistLogin(req, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: "Password must be at least 6 characters",
    });
    expect(mockNext).not.toHaveBeenCalled();
  });

  it("should return 401 if user not found", async () => {
    const req = { body: { email: "a@b.com", password: "123456" } };

    db.execute.mockResolvedValueOnce([[]]);

    await CheckUserExistLogin(req, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(401);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: "Invalid email or password",
    });
    expect(mockNext).not.toHaveBeenCalled();
  });

  it("should return 401 if password does not match", async () => {
    const req = { body: { email: "a@b.com", password: "wrongpass" } };
    db.execute.mockResolvedValueOnce([
      [{ email: "a@b.com", password: "hashedpass" }],
    ]);
    bcrypt.compare.mockResolvedValueOnce(false);

    await CheckUserExistLogin(req, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(401);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: "password is Invalid",
    });
    expect(mockNext).not.toHaveBeenCalled();
  });

  it("should call next() if login is successful", async () => {
    const req = { body: { email: "a@b.com", password: "123456" } };
    const user = { email: "a@b.com", password: "hashedpass" };

    db.execute.mockResolvedValueOnce([[user]]);
    bcrypt.compare.mockResolvedValueOnce(true);

    await CheckUserExistLogin(req, mockRes, mockNext);

    expect(req.userInfoFromDB).toEqual([user]);
    expect(mockNext).toHaveBeenCalled();
    expect(mockRes.status).not.toHaveBeenCalled();
    expect(mockRes.json).not.toHaveBeenCalled();
  });
});

describe("CheckUserExistRegister", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 400 for short password", async () => {
    const req = { body: { email: "a@b.com", password: "123" } };

    await CheckUserExistRegister(req, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: "Password must be at least 6 characters",
    });
    expect(mockNext).not.toHaveBeenCalled();
  });

  it("should return 401 if user already exists", async () => {
    const req = { body: { email: "a@b.com", password: "123456" } };

    db.execute.mockResolvedValueOnce([[{ email: "a@b.com" }]]);

    await CheckUserExistRegister(req, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(401);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: "user already exist",
    });
    expect(mockNext).not.toHaveBeenCalled();
  });

  it("should call next() if registration is valid", async () => {
    const req = { body: { email: "a@b.com", password: "123456" } };

    db.execute.mockResolvedValueOnce([[]]);

    await CheckUserExistRegister(req, mockRes, mockNext);

    expect(req.userInfoFromDB).toEqual([]);
    expect(mockNext).toHaveBeenCalled();
    expect(mockRes.status).not.toHaveBeenCalled();
  });
});
