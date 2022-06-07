require('dotenv/config')

const express = require("express");
const mysql = require("mysql");
const cors = require("cors")
const app = express();
const fs = require("fs");
let db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "process.env.DATABASE_PASSWORD",
  database: "js_data",
});
app.use(express.json());
app.use(cors());

app.get("/getUsers", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log({
    get: 'http://localhost:3001/getUsers'
  });
});
