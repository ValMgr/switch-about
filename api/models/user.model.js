const db = require('../config/db');

const User = (user) => {
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.age = user.age;
    this.phone = user.phone;
    this.email = user.email;
    this.password = user.password;
}

User.findAll = (result) => {
    db.query('SELECT * FROM user', (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        
        console.log("users: ", res);
        result(null, res);
    });
}

User.findById = (id, result) => {
    db.query('SELECT * FROM user WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: "not_found" }, null);
    });
}

User.findByEmail = (email, result) => {
    db.query('SELECT * FROM user WHERE email = ?', email, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: "not_found" }, null);
    });
}

User.create = (user, result) => {
    db.query("INSERT INTO user SET ?", user, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
        console.log("created user: ", { id: res.insertId, ...user });
        result(null, { id: res.insertId, ...user });
    });
}

User.delete = (id, result) => {
    db.query("DELETE FROM user WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted user with id: ", id);
        result(null, res);
    });
}