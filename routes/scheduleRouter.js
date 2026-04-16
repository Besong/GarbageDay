const { Router } = require("express");
const scheduleController = require("../controllers/scheduleController")
const scheduleRouter = Router();


scheduleRouter.get("/", scheduleController);

module.exports = scheduleRouter;