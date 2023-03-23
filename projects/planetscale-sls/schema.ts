import { mysqlTableCreator, text } from "drizzle-orm/mysql-core";
import { int } from "drizzle-orm/mysql-core";

const mysqlTable = mysqlTableCreator((name) => `alex_${name}`);

export const people = mysqlTable("people", {
  id: int("id").autoincrement().primaryKey(),
  name: text("name").notNull(),
  age: int("age"),
  occupation: text("occupation"),
});
