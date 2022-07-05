import Router from "express";

const signRouter = Router();

signRouter.post("/sign-up", doSingUp);

signRouter.post("/sign-in", doSignIn);


export default signRouter;