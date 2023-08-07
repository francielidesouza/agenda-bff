import { useForm } from "react-hook-form";
import { LoginData, schema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import { Container, Form, Header } from "./styles";
import { Link } from "react-router-dom";

export const Login = () => {
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });

  const { signIn } = useAuth();

  return (
    <>
      <Header>
        <h1>Olá, bem vindo a sua agenda Online</h1>
      </Header>
      <Container>
        <h2>Login</h2>
        <Form onSubmit={handleSubmit(signIn)}>
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
          <Link to="/users" className="link">
            Ainda não possui cadastro?
          </Link>
          <button type="submit">Entrar</button>
        </Form>
      </Container>
    </>
  );
};
