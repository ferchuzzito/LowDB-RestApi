import express from "express";
import taskRoutes from "./routes/tasks.routes.js";
import "./database/database.js"

const app = express();

app.use(taskRoutes)

app.listen(3000);
console.log('Server running on port 3000')