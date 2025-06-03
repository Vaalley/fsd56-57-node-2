import { db } from "../config/pool";
import logger from "../utils/logger";
import { comments, posts } from "../schemas";
import { NewComment } from "../entities/Comment";
import { and, eq } from "drizzle-orm";
import { users } from "../schemas";

export const commentModel = {
    create: (comment: NewComment) => {
        try {
            logger.info("POST /comments");
            return db.insert(comments).values(comment).returning({
                id: comments.id,
            }).execute();
        } catch (error: any) {
            logger.error("POST /comments", error);
            throw error;
        }
    },
    delete: (id: string, userId: string) => {
        try {
            logger.info("DELETE /comments/:id");
            return db.delete(comments).where(
                and(
                    eq(comments.id, id),
                    eq(comments.authorId, userId),
                ),
            ).execute();
        } catch (error: any) {
            logger.error("DELETE /comments/:id", error);
            throw error;
        }
    },
    update: (id: string, userId: string, comment: NewComment) => {
        try {
            logger.info("PUT /comments/:id");
            return db.update(comments).set(comment).where(
                and(
                    eq(comments.id, id),
                    eq(comments.authorId, userId),
                ),
            ).execute();
        } catch (error: any) {
            logger.error("PUT /comments/:id", error);
            throw error;
        }
    },
    getAll: () => {
        try {
            logger.info("GET /comments");
            return db.select({
                id: comments.id,
                content: comments.content,
                author: {
                    id: users.id,
                    username: users.username,
                },
                post: {
                    id: posts.id,
                    title: posts.title,
                },
            }).from(comments)
                .leftJoin(users, eq(comments.authorId, users.id))
                .leftJoin(posts, eq(comments.postId, posts.id))
                .execute();
        } catch (error: any) {
            logger.error("GET /comments", error);
            return [];
        }
    },
    getOne: (id: string) => {
        try {
            logger.info("GET /comments/:id");
            return db.select({
                id: comments.id,
                content: comments.content,
                author: {
                    id: users.id,
                    username: users.username,
                },
            }).from(comments)
                .leftJoin(users, eq(comments.authorId, users.id))
                .where(eq(comments.id, id))
                .execute();
        } catch (error: any) {
            logger.error("GET /comments/:id", error);
            throw error;
        }
    },
};
