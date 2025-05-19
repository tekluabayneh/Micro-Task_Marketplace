const { RegisterMiddleware, LoginMiddleware } = require("../authMiddleware");
describe("test authMiddleware", () => {
  test("RegisterMiddleware allows valid input", () => {
    let req = {
      body: {
        firstName: "Teklu",
        lastName: "Abayneh",
        email: "tekuabayneh@gmail.com",
        password: "123456",
        role: "Freelancer",
      },
    };

    let res = {};
    let next = jest.fn();

    RegisterMiddleware(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  test("should return 400 if any field is missing", () => {
    let req = {
      body: {
        email: "",
        password: "123456",
      },
    };
    let next = jest.fn();

    let res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    LoginMiddleware(req, res, next);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "All fields  are required.",
    });
    expect(next).not.toHaveBeenCalled();
  });
});
