const db = require("../config/db");
const UpdateFreelancerProfile = async (req, res) => {
  const fieldsToUpdate = req.filteredUpdate;
  const user_id = req.user_id;

  try {
    // Check if a client profile already exists
    const [existing] = await db.execute(
      "SELECT * FROM freelancer_profiles WHERE user_id = ?",
      [user_id]
    );

    // Dynamically generate the SET part of the SQL query
    const fields = Object.keys(fieldsToUpdate);
    const values = Object.values(fieldsToUpdate);

    let query = "";
    let result;
    if (existing.length > 0) {
      // Profile exists — perform UPDATE
      const setString = fields.map((field) => `${field} = ?`).join(", ");
      values.push(user_id);

      query = `UPDATE freelancer_profiles SET ${setString} WHERE user_id = ?`;
      [result] = await db.execute(query, values);
    } else {
      // Profile does not exist — perform INSERT
      fields.push("user_id");
      values.push(user_id);

      const fieldNames = fields.join(", ");
      const placeholders = fields.map(() => "?").join(", ");

      query = `INSERT INTO freelancer_profiles (${fieldNames}) VALUES (${placeholders})`;
      [result] = await db.execute(query, values);
    }

    res.json({ message: "Client profile saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error" });
  }
};
module.exports = UpdateFreelancerProfile;
