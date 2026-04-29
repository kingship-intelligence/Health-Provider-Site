import { Router, type IRouter } from "express";
import {
  ListLocationsResponse,
  GetLocationParams,
  GetLocationResponse,
} from "@workspace/api-zod";
import { locations } from "../data/content";

const router: IRouter = Router();

router.get("/locations", async (_req, res): Promise<void> => {
  res.json(ListLocationsResponse.parse(locations));
});

router.get("/locations/:id", async (req, res): Promise<void> => {
  const params = GetLocationParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const location = locations.find((l) => l.id === params.data.id);
  if (!location) {
    res.status(404).json({ error: "Location not found" });
    return;
  }

  res.json(GetLocationResponse.parse(location));
});

export default router;
