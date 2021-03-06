const db = require("../db/db");

const Profil = (profil) => {
  this.firstname = profil.firstname;
  this.lastname = profil.lastname;
  this.age = profil.age;
  this.email = profil.email;
  this.phone = profil.phone;
  this.activity = profil.activity;
  this.degree = profil.degree;
  this.situation = profil.situation;
  this.personality = profil.personality;
  this.formation_type = profil.formation_type;
  this.formation_duration = profil.formation_duration;
  this.formation_start = profil.formation_start;
  this.formation_payment = profil.formation_payment;
  this.formation_cpf = profil.formation_cpf;
  this.category = profil.category;
  this.subcategory = profil.subcategory;
  this.desire_1 = profil.desire_1;
  this.desire_2 = profil.desire_2;
  this.desire_3 = profil.desire_3;
  this.desire_4 = profil.desire_4;
  this.submissionID = profil.submissionID;
};

Profil.findAll = (result) => {
  db.query("SELECT * FROM PROFIL", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
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

Profil.findAdvice = (id, result) => {
  db.query("SELECT FORMATION.* FROM FORMATION INNER JOIN ADVICE ON ADVICE.formation = FORMATION.id INNER JOIN PROFIL ON ADVICE.profil = ? GROUP BY FORMATION", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
}

module.exports = Profil;
