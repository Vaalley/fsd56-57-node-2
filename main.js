import express from "express";
import { requestLogger } from "./middlewares/index.js";
import postsRouter from "./routes/posts.routes.js";
import commentsRouter from "./routes/comments.routes.js";

const app = express();
app.use(requestLogger);
const PORT = 3000;

function middleware1(req, res, next) {
	console.log("Middleware 1");
	next();
}

app.get("/", middleware1, (req, res) => {
	res.send("Hello World!");
});

app.use("/posts", postsRouter);
app.use("/comments", commentsRouter);

app.listen(PORT, () => {
	console.log(`Server started on localhost:${PORT}`);
});
