const csv = require("csv-parser");
const fs = require("fs");

exports.loadDB = function (filename, db) {
  fs.createReadStream(filename)
    .pipe(csv({ separator: "," }))
    .on("data", (row) => {
      row.cpf = row.cpf === "checked" ? 1 : 0;
      row.online = row.online === "online" ? 1 : 0;
      row.duration = row.duration ? row.duration : 0;
      db.query(`INSERT INTO FORMATION SET ?`, row, (err, result) => {
        if (err) {
          console.log(err);
        }
      });
    })
    .on("end", () => {
      console.log("CSV file successfully processed");
    });
};
