import { z } from "zod";
const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  telephone: z.string().email().max(45),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullish(),
});

const userSchemaRequest = z.object({
  name: z.string().max(45),
  email: z.string().email().max(45),
  telephone: z.string().email().max(45),
});

const usersSchemaResponse = z.array(userSchema);

const userSchemaUpdateRequest = userSchemaRequest.partial();

export {
  userSchemaRequest,
  userSchema,
  usersSchemaResponse,
  userSchemaUpdateRequest,
};
