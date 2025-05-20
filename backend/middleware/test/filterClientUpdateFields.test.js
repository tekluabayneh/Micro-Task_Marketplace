const filterClientUpdateFields = require("../filterClientUpdateFields");

describe("filterClientUpdateFields middleware", () => {
  let req, res, next;

  beforeEach(() => {
    req = { body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  test("should return 400 if no valid fields are provided", () => {
    filterClientUpdateFields(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "No valid fields provided to update",
    });
    expect(next).not.toHaveBeenCalled();
  });

  test("should filter valid fields and call next", () => {
    req.body = {
      company_name: "Test Company",
      owner_name: "John Doe",
      invalid_field: "Invalid",
    };

    filterClientUpdateFields(req, res, next);

    expect(req.filteredUpdate).toEqual({
      company_name: "Test Company",
      owner_name: "John Doe",
    });
    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });

  test("should handle partial valid fields", () => {
    req.body = {
      phone: "1234567890",
      invalid_field: "Invalid",
    };

    filterClientUpdateFields(req, res, next);

    expect(req.filteredUpdate).toEqual({
      phone: "1234567890",
    });
    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });
});
