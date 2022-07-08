import express from "express";
import taskRoutes from "./routes/tasks.routes.js";

const app = express();

app.use(taskRoutes);

export default app;