import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { UserData } from "../pages/User/validator";
import { toast } from "react-toastify";

interface AuthProviderProps {
  children: ReactNode;
}

interface LoginResponse {
  token: string;
}

export interface AuthContextValues {
  signIn: (data: LoginData) => Promise<void>;
  signUp: (data: UserData) => Promise<void>;
  loading: boolean;
}

export const AuthContext = createContext({} as AuthContextValues);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("your-agend:token");

    if (!token) {
      setLoading(false);
      return;
    }
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  const signIn = async (data: LoginData) => {
    try {
      const response = await api.post<LoginResponse>("/login", data);

      const { token } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("your-agend:token", token);
      setLoading(false);

      navigate("dashboard");

      toast.success("Login realizado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  const signUp = async (data: UserData) => {
    try {
      const response = await api.post("/users", data);

      const { token } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("your-agend:token", token);
      setLoading(false);

      navigate("/");

      toast.success("Cadastro realizado com sucesso!");
    } catch (error) {
      console.log(error);

      toast.error("Erro ao cadastrar. Verifique os dados informados.");
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, signUp, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
