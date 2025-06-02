import { Request, Response } from "express";
import { APIResponse } from "../utils/response";

export const commentsController = {
    getAll: (request: Request, response: Response) => {
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
        return APIResponse(response, comments, "OK");
    },
};
