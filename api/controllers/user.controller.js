const User = require('../models/user.model');

exports.getAll = (req, res) => {
    User.findAll((err, result) => {
        if (err) {
        res.sendStatus(500);
        return;
        }
        res.send(result);
    });
}

exports.getById = (req, res) => {
    User.findById(req.params.id, (err, result) => {
        if (err) {
        res.sendStatus(500);
        return;
        }
        res.send(result);
    }
    );
}

exports.getBy = (req, res) => {
    User.findByAttribute(req.params.attribute, req.params.value, (err, result) => {
        if (err) {
        res.sendStatus(500);
        return;
        }
        res.send(result);
    }
    );
}

exports.create = (req, res) => {
    User.create(req.body, (err, result) => {
        if (err) {
        res.sendStatus(500);
        return;
        }
        res.send(result);
    });
}

exports.delete = (req, res) => {
    User.delete(req.params.id, (err, result) => {
        if (err) {
        res.sendStatus(500);
        return;
        }
        res.send(result);
    });
}
