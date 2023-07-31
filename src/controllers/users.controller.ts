import { Request, Response } from "express";
import createUsersService from "../services/users/createUsers.service";
import {
  TUserRequest,
  TUserUpdateRequest,
  TUsersResponse,
} from "../interfaces/users.interfaces";
import readUsersService from "../services/users/readUsers.service";
import updateUsersService from "../services/users/patchUsers.service";
import softDeleteUsersService from "../services/users/softDeleteUsers.service";

const createUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userData: TUserRequest = request.body;
  const newUser = await createUsersService(userData);

  return response.status(201).json(newUser);
};

const readUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const users: TUsersResponse = await readUsersService();

  return response.status(200).json(users);
};

const updateUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = Number(request.params.id);
  const userData: TUserUpdateRequest = request.body;

  const newUserData = await updateUsersService(userId, userData);

  return response.status(200).json(newUserData);
};

const softDeleteUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = Number(request.params.id);

  await softDeleteUsersService(userId);

  return response.status(204).send();
};

export {
  createUsersController,
  readUsersController,
  updateUsersController,
  softDeleteUsersController,
};
