import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Board, Container, Header } from "./styles";
import { Card } from "../../components/CardContact";
import { ModalAddContact } from "../../components/ModalAddContact";
import { useNavigate } from "react-router-dom";
import { CardUser } from "../../components/CardUser";
import { toast } from "react-toastify";

export interface Contact {
  id: number;
  name: string;
  email: string;
  telephone: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  telephone: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
export const Dashboard = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get<Contact[]>("/contacts");
        setContacts(response.data);
      } catch (error) {
        console.error("Erro ao buscar os contatos:", error);
        toast.error("Ocorreu um erro ao buscar os contatos.");
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get<User[]>("/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Erro ao buscar os usuários:", error);
        toast.error("Ocorreu um erro ao buscar os usuários.");
      }
    })();
  }, []);

  const toggleModal = () => setIsOpenModal(!isOpenModal);
  const renderBoard = (contactsToRender: Contact[]) =>
    contactsToRender.map((contact) => (
      <Card key={contact.id} contact={contact} setContact={setContacts} />
    ));

  const renderBoardUser = (userToRender: User[]) =>
    userToRender.map((user) => (
      <CardUser key={user.id} user={user} setUser={setUsers} />
    ));

  const logout = () => {
    localStorage.removeItem("your-agend:token");
    navigate("/");
  };
  return (
    <>
      <Header>
        <h1>Agenda Online</h1>
        <div>
          <button type="button" onClick={toggleModal}>
            Novo Contato
          </button>
          <button type="button" onClick={logout}>
            Sair
          </button>
        </div>
      </Header>
      <Container>
        {isOpenModal && (
          <ModalAddContact setContact={setContacts} toggleModal={toggleModal} />
        )}

        <Board className="contacts">
          <h2>Lista de Contatos</h2>
          {renderBoard(contacts)}
        </Board>
        <Board className="users">
          <h2>Usuário</h2>
          {renderBoardUser(users)}
        </Board>
      </Container>
    </>
  );
};
