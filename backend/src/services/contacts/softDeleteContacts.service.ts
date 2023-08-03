import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import { AppError } from "../../error";

const softDeleteContactsService = async (contactId: number): Promise<void> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact: Contact | null = await contactRepository.findOneBy({
    id: contactId,
  });

  if (contact) {
    await contactRepository.softRemove(contact!);
  } else {
    throw new AppError("Contact not found", 404);
  }
};

export default softDeleteContactsService;
