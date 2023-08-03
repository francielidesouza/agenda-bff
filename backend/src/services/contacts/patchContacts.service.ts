import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TContactUpdateRequest } from "../../interfaces/contacts.interfaces";
import { Contact } from "../../entities";

const updateContactsService = async (
  contactId: number,
  contactData: TContactUpdateRequest
): Promise<Contact> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const oldContactData: Contact | null = await contactRepository.findOneBy({
    id: contactId,
  });

  const newContactData: Contact = contactRepository.create({
    ...oldContactData,
    ...contactData,
  });

  await contactRepository.save(newContactData);

  const returnContact: Contact = newContactData;

  return returnContact;
};

export default updateContactsService;
