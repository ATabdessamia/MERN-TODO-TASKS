import { json } from "express";
import asyncHandler from "express-async-handler";
import Task from "../models/taskModel.js";

// @desc    Fetch all tasks
// @route   GET /api/tasks
// @access  Public
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({});

  res.json({
    status: "Success",
    data: {
      tasks,
    },
  });
});

// @desc    Fetch task
// @route   GET /api/:id
// @access  Public
const getTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (task) {
    res.json({
      status: "Success",
      data: {
        task,
      },
    });
  } else {
    res.status(404);
    throw new Error("Task not found :/");
  }
});

// @desc    Create new task
// @route   Post /api/tasks
// @access  Public
const createTask = asyncHandler(async (req, res) => {
  const title = req.body.title;
  const completed = req.body.completed;
  const task = await Task.create({ title, completed });

  res.status(201).json({
    status: "Success",
    data: {
      task,
    },
  });
});

// @desc    Update task
// @route   Patch /api/:id
// @access  Public
const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (task) {
    res.json({
      status: "Success",
      data: {
        task,
      },
    });
  } else {
    res.status(404);
    throw new Error("Task not found :/");
  }
});

// @desc    Delete task
// @route   Delete /api/:id
// @access  Public
const removeTask = asyncHandler(async (req, res) => {
  const task = await Task.findByIdAndRemove(req.params.id);

  if (task) {
    res.json({
      status: "Success",
      data: null,
    });
  } else {
    res.status(404);
    throw new Error("Task not found :/");
  }
});

// @desc    Clear all tasks
// @route   Delete /api/tasks
// @access  Public
const clearTasks = asyncHandler(async (req, res) => {
  const task = await Task.deleteMany();

  if (task) {
    res.json({
      status: "Success",
      data: null,
    });
  } else {
    res.status(404);
    throw new Error("Task not found :/");
  }
});

export { getTasks, getTask, createTask, updateTask, removeTask, clearTasks };
