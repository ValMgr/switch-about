const express = require("express");
const app = express();
const mysql = require("mysql");
const db_loader = require("./db/db_loader");

const db = mysql.createConnection({
  host: "db",
  user: "root",
  password: "password",
  database: "db",
  port: "3306",
});

db.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to database");
  }
});

app.get("/", (req, res) => {
  // Send if the database is connected
  res.send("Database is connected with id " + db.threadId);
});

app.get("/load", (req, res) => {
  db_loader.loadDB("./db/db.csv", db);
  res.send("Loaded DB");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
