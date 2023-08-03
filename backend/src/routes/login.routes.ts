import { Router } from "express";
import { createLoginController } from "../controllers/login.controller";
import ensureUserDataIsValidMiddleware from "../middlewares/ensureUserDataIsValid.middleware";
import { loginSchemaRequest } from "../schemas/login.schemas";

const loginRoutes: Router = Router();

loginRoutes.post(
  "",
  ensureUserDataIsValidMiddleware(loginSchemaRequest),
  createLoginController
);

export default loginRoutes;
