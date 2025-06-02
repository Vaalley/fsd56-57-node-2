import { Response } from "express";

export function APIResponse(
    res: Response,
    data: any,
    message: string,
    status: number = 200,
) {
    return res.status(status).json({
        data,
        message,
        status,
    });
}
