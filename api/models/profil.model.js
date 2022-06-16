const db = require("../config/db");

const Profil = (profil) => {
  this.firstname = profil.firstname;
  this.lastname = profil.lastname;
  this.age = profil.age;
  this.phone = profil.phone;
  this.email = profil.email;
  this.password = profil.password;
  this.formation = profil.formation;
  this.user = profil.user;
};

Profil.findAll = (result) => {
  db.query("SELECT * FROM PROFIL", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("profils: ", res);
    result(null, res);
  });
};

Profil.findById = (id, result) => {
  db.query("SELECT * FROM PROFIL WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found profil: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Profil.findBy = (attribute, value, result) => {
  db.query(
    "SELECT * FROM PROFIL WHERE " + attribute + " = ?",
    value,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found profil: ", res);
        result(null, res);
        return;
      }

      result({ kind: "not_found" }, null);
    }
  );
};

Profil.create = (profil, result) => {
  db.query("INSERT INTO PROFIL SET ?", profil, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created profil: ", { id: res.insertId, ...profil });
    result(null, { id: res.insertId, ...profil });
  });
};

Profil.delete = (id, result) => {
  db.query("DELETE FROM PROFIL WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("deleted profil: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

module.exports = Profil;
