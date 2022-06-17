const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "db",
  user: "root",
  password: "password",
  database: "db",
  port: "3306",
});

connection.connect((err) => err ? console.log(err) : console.log("Connected to DB"));

module.exports = connection;