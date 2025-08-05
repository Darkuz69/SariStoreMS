import AuthRoute from "./AuthRoute";

import { Router } from "express";

const router = Router();
const v1Router = Router();

v1Router.use('/auth', AuthRoute);

router.use('/v1', v1Router);

export default router;