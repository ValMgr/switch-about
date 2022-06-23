module.exports = (app) => {
  const controller = require("../controllers/user.controller");
  const router = require("express").Router();

  router.get("/", controller.getAll);

  router.get("/:id", controller.getById);

  router.get("/:attribute/:value", controller.getBy);

  router.post("/", controller.create);

  router.delete("/:id", controller.delete);

  app.use("/users", router);
};
