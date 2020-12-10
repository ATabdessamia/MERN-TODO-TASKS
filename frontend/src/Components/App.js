import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useDispatch } from "react-redux";
import { clearTasks, fetchTasks } from "../Actions/index";

const App = () => {
  const dispatch = useDispatch();

  const clearHandlerTask = () => {
    dispatch(clearTasks());
    dispatch(fetchTasks());
  };
  return (
    <div className="container mt-5">
      <TodoInput />
      <TodoList />
      <button
        className="btn btn-outline-warning btn-lg"
        type="button"
        onClick={() => clearHandlerTask()}
      >
        <i className="fas fa-broom"></i>
      </button>
    </div>
  );
};

export default App;
