const db = require("../db/db");

module.exports = (profil) => {
  filters = {
    category: profil.category.split(", "),
    subcategory: [],
    formation_type: isOnline(profil.formation_type),
    formation_duration: getDuration(profil.formation_duration),
    formation_payment: isCPF(profil.formation_payment),
  };

  filterFormation(filters, (err, res) => {
    if (err) { res.sendStatus(500).send(err); return;}
    if (res.length) {
        res.forEach(formation => {
            createAdvice({
                profil: profil.id,
                formation: formation.id,
            }, (err, res) => {
                if (err) { res.sendStatus(500).send(err); return;}
                console.log("created advice: ", res);
            }
            );
        });
    }
  });
};

function filterFormation(filters = {}, result) {
  const durationQuery = filters.formation_duration ? filters.formation_duration.map((interval, i) => {
    return `(unit = '${interval[1]}' AND duration BETWEEN ${interval[0][0]} AND ${interval[0][1]})`;
  }).join(" OR ") : "TRUE"
  
  db.query(
    `SELECT id FROM FORMATION WHERE 
    category IN (?)
    AND online = ?
    AND cpf IN (?)
    AND (${durationQuery})`,
    [filters.category, filters.formation_type, filters.formation_payment],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      }
     
        if (res.length) {
            result(null, res);
        }
        else{
            delete filters.formation_duration;
            filterFormation(filters, result);
        }
      
    }
  );
}

function createAdvice(advice, result) {
  db.query("INSERT INTO ADVICE SET ?", advice, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...advice });
  });
}

function isOnline(value) {
  return value === "En centre" ||
    value === "En alternance (Apprentissage / Professionnalisation)"
    ? 0
    : 1;
}

function isCPF(value) {
  return value === "CPF" ? [1] : [0, 1];
}

function getDuration(value) {
  // based on 8h/day
  switch (value) {
    case "24h ou moins":
      return [
        [[0, 24], "Hours"],
        [[1, 3], "Days"],
      ];
    case "2 à 7 jours":
      return [
        [[16, 56], "Hours"],
        [[1, 7], "Days"],
        [[1, 1], "Week"],
      ];
    case "1 semaine à 1 mois":
      return [
        [[56, 240], "Hours"],
        [[7, 30], "Days"],
        [[1, 4], "Week"],
        [[1, 1], "Month"],
      ];
    case "1 mois à 6 mois":
      return [
        [[240, 744], "Hours"],
        [[30, 180], "Days"],
        [[4, 24], "Week"],
        [[1, 6], "Month"],
      ];
    case "6 mois à 1 an":
      return [
        [[744, 2920], "Hours"],
        [[180, 365], "Days"],
        [[24, 52], "Week"],
        [[6, 12], "Month"],
        [[1, 1], "Year"],
      ];
    case "Plus de 1 an":
      return [
        [[2920, 999999999], "Hours"],
        [[365, 999999999], "Days"],
        [[52, 999999999], "Week"],
        [[12, 999999999], "Month"],
        [[1, 999999999], "Year"],
      ];
  }
}
