const FilterJob = require("../FilterJob");

describe("filterJob", () => {
  //case one if the search is not provided return 400 error
  // case tow it the serach is all return all the jobs
  // case three if the serach is not all return the job that match the search

  it("it should return 400 if the search is not provided", async () => {
    let req = {
      query: {
        search: "",
      },
    };
    let res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    let next = jest.fn();
    await FilterJob(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: "Missing search query",
    });
    expect(next).not.toHaveBeenCalled();
  });
  it("it should return all the job if the Search is all", async () => {
    let req = {
      query: "All",
    };

    let res = {};
    let next = jest.fn();
    await FilterJob(req, res, next);

    expect(req.filterdJob).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          jobTitle: expect.any(String),
          jobSize: expect.any(Number),
          budget: expect.any(Number),
          experience: expect.any(String),
        }),
      ])
    );
    expect(next).toHaveBeenCalled();
  });
  it("it should return the job that match the search", async () => {
    let req = {};
    let res = {};
    let next = jest.fn();
    await filterdJob(req, res, next);
    expect(req.filterdJob).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          jobTitle: expect.any(String),
          jobSize: expect.any(Number),
          budget: expect.any(Number),
          experience: expect.any(String),
        }),
      ])
    );
    expect(next).toHaveBeenCalled();
  });
});
