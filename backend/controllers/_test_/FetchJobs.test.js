const { promises } = require("supertest/lib/test")
const db = require("../../config/db")
const fetchJobController = require("../FetchJobs")

jest.mock("../../config/db.js", () => ({
    execute: jest.fn()
}))



const req = {
    body: {
    }
}
const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
}

describe("fetchJobController test", () => {

    it('should return 404 if the job is not found ', async () => {
        db.execute.mockResolvedValueOnce([[], []]);

        await fetchJobController(req, res)

        expect(db.execute).toHaveBeenCalledWith(
            expect.stringContaining("SELECT * FROM jobs")
        );

        expect(res.status).toHaveBeenCalledWith(404)
        expect(res.json).toHaveBeenCalledWith({ message: "Job not found" })
    })


    it('should response the data if the job is found', async () => {

        const fakeResultData = [
            { name: "Teklu", rating: 4.9 },
            { name: "Abayneh", rating: 4.5 },
        ]

        db.execute.mockResolvedValueOnce([fakeResultData, []]);

        await fetchJobController(req, res)

        expect(db.execute).toHaveBeenCalledWith(
            expect.stringContaining("SELECT * FROM jobs")
        );

        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith(fakeResultData)
    })



    it('should return 500 if there is error ', async () => {
        db.execute.mockRejectedValueOnce(new Error("Database error"));

        await fetchJobController(req, res)

        expect(db.execute).toHaveBeenCalledWith(
            expect.stringContaining("SELECT * FROM jobs")
        );

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: "Something went wrong" });

    })


})
