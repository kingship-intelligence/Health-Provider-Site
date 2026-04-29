import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const contactSubmissionsTable = pgTable("contact_submissions", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  topic: text("topic").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type ContactSubmission = typeof contactSubmissionsTable.$inferSelect;
