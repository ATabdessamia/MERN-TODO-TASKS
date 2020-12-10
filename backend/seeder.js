import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

import tasks from "./data/tasks.js";
import Tasks from "./models/taskModel.js";
import connectDb from "./config/db.js";

dotenv.config();

connectDb();

const importData = async () => {
  try {
    await Tasks.deleteMany();

    await Tasks.insertMany(tasks);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Tasks.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
