const Test = require("supertest/lib/test.js");
const ApplicantPortfolioUpdate = require("../ApplicantPortFolioUpdate.js")
const db = require("../../config/db.js")
jest.mock("../../config/db.js", () => ({
    execute: jest.fn()
}));

db.execute.mockClear()


const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
}
describe("ApplicantPortfolioUpdate test", () => {
    test('should return 400 if one of the field are missing ', async () => {
        const req = {
            body: {
                image_url: "",
                title: "name",
                subtitle: "componay name",
                email: "ex@gmail.com"
            }

        }
        await ApplicantPortfolioUpdate(req, res)
        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json).toHaveBeenCalledWith({ message: "All fields are required." })
    })

    test('should return 404 when the database reutn emptry data', async () => {
        db.execute.mockReturnValueOnce(Promise.resolve([[], []]))
        const req = {
            body: {
                image_url: "ex@gmail.com",
                title: "name",
                subtitle: "componay name",
                email: "ex@gmail.com"
            }
        }
        await ApplicantPortfolioUpdate(req, res)

        expect(db.execute).toHaveBeenCalledWith(
            expect.stringContaining("SELECT users.id AS freelancer_id"),
            expect.any(Array)
        )


        expect(res.status).toHaveBeenCalledWith(404)
        expect(res.json).toHaveBeenCalledWith({ message: "Freelancer not found with the provided email." })
    })



    test('should return 201 when the data is stored in the database', async () => {
        db.execute
            .mockReturnValueOnce(Promise.resolve([[{ freelancer_id: 1 }], []]))   // SELECT user
            .mockReturnValueOnce(Promise.resolve([[{ affectedRows: 1 }], []]));  // INSERT portfolio

        const req = {
            body: {
                image_url: "ex@gmail.com",
                title: "name",
                subtitle: "company name",
                email: "ex@gmail.com"
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await ApplicantPortfolioUpdate(req, res);

        expect(db.execute).toHaveBeenCalledWith(
            expect.stringContaining("INSERT INTO portfolio"),
            expect.any(Array)
        );

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({
            message: "Freelancer portfolio cdreated successfully.",
            freelancer_id: 1
        });
    });



    test('should return 500  when the database return 0', async () => {
        db.execute
            .mockReturnValueOnce(Promise.resolve([[{ freelancer_id: 1 }], []]))
            .mockReturnValueOnce(Promise.resolve([[{ affectedRows: 0 }], []]));

        const req = {
            body: {
                image_url: "ex@gmail.com",
                title: "name",
                subtitle: "company name",
                email: "ex@gmail.com"
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await ApplicantPortfolioUpdate(req, res);

        expect(db.execute).toHaveBeenCalledWith(
            expect.stringContaining("INSERT INTO portfolio"),
            expect.any(Array)
        );



        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            message: "Failed to create freelancer portfolio."
        });
    });



})
