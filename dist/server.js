"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("./middlewares/index");
const index_2 = require("./routes/index");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(index_1.requestLogger);
app.use("/", index_2.router);
const PORT = 3000;
function middleware1(request, response, next) {
    console.log("Middleware 1");
    next();
}
app.get("/", middleware1, (request, response) => {
    response.send("Hello World!");
});
app.listen(PORT, () => {
    console.log(`Server started on localhost:${PORT}`);
});
