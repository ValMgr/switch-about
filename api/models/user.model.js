// module.exports = {

//   getAllUsers(req){
//     db.query(`SELECT * FROM users`, (err, results) => {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         res.status(200).send(results);
//       }
//     });
//   }

// }



// getUserByAttribute(req, res){
//   const { attribute, value } = req.params;
//   db.query(`SELECT * FROM users WHERE ${attribute} = ?`, [value], (err, results) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(results);
//     }
//   });
// }
