const GetFreelancerBidJob = require("../GetFreelancerBidJob.js")
const db = require("../../config/db.js")

jest.mock("../../config/db.js", () => ({
    execute: jest.fn()
}))

const req = {
    query: {
        email: "ex@gmail.com"
    }
}

const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
}

describe("GetFreelancerBidJob test", () => {

    it('should return 404 if the email is not provided', async () => {
        const req = {
            query: {
                email: ""
            }
        }
        await GetFreelancerBidJob(req, res)
        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json).toHaveBeenCalledWith({ message: "A valid email is required" })

    })

    it('should return 200 if the has no bid job ', async () => {
        db.execute.mockResolvedValueOnce([[], []])

        await GetFreelancerBidJob(req, res)

        expect(db.execute).toHaveBeenCalledWith(expect.stringContaining(
            `  SELECT j.id, j.jobTitle, j.budget, j.status, j.created_at
      FROM users u
      INNER JOIN applications a ON a.freelancer_id = u.id
      INNER JOIN jobs j ON a.job_id = j.id
      WHERE u.email = ?`
        ), expect.any(Array))
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith({ message: "No bidding jobs found. Explore available jobs to place a bid.", response: [] })

    })



    it('should return 200 if the results is found from the database', async () => {
        const fakeResult = [
            { id: 1, name: "Frontend", status: "loading" },
            { id: 1, name: "Frontend", status: "loading" },
            { id: 1, name: "Frontend", status: "loading" }
        ]
        db.execute.mockResolvedValueOnce([fakeResult, []])

        await GetFreelancerBidJob(req, res)

        expect(db.execute).toHaveBeenCalledWith(expect.stringContaining(
            `  SELECT j.id, j.jobTitle, j.budget, j.status, j.created_at
      FROM users u
      INNER JOIN applications a ON a.freelancer_id = u.id
      INNER JOIN jobs j ON a.job_id = j.id
      WHERE u.email = ?`
        ), expect.any(Array))


        if (fakeResult.length > 0) {
            expect(res.status).toHaveBeenCalledWith(200)
            expect(res.json).toHaveBeenCalledWith({
                message: `Found ${fakeResult.length} bidding job${fakeResult.length > 1 ? "s" : ""}`,
                response: fakeResult
            })
        }

    })



    it('should return 500 error message', async () => {
        db.execute.mockRejectedValueOnce(new Error("Something went wrong"))

        await GetFreelancerBidJob(req, res)

        expect(db.execute).toHaveBeenCalledWith(expect.stringContaining(
            `  SELECT j.id, j.jobTitle, j.budget, j.status, j.created_at
      FROM users u
      INNER JOIN applications a ON a.freelancer_id = u.id
      INNER JOIN jobs j ON a.job_id = j.id
      WHERE u.email = ?`
        ), expect.any(Array))
        expect(res.status).toHaveBeenCalledWith(500)
        expect(res.json).toHaveBeenCalledWith({ message: "Failed to fetch bidding jobs. Please try again later." })

    })



})

