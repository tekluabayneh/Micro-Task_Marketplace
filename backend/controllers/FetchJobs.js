const db = require("../config/db"); // Your MySQL connection

const fetchJobController = async (req, res) => {
    try {
        const query = "SELECT * FROM jobs";
        let [results] = await db.execute(query);

        if (results.length === 0) {
            return res.status(404).json({ message: "Job not found" });
        }

        res.status(200).json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports = fetchJobController;
