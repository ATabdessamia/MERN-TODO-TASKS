import express from "express";
import morgan from "morgan";

import taskRoutes from "./routes/taskRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
