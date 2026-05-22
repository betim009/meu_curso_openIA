import express from "express";
import { routes } from "./routes/index.js";
import { errorHandler } from "./middlewares/errorHandler.js";

export const app = express();

app.use(express.json());
app.use("/api", routes);
app.use(errorHandler);
