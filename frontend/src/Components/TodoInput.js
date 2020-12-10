import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, fetchTasks } from "../Actions/index";

const TodoInput = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const addHanderlerTask = (title) => {
    dispatch(addTask(title));
    setTerm("");
    dispatch(fetchTasks());
  };

  return (
    <>
      <h3 className="display-4 text-muted font-weight-bold text-capitalize text-center">
        todo list
      </h3>
      <div className="container input-group mb-5 w-50">
        <input
          className="form-control font-weight-bold"
          type="text"
          placeholder="Add Tasks"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-primary font-weight-bold"
            type="button"
            onClick={() => addHanderlerTask(term)}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoInput;
