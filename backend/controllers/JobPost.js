const JobPost = (req, res) => {
    return res.status(201).json({ message: "Job posted successfully" });
};

module.exports = JobPost;
