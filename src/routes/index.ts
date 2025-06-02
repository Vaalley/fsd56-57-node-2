// http://localhost:3000

import { Router } from "express";
import postRouter from "./posts.routes"
const router = Router();


// http://localhost:3000/posts
router.use('/posts', postRouter);

// http://localhost:3000/users


export default router;


// SERVER -> ROUTER (ce fichier) -> ROUTES (/users, /posts, ...) -> CONTROLLERS -> [MODELS] <-> DB