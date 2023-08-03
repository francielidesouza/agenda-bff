import { Request, Response, NextFunction } from "express";
import { User } from "../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const ensureTelephoneNotExistsMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userTelephone: string = request.body.telephone;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userDataQuery: User | null = await userRepository.findOne({
    where: {
      telephone: userTelephone,
    },
  });

  if (userDataQuery?.telephone === userTelephone) {
    throw new AppError("Telephone already exists", 409);
  }
  return next();
};

export default ensureTelephoneNotExistsMiddleware;
