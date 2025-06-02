"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIResponse = APIResponse;
function APIResponse(res, data, message, status = 200) {
    return res.status(status).json({
        data,
        message,
        status,
    });
}
