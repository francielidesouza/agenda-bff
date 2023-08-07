import { Router } from "express";
import {
  createContactsController,
  readContactIdController,
  readContactsController,
  softDeleteContactsController,
  updateContactsController,
} from "../controllers/contacts.controller";
import {
  contactSchemaRequest,
  contactSchemaUpdateRequest,
} from "../schemas/contacts.schemas";
import ensureUserDataIsValidMiddleware from "../middlewares/ensureUserDataIsValid.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import ensureIsContactOwnerMiddleware from "../middlewares/ensureIsContactOwner.middleware";

const contactsRoutes: Router = Router();

contactsRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureUserDataIsValidMiddleware(contactSchemaRequest),
  createContactsController
);

contactsRoutes.get("", ensureTokenIsValidMiddleware, readContactsController);

contactsRoutes.get(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureIsContactOwnerMiddleware,
  readContactIdController
);

contactsRoutes.patch(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureIsContactOwnerMiddleware,
  ensureUserDataIsValidMiddleware(contactSchemaUpdateRequest),
  updateContactsController
);

contactsRoutes.delete(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureIsContactOwnerMiddleware,
  softDeleteContactsController
);

export default contactsRoutes;
