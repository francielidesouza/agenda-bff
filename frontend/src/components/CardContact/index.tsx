import { Dispatch, useState } from "react";
import { Contact } from "../../pages/Dashboard";
import { Container } from "./styles";
import { api } from "../../services/api";
import { ModalEditContact } from "../ModalEditContact";

interface CardProps {
  contact: Contact;
  setContact: Dispatch<React.SetStateAction<Contact[]>>;
}
export const Card = ({ contact, setContact }: CardProps) => {
  const [contactId, setContactId] = useState<number>(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => setIsOpenModal(!isOpenModal);

  const handleCard = (id: number) => {
    setContactId(id);
  };

  const deleteContact = async (contactId: number) => {
    await api.delete<Contact>(`/contacts/${contactId}`);

    setContact((previusContacts) =>
      previusContacts.filter((contact) => contact.id !== contactId)
    );
  };
  return (
    <Container key={contact.id} onClick={() => handleCard(contact.id)}>
      <h3>{contact.name}</h3>
      <p>{contact.email}</p>
      <p>{contact.telephone}</p>
      <div>
        <button type="button" onClick={toggleModal}>
          Editar
        </button>
        <button type="button" onClick={() => deleteContact(contact.id)}>
          Excluir
        </button>
      </div>
      {isOpenModal && (
        <ModalEditContact
          setContact={setContact}
          toggleModal={toggleModal}
          contactId={contactId}
        />
      )}
    </Container>
  );
};
