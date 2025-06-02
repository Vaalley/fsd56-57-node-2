"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_controllers_1 = require("../controllers/posts.controllers");
const router = (0, express_1.Router)();
// GET http:///localhost:3000/posts -> récupérer tout les posts
router.get("/", posts_controllers_1.postsController.getAll);
// GET http:///localhost:3000/posts/25 -> récupérer un post en fonction de son id
router.get("/:id", (req, res) => { });
// [POST] -     http://localhost:3000/posts -> créer un post
router.post("/", (req, res) => { });
// [PUT] -     http://localhost:3000/posts/25 -> éditer un post
router.put("/:id", (req, res) => { });
// [DELETE] -     http://localhost:3000/posts/25 -> supprimer un post
router.delete("/:id", (req, res) => { });
exports.default = router;
