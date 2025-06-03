import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

import { users } from "./users";
import { posts } from "./posts";

export const comments = pgTable("comments", {
    id: uuid("id").defaultRandom().primaryKey(),
    content: text("content").notNull(),
    postId: uuid("post_id").notNull().references(() => posts.id, {
        onDelete: "cascade",
    }),
    authorId: uuid("author_id").notNull().references(() => users.id),
    createdAt: timestamp("created_at").defaultNow(),
});
