const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const fs = require("fs");
require("dotenv/config");

let db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DATABASE_PASSWORD,
  database: "js_data",
});

app.use(express.json());
app.use(cors());

app.get("/getUsers", (req, res) => {
  db.query(
    "SELECT id, first_name, last_name, email, salary FROM users",
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

app.post("/postUsers", (req, res) => {
  db.query(
    "INSERT INTO users ( first_name, last_name, email, salary, password_hash) VALUES ( ?, ?, ?, ?, ? )",
    [
      req.body.first_name,
      req.body.last_name,
      req.body.email,
      req.body.salary,
      req.body.password_hash,
    ],
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

app.listen(3001, () => {
  console.log({
    get: "http://localhost:3001/getUsers",
    post: "http://localhost:3001/postUsers",
  });
});
