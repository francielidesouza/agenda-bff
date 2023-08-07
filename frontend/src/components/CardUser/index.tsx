import { Dispatch, useState } from "react";
import { User } from "../../pages/Dashboard";
import { Container } from "./styles";
import { api } from "../../services/api";
import { ModalEditUser } from "../ModalEditUser";
import { toast } from "react-toastify";

interface CardUserProps {
  user: User;
  setUser: Dispatch<React.SetStateAction<User[]>>;
}
export const CardUser = ({ user, setUser }: CardUserProps) => {
  const [userId, setUserId] = useState<number>(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => setIsOpenModal(!isOpenModal);

  const handleCardUser = (id: number) => {
    setUserId(id);
  };

  const deleteUser = async (userId: number) => {
    try {
      await api.delete<User>(`/users/${userId}`);
      setUser((previusUsers) =>
        previusUsers.filter((user) => user.id !== userId)
      );
      toast.success("Usuário excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
      toast.error("Ocorreu um erro ao excluir o usuário.");
    }
  };

  return (
    <Container key={user.id} onClick={() => handleCardUser(user.id)}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.telephone}</p>
      <p>{user.password}</p>
      <div>
        <button type="button" onClick={toggleModal}>
          Editar
        </button>
        <button type="button" onClick={() => deleteUser(user.id)}>
          Excluir
        </button>
      </div>
      {isOpenModal && (
        <ModalEditUser
          setUser={setUser}
          toggleModal={toggleModal}
          userId={userId}
        />
      )}
    </Container>
  );
};
