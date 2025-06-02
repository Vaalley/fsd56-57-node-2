import express from "express";
import { requestLogger } from "./middlewares/index.js";
import router from "./routes/index.js";

const app = express();

app.use(express.json()); // permet de parser le body des requêtes
app.use(requestLogger);
app.use("/", router);
const PORT = 3000;

function middleware1(req, res, next) {
	console.log("Middleware 1");
	next();
}

app.get("/", middleware1, (req, res) => {
	res.send("Hello World!");
});

app.listen(PORT, () => {
	console.log(`Server started on localhost:${PORT}`);
});
