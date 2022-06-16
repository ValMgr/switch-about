const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const db_loader = require("./db/db_loader");

const app = express();
const db = require("./config/db");



app.get("/", (req, res) => {
  
});

app.get("/formation", (req, res) => {
  db.query("SELECT * FROM FORMATION", (err, result) => {
    if (err) {
      console.log("error: ", err);
      res.sendStatus(500);
      return;
    }
    res.send(result);
    });
});



app.get("/load", (req, res) => {
  db_loader.loadDB("./db/db.csv", db);
  res.send("<h1>Loaded DB !</h1> <a href='/'>Back home</a>");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
