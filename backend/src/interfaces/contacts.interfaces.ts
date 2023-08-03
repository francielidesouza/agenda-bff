import { z } from "zod";
import {
  contactSchema,
  contactSchemaRequest,
  contactsSchemaResponse,
} from "../schemas/contacts.schemas";
import { DeepPartial } from "typeorm";

type TContactRequest = z.infer<typeof contactSchemaRequest>;

type TContactResponse = z.infer<typeof contactSchema>;

type TContactsResponse = z.infer<typeof contactsSchemaResponse>;

type TContactUpdateRequest = DeepPartial<TContactRequest>;

export {
  TContactRequest,
  TContactResponse,
  TContactsResponse,
  TContactUpdateRequest,
};
