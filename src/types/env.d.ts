export interface EnvConfig {
    PORT: number;
    NODE_ENV: "development" | "production";
    DATABASE_URL: string;
    CORS_ORIGIN: string;
}
