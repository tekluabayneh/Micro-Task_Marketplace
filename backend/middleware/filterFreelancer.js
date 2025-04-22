const db = require("../config/db");

const Filterfreelancer = async (req, res, next) => {
  let { Search } = req.query;

  try {
    if (!Search) return res.status(400).json({ error: "Missing search query" });

    let searchTerm = `%${Search}%`;

    const query = `
      SELECT * FROM user_profile 
      WHERE name LIKE ? 
        OR skills LIKE ? 
        OR location LIKE ? 
        OR title LIKE ? 
        OR role LIKE ? 
        OR experience_level LIKE ?
    `;

    let data = [
      searchTerm,
      searchTerm,
      searchTerm,
      searchTerm,
      searchTerm,
      searchTerm,
    ];

    const [FilterResult] = await db.execute(query, data);

    res.json(FilterResult); // ✅ Send the result back to the client
  } catch (error) {
    console.error(error); // ✅ Log error
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = Filterfreelancer;
