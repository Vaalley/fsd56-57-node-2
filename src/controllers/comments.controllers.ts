import { Request, Response } from "express";

export function getAllComments(request: Request, response: Response) {
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
    return response.send(comments);
}
