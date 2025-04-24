const filterClientUpdateFields = (req, res, next) => {
  const allowedFields = [
    "company_name",
    "owner_name",
    "phone",
    "website",
    "industry",
    "location",
    "image",
    "description",
    "Social",
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

module.exports = filterClientUpdateFields;
