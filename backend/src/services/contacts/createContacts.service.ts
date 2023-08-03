import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact, User } from "../../entities";
import {
  TContactRequest,
  TContactResponse,
} from "../../interfaces/contacts.interfaces";
import { contactSchema } from "../../schemas/contacts.schemas";
import { AppError } from "../../error";

const createContactsService = async (
  contactData: TContactRequest,
  userId: number
): Promise<TContactResponse> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("Contact not found", 404);
  }

  const newContact = contactRepository.create({
    ...contactData,
    user,
  });

  await contactRepository.save(newContact);

  const returnContact: TContactResponse = contactSchema.parse(newContact);

  return returnContact;
};
export default createContactsService;
