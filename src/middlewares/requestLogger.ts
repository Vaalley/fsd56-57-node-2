import { NextFunction, Request, Response } from "express";

export function requestLogger(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    console.log(`[${request.method}] - ${request.path}`);
    next();
}
