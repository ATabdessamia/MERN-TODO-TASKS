/* eslint-disable import/no-anonymous-default-export  */
import {
  FETCH_TASKS,
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  CLEAR_TASK,
} from "../Contants/index";

export default (state = { tasks: [] }, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return { ...state, tasks: action.payload.tasks };
    case ADD_TASK:
      return { ...state, [action.payload._id]: action.payload };
    case UPDATE_TASK:
      return { ...state, [action.payload._id]: action.payload };
    case DELETE_TASK:
      return { ...state, [action.payload.status]: action.payload };
    case CLEAR_TASK:
      return { state, [action.payload.status]: action.payload };
    default:
      return state;
  }
};
