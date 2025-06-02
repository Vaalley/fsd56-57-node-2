"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const posts_routes_1 = __importDefault(require("./posts.routes"));
const comments_routes_1 = __importDefault(require("./comments.routes"));
exports.router = (0, express_1.Router)();
exports.router.use("/posts", posts_routes_1.default);
exports.router.use("/comments", comments_routes_1.default);
