import { Router, type IRouter } from "express";
import {
  ListServicesResponse,
  GetServiceParams,
  GetServiceResponse,
} from "@workspace/api-zod";
import { services } from "../data/content";

const router: IRouter = Router();

router.get("/services", async (_req, res): Promise<void> => {
  res.json(ListServicesResponse.parse(services));
});

router.get("/services/:slug", async (req, res): Promise<void> => {
  const params = GetServiceParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const service = services.find((s) => s.slug === params.data.slug);
  if (!service) {
    res.status(404).json({ error: "Service not found" });
    return;
  }

  res.json(GetServiceResponse.parse(service));
});

export default router;
