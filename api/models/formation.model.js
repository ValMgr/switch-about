const db = require("../db/db");

const Formation = (formation) => {
  this.name = formation.name;
  this.description = formation.description;
  this.cpf = formation.cpf;
  this.online = formation.online;
  this.duration = formation.duration;
  this.unit = formation.unit;
  this.level = formation.level;
  this.degree = formation.degree;
  this.category = formation.category;
  this.subcategory = formation.subcategory;
  this.organism = formation.organism;
  this.cities = formation.cities;
  this.price = formation.price;
};

Formation.findAll = (result) => {
  db.query("SELECT * FROM FORMATION", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

Formation.findById = (id, result) => {
  db.query("SELECT * FROM FORMATION WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found formation: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Formation.findBy = (attribute, value, result) => {
  db.query(
    "SELECT * FROM FORMATION WHERE " + attribute + " = ?",
    value,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found formation: ", res);
        result(null, res);
        return;
      }

      result({ kind: "not_found" }, null);
    }
  );
};

Formation.create = (formation, result) => {
  db.query("INSERT INTO FORMATION SET ?", formation, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created formation: ", { id: res.insertId, ...formation });
    result(null, { id: res.insertId, ...formation });
  });
};

Formation.delete = (id, result) => {
  db.query("DELETE FROM FORMATION WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted FORMATION with id: ", id);
    result(null, res);
  });
};

module.exports = Formation;
