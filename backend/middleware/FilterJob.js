const db = require("../config/db");

const FilterJob = async (req, res, next) => {
  let { Search } = req.query;
  console.log(Search);
  try {
    if (!Search) return res.status(400).json({ error: "Missing search query" });
    if (Search === "All") {
      console.log(Search);
      const getallProfileQuery = "SELECT * FROM jobs LIMIT 50";
      const [FilterResult] = await db.execute(getallProfileQuery);

      req.SearchResult = FilterResult;
      next();
      return;
    }

    let searchTerm = `%${Search}%`;

    const query = `SELECT * FROM jobs WHERE jobTitle LIKE ? OR proposal LIKE ? OR budget LIKE ? OR experience LIKE ?`;

    let data = [searchTerm, searchTerm, searchTerm, searchTerm];

    const [FilterResult] = await db.execute(query, data);

    req.SearchResult = FilterResult;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = FilterJob;
