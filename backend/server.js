import color from "colors";
import dotenv from "dotenv";

import connectDb from "./config/db.js";

dotenv.config();

import app from "./app.js";

connectDb();

const PORT = process.env.PORT || 8000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
