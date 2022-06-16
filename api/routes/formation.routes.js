module.exports = (express, controller) => {
    const router = express.Router();

    router.get("/formation", controller.getAllFormation);

}
