import { pgTable, text, boolean, timestamp, uuid } from "drizzle-orm/pg-core";

export const appointmentsTable = pgTable("appointments", {
  id: uuid("id").primaryKey().defaultRandom(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  dateOfBirth: text("date_of_birth").notNull(),
  providerId: text("provider_id"),
  serviceId: text("service_id").notNull(),
  locationId: text("location_id").notNull(),
  preferredDate: text("preferred_date").notNull(),
  preferredTime: text("preferred_time").notNull(),
  isNewPatient: boolean("is_new_patient").notNull().default(false),
  notes: text("notes"),
  status: text("status").notNull().default("requested"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type Appointment = typeof appointmentsTable.$inferSelect;
