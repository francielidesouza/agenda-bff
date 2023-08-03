import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TContactResponse } from "../../interfaces/contacts.interfaces";
import { Contact } from "../../entities";
import { contactSchema } from "../../schemas/contacts.schemas";

const readContactIdService = async (
  contactId: number
): Promise<TContactResponse> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact: Contact | null = await contactRepository.findOneBy({
    id: contactId,
  });

  const returnContact: TContactResponse = contactSchema.parse(contact);

  return returnContact;
};

export default readContactIdService;
