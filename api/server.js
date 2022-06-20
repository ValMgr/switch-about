const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const db_loader = require("./db/db_loader");

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().array());

const db = require("./db/db");

require("./routes/formation.routes")(app);
require("./routes/user.routes")(app);
require("./routes/profil.routes")(app);

app.get("/", (req, res) => res.send("SwitchAbout - API v1.0.0"));

app.post("/test", (req, res) => {
  console.log(req.body);
  res.send("OK");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
  db.query("SELECT * FROM FORMATION", (err, res) => {
    if (err) {
      console.log("error: ", err);
      return;
    }
    if (!res.length) {
      db_loader.loadDB("./db/db.csv", db);
      console.log("DB loaded");
    }
  });
});
