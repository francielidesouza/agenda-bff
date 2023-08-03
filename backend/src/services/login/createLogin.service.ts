import { Repository } from "typeorm";
import { TLoginRequest } from "../../interfaces/login.interfaces";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../error";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createLoginService = async (
  loginData: TLoginRequest
): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      email: loginData.email,
    },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordVerify: boolean = await compare(
    loginData.password,
    user.password
  );

  if (!passwordVerify) {
    throw new AppError("Invalid credentials", 401);
  }
  //id: String(user.id)
  const token: string = jwt.sign({}, String(process.env.SECRET_KEY), {
    expiresIn: "48h",
    subject: String(user.id),
  });

  return token;
};

export default createLoginService;
