import Router from "express";

const financialRouter = Router();

financialRouter.post("/financial-events", putValueInFinancialEvents);

financialRouter.get("financial-events", getValuesFromFinancialEvents);

export default financialRouter;