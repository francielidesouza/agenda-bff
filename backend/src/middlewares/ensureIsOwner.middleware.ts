import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities";

const ensureIsOwnerMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const userId = Number(response.locals.userId);
  const userIdParams = Number(request.params.id);

  if (!userId || userIdParams !== userId) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export default ensureIsOwnerMiddleware;
