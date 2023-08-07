import { z } from "zod";

export const schema = z.object({
  name: z.string().min(10, "Nome deve ter pelo menos 10 caracteres"),
  email: z.string().email("Deve ser um e-mail válido"),
  telephone: z.string().min(11, "Deve ser um número válido"),
});

export type ContactData = z.infer<typeof schema>;
