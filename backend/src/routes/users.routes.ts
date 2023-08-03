import { Router } from "express";
import {
  createUsersController,
  readUserIdController,
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
import ensureTelephoneNotExistsMiddleware from "../middlewares/ensureTelephoneNotExists.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import ensureIsOwnerMiddleware from "../middlewares/ensureIsOwner.middleware";

const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  ensureEmailNotExistsMiddleware,
  ensureTelephoneNotExistsMiddleware,
  ensureUserDataIsValidMiddleware(userSchemaRequest),
  createUsersController
);

usersRoutes.get("", ensureTokenIsValidMiddleware, readUsersController);

usersRoutes.get(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureIsOwnerMiddleware,
  ensureUserExistsMiddleware,
  readUserIdController
);

usersRoutes.patch(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureIsOwnerMiddleware,
  ensureUserExistsMiddleware,
  ensureUserDataIsValidMiddleware(userSchemaUpdateRequest),
  ensureEmailNotExistsMiddleware,
  updateUsersController
);

usersRoutes.delete(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureIsOwnerMiddleware,
  ensureUserExistsMiddleware,
  softDeleteUsersController
);

export default usersRoutes;
