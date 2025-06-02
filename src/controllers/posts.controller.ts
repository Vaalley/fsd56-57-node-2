import { Request, Response } from "express";
import { APIResponse } from "../utils/response";
import logger from "../utils/logger";

const postsController = {
    getAll: (request: Request, response: Response) => {
        try {
            logger.info("GET /posts");
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
            return APIResponse(response, posts, "OK");
        } catch (error: any) {
            logger.error("GET /posts", error);
            return APIResponse(response, null, "ERROR", 500);
        }
    },
};

export default postsController;
