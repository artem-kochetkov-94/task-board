import * as types from "../constants/taskGroups";
import uuidv4 from "uuid/v4";

export const taskGroupCreate = (title, boardId) => ({
  type: types.TASK_GROUP_CREATE,
  payload: {
    id: uuidv4(),
    title,
    tasks: [],
    boardId
  }
});
