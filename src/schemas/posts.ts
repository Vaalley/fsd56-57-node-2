import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
    id: uuid("id").defaultRandom().primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    content: varchar("content", { length: 255 }).notNull(),
});
