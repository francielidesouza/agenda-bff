import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TUsersResponse } from "../../interfaces/users.interfaces";
import { User } from "../../entities";
import { usersSchemaResponse } from "../../schemas/users.schemas";

const readUsersService = async (): Promise<TUsersResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const users: User[] = await userRepository.find();

  const returnUsers: TUsersResponse = usersSchemaResponse.parse(users);

  return returnUsers;
};

export default readUsersService;
