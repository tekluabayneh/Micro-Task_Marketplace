require("dotenv").config();
const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "root",
  database: "microworkdb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function testDBConnection() {
  try {
    let connection = await db.getConnection();
    console.log("✅ Database connected successfully!");
    connection.release();
  } catch (error) {
    console.error("❌ Failed to connect to the database:", error.message);
  }
}
testDBConnection();

// const mysql = require("mysql2/promise");

// const db = mysql.createPool({
//   // uri: "mysql://microWorkDB_gonetrack:b39c8547ee783e1f2355fff0b823979bd3264bd6@lvp4r.h.filess.io:3307/microWorkDB_gonetrack",
// });

module.exports = db;
