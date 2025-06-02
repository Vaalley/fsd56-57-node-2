"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPosts = getAllPosts;
const response_1 = require("../utils/response");
function getAllPosts(request, response) {
    const posts = [
        {
            id: "uu5",
            content: "abc",
        },
        {
            id: "uu6",
            content: "def",
        },
    ];
    return (0, response_1.APIResponse)(response, posts, "Posts récupérés");
}
