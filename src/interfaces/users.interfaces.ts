import { z } from "zod";
import {
  userSchemaRequest,
  usersSchemaResponse,
} from "../schemas/users.schemas";
import { DeepPartial } from "typeorm";

type TUserRequest = z.infer<typeof userSchemaRequest>;

type TUsersResponse = z.infer<typeof usersSchemaResponse>;

type TUserUpdateRequest = DeepPartial<TUserRequest>;

export { TUserRequest, TUsersResponse, TUserUpdateRequest };
