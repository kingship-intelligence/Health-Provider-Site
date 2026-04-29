import { Router, type IRouter } from "express";
import { db, contactSubmissionsTable } from "@workspace/db";
import { SubmitContactBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.message }, "Invalid contact body");
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [created] = await db
    .insert(contactSubmissionsTable)
    .values({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone ?? null,
      topic: parsed.data.topic,
      message: parsed.data.message,
    })
    .returning();

  if (!created) {
    res.status(500).json({ error: "Failed to submit contact" });
    return;
  }

  res.status(201).json({
    id: created.id,
    name: created.name,
    email: created.email,
    phone: created.phone,
    topic: created.topic,
    message: created.message,
    createdAt: created.createdAt.toISOString(),
  });
});

export default router;
