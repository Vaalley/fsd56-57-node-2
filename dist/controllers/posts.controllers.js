"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsController = void 0;
const response_1 = require("../utils/response");
exports.postsController = {
    getAll: (request, response) => {
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
        return (0, response_1.APIResponse)(response, posts, "OK");
    },
};
