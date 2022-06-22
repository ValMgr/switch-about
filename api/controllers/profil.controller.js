const Profil = require("../models/profil.model");
const findFormation = require("../services/find_formation.services");

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
  const formData = JSON.parse(req.body.rawRequest);
  console.log("submissionID", req.body.submissionID);
  const profil = {
    firstname: formData.q3_name.first,
    lastname: formData.q3_name.last,
    age: formData.q7_age,
    email: formData.q4_email,
    phone: formData.q5_phone.phone,
    situation: formData.q37_situation,
    activity: formData.q32_activity,
    degree: formData.q33_degree,
    formation_type: formData.q25_formation.field_1,
    formation_duration: formData.q25_formation.field_2,
    formation_start: formData.q25_formation.field_3,
    formation_payment: formData.q25_formation.field_4,
    category: formData.q47_category.join(", "),
    subcategory: null,
    personality: formData.q48_personality.join(", "),
    desire_1: formData.q41_desire.field_1,
    desire_2: formData.q41_desire.field_2,
    desire_3: formData.q41_desire.field_3,
    desire_4: formData.q41_desire.field_4,
    submissionID: req.body.submissionID,
  };

  Profil.create(profil, (err, result) => {
    if (err) {
      res.sendStatus(500);
      return;
    }

    findFormation(result);
    res.send(result);
  });
};

exports.getRecommandedFormation = (req, res) => {
  Profil.findAdvice(req.params.id, (err, result) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.send(result);
  });
};
