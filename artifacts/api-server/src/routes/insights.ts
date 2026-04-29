import { Router, type IRouter } from "express";
import {
  ListInsightsQueryParams,
  ListInsightsResponse,
  GetInsightParams,
  GetInsightResponse,
} from "@workspace/api-zod";
import { insights } from "../data/content";

const router: IRouter = Router();

router.get("/insights", async (req, res): Promise<void> => {
  const parsed = ListInsightsQueryParams.safeParse(req.query);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { category } = parsed.data;
  let result = insights;
  if (category) {
    const needle = category.toLowerCase();
    result = result.filter((i) => i.category.toLowerCase() === needle);
  }

  result = [...result].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1,
  );

  res.json(ListInsightsResponse.parse(result));
});

router.get("/insights/:slug", async (req, res): Promise<void> => {
  const params = GetInsightParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const insight = insights.find((i) => i.slug === params.data.slug);
  if (!insight) {
    res.status(404).json({ error: "Insight not found" });
    return;
  }

  res.json(GetInsightResponse.parse(insight));
});

export default router;
