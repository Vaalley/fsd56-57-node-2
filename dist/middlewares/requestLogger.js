"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestLogger = requestLogger;
function requestLogger(request, response, next) {
    console.log(`[${request.method}] - ${request.path}`);
    next();
}
