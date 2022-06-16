module.exports = (express, controller) => {
    const router = express.Router();

    router.get("/", controller.getAllFormation);

}
