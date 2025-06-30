const JobPost = require('../JobPost.js');
const req = {
    body: {
        title: "Software Engineer",
        description: "Develop and maintain software applications.",
        company: "Tech Company",
        location: "Remote",
        salary: 80000,
    },
};
const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
};
describe("job post", () => {
    it("should return success message", () => {
        JobPost(req, res)
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith({ message: "Job posted successfully" });
    })
})
