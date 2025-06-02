import express, { NextFunction, Request, Response } from "express";
import { requestLogger } from "./middlewares/index";
import router from "./routes/index";

const app = express();

app.use(express.json());
app.use(requestLogger);
app.use("/", router);
const PORT = 3000;

function middleware1(request: Request, response: Response, next: NextFunction) {
	console.log("Middleware 1");
	next();
}

app.get("/", middleware1, (request: Request, response: Response) => {
	response.send("Hello World!");
});

app.listen(PORT, () => {
	console.log(`Server started on localhost:${PORT}`);
});
