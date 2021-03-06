const Formation = require("../models/formation.model");

exports.getAll = (req, res) => {
  Formation.findAll((err, result) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.send(result);
  });
};

exports.getById = (req, res) => {
    Formation.findById(req.params.id, (err, result) => {
        if (err) {
            res.sendStatus(500);
            return;
        }
        res.send(result);
        }
    );
};

exports.getByAttribute = (req, res) => {
    Formation.findBy(req.params.attribute, req.params.value, (err, result) => {
        if (err) {
        res.sendStatus(500);
        return;
        }
        res.send(result);
    });
};

exports.create = (req, res) => {
    Formation.create(req.body, (err, result) => {
        if (err) {
        res.sendStatus(500);
        return;
        }
        res.send(result);
    });
};

exports.delete = (req, res) => {
    Formation.delete(req.params.id, (err, result) => {
        if (err) {
            res.sendStatus(500);
            return;
        }
        res.send(result);
    });
};
