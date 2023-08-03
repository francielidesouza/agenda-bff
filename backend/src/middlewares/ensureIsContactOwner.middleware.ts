import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities";

const ensureIsContactOwnerMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const userId = Number(response.locals.userId);
  const contactIdParams = Number(request.params.id);
  const contactsRepository = AppDataSource.getRepository(Contact);

  const contact = await contactsRepository.findOne({
    where: {
      id: contactIdParams,
    },
    relations: {
      user: true,
    },
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  if (contact?.user.id !== userId) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export default ensureIsContactOwnerMiddleware;
