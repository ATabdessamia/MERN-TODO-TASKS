import { combineReducers } from "redux";
import tasksReduce from "./taskReducers";

export default combineReducers({
  tasks: tasksReduce,
});
