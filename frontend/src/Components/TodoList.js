import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { fetchTasks } from "../Actions/index";

const TodoList = () => {
  const dispatch = useDispatch();
  const tasksList = useSelector((state) => state.tasks);
  const { tasks } = tasksList;

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (!tasks) {
    return null;
  }

  return (
    <div className="mx-auto w-50">
      {tasks.map((task) => {
        return <TodoItem task={task} key={Math.random()} />;
      })}
    </div>
  );
};
export default TodoList;
