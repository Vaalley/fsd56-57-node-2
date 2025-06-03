import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

import { users } from "./users";

export const posts = pgTable("posts", {
    id: uuid("id").defaultRandom().primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    content: text("content").notNull(),
    authorId: uuid("author_id").notNull().references(() => users.id, {
        onDelete: "cascade",
    }),
    createdAt: timestamp("created_at").defaultNow(),
});
