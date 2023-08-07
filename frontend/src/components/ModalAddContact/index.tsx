import { Dispatch } from "react";
import { Contact } from "../../pages/Dashboard";
import { useForm } from "react-hook-form";
import { ContactData, schema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "../Modal";
import { api } from "../../services/api";
import { toast } from "react-toastify";

interface ModalAddContactProps {
  toggleModal: () => void;
  setContact: Dispatch<React.SetStateAction<Contact[]>>;
}

export const ModalAddContact = ({
  toggleModal,
  setContact,
}: ModalAddContactProps) => {
  const { register, handleSubmit } = useForm<ContactData>({
    resolver: zodResolver(schema),
  });

  // const createContact = async (data: ContactData) => {
  //   const response = await api.post<Contact>("/contacts", data);

  //   setContact((previusContacts) => [response.data, ...previusContacts]);
  //   toggleModal();
  // };

  const createContact = async (data: ContactData) => {
    try {
      const response = await api.post<Contact>("/contacts", data);
      setContact((previusContacts) => [response.data, ...previusContacts]);
      toggleModal();
      toast.success("Contato cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar contato:", error);
      toast.error("Ocorreu um erro ao cadastrar o contato.");
    }
  };

  return (
    <Modal toggleModal={toggleModal}>
      <form onSubmit={handleSubmit(createContact)}>
        <label htmlFor="name">Nome Completo</label>
        <input
          type="text"
          id="name"
          {...register("name")}
          placeholder={"Digite seu nome completo"}
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          {...register("email")}
          placeholder={"Digite seu email"}
        />

        <label htmlFor="telephone">Telefone</label>
        <input
          type="text"
          id="telephone"
          {...register("telephone")}
          placeholder={"Digite seu telefone"}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </Modal>
  );
};
