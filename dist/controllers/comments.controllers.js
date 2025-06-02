"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentsController = void 0;
const response_1 = require("../utils/response");
exports.commentsController = {
    getAll: (request, response) => {
        const comments = [
            {
                id: "1",
                content: "abc",
            },
            {
                id: "2",
                content: "def",
            },
        ];
        return (0, response_1.APIResponse)(response, comments, "OK");
    },
};
