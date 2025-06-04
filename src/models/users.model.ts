import { db } from "../config/pool";
import { comments, posts, users } from "../schemas";
import logger from "../utils/logger";
import { eq } from "drizzle-orm";
import { NewUser } from "../entities/User";

export const userModel = {
  getAll: () => {
    try {
      return db.select({
        id: users.id,
        username: users.username,
      }).from(users).execute();
    } catch (err: any) {
      logger.error(
        "Impossible de récupérer les utilisateurs: +",
        err.message,
      );
      return [];
    }
  },
  get: (id: string) => {
    try {
      return db.query.users.findFirst({
        columns: {
          id: true,
          username: true,
        },
        with: {
          comments: {
            columns: {
              id: true,
              content: true,
              createdAt: true,
            },
          },
          posts: {
            columns: {
              id: true,
              title: true,
              content: true,
            },
          },
        },
      });
    } catch (err: any) {
      logger.error(
        "Impossible de récupérer l'utilisateur: +",
        err.message,
      );
      throw new Error("L'utilisateur ne peut pas être récupéré");
    }
  },
  findByCredentials: (email: string) => {
    try {
      return db.select({
        id: users.id,
        password: users.password,
        username: users.username,
        email: users.email,
      }).from(users).where(eq(users.email, email))
        .execute();
    } catch (err: any) {
      logger.error(
        "Impossible de récupérer l'utilisateur: +",
        err.message,
      );
      throw new Error("L'utilisateur ne peut pas être récupéré");
    }
  },
  create: (user: NewUser) => {
    try {
      return db.insert(users).values(user).returning({
        id: users.id,
        email: users.email,
        username: users.username,
      }).execute();
    } catch (err: any) {
      logger.error("Impossible de créer l'utilisateur: +", err.message);
      throw new Error("L'utilisateur ne peut pas être crée");
    }
  },
};
