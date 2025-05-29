const JobMiddleware = require("../JobMiddleware");
const db = require("../../config/db");
jest.mock("../../config/db.js");
describe("job Middlware", () => {
  let req, res, next;

  // if one of the field is missing it should return 400 status code
  // if not it should return the valued from the database and if the batabase response it empty it should return 400 status code
  // if the user is not a client it should return 400 statsu code
  /// if it pass all this test and fanally it shoult call the next middleware

  it("should return 400 status code if one of the fields are missing", async () => {
    req = {
      body: {
        jobTitle: "test",
        description: "test",
        jobSize: "test",
        budget: "test",
        experience: "test",
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    db.execute.mockResolcedValueOnce([]);

    next = jest.fn();
    await JobMiddleware(req, res, next);
    expect(req.body).not.toEqual({
      jobTitle: "test",
      description: "test",
      jobSize: "test",
      budget: "test",
      experience: "test",
      skills: "test",
      email: "test",
    });
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith("All fields are required");
  });

  it("it should return the value from the database", async () => {
    req = {
      body: {},
    };
    res = {
      status: jest.fn(),
      json: jest.fn(),
    };
    next = jest.fn();
  });
});
