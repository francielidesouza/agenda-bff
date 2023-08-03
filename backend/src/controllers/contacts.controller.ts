import { Request, Response } from "express";
import createContactsService from "../services/contacts/createContacts.service";
import {
  TContactRequest,
  TContactResponse,
  TContactUpdateRequest,
  TContactsResponse,
} from "../interfaces/contacts.interfaces";
import readContactsService from "../services/contacts/readContacts.service";
import updateContactsService from "../services/contacts/patchContacts.service";
import softDeleteContactsService from "../services/contacts/softDeleteContacts.service";
import readContactIdService from "../services/contacts/readContactId.service";

const createContactsController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contactData: TContactRequest = request.body;
  const userId = Number(response.locals.userId);

  console.log(userId);
  const newContact = await createContactsService(contactData, userId);

  return response.status(201).json(newContact);
};

const readContactsController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contacts: TContactsResponse = await readContactsService();

  return response.status(200).json(contacts);
};

const readContactIdController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contactId: number = Number(request.params.id);

  const contact: TContactResponse = await readContactIdService(contactId);

  return response.status(200).json(contact);
};

const updateContactsController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contactId: number = Number(request.params.id);
  const contactData: TContactUpdateRequest = request.body;

  const newContactData = await updateContactsService(contactId, contactData);

  return response.status(200).json(newContactData);
};

const softDeleteContactsController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contactId: number = Number(request.params.id);

  await softDeleteContactsService(contactId);

  return response.status(204).send();
};

export {
  createContactsController,
  readContactIdController,
  readContactsController,
  updateContactsController,
  softDeleteContactsController,
};
