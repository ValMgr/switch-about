const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const db_loader = require("./db/db_loader");

const app = express();
const db = require("./config/db");


require('./routes/formation.routes')(app);
require('./routes/user.routes')(app);

app.get("/", (req, res) => res.send("SwitchAbout - API v1.0.0"));

app.get("/load", (req, res) => {
  db_loader.loadDB("./db/db.csv", db);
  res.send("<h1>Loaded DB !</h1> <a href='/'>Back home</a>");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
