import { Router, type IRouter } from "express";
import { ListTestimonialsResponse } from "@workspace/api-zod";
import { testimonials } from "../data/content";

const router: IRouter = Router();

router.get("/testimonials", async (_req, res): Promise<void> => {
  res.json(ListTestimonialsResponse.parse(testimonials));
});

export default router;
