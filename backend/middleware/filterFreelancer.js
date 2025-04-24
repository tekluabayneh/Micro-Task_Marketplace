const db = require("../config/db");

const Filterfreelancer = async (req, res, next) => {
  let { Search } = req.query;

  try {
    if (!Search) return res.status(400).json({ error: "Missing search query" });
    if (Search === "All") {
      console.log(Search);
      const getallProfileQuery = "SELECT * FROM freelancer_profiles LIMIT 50";
      const [FilterResult] = await db.execute(getallProfileQuery);

      req.SearchResult = FilterResult;
      next();
      return;
    }

    let searchTerm = `%${Search}%`;

    const query = `
      SELECT * FROM freelancer_profiles 
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

    req.SearchResult = FilterResult;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = Filterfreelancer;
