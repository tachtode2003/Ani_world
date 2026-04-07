const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mydb",
  password: "your_password",
  port: 5432,
});

app.get("/anime", async (req, res) => {
  const result = await pool.query("SELECT * FROM anime");
  res.json(result.rows);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});