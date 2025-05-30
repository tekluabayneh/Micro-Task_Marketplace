const PostJob = require("../PostJob");
const db = require("../../config/db");
jest.mock("../../config/db");

describe("post route testing", () => {
  // if the result of database is return 400 meessage

  it("it ", async () => {
    let req = {
      body: {},
    };
    let res = jest.fn();
    let next = jest.fn();



  expect(req.status).toHaveBeenCalledWith(500)
  expect(res,json).to


  });
});
