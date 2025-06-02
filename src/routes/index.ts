import { Router } from "express";
import postRouter from "./posts.routes";
import commentRouter from "./comments.routes";

export const router = Router();

router.use("/posts", postRouter);

router.use("/comments", commentRouter);
