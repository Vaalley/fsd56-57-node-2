import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import { requestLogger } from "./middlewares/requestLogger";
import router from "./routes";
import { env } from "./config/env";
import cors from "cors";

dotenv.config();

const app = express();

const { PORT, CORS_ORIGIN } = env;

app.use(cors({
    origin: CORS_ORIGIN,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
}));
app.use(express.json());
app.use(requestLogger);
app.use("/", router);

const controller = (request: Request, response: Response) => {
    response.send("Bienvenue page d'accueil");
};

const middleWare1 = (
    request: Request,
    response: Response,
    next: NextFunction,
) => {
    console.log("On passe par le middleware 1 et tout va bien");
    next();
};
app.get("/", middleWare1, controller);

app.listen(PORT, () => {
    console.log("Le serveur est en écoute sur: http://localhost:" + PORT);
});
