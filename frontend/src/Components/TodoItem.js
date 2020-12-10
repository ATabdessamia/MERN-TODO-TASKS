import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  updateTask,
  fetchTasks,
  markedTasks,
} from "../Actions/index";

const TodoItem = ({ task }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [term, setTerm] = useState("");
  const mark = task.completed ? "mark" : "";

  const deleteHanderlerTask = (id) => {
    dispatch(deleteTask(id));
    dispatch(fetchTasks());
  };

  const updateHanderlerTask = (id, title) => {
    dispatch(updateTask(id, title));
    dispatch(fetchTasks());
  };

  const toggleCompleted = (id, completed) => {
    dispatch(markedTasks(id, completed));
    dispatch(fetchTasks());
  };

  return (
    <>
      <div className="row align-items-center container mx-auto">
        <div className="col-sm-8">
          <div className="form-check col">
            <input
              type="checkbox"
              className="form-check-input"
              defaultChecked={task.completed}
              onChange={() => toggleCompleted(task._id, !task.completed)}
            />
            {edit ? (
              <input
                className="form-control font-weight-bold"
                type="text"
                placeholder={task.title}
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />
            ) : (
              <strong className={`font-weight-bolde ${mark}`}>
                {task.title}
              </strong>
            )}
          </div>
        </div>
        <div className="col-sm-4 ">
          <button
            className="btn btn-outline-info btn-sm"
            type="button"
            onClick={() => {
              if (edit) {
                updateHanderlerTask(task._id, term);
              }
              setEdit(!edit);
            }}
          >
            {edit ? (
              <i className="fas fa-share"></i>
            ) : (
              <i className="fas fa-marker"></i>
            )}
          </button>
          <button
            className="btn btn-outline-danger m-2 btn-sm"
            type="button"
            onClick={() => deleteHanderlerTask(task._id)}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
};
export default TodoItem;
