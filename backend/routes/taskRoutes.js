import express from "express";

import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  removeTask,
  clearTasks,
} from "../controllers/taskController.js";

const router = express.Router();

router.route("/").get(getTasks).post(createTask).delete(clearTasks);
router.route("/:id").get(getTask).patch(updateTask).delete(removeTask);

export default router;
