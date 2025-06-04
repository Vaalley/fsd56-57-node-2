import { Request, Response } from "express";
import { APIResponse } from "../utils/response";
import logger from "../utils/logger";
import { userModel } from "../models";

const usersController = {
  get: async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      logger.info("[GET] Récupérer un utilisateur");
      const user = await userModel.get(id);
      if (!user) {
        return APIResponse(
          response,
          null,
          "Utilisateur inexistant",
          404,
        );
      }
      APIResponse(response, user, "OK");
    } catch (error: any) {
      logger.error(
        "Erreur lors de la récupération de l'utilisateur: " +
          error.message,
      );
      APIResponse(
        response,
        null,
        "Erreur lors de la récupération de l'utilisateur",
        500,
      );
    }
  },
  getAll: async (request: Request, response: Response) => {
    try {
      logger.info("[GET] Récupérer tous les utilisateurs");
      const users = await userModel.getAll();
      APIResponse(response, users, "OK");
    } catch (error: any) {
      logger.error(
        "Erreur lors de la récupération des utilisateurs: " +
          error.message,
      );
      APIResponse(
        response,
        null,
        "Erreur lors de la récupération des utilisateurs",
        500,
      );
    }
  },
  create: async (request: Request, response: Response) => {
    try {
      const { username, email, password } = request.body;
      logger.info("[POST] Créer un utilisateur");
      await userModel.create({
        username,
        email,
        password,
      });
      APIResponse(response, null, "OK", 201);
    } catch (error: any) {
      logger.error(
        "Erreur lors de la création de l'utilisateur: " + error.message,
      );
      APIResponse(
        response,
        null,
        "Erreur lors de la création de l'utilisateur",
        500,
      );
    }
  },
};

export default usersController;
