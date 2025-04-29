const SearchJobs = (req, res) => {
  let SearchResult = req.SearchResult;
  console.log(SearchResult);
  res.status(200).json(req.SearchResult);
};

module.exports = SearchJobs;
