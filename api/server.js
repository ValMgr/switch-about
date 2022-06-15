const express = require("express");
const app = express();

const mysql = require("mysql");
const db = mysql.createConnection({
  host: "db",
  user: "root",
  password: "password",
  database: "db",
  port: "3306",
});

db.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + db.threadId);
});

// get all from formation table
app.get("/", (req, res) => {
  db.query("SELECT firstname, lastname FROM USERS", (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(result);
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
