import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const GRADES = pgTable("grades", {
  id: integer("id").primaryKey(),
  grade: varchar("grade", { length: 10 }).notNull(),
});

export const STUDENTS = pgTable("students", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  grade: varchar("grade", { length: 10 }).notNull(),
  address: varchar("address", { length: 50 }),
  contact: varchar("contact", { length: 15 }),
});
