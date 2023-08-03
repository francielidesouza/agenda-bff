import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../error";

const softDeleteUsersService = async (userId: number): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    id: userId,
  });

  if (user) {
    await userRepository.softRemove(user!);
  } else {
    throw new AppError("User not found", 404);
  }
};

export default softDeleteUsersService;
