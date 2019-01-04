import * as types from "../constants/taskGroups";
import uuidv4 from "uuid/v4";

const taskGroupCreate = title => ({
  type: types.TASK_GROUP_CREATE,
  payload: {
    id: uuidv4(),
    title,
    tasks: []
  }
});

export default taskGroupCreate;
