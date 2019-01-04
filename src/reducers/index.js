import { combineReducers } from "redux";

import boards from "./boards";
import taskGroups from "./taskGroups";
import tasks from "./tasks";

export default combineReducers({ boards, taskGroups, tasks });
