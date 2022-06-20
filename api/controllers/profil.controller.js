const Profil = require("../models/profil.model");

exports.getAll = (req, res) => {
  Profil.findAll((err, result) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.send(result);
  });
};

exports.getById = (req, res) => {
  Profil.findById(req.params.id, (err, result) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.send(result);
  });
};

exports.getByAttribute = (req, res) => {
  Profil.findBy(req.params.attribute, req.params.value, (err, result) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.send(result);
  });
};

exports.delete = (req, res) => {
  Profil.delete(req.params.id, (err, result) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.send(result);
  });
};

exports.create = (req, res, next) => {
  console.log(req.body);
  res.send("OK");
};
