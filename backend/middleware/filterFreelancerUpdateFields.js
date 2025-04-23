const filterFreelancerUpdateFields = (req, res, next) => {
  const allowedFields = [
    "name",
    "title",
    "bio",
    "paragraph",
    "skills",
    "experience_level",
    "hourly_rate",
    "location",
    "availability",
    "work_history",
    "earned",
    "image",
  ];

  const filtered = {};
  // Check if the fields in the request are valid
  for (let key of allowedFields) {
    if (req.body[key] !== undefined) {
      filtered[key] = req.body[key];
    }
  }

  // If no valid fields are found in the request
  if (Object.keys(filtered).length === 0) {
    return res
      .status(400)
      .json({ message: "No valid fields provided to update" });
  }

  // Pass filtered fields to the next middleware or controller
  req.filteredUpdate = filtered;
  next();
};

module.exports = filterFreelancerUpdateFields;
