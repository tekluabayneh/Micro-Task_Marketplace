const JobMiddleware = require("../JobMiddleware");
const db = require("../../config/db");
jest.mock("../../config/db.js");

describe("JobMiddleware", () => {
  let req, res, next;

  beforeEach(() => {
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  it("should return 400 if required fields are missing", async () => {
    req = {
      body: {
        jobTitle: "test",
        description: "test",
        jobSize: "test",
        budget: "test",
        experience: "test",
        // skills and email missing
      },
    };

    await JobMiddleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith("All fields are required");
    expect(next).not.toHaveBeenCalled();
  });

  it("should call next if user is client", async () => {
    req = {
      body: {
        jobTitle: "test",
        description: "test",
        jobSize: "test",
        budget: "test",
        experience: "test",
        skills: "JS",
        email: "client@test.com",
      },
    };

    db.execute.mockResolvedValueOnce([[{ id: 1, role: "client" }]]);

    await JobMiddleware(req, res, next);

    expect(db.execute).toHaveBeenCalledWith(
      "SELECT * FROM users WHERE email = ?",
      ["client@test.com"]
    );
    expect(req.userid).toBe(1);
    expect(next).toHaveBeenCalled();
  });

  it("should return 400 if user is freelancer", async () => {
    req = {
      body: {
        jobTitle: "test",
        description: "test",
        jobSize: "test",
        budget: "test",
        experience: "test",
        skills: "JS",
        email: "freelancer@test.com",
      },
    };

    db.execute.mockResolvedValueOnce([[{ id: 2, role: "freelancer" }]]);

    await JobMiddleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message:
        "Access denied. Please log in with a client account or create one to continue.",
    });
    expect(next).not.toHaveBeenCalled();
  });

  it("should return 400 if user does not exist", async () => {
    req = {
      body: {
        jobTitle: "test",
        description: "test",
        jobSize: "test",
        budget: "test",
        experience: "test",
        skills: "JS",
        email: "unknown@test.com",
      },
    };

    db.execute.mockResolvedValueOnce([[]]);

    await JobMiddleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(
      "You must have an account to post a job"
    );
    expect(next).not.toHaveBeenCalled();
  });

  it("it should return 500 for internal server error", async () => {
    let next = jest.fn();
    let req = {};
    let res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await JobMiddleware(req, res, next);
    expect(res.json).toHaveBeenCalledWith("Internal server error");
    expect(res.status).toHaveBeenCalledWith(500);
    expect(next).not.toHaveBeenCalled();
  });
});
