const db = require("../config/db");

const Formulaire = (formulaire) => {
    this.name = formulaire.name;
    this.description = formulaire.description;
    this.cpf = formulaire.cpf;
    this.online = formulaire.online;
    this.duration = formulaire.duration;
    this.unit = formulaire.unit;
    this.level = formulaire.level;
    this.degree = formulaire.degree;
    this.category = formulaire.category;
    this.subcategory = formulaire.subcategory;
    this.organism = formulaire.organism;
    this.cities = formulaire.cities;
    this.price = formulaire.price;
}

Formulaire.create = (formulaire, result) => {
    db.query("INSERT INTO formulaire SET ?", formulaire, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created formulaire: ", { id: res.insertId, ...formulaire });
        result(null, { id: res.insertId, ...formulaire });
    });
}

Formulaire.findById = (id, result) => {
    db.query("SELECT * FROM formulaire WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found formulaire: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: "not_found" }, null);
    });
}

Formulaire.delete = (id, result) => {
    db.query("DELETE FROM formulaire WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted formulaire with id: ", id);
        result(null, res);
    });
}

Formulaire.getByAttribute = (attribute, value, result) => {
    db.query("SELECT * FROM formulaire WHERE " + attribute + " = ?", value, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found formulaire: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: "not_found" }, null);
    });
}

modules.exports = Formulaire;