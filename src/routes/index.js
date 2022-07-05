import Router from "express";
import signRouter from "./signupRouter.js";
import financialRouter from "./financialRouter.js";

const router = Router();

router.use(signRouter);
router.use(financialRouter);

export default router;