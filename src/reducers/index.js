import { combineReducers } from "redux";

import boards from "./boards";
import tasksGroup from "./tasksGroup";
import tasks from "./tasks";

export default combineReducers({ boards, tasksGroup, tasks });
