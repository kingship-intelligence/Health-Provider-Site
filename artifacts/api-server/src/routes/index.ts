import { Router, type IRouter } from "express";
import healthRouter from "./health";
import providersRouter from "./providers";
import servicesRouter from "./services";
import locationsRouter from "./locations";
import testimonialsRouter from "./testimonials";
import insightsRouter from "./insights";
import statsRouter from "./stats";
import appointmentsRouter from "./appointments";
import contactRouter from "./contact";

const router: IRouter = Router();

router.use(healthRouter);
router.use(providersRouter);
router.use(servicesRouter);
router.use(locationsRouter);
router.use(testimonialsRouter);
router.use(insightsRouter);
router.use(statsRouter);
router.use(appointmentsRouter);
router.use(contactRouter);

export default router;
