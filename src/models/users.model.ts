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
      return db.select({
        id: users.id,
        username: users.username,
        comments: {
          id: comments.id,
          content: comments.content,
          createdAt: comments.createdAt,
        },
        posts: {
          id: posts.id,
          title: posts.title,
          content: posts.content,
        },
      }).from(users)
        .leftJoin(comments, eq(users.id, comments.authorId))
        .leftJoin(posts, eq(users.id, posts.author))
        .where(eq(users.id, id))
        .execute();
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
