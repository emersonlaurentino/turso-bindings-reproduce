import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const myTable = sqliteTable("my_table", {
  id: text("id").primaryKey().notNull(),
  name: text("name").notNull(),
});
