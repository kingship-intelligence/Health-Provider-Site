import { Router, type IRouter } from "express";
import { db, appointmentsTable } from "@workspace/db";
import { RequestAppointmentBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/appointments", async (req, res): Promise<void> => {
  const parsed = RequestAppointmentBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.message }, "Invalid appointment body");
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [created] = await db
    .insert(appointmentsTable)
    .values({
      firstName: parsed.data.firstName,
      lastName: parsed.data.lastName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      dateOfBirth: parsed.data.dateOfBirth,
      providerId: parsed.data.providerId ?? null,
      serviceId: parsed.data.serviceId,
      locationId: parsed.data.locationId,
      preferredDate: parsed.data.preferredDate,
      preferredTime: parsed.data.preferredTime,
      isNewPatient: parsed.data.isNewPatient,
      notes: parsed.data.notes ?? null,
      status: "requested",
    })
    .returning();

  if (!created) {
    res.status(500).json({ error: "Failed to create appointment" });
    return;
  }

  res.status(201).json({
    id: created.id,
    firstName: created.firstName,
    lastName: created.lastName,
    email: created.email,
    phone: created.phone,
    dateOfBirth: created.dateOfBirth,
    providerId: created.providerId,
    serviceId: created.serviceId,
    locationId: created.locationId,
    preferredDate: created.preferredDate,
    preferredTime: created.preferredTime,
    isNewPatient: created.isNewPatient,
    notes: created.notes,
    status: created.status,
    createdAt: created.createdAt.toISOString(),
  });
});

export default router;
