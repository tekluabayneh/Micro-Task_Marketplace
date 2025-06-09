const execute = require("../../config/db.js");
const Applicant = require("../Applicant.js");
const db = require("../../config/db.js");
const request = require("supertest");

jest.mock("../../config/db.js", () => ({
  execute: jest.fn(),
}));

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};
const req = {
  body: {
    email: "ex@gmail.com",
    attachment_url: "one.com",
    client_id: "1",
    job_id: "1",
    cover_letter: "this is mcok cover letter",
  },
};

const next = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Applicant test", () => {
  it("should return 400 if the user didn't provide all field", async () => {
    const req = {
      body: {
        attachment_url: "one.com",
        client_id: "1",
        job_id: "1",
        cover_letter: "this is mcok cover letter",
      },
    };

    await Applicant(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: "All fields are required.",
    });
    expect(next).not.toHaveBeenCalled();
  });

  it("should return 400 if the user is not found ", async () => {
    db.execute.mockResolvedValue([]);

    await Applicant(req, res, next);

    expect(db.execute).toHaveBeenCalledWith(
      expect.stringContaining(`
       SELECT freelancer_profiles.user_id, freelancer_profiles.proposal_count
	   FROM users 
       INNER JOIN freelancer_profiles 
       ON freelancer_profiles.user_id = users.id 
       WHERE users.email = ?`),
      ["ex@gmail.com"]
    );

    expect(db.execute).toHaveBeenCalled();

    expect(next).not.toHaveBeenCalled();
  });

  //   it("should return 500 message if the data is not sync to the database", async () => {
  //     db.execute.mockResolvedValue();
  //     await Applicant(req, res, next);

  //     expect(db.execute)
  //       .toHaveBeenCalledWith(`INSERT INTO applications (job_id, freelancer_id, client_id, cover_letter, attachment_url)
  //       VALUES (?, ?, ?, ?, ?)`);

  //     expect(db.execute).toHaveBeenCalledWith(
  //       `UPDATE jobs SET proposal = proposal + 1 WHERE id = ?`
  //     );
  //     expect(res.json).toHaveBeenCalledWith({
  //       message: "Failed to submit application. Please try again later.",
  //     });
  //     expect(next).not.toHaveBeenCalled();
  //   });
});
