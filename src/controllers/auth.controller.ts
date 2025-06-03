import { Request, Response } from "express";
import { env } from "../config/env";
import jwt from "jsonwebtoken";

import { APIResponse } from "../utils";
import logger from "../utils/logger";
import { userModel } from "../models";

const { JWT_SECRET, NODE_ENV } = env;

export const authController = {
  login: async (request: Request, response: Response) => {
    try {
      const { email, password } = request.body;
      const [user] = await userModel.findByCredentials(email); // ici fonction model (exo à venir) (findByCredentials(email))

      if (!user) {
        return APIResponse(response, null, "Utilisateur inexistant", 404);
      }

      // vérification mot de passe hashé
      // En dessous, on admet que le mot de passe saisit est le bon !

      // generation du jwt
      const accessToken = jwt.sign({ id: user.id }, JWT_SECRET, {
        expiresIn: "1h",
      });

      response.cookie("accessToken", accessToken, {
        httpOnly: true, // true - cookie réservé uniquement pour communication HTTP - pas accessible en js
        sameSite: "strict", // protection CSRF
        secure: NODE_ENV === "production", // le cookie ne sera envoyé que sur du HTTPS uniquement en prod
      });
      APIResponse(response, null, "Vous êtes bien connecté", 200);
    } catch (err: any) {
      logger.error(
        `Erreur lors de la connexion de l'utilisateur: ${err.message}`,
      );
      APIResponse(response, null, "Erreur serveur", 500);
    }
  },
  register: async (request: Request, response: Response) => {},
  logout: async (request: Request, response: Response) => {
    response.clearCookie("accessToken");
    APIResponse(response, null, "Vous êtes déconnecté", 200);
  },
};
