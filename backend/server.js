import color from "colors";
import dotenv from "dotenv";

import app from "./app.js";
import connectDb from "./config/db.js";

dotenv.config();
connectDb();

const PORT = process.env.PORT || 8000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
