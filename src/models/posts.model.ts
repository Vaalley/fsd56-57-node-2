import { db } from "../config/pool";
import logger from "../utils/logger";
import { posts } from "../schemas";
import { NewPost } from "../entities/Post";
import { users } from "../schemas";
import { and, eq } from "drizzle-orm";
import { comments } from "../schemas";

export const postModel = {
    create: (post: NewPost) => {
        try {
            logger.info("POST /posts");
            return db.insert(posts).values(post).returning({
                id: posts.id,
                title: posts.title,
            }).execute();
        } catch (error: any) {
            logger.error("POST /posts", error);
            throw error;
        }
    },
    delete: (id: string, userId: string) => {
        try {
            logger.info("DELETE /posts/:id");
            return db.delete(posts).where(
                and(
                    eq(posts.id, id),
                    eq(posts.authorId, userId),
                ),
            ).execute();
        } catch (error: any) {
            logger.error("DELETE /posts/:id", error);
            throw error;
        }
    },
    update: (id: string, userId: string, post: NewPost) => {
        try {
            logger.info("PUT /posts/:id");
            return db.update(posts).set(post).where(
                and(
                    eq(posts.id, id),
                    eq(posts.authorId, userId),
                ),
            ).execute();
        } catch (error: any) {
            logger.error("PUT /posts/:id", error);
            throw error;
        }
    },
    getAll: () => {
        try {
            logger.info("GET /posts");
            return db.select({
                id: posts.id,
                title: posts.title,
                author: {
                    id: users.id,
                    username: users.username,
                },
            }).from(posts)
                .leftJoin(users, eq(posts.authorId, users.id))
                .execute();
        } catch (error: any) {
            logger.error("GET /posts", error);
            return [];
        }
    },
    getOne: (id: string) => {
        try {
            logger.info("GET /posts/:id");
            return db.select({
                id: posts.id,
                title: posts.title,
                author: {
                    id: users.id,
                    username: users.username,
                },
                comments: {
                    id: comments.id,
                    content: comments.content,
                    createdAt: comments.createdAt,
                },
            }).from(posts)
                .leftJoin(users, eq(posts.authorId, users.id))
                .leftJoin(comments, eq(posts.id, comments.postId))
                .where(eq(posts.id, id))
                .execute();
        } catch (error: any) {
            logger.error("GET /posts/:id", error);
            return null;
        }
    },
};
