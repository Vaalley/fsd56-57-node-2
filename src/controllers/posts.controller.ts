import { Request, Response } from "express";
import { APIResponse } from "../utils/response";

const postsController = {
    getAll: (request: Request, response: Response) => {
        const posts = [
            {
                id: "uu5",
                content: "abc"
            }, {
                id: "uu6",
                content: "def"
            }
        ];
        return APIResponse(response, posts, "OK");
    }
}

export default postsController