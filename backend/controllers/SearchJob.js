const SearchJobs = (req, res) => {
    res.status(200).json(req.SearchResult);
};

module.exports = SearchJobs;
