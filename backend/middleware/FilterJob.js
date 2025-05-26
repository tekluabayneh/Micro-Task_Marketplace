// === File: FilterJob.test.js ===

const FilterJob = require("../FilterJob");
const db = require("../config/db");

// Mock the db.execute method
jest.mock("../config/db", () => ({
  execute: jest.fn(),
}));

// Clear mocks before each test to prevent leakage
beforeEach(() => {
  jest.clearAllMocks();
});

describe("FilterJob Middleware", () => {
  // Case 1: Search query is missing
  it("should return 400 if search is not provided", async () => {
    const req = {
      query: {}, // no search
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const next = jest.fn();

    await FilterJob(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: "Missing search query" });
    expect(next).not.toHaveBeenCalled();
  });

  // Case 2: Search is "All"
  it("should return all jobs when search is 'All'", async () => {
    const req = {
      query: { search: "All" },
    };

    const res = {};
    const next = jest.fn();

    const fakeJobs = [
      {
        id: 1,
        jobTitle: "Frontend Developer",
        jobSize: 4,
        budget: 1000,
        experience: "Junior",
      },
    ];

    db.execute.mockResolvedValue([fakeJobs]);

    await FilterJob(req, res, next);

    expect(db.execute).toHaveBeenCalledWith("SELECT * FROM jobs LIMIT 50");
    expect(req.SearchResult).toEqual(fakeJobs);
    expect(next).toHaveBeenCalled();
  });

  // Case 3: Search is specific
  it("should return filtered jobs matching the search", async () => {
    const req = {
      query: { search: "developer" },
    };

    const res = {};
    const next = jest.fn();

    const fakeJobs = [
      {
        id: 2,
        jobTitle: "Backend Developer",
        jobSize: 3,
        budget: 2000,
        experience: "Senior",
      },
    ];

    db.execute.mockResolvedValue([fakeJobs]);

    await FilterJob(req, res, next);

    // Check that the correct query was built and executed
    expect(db.execute).toHaveBeenCalledWith(
      expect.stringContaining("SELECT * FROM jobs"),
      ["%developer%", "%developer%", "%developer%", "%developer%"]
    );

    expect(req.SearchResult).toEqual(fakeJobs);
    expect(next).toHaveBeenCalled();
  });

  // Case 4: Simulate DB error (500 internal server error)
  it("should return 500 if the db throws an error", async () => {
    const req = {
      query: { search: "developer" },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const next = jest.fn();

    db.execute.mockRejectedValue(new Error("DB Error"));

    await FilterJob(req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Something went wrong" });
    expect(next).not.toHaveBeenCalled();
  });
});
