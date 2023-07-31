import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TUserUpdateRequest } from "../../interfaces/users.interfaces";
import { User } from "../../entities";

const updateUsersService = async (
  userId: number,
  userData: TUserUpdateRequest
): Promise<User> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData: User | null = await userRepository.findOneBy({
    id: userId,
  });

  const newUserData: User = userRepository.create({
    ...oldUserData,
    ...userData,
  });

  await userRepository.save(newUserData);

  const returnUser: User = newUserData;

  return returnUser;
};

export default updateUsersService;
