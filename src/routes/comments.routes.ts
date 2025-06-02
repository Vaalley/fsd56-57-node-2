import { Router } from "express";
import { getAllComments } from "../controllers/comments.controllers.js";

const router = Router();

// GET http:///localhost:3000/posts -> récupérer tout les commentaires
router.get("/", getAllComments);

// GET http:///localhost:3000/posts/25 -> récupérer un commentaire en fonction de son id
router.get("/:id", (req, res) => {});

// [POST] -     http://localhost:3000/posts -> créer un commentaire
router.post("/", (req, res) => {});

// [PUT] -     http://localhost:3000/posts/25 -> éditer un commentaire
router.put("/:id", (req, res) => {});

// [DELETE] -     http://localhost:3000/posts/25 -> supprimer un commentaire
router.delete("/:id", (req, res) => {});

export default router;
