import { Request, Response } from "express";
import { APIResponse } from "../utils/response";
import logger from "../utils/logger";

const commentsController = {
    getAll: (request: Request, response: Response) => {
        try {
            logger.info("GET /comments");
            const comments = [
                {
                    id: "uu5",
                    content: "abc",
                },
                {
                    id: "uu6",
                    content: "def",
                },
            ];
            return APIResponse(response, comments, "OK");
        } catch (error: any) {
            logger.error("GET /comments", error);
            return APIResponse(response, null, "ERROR", 500);
        }
    },
};

export default commentsController;
