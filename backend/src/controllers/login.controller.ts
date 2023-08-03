import { Request, Response } from "express";
import { TLoginRequest } from "../interfaces/login.interfaces";
import createLoginService from "../services/login/createLogin.service";

const createLoginController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const loginData: TLoginRequest = request.body;

  const token = await createLoginService(loginData);

  return response.status(200).json({ token });
};

export { createLoginController };
