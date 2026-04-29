import { Router, type IRouter } from "express";
import { GetStatsOverviewResponse } from "@workspace/api-zod";
import { stats } from "../data/content";

const router: IRouter = Router();

router.get("/stats/overview", async (_req, res): Promise<void> => {
  res.json(GetStatsOverviewResponse.parse(stats));
});

export default router;
