import axios from "axios";
import {
  FETCH_TASKS,
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  CLEAR_TASK,
} from "../Contants/index";

export const fetchTasks = () => async (dispatch) => {
  const { data } = await axios.get("/api/tasks");
  dispatch({ type: FETCH_TASKS, payload: data.data });
};

export const addTask = (title) => async (dispatch) => {
  const { data } = await axios.post(`/api/tasks/`, { title });
  dispatch({ type: ADD_TASK, payload: data.data.task });
};

export const updateTask = (id, title) => async (dispatch) => {
  const { data } = await axios.patch(`/api/tasks/${id}`, { title });
  dispatch({ type: UPDATE_TASK, payload: data.data.task });
};

export const deleteTask = (id) => async (dispatch) => {
  const { data } = await axios.delete(`/api/tasks/${id}`);
  dispatch({ type: DELETE_TASK, payload: data });
};

export const clearTasks = () => async (dispatch) => {
  const { data } = await axios.delete(`/api/tasks/`);
  dispatch({ type: CLEAR_TASK, payload: data });
};

export const markedTasks = (id, completed) => async (dispatch) => {
  const { data } = await axios.patch(`/api/tasks/${id}`, { completed });
  dispatch({ type: UPDATE_TASK, payload: data.data.task });
};
