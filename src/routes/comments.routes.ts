import { Router } from "express";
import controller from "../controllers/comments.controller";

const router = Router();

// GET http:///localhost:3000/comments -> récupérer tout les comments
router.get("/", controller.getAll);

// GET http:///localhost:3000/comments/25 -> récupérer un comment en fonction de son id
router.get("/:id", (req, res) => {});

// [POST] -     http://localhost:3000/comments -> créer un comment
router.post("/", (req, res) => {});

// [PUT] -     http://localhost:3000/comments/25 -> éditer un comment
router.put("/:id", (req, res) => {});

// [DELETE] -     http://localhost:3000/comments/25 -> supprimer un comment
router.delete("/:id", (req, res) => {});

export default router;
