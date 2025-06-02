"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comments_controllers_js_1 = require("../controllers/comments.controllers.js");
const router = (0, express_1.Router)();
// GET http:///localhost:3000/posts -> récupérer tout les commentaires
router.get("/", comments_controllers_js_1.getAllComments);
// GET http:///localhost:3000/posts/25 -> récupérer un commentaire en fonction de son id
router.get("/:id", (req, res) => { });
// [POST] -     http://localhost:3000/posts -> créer un commentaire
router.post("/", (req, res) => { });
// [PUT] -     http://localhost:3000/posts/25 -> éditer un commentaire
router.put("/:id", (req, res) => { });
// [DELETE] -     http://localhost:3000/posts/25 -> supprimer un commentaire
router.delete("/:id", (req, res) => { });
exports.default = router;
