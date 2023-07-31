import { Router } from "express";
import {
  createUsersController,
  readUsersController,
  softDeleteUsersController,
  updateUsersController,
} from "../controllers/users.controller";
import {
  userSchemaRequest,
  userSchemaUpdateRequest,
} from "../schemas/users.schemas";
import ensureUserDataIsValidMiddleware from "../middlewares/ensureUserDataIsValid.middleware";
import ensureEmailNotExistsMiddleware from "../middlewares/ensureEmailNotExists.middleware";
import ensureUserExistsMiddleware from "../middlewares/ensureUserExists.middleware";

const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  ensureUserDataIsValidMiddleware(userSchemaRequest),
  ensureEmailNotExistsMiddleware,
  createUsersController
);

usersRoutes.get("", readUsersController);

usersRoutes.patch(
  "/:id",
  ensureUserExistsMiddleware,
  ensureUserDataIsValidMiddleware(userSchemaUpdateRequest),
  ensureEmailNotExistsMiddleware,
  updateUsersController
);

usersRoutes.delete(
  "/:id",
  ensureUserExistsMiddleware,
  softDeleteUsersController
);

export default usersRoutes;
