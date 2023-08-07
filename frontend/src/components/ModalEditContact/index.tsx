import { Dispatch } from "react";
import { Contact } from "../../pages/Dashboard";
import { useForm } from "react-hook-form";
import { ContactData, schema } from "../ModalAddContact/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "../Modal";
import { api } from "../../services/api";
import { toast } from "react-toastify";

interface ModalEditContactProps {
  toggleModal: () => void;
  contactId: number;
  setContact: Dispatch<React.SetStateAction<Contact[]>>;
}

export const ModalEditContact = ({
  toggleModal,
  setContact,
  contactId,
}: ModalEditContactProps) => {
  const { register, handleSubmit } = useForm<ContactData>({
    resolver: zodResolver(schema),
  });

  const editContact = async (data: ContactData) => {
    try {
      const response = await api.patch<Contact>(`/contacts/${contactId}`, data);
      const editedContact = response.data;

      setContact((previusContacts) =>
        previusContacts.map((contact) =>
          contact.id === contactId ? editedContact : contact
        )
      );
      toggleModal();
      toast.success("Contato editado com sucesso!");
    } catch (error) {
      console.error("Erro ao editar contato:", error);
      toast.error("Ocorreu um erro ao editar o contato.");
    }
  };

  return (
    <Modal toggleModal={toggleModal}>
      <form onSubmit={handleSubmit(editContact)}>
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

        <button type="submit">Editar</button>
      </form>
    </Modal>
  );
};
