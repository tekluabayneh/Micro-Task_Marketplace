const db = require("../../config/db");
const Applicant = require("../Applicant.js");


jest.mock("../../config/db.js", () => ({
    execute: jest.fn(),
}));

describe("Applicant controller", () => {
    let req, res;

    beforeEach(() => {
        req = {
            body: {
                email: "ex@gmail.com",
                attachment_url: "one.com",
                client_id: "1",
                job_id: "1",
                cover_letter: "this is mock cover letter",
            },
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        db.execute.mockClear();
    });

    test("should handle multiple db calls and return success", async () => {

        db.execute
            .mockResolvedValueOnce([
                [{ user_id: 1, proposal_count: 5 }], // SELECT result
            ])
            .mockResolvedValueOnce([{ affectedRows: 1 }])
            .mockResolvedValueOnce([{ affectedRows: 1 }])
            .mockResolvedValueOnce([{ affectedRows: 1 }]);

        await Applicant(req, res);


        expect(db.execute).toHaveBeenCalledTimes(4);

        expect(db.execute).toHaveBeenNthCalledWith(
            1,
            expect.stringContaining("SELECT freelancer_profiles.user_id"),
            [req.body.email]
        );

        expect(db.execute).toHaveBeenNthCalledWith(
            2,
            expect.stringContaining("INSERT INTO applications"),
            expect.arrayContaining([req.body.job_id, 1, req.body.client_id, req.body.cover_letter, req.body.attachment_url])
        );

        // Check the third call is UPDATE jobs
        expect(db.execute).toHaveBeenNthCalledWith(
            3,
            expect.stringContaining("UPDATE jobs SET proposal = proposal + 1 WHERE id = ?"),
            [req.body.job_id]
        );

        // Check the fourth call is UPDATE freelancer_profiles
        expect(db.execute).toHaveBeenNthCalledWith(
            4,
            expect.stringContaining("UPDATE freelancer_profiles SET  proposal_count = proposal_count + 1 WHERE  user_id = ?"),
            [1]
        );

        // Check response status and message
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({
            message: "Application submitted successfully!",
        });
    });
});

