import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(10, "Nome deve ter pelo menos 10 caracteres"),
  email: z.string().email("Deve ser um e-mail válido"),
  password: z.string().nonempty("Senha obrigatória"),
  telephone: z.string().min(11, "Deve ser um número válido"),
});

export type UserData = z.infer<typeof userSchema>;
