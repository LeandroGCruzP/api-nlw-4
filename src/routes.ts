import { Router } from "express";

const router = Router();

import { UsersController } from "./controllers/UsersController";
import { SurveysController } from "./controllers/SurveysController";

const usersController = new UsersController();
const surveysController = new SurveysController();

router.post("/users", usersController.create);

router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

export { router };
