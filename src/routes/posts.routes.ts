import { Router } from "express";
import controller from "../controllers/posts.controller";

const router = Router();

// GET http:///localhost:3000/posts -> récupérer tout les posts
router.get('/', controller.getAll);

// GET http:///localhost:3000/posts/25 -> récupérer un post en fonction de son id
router.get('/:id', (req, res) => {});

// [POST] -     http://localhost:3000/posts -> créer un post
router.post('/', (req, res) => {})

// [PUT] -     http://localhost:3000/posts/25 -> éditer un post
router.put('/:id', (req, res) => {});

// [DELETE] -     http://localhost:3000/posts/25 -> supprimer un post
router.delete('/:id', (req, res) => {});

export default router;