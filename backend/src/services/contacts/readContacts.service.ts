import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TContactsResponse } from "../../interfaces/contacts.interfaces";
import { Contact } from "../../entities";
import { contactsSchemaResponse } from "../../schemas/contacts.schemas";

const readContactsService = async (): Promise<TContactsResponse> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contacts: Contact[] = await contactRepository.find();

  const returnUsers: TContactsResponse = contactsSchemaResponse.parse(contacts);

  return returnUsers;
};

export default readContactsService;
