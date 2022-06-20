const Profil = require("../models/profil.model");
const findFormation = require("../services/find_formation.services");
const airtable = require("../services/airtable.services");
const axios = require("axios");

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
  const profil = {
    firstname: formData.q3_nom.first,
    lastname: formData.q3_nom.last,
    age: formData.q7_age,
    email: formData.q4_email,
    phone: formData.q5_numeroDe.phone,
    situation: formData.q37_quelleEst,
    activity: formData.q32_monActivite,
    degree: formData.q33_monNiveau,
    formation_type: formData.q25_laFormation25.field_1,
    formation_duration:
      formData.q25_laFormation25.field_2 === "Courte (12 mois max)" ? 12 : 24,
    formation_start: formData.q25_laFormation25.field_3,
    formation_payment: formData.q25_laFormation25.field_4,
    formation_cpf: formData.q25_laFormation25.field_4 === "CPF" ? 1 : 0,
    category: formData.q47_selectionnezDes.join(", "),
    subcategory: null,
    adjectives: formData.q48_quellesSont.join(", "),
    interets: formData.q46_quelsCentres.join(", "),
    personality: formData.q45_decriveznousVotre.join(", "),
    desire_1: formData.q41_quiEtesvous41.field_1,
    desire_2: formData.q41_quiEtesvous41.field_2,
    desire_3: formData.q41_quiEtesvous41.field_3,
    desire_4: formData.q41_quiEtesvous41.field_4,
  };

  Profil.create(profil, (err, result) => {
    if (err) {
      res.sendStatus(500);
      return;
    }

    
    // const profil = findFormation(result);
    // airtable.push(profil);
    // axios.delete(`https://eu-api.jotform.com/submissions/${submissionId}?apiKey=${process.env.JOTFORM_KEY}`);
    
    res.send(result);
  });
};
