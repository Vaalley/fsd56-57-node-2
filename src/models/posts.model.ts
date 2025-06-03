import { and, eq } from "drizzle-orm";
import { db } from "../config/pool";
import { comments, posts, users } from "../schemas";
import logger from "../utils/logger";
import { NewPost } from "../entities/Post";

export const postModel = {
  create: (post: NewPost) => {
    try {
      return db.insert(posts).values(post).returning({
        id: posts.id,
        title: posts.title,
      }).execute();
    } catch (err: any) {
      logger.error("Impossible de créer le post: +", err.message);
      throw new Error("Le post ne peut pas être crée");
    }
  },

  delete: (id: string, authorId: string) => {
    try {
      return db.delete(posts).where(
        and(
          eq(posts.id, id),
          eq(posts.author, authorId),
        ),
      );
    } catch (err: any) {
      logger.error("Impossible de supprimer le post: +", err.message);
      throw new Error("Le post ne peut pas être supprimé");
    }
  },

  getAll: () => {
    try {
      return db.select({
        id: posts.id,
        title: posts.title,
        content: posts.content,
        author: {
          id: users.id,
          username: users.username,
        },
        createdAt: posts.created_at,
      }).from(posts)
        .leftJoin(
          users,
          eq(comments.authorId, users.id),
        ).execute();
    } catch (err: any) {
      logger.error("Impossible de récupérer les posts: +", err.message);
      return [];
    }
  },

  get: (id: string) => {
    try {
      return db.select({
        id: posts.id,
        title: posts.title,
        content: posts.content,
        author: {
          id: users.id,
          username: users.username,
        },
        comments: {
          id: comments.id,
          content: comments.content,
          createdAt: comments.createdAt,
        },
        createdAt: posts.created_at,
      }).from(posts)
        .leftJoin( // On veut faire un LEFT JOIN entre la table posts et la table comments
          comments,
          eq(posts.id, comments.postId), // Lorsque l'id du post est égal à l'id du post dans les commentaires
        ).leftJoin(
          users,
          eq(posts.author, users.id), // Lorsque l'id de l'auteur du post est égal à l'id de l'user
        ).where( // Nous cherchons le post en fonction de son id
          eq(posts.id, id),
        ).execute();
    } catch (err: any) {
      logger.error("Impossible de récupérer le post: +", err.message);
      throw new Error("Le post ne peut pas être récupéré");
    }
  },

  update: (id: string, authorId: string, post: NewPost) => {
    try {
      return db.update(posts).set(post).where(
        and(
          eq(posts.id, id),
          eq(posts.author, authorId),
        ),
      ).execute();
    } catch (err: any) {
      logger.error("Impossible d'update le post: +", err.message);
      throw new Error("Le post ne peut pas être màj");
    }
  },
};
