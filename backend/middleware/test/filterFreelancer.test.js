const filterfreelancer = require("../filterFreelancer.js");
const db = require("../../config/db.js");
jest.mock("../../config/db.js");

beforeEach(() => {});

describe("filterfreelancer middlware", () => {
  let req, res, next;

  beforeEach(() => {
    req = { query: { Search: "" } };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  test("should return 400 if the Search query is empty", async () => {
    await filterfreelancer(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: "Missing search query" });
    // since there is Erroe the next shouldn't be called
    expect(next).not.toHaveBeenCalled();
  });

  test("should fetch all the profile if the query is not All", async () => {
    req.query.Search = "Frontend Developer";
    const mockResult = [{ id: 1, name: "teklu" }];
    // and we have to also mock the database result
    db.execute.mockResolvedValueOnce([mockResult]);

    await filterfreelancer(req, res, next);

    expect(req.SearchResult).toEqual(mockResult);
    expect(db.execute).toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
  });

  test("should retun internal server error", async () => {
    req.query.Search = "All";
    db.execute.mockRejectedValueOnce(new Error("Db Error"));

    await filterfreelancer(req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Something went wrong" });

    expect(next).not.toHaveBeenCalled();
  });
});
