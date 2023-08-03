import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import jwt from "jsonwebtoken";
import "dotenv/config";

const ensureTokenIsValidMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
): Response | void => {
  let token: string | undefined = request.headers.authorization;

  if (!token) {
    throw new AppError("Missing bearer token", 401);
  }

  token = token.split(" ")[1];

  jwt.verify(
    token,
    String(process.env.SECRET_KEY),
    (error: any, decoded: any) => {
      if (error) {
        throw new AppError(error.message, 401);
      }

      response.locals.userId = Number(decoded.sub);

      return next();
    }
  );
};
export default ensureTokenIsValidMiddleware;
