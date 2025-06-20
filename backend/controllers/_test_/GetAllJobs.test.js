const db = require("../../config/db");
const GetAllJobs = require("../GetAlljob");
jest.mock("../../config/db", () => ({
  execute: jest.fn(),
}));
const req = {
  body: {},
};
const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

describe("GetAllJobs test", () => {
  it("shout return 404 if the cline is not found", async () => {
    db.execute.mockResolvedValueOnce([[], []]);

    await GetAllJobs(req, res);
    expect(db.execute).toHaveBeenCalledWith(
      expect.stringContaining("SELECT * FROM jobs")
    );
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "Client not found" });
  });

  it("should return the 200 message when the cline is found", async () => {
    const fakeJob = [
      { id: 1, name: "Teklu" },
      { id: 2, name: "jone" },
    ];
    db.execute.mockReturnValueOnce([fakeJob, []]);

    await GetAllJobs(req, res);
    expect(db.execute).toHaveBeenCalledWith(
      expect.stringContaining("SELECT * FROM jobs")
    );
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ success: true, response: fakeJob });
  });

  it("should return the 200 message when the cline is found", async () => {
    db.execute.mockRejectedValueOnce(new Error("db side error"));
    await GetAllJobs(req, res);
    expect(db.execute).toHaveBeenCalledWith(
      expect.stringContaining("SELECT * FROM jobs")
    );
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: "An error occurred while fetching jobs",
      error: "db side error",
    });
  });
});
