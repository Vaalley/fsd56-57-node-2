"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_routes_1 = __importDefault(require("./posts.routes"));
const comments_routes_1 = __importDefault(require("./comments.routes"));
const router = (0, express_1.Router)();
router.use("/posts", posts_routes_1.default);
router.use("/comments", comments_routes_1.default);
exports.default = router;
