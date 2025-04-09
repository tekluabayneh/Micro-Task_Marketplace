const express = require("express");
const cors = require("cors");
const AuthRoute = require("./routes/authRoutes");
const db = require("./config/db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//// this is for use login and register route
app.use("/auth", AuthRoute);

app.get("/", (req, res) => {
  res.send("Job Platform API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
