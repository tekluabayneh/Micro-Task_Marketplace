const PostJobMiddleWare = require("../PostJob");
const db = require("../../config/db");
jest.mock("../../config/db");

describe("PostJobMiddleWare", () => {
  it("should return 400 when affectedRows is 0", async () => {
    // Mock the database result to simulate failure
    db.execute.mockResolvedValueOnce([{ affectedRows: 0 }]);

    const req = {
      userid: 1,
      body: {
        jobTitle: "Developer",
        description: "Full Stack Developer",
        jobSize: "Medium",
        budget: 1000,
        experience: "Intermediate",
        skills: "JavaScript, Node.js",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const next = jest.fn();

    await PostJobMiddleWare(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "Error while inserting job data",
    });
    expect(next).not.toHaveBeenCalled();
  });

  it("should call next when job is inserted successfully", async () => {
    db.execute.mockResolvedValueOnce([{ affectedRows: 1 }]);

    const req = {
      userid: 1,
      body: {
        jobTitle: "Developer",
        description: "Full Stack Developer",
        jobSize: "Medium",
        budget: 1000,
        experience: "Intermediate",
        skills: "JavaScript, Node.js",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const next = jest.fn();

    await PostJobMiddleWare(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });

  it("should return 500 on DB error", async () => {
    db.execute.mockRejectedValueOnce(new Error("DB Error"));

    const req = {
      userid: 1,
      body: {
        jobTitle: "Developer",
        description: "Full Stack Developer",
        jobSize: "Medium",
        budget: 1000,
        experience: "Intermediate",
        skills: "JavaScript, Node.js",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const next = jest.fn();

    await PostJobMiddleWare(req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Failed to post job" });
    expect(next).not.toHaveBeenCalled();
  });
});
