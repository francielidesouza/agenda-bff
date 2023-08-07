import { useForm } from "react-hook-form";
import { UserData, userSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import { Container, Form, Header } from "./styles";
import { Link } from "react-router-dom";

export const User = () => {
  const { register, handleSubmit } = useForm<UserData>({
    resolver: zodResolver(userSchema),
  });

  const { signUp } = useAuth();

  return (
    <>
      <Header>
        <h1>Agenda Online</h1>

        <span>
          Bem vindo(a) a sua agenda online, agora você pode encontrar todos os
          seus contatos um um só lugar!
        </span>
      </Header>

      <Container>
        <h2>Cadastre-se</h2>
        <Form onSubmit={handleSubmit(signUp)}>
          <label htmlFor="name">Nome Completo</label>
          <input
            type="text"
            id="name"
            {...register("name")}
            placeholder={"Digite seu mome completo"}
          />

          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder={"Digite seu email"}
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder={"Digite sua senha"}
          />

          <label htmlFor="telephone">Telefone</label>
          <input
            type="text"
            id="telephone"
            {...register("telephone")}
            placeholder={"Digite seu telefone"}
          />

          <button type="submit">Cadastrar</button>
          <Link to="/" className="link">
            Já possui login?
          </Link>
        </Form>
      </Container>
    </>
  );
};
