module.exports = (app) => {
  const controller = require("../controllers/profil.controller");
  const router = require("express").Router();

  router.get("/", controller.getAll);

  router.get("/:id", controller.getById);
  
  router.get("/:id/formations", controller.getRecommandedFormation)

  router.get("/:attribute/:value", controller.getByAttribute);

  router.post("/", controller.create);

  router.delete("/:id", controller.delete);


  app.use("/profils", router);
};
