import { z } from "zod";
const contactSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  telephone: z.string().max(45),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullish(),
});

const contactSchemaRequest = z.object({
  name: z.string().max(45),
  email: z.string().email().max(45),
  telephone: z.string().max(45),
});

const contactsSchemaResponse = z.array(contactSchema);

const contactSchemaUpdateRequest = contactSchemaRequest.partial();

export {
  contactSchemaRequest,
  contactSchema,
  contactsSchemaResponse,
  contactSchemaUpdateRequest,
};
