const db = require("../config/db");

const PostJobMiddleWare = async (req, res, next) => {
  try {
    let clientId = req.userid;
    let { jobTitle, description, jobSize, budget, experience, skills } =
      req.body;
    let data = [
      clientId,
      jobTitle,
      description,
      jobSize,
      budget,
      experience,
      skills,
    ];
    let insertQuery =
      "INSERT INTO jobs(clientId, jobTitle, description, jobSize, budget, experience, skills)VALUES(?,?,?,?,?,?,?)";
    let [insertResult] = await db.execute(insertQuery, data);

    if (insertResult.affectedRows === 0) {
      return res
        .status(400)
        .json({ message: "Error while inserting job data" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ error: "Failed to post job" });
  }
};

module.exports = PostJobMiddleWare;
