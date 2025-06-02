export function APIResponse(res, data, message, status = 200) {
    return res.status(status).json({
        data,
        message,
        status,
    });
}
