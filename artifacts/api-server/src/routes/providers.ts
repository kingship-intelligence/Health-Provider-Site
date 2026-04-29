import { Router, type IRouter } from "express";
import {
  ListProvidersQueryParams,
  ListProvidersResponse,
  ListFeaturedProvidersResponse,
  GetProviderParams,
  GetProviderResponse,
} from "@workspace/api-zod";
import { providers } from "../data/content";

const router: IRouter = Router();

router.get("/providers", async (req, res): Promise<void> => {
  const parsed = ListProvidersQueryParams.safeParse(req.query);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { specialty, locationId } = parsed.data;
  let result = providers;
  if (specialty) {
    const needle = specialty.toLowerCase();
    result = result.filter((p) => p.specialty.toLowerCase() === needle);
  }
  if (locationId) {
    result = result.filter((p) => p.locationIds.includes(locationId));
  }

  res.json(ListProvidersResponse.parse(result));
});

router.get("/providers/featured", async (_req, res): Promise<void> => {
  const featured = providers.filter((p) => p.featured);
  res.json(ListFeaturedProvidersResponse.parse(featured));
});

router.get("/providers/:id", async (req, res): Promise<void> => {
  const params = GetProviderParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const provider = providers.find((p) => p.id === params.data.id);
  if (!provider) {
    res.status(404).json({ error: "Provider not found" });
    return;
  }

  res.json(GetProviderResponse.parse(provider));
});

export default router;
