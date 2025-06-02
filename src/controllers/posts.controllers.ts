import { APIResponse } from "../utils/response";
import { Request, Response } from "express";

export function getAllPosts(request: Request, response: Response) {
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
    return APIResponse(response, posts, "Posts récupérés");
}
