import { Dispatch } from "react";
import { User } from "../../pages/Dashboard";
import { useForm } from "react-hook-form";
import { UserData, userSchema } from "../../pages/User/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "../Modal";
import { api } from "../../services/api";
import { toast } from "react-toastify";

interface ModalEditUserProps {
  toggleModal: () => void;
  userId: number;
  setUser: Dispatch<React.SetStateAction<User[]>>;
}

export const ModalEditUser = ({
  toggleModal,
  setUser,
  userId,
}: ModalEditUserProps) => {
  const { register, handleSubmit } = useForm<UserData>({
    resolver: zodResolver(userSchema),
  });

  const editUser = async (data: UserData) => {
    try {
      const response = await api.patch<User>(`/users/${userId}`, data);
      const editedUser = response.data;

      setUser((previusUsers) =>
        previusUsers.map((user) => (user.id === userId ? editedUser : user))
      );
      toggleModal();
      toast.success("Usuário editado com sucesso!");
    } catch (error) {
      console.error("Erro ao editar usuário:", error);
      toast.error("Ocorreu um erro ao editar o usuário.");
    }
  };

  return (
    <Modal toggleModal={toggleModal}>
      <form onSubmit={handleSubmit(editUser)}>
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

        <button type="submit">Editar</button>
      </form>
    </Modal>
  );
};
