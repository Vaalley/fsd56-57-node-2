import dotenv from "dotenv";
import { EnvConfig } from "../types/env";

dotenv.config();

export const env: EnvConfig = {
    PORT: Number(process.env.PORT) || 3000,
    NODE_ENV: process.env.NODE_ENV as "development" | "production" ||
        "development",
    CORS_ORIGIN: process.env.CORS_ORIGIN || "http://localhost:5173",
    DATABASE_URL: process.env.DATABASE_URL ||
        "postgresql://postgres:postgres@localhost:5432/blog",
};
