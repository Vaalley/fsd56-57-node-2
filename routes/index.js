import { Router } from "express";
import postRouter from "./posts.routes.js";
import commentRouter from "./comments.routes.js";
const router = Router();

router.use("/posts", postRouter);

router.use("/comments", commentRouter);

export default router;
